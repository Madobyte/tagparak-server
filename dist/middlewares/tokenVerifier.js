"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
module.exports = (res, req, next) => {
    const authorization = res.headers.get('authorization');
    next();
};
