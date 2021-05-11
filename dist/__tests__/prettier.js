"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var prettier_1 = __importDefault(require("prettier"));
var Prettier = /** @class */ (function () {
    function Prettier() {
    }
    Prettier.prototype.apply = function (compiler) {
        var RawSource = compiler.webpack.sources.RawSource;
        compiler.hooks.compilation.tap('Prettier', function (compilation) {
            compilation.hooks.afterProcessAssets.tap({
                name: 'Prettier',
            }, function (assets) {
                Object.keys(assets).forEach(function (filename) {
                    var source = compilation.getAsset(filename).source;
                    var newSource = prettier_1.default.format(source.source());
                    compilation.updateAsset(filename, new RawSource(newSource));
                });
            });
        });
    };
    return Prettier;
}());
exports.default = Prettier;
;
