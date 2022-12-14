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
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
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
exports.__esModule = true;
exports.deleteProduct = exports.updateProduct = exports.createProduct = exports.getAllProducts = exports.getProduct = void 0;
var db_1 = __importDefault(require("../db"));
var getProduct = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var product;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, db_1["default"].product.findUnique({
                    where: {
                        id: req.params.id
                    }
                })];
            case 1:
                product = _a.sent();
                res.json({ data: product });
                return [2 /*return*/];
        }
    });
}); };
exports.getProduct = getProduct;
var getAllProducts = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var business, products;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, db_1["default"].business.findFirst({
                    where: {
                        belongsToId: req.user.id
                    },
                    include: {
                        products: true
                    }
                })];
            case 1:
                business = _a.sent();
                products = business.products.map(function (allProducts) { return allProducts; });
                res.json({ data: products });
                return [2 /*return*/];
        }
    });
}); };
exports.getAllProducts = getAllProducts;
// export const getProducts = async (req, res) => {
//   const products = await prisma.product.findMany({
//     where: {
//       belongsToId: req.user.id,
//     },
//   });
//   res.json({ data: products });
// };
var createProduct = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var business, product;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.log('ahoj');
                return [4 /*yield*/, db_1["default"].business.findUnique({
                        where: {
                            id: req.body.businessId
                        }
                    })];
            case 1:
                business = _a.sent();
                if (!business) {
                    return [2 /*return*/, res.json({ message: 'nope' })];
                }
                console.log('tu');
                return [4 /*yield*/, db_1["default"].product.create({
                        data: {
                            name: req.body.name,
                            description: req.body.description,
                            images: req.body.images,
                            business: { connect: { id: business.id } }
                        }
                    })];
            case 2:
                product = _a.sent();
                res.json({ data: product });
                return [2 /*return*/];
        }
    });
}); };
exports.createProduct = createProduct;
var updateProduct = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var business, products, product, updated;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, db_1["default"].business.findFirst({
                    where: {
                        belongsToId: req.user.id
                    },
                    include: {
                        products: true
                    }
                })];
            case 1:
                business = _a.sent();
                products = business.products.map(function (allProducts) { return allProducts; });
                product = products.find(function (product) { return product.id === req.params.id; });
                if (!product) {
                    return [2 /*return*/, res.json({ message: 'nevyslo' })];
                }
                return [4 /*yield*/, db_1["default"].product.update({
                        where: {
                            id: req.params.id
                        },
                        data: req.body
                    })];
            case 2:
                updated = _a.sent();
                res.json({ data: updated });
                return [2 /*return*/];
        }
    });
}); };
exports.updateProduct = updateProduct;
var deleteProduct = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var business, products, product, deleted;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, db_1["default"].business.findFirst({
                    where: {
                        belongsToId: req.user.id
                    },
                    include: {
                        products: true
                    }
                })];
            case 1:
                business = _a.sent();
                console.log('sem');
                products = business.products.map(function (allProducts) { return allProducts; });
                product = products.find(function (product) { return product.id === req.params.id; });
                console.log(product);
                console.log(products);
                if (!product) {
                    return [2 /*return*/, res.json({ message: 'not deleted' })];
                }
                return [4 /*yield*/, db_1["default"].product["delete"]({
                        where: {
                            id: req.params.id
                        }
                    })];
            case 2:
                deleted = _a.sent();
                res.json({ data: deleted });
                return [2 /*return*/];
        }
    });
}); };
exports.deleteProduct = deleteProduct;
//# sourceMappingURL=products.js.map