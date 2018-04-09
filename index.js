var Vdt = require('vdt'),
    loaderUtils = require('loader-utils');

// module.exports = function() {};
module.exports = function(source) {
    if (this.cacheable) this.cacheable();

    var query = loaderUtils.getOptions(this) || {};
    Object.keys(query).forEach(function(key) {
        var value = query[key];
        if (key === 'delimiters' && typeof value === 'string') {
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

    var fn = Vdt.compile(source, query);
    // source = fn.source;

    // var pos = source.indexOf('\n');
    return [
        fn.head || '',
        (fn.head ? 'export default ' : 'module.exports = ') + fn.source,
    ].join('\n');
};
