var Vdt = require('vdt'),
    loaderUtils = require('loader-utils');

module.exports = function(source) {
    if (this.cacheable) this.cacheable();

    var query = loaderUtils.parseQuery(this.query);
    Object.keys(query).forEach(function(key) {
        var value = query[key];
        if (key === 'delimiters') {
            query[key] = [value.substring(0, value.length / 2), value.substring(value.length / 2)];
        }
    });
    if (query.options) {
        Object.assign(query, JSON.parse(query.options));
        delete query.options;
    }
    query = Object.assign({
        noWith: true, 
        onlySource: true, 
        delimiters: ['{', '}']
    }, query);

    var template =  Vdt.compile(source, query);

    return 'module.exports = ' + template.source;
};
