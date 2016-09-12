var Vdt = require('vdt');

module.exports = function(source) {
    var template =  Vdt.compile(source, {noWith: true, onlySource: false, delimiters: ['{{', '}}']});
    return 'module.exports = ' + template.source;
};
