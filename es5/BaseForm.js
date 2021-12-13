"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var uniforms_1 = require("uniforms");
function Unstyled(parent) {
    var _ = /** @class */ (function (_super) {
        tslib_1.__extends(_, _super);
        function _() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        _.Unstyled = Unstyled;
        _.displayName = "Unstyled" + parent.displayName;
        return _;
    }(parent));
    return _;
}
exports.default = Unstyled(uniforms_1.BaseForm);
