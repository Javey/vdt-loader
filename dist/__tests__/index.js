"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var path_1 = __importDefault(require("path"));
var webpack_1 = __importDefault(require("webpack"));
var terser_webpack_plugin_1 = __importDefault(require("terser-webpack-plugin"));
var assert_1 = __importDefault(require("assert"));
var fs_1 = __importDefault(require("fs"));
var memory_fs_1 = __importDefault(require("memory-fs"));
var prettier_1 = __importDefault(require("./prettier"));
var loader = path_1.default.resolve(__dirname, '../../dist');
var output = path_1.default.resolve(__dirname, './output');
var isSnapshot = !!process.env.UPDATE;
var memoryFs = isSnapshot ? null : new memory_fs_1.default();
function createConfig(file) {
    return {
        mode: 'production',
        entry: {
            delimiters: path_1.default.resolve(__dirname, "input/" + file + ".js"),
        },
        output: {
            path: output,
            filename: file + ".js",
        },
        module: {
            rules: [
                {
                    test: /\.vdt$/,
                    use: [
                        {
                            loader: 'babel-loader'
                        },
                        {
                            loader: loader,
                            options: {
                                delimiters: ['{{', '}}'],
                            }
                        },
                    ],
                }
            ]
        },
        plugins: [
            new terser_webpack_plugin_1.default({
                terserOptions: {
                    mangle: false,
                },
                extractComments: false,
            }),
            new prettier_1.default(),
        ],
    };
}
function test(file, done) {
    var compiler = webpack_1.default(createConfig(file));
    if (!isSnapshot) {
        compiler.outputFileSystem = memoryFs;
    }
    compiler.run(function (err, stats) {
        if (err)
            throw err;
        assert_1.default.strictEqual(err, null);
        console.log(stats.toString({
            colors: true,
        }));
        if (isSnapshot)
            return done();
        var outputFile = path_1.default.resolve(output, file + ".js");
        fs_1.default.readFile(outputFile, function (err, data) {
            assert_1.default.strictEqual(err, null);
            var snapshotData = data.toString('utf-8');
            memoryFs.readFile(outputFile, function (err, data) {
                assert_1.default.strictEqual(snapshotData, data.toString('utf-8'));
                done();
            });
        });
    });
}
describe('Vdt Loader', function () {
    it('delimiters', function (done) {
        this.timeout(0);
        test('delimiters', done);
    });
    it('v-model', function (done) {
        this.timeout(0);
        test('vModel', done);
    });
    it('merge', function (done) {
        this.timeout(0);
        test('merge', done);
    });
    it('component', function (done) {
        this.timeout(0);
        test('component', done);
    });
    it('transition', function (done) {
        this.timeout(0);
        test('transition', done);
    });
});
