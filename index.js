var Vdt = require('vdt'),
    loaderUtils = require('loader-utils'),
    path = require('path'),
    sourceMap = require('source-map');

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
        delimiters: ['{', '}'],
        sourceMap: false,
        // sourceMap: this.sourceMap
    }, query);

    var fn = Vdt.compile(source, query);

    var head = fn.head || '';
    var content = 'export default ' + fn.source;
    if (head) {
        content = head + content;
    }

    if (query.sourceMap) {
        var sourceRoot = process.cwd();
        var filename = path.relative(sourceRoot, this.resourcePath);
        var map = getSourceMap({
            mappings: fn.mappings,
            source: source,
            filename: filename,
            sourceRoot: sourceRoot, 
            offsetLine: head.split(/\n/).length - 1
        });

        this.callback(null, content, map);
    } else {
        this.callback(null, content);
    }
};

function getSourceMap(options) {
    var generator = new sourceMap.SourceMapGenerator({
        sourceRoot: options.sourceRoot,
        file: path.basename(options.filename)
    });

    generator.setSourceContent(options.filename, options.source);

    options.mappings.forEach(function(mapping) {
        mapping.generated.line += options.offsetLine;
        if (mapping.original) {
            mapping.source = options.filename;
        }
        generator.addMapping(mapping);
    });

    return generator.toJSON();
}
