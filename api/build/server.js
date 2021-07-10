"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var axios_1 = __importDefault(require("axios"));
var app = express_1.default();
var getScrapedData = function () { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, axios_1.default.post('https://vfoof4g2cg-1.algolianet.com/1/indexes/*/queries?x-algolia-agent=Algolia%20for%20JavaScript%20(4.10.2)%3B%20Browser%20(lite)%3B%20JS%20Helper%20(3.5.3)%3B%20react%20(17.0.2)%3B%20react-instantsearch%20(6.11.2)&x-algolia-api-key=266e68cea9bbc69eeacbe112f46ff2b3&x-algolia-application-id=VFOOF4G2CG', {
                    requests: [
                        {
                            indexName: 'production_tss_order_menu_order',
                            params: 'highlightPreTag=%3Cais-highlight-0000000000%3E&highlightPostTag=%3C%2Fais-highlight-0000000000%3E&filters=type%3Aproduct%20AND%20sub_type%3Asneaker&hitsPerPage=36&userToken=967b7c7374dc1d05&clickAnalytics=true&query=&maxValuesPerFacet=9999&page=0&facets=%5B%22taxonomy.brand%22%2C%22taxonomy.collection%22%2C%22taxonomy.sub_brand%22%5D&tagFilters=',
                        },
                        {
                            indexName: 'production_tss',
                            params: 'highlightPreTag=%3Cais-highlight-0000000000%3E&highlightPostTag=%3C%2Fais-highlight-0000000000%3E&filters=type%3Aadvert%20AND%20placement%3Arelease-dates&hitsPerPage=2&userToken=967b7c7374dc1d05&clickAnalytics=true&query=&maxValuesPerFacet=9999&page=0&facets=%5B%22taxonomy.brand%22%2C%22taxonomy.collection%22%2C%22taxonomy.sub_brand%22%5D&tagFilters=',
                        },
                    ],
                })];
            case 1:
                response = _a.sent();
                console.log(response === null || response === void 0 ? void 0 : response.data);
                return [2 /*return*/];
        }
    });
}); };
app.get('/', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        try {
            getScrapedData();
        }
        catch (e) {
            console.log(e);
        }
        return [2 /*return*/];
    });
}); });
app.listen(process.env.PORT || 3001, function () {
    console.log('server started');
});
