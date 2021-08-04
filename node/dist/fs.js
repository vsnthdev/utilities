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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.exists = void 0;
const promises_1 = __importDefault(require("fs/promises"));
const utilities_base_1 = require("@vasanthdeveloper/utilities-base");
const exists = (path) => __awaiter(void 0, void 0, void 0, function* () {
    const exists = yield utilities_base_1.promise.handle(promises_1.default.stat(path));
    if (exists.err) {
        return false;
    }
    else {
        return true;
    }
});
exports.exists = exists;
