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
    source = fn.source;

    var pos = source.indexOf('\n');
    return [
        fn.head || '',
        'export default ' + source.substr(0, pos),
        'if (module.hot) {',
        '    module.hot._disposeHandlers = [];',
        '    var __this = this;',
        '    module.hot.dispose(function(data) {',
        '        data.vdt = __this;',
        '        data.isDirect = __this.data === obj;',
        '        var _super = __this.template._super;',
        '        var callee = module.exports.default || module.exports;',
        '        while (_super) {',
        '            if (_super === callee) {',
        '                data.isSuper = true;',
        '                break;',
        '            }',
        '            _super = _super._super;',
        '        }',
        '        data._super = callee._super;',
        '        data.callee = callee',
        '    })',
        '}',
        source.substr(pos),
        'if (module.hot && module.hot.data) {',
        '    var data = module.hot.data;',
        '    if (data.isSuper || data.isDirect) {',
        '        module.hot.accept();',
        '    }',
        '    var vdt = data.vdt;',
        '    if (vdt) {',
        '        if (data.isDirect) {',
        '            vdt.template = module.exports.default;',
        '            vdt.template._super = data._super;',
        '            typeof window !== "undefined" && vdt.update();',
        '        } else if (data.isSuper) {',
        '            var child = vdt.template;',
        '            while (child._super) {',
        '                if (child._super === data.callee) {',
        '                    child._super = module.exports.default;',
        '                    child._super._super = data._super;',
        '                    break;',
        '                }',
        '                child = child._super;',
        '            }',
        '            typeof window !== "undefined" && vdt.update();',
        '        }',
        '    }',
        '}'
    ].join('\n');
};
