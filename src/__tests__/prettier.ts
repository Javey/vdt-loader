import prettier from 'prettier';
import {Compiler, WebpackPluginInstance} from 'webpack';

export default class Prettier implements WebpackPluginInstance {
    apply(compiler: Compiler) {
        const {RawSource} = compiler.webpack.sources;
        compiler.hooks.compilation.tap('Prettier', compilation => {
            compilation.hooks.afterProcessAssets.tap({
                name: 'Prettier',
            }, assets => {
                Object.keys(assets).forEach(filename => {
                    const {source} = compilation.getAsset(filename)!;
                    const newSource = prettier.format(source.source() as string);
                    compilation.updateAsset(filename, new RawSource(newSource));
                });
            });
        });
    }
};
