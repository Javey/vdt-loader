import { Compiler, WebpackPluginInstance } from 'webpack';
export default class Prettier implements WebpackPluginInstance {
    apply(compiler: Compiler): void;
}
