"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.renameKey = void 0;
const renameKey = (from, to, obj) => {
    obj[to] = obj[from];
    delete obj[from];
};
exports.renameKey = renameKey;
