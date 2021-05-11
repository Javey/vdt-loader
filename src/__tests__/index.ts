import path from 'path';
import webpack, {Configuration} from 'webpack';
import TerserPlugin from 'terser-webpack-plugin';
import assert from 'assert';
import fs from 'fs';
import MemoryFs from 'memory-fs';
import Prettier from './prettier';

const loader = path.resolve(__dirname, '../../dist');
const output = path.resolve(__dirname, './output');
const isSnapshot = !!process.env.UPDATE;
const memoryFs = isSnapshot ? null : new MemoryFs();

function createConfig(file: string): Configuration {
    return {
        mode: 'production',
        entry: {
            delimiters: path.resolve(__dirname, `input/${file}.js`),
        },
        output: {
            path: output,
            filename: `${file}.js`,
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
            new TerserPlugin({
                terserOptions: {
                    mangle: false,
                },
                extractComments: false,
            }),
            new Prettier(),
        ],
    };
}

function test(file: string, done: Function) {
    const compiler = webpack(createConfig(file));
    if (!isSnapshot) {
        compiler.outputFileSystem = memoryFs as any; 
    }
    compiler.run((err, stats) => {
        if (err) throw err;

        assert.strictEqual(err, null);

        console.log(stats!.toString({
            colors: true,
        }));

        if (isSnapshot) return done();

        const outputFile = path.resolve(output, `${file}.js`);
        fs.readFile(outputFile, (err, data) => {
            assert.strictEqual(err, null);

            const snapshotData = data.toString('utf-8');
            memoryFs!.readFile(outputFile, (err, data) => {
                assert.strictEqual(snapshotData, data.toString('utf-8'));

                done();
            });
        });
    });
}

describe('Vdt Loader', () => {
    it('delimiters', function(done) {
        this.timeout(0);
        test('delimiters', done);
    });

    it('v-model', function(done) {
        this.timeout(0);
        test('vModel', done);
    });

    it('merge', function(done) {
        this.timeout(0);
        test('merge', done);
    });

    it('component', function(done) {
        this.timeout(0);
        test('component', done);
    });

    it('transition', function(done) {
        this.timeout(0);
        test('transition', done);
    });
});
