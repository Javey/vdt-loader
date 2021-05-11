"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vdt_1 = require("vdt");
var loader_utils_1 = require("loader-utils");
var schema_utils_1 = require("schema-utils");
var defaultModuleName;
try {
    require('intact');
    defaultModuleName = 'intact';
}
catch (e) {
    defaultModuleName = 'vdt/runtime';
}
var schema = {
    type: 'object',
    properties: {
        delimiters: {
            type: 'array',
        },
        moduleName: {
            type: 'string',
        }
    },
    additionalProperties: false,
};
function default_1(source) {
    var options = loader_utils_1.getOptions(this);
    schema_utils_1.validate(schema, options);
    var parser = new vdt_1.Parser(source, { delimiters: options.delimiters || ['{', '}'] });
    var visitor = new vdt_1.Visitor(parser.ast);
    return visitor.getModuleCode(options.moduleName || defaultModuleName);
}
exports.default = default_1;
