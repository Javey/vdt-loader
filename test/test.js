var path = require('path');
var webpack = require('webpack');
var assert = require('assert');
var fs = require('fs');

var loader = path.resolve(__dirname, '../');
var output = path.resolve(__dirname, './output');
var config = {
    entry: {
        delimiters: path.resolve(__dirname, 'input/delimiters.js'),
    },
    output: {
        path: output,
        filename: '[name].js'
    },
    module: {
        loaders: [
            {
                test: /\.vdt$/,
                loader: loader
            }
        ]
    }
};

describe('Vdt Loader', function() {
    it('set error delimiters should get error result', function(done) {
        config.module.loaders[0].loader += '?delimiters={{}}';
        webpack(config, function(err, stats) {
            assert.strictEqual(err, null);
            fs.readFile(path.resolve(output, 'delimiters.js'), function(err, data) {
                assert.strictEqual(err, null);
                data = data.toString();
                assert.strictEqual(/\{a\}/.test(data), true);
                done();
            });
        });
    });

    it('set correct delimiters should get correct result', function(done) {
        config.module.loaders[0].loader = loader;
        webpack(config, function(err, stats) {
            assert.strictEqual(err, null);
            fs.readFile(path.resolve(output, 'delimiters.js'), function(err, data) {
                assert.strictEqual(err, null);
                data = data.toString();
                assert.strictEqual(/\{a\}/.test(data), false);
                done();
            });
        });
    });

    it('don\'t skip whitespace', function(done) {
        config.entry = {
            skipWhitespace: path.resolve(__dirname, './input/skipWhitespace.js')
        };
        
        webpack(config, function(err, stats) {
            assert.strictEqual(err, null);
            fs.readFile(path.resolve(output, 'skipWhitespace.js'), function(err, data) {
                assert.strictEqual(err, null);
                data = data.toString();
                assert.strictEqual(/\\n/.test(data), true);
                done();
            });
        });
    });

    it('skip whitespace', function(done) {
        config.entry = {
            skipWhitespace: path.resolve(__dirname, './input/skipWhitespace.js')
        };
        config.module.loaders[0].loader = loader + '?skipWhitespace';
        
        webpack(config, function(err, stats) {
            assert.strictEqual(err, null);
            fs.readFile(path.resolve(output, 'skipWhitespace.js'), function(err, data) {
                assert.strictEqual(err, null);
                data = data.toString();
                assert.strictEqual(/\\n/.test(data), false);
                done();
            });
        });
    });

});
