var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { HttpClient } from "aurelia-fetch-client";
import { inject } from "aurelia-framework";
import { EventAggregator } from 'aurelia-event-aggregator';
import { Router } from 'aurelia-router';
var httpClient = new HttpClient();
var applicants = [
    {
        id: getId(),
        name: 'John',
        familyName: 'wright',
        address: 'Berlin',
        countryOfOrigin: 'Germany',
        emailAddress: 'johsn@adp.com',
        age: '35',
        hired: true
    },
    {
        id: getId(),
        name: 'Clive',
        familyName: 'Lewis',
        address: 'Frankfurt',
        countryOfOrigin: 'Germany',
        emailAddress: 'lewsi@adp.com',
        age: '37',
        hired: false
    },
    {
        id: getId(),
        name: 'Owin',
        familyName: 'Bield',
        address: 'Hamburg',
        countryOfOrigin: 'Germany',
        emailAddress: 'Owin@inklings.com',
        age: '40',
        hired: true
    }
];
var id = 0;
function getId() {
    return ++id;
}
var AppicantList = (function () {
    function AppicantList(http, ea, router) {
        this.http = http;
        this.router = router;
        this.selectedId = 0;
    }
    AppicantList.inject = function () { return [HttpClient]; };
    ;
    AppicantList.prototype.activate = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4, httpClient.fetch("http://localhost:5000/Applicant/GetAll")
                                .then(function (result) { return result.json(); })];
                    case 1:
                        _a.applicants = _b.sent();
                        this.txtIdHasFocus = true;
                        return [2];
                }
            });
        });
    };
    AppicantList.prototype.created = function () {
        this.fetchApplicants();
    };
    AppicantList.prototype.clear = function () {
        this.applicant = null;
        this.applicant.age = 0;
        this.applicant.hired = false;
    };
    AppicantList.prototype.fetchApplicants = function () {
        var _this = this;
        httpClient.fetch('http://localhost:5000/Applicant/GetAll')
            .then(function (response) { return response.json(); })
            .then(function (data) {
            _this.applicants = data;
        })
            .catch(function (error) { return console.log(error); });
    };
    AppicantList.prototype.insertApplicant = function (applicant) {
        var _this = this;
        var data = JSON.stringify(applicant);
        httpClient.fetch('http://localhost:5000/Applicant/Add/?data=' + data, {
            method: "post"
        })
            .then(function (response) { return response.json(); })
            .then(function (data) {
            _this.applicants = data;
        })
            .catch(function (error) { return console.log(error); });
        this.clear();
        this.txtNameHasFocus = true;
        return true;
    };
    AppicantList.prototype.select = function (applicant) {
        this.selectedId = applicant.id;
        this.applicant.id = applicant.id;
        this.applicant.name = applicant.name;
        this.applicant.familyName = applicant.familyName;
        this.applicant.address = applicant.address;
        this.applicant.countryOfOrigin = applicant.countryOfOrigin;
        this.applicant.age = applicant.age;
        this.applicant.hired = applicant.hired;
        this.txtIdHasFocus = true;
        return true;
    };
    AppicantList.prototype.updateApplicant = function (applicant) {
        var _this = this;
        var data = JSON.stringify(applicant);
        httpClient.fetch('http://localhost:5000/Applicant/Update/?data=' + data, {
            method: "put"
        })
            .then(function (response) { return response.json(); })
            .then(function (data) {
            _this.applicants = data;
        }).catch(function (error) { return console.log(error); });
        this.clear();
        this.txtIdHasFocus = true;
        return true;
    };
    AppicantList.prototype.deleteApplicant = function (applicant) {
        var _this = this;
        httpClient.fetch('http://localhost:5000/Applicant/Delete/?id=' + applicant.id, {
            method: "delete"
        })
            .then(function (response) { return response.json(); })
            .then(function (data) {
            _this.applicants = data;
        }).catch(function (error) { return console.log(error); });
        this.clear();
        this.txtIdHasFocus = true;
        return true;
    };
    AppicantList = __decorate([
        inject(EventAggregator, Router),
        __metadata("design:paramtypes", [HttpClient, EventAggregator, Router])
    ], AppicantList);
    return AppicantList;
}());
export { AppicantList };
//# sourceMappingURL=applist.js.map