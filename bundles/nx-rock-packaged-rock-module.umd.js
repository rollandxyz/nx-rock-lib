(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common')) :
	typeof define === 'function' && define.amd ? define('@nx-rock-packaged/rock-module', ['exports', '@angular/core', '@angular/common'], factory) :
	(factory((global['nx-rock-packaged'] = global['nx-rock-packaged'] || {}, global['nx-rock-packaged']['rock-module'] = {}),global.ng.core,global.ng.common));
}(this, (function (exports,core,common) { 'use strict';

var XTableComponent = /** @class */ (function () {
    function XTableComponent() {
    }
    XTableComponent.prototype.ngOnInit = function () {
    };
    return XTableComponent;
}());
XTableComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'app-x-table',
                template: "<table>\n  <tr>\n    <th>Company</th>\n    <th>Contact</th>\n    <th>Country</th>\n  </tr>\n  <tr>\n    <td>Alfreds Futterkiste</td>\n    <td>Maria Anders</td>\n    <td>Germany</td>\n  </tr>\n  <tr>\n    <td>Centro comercial Moctezuma</td>\n    <td>Francisco Chang</td>\n    <td>Mexico</td>\n  </tr>\n  <tr>\n    <td>Ernst Handel</td>\n    <td>Roland Mendel</td>\n    <td>Austria</td>\n  </tr>\n  <tr>\n    <td>Island Trading</td>\n    <td>Helen Bennett</td>\n    <td>UK</td>\n  </tr>\n  <tr>\n    <td>Laughing Bacchus Winecellars</td>\n    <td>Yoshi Tannamuri</td>\n    <td>Canada</td>\n  </tr>\n  <tr>\n    <td>Magazzini Alimentari Riuniti</td>\n    <td>Giovanni Rovelli</td>\n    <td>Italy</td>\n  </tr>\n</table>",
                styles: ["table{font-family:arial,sans-serif;border-collapse:collapse;width:100%}td,th{border:1px solid #ddd;text-align:left;padding:8px}tr:nth-child(even){background-color:#ddd}"]
            },] },
];
XTableComponent.ctorParameters = function () { return []; };
var RockModuleModule = /** @class */ (function () {
    function RockModuleModule() {
    }
    return RockModuleModule;
}());
RockModuleModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [common.CommonModule],
                declarations: [XTableComponent],
                exports: [XTableComponent]
            },] },
];

exports.RockModuleModule = RockModuleModule;
exports.ɵa = XTableComponent;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=nx-rock-packaged-rock-module.umd.js.map
