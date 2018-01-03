"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var mcore_md_1 = require("mcore-md");
var LibComponent = (function () {
    function LibComponent(http) {
        var _this = this;
        this.http = http;
        this.mcore = new mcore_md_1.Post(this.http);
        this.mcore.getPosts('https://jsonplaceholder.typicode.com/posts')
            .subscribe(function (dataPosts) {
            _this.posts = dataPosts;
        });
    }
    LibComponent = __decorate([
        core_1.Component({
            selector: 'my-lib',
            templateUrl: './lib.component.html',
            styleUrls: ['./lib.component.css']
        }),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], LibComponent);
    return LibComponent;
}());
exports.LibComponent = LibComponent;
//# sourceMappingURL=lib.component.js.map