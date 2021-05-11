import {Parser, Visitor, Options} from 'vdt';
import {getOptions} from 'loader-utils';
import {validate} from 'schema-utils';

let defaultModuleName: string;
try {
    require('intact');
    defaultModuleName = 'intact';
} catch (e) {
    defaultModuleName = 'vdt/runtime';
}

const schema = {
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
} as const;

export type LoaderOptions = {
    delimiters: [string, string]
    moduleName: string
}

export default function(this: any, source: string) {
    const options = getOptions(this) as unknown as LoaderOptions;
    validate(schema, options);

    const parser = new Parser(source, {delimiters: options.delimiters || ['{', '}']});
    const visitor = new Visitor(parser.ast);

    return visitor.getModuleCode(options.moduleName || defaultModuleName);
}
