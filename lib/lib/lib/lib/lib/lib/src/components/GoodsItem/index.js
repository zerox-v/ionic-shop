"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const components_1 = require("@tarojs/components");
const react_1 = require("react");
require("./index.scss");
const GoodsItem = (props) => {
    return react_1.default.createElement(components_1.View, { className: "goodsItemWarp" }, react_1.default.createElement(components_1.View, { className: "goodsItemLeft" }, react_1.default.createElement(components_1.Image, { className: "goodsImage", src: 'http://imgs.soufun.com/newshezuo/201512/25/592/e39c10bb96011257a510862cedf7c8d6.jpeg' })), react_1.default.createElement(components_1.View, { className: "goodsItemRight" }, react_1.default.createElement(components_1.View, { className: "titleWarp" }, react_1.default.createElement(components_1.Text, { className: "goodsTitle" }, "\u80E1\u841D\u535C\u6C41"), react_1.default.createElement(components_1.Text, { className: "salesVolume" }, "\u9500\u91CF\uFF1A18")), react_1.default.createElement(components_1.View, { className: "priceAndBtn" }, react_1.default.createElement(components_1.Text, { className: "price" }, "52.01"), react_1.default.createElement(components_1.View, { className: "addBtn" }, "+"))));
};
exports.default = GoodsItem;
//# sourceMappingURL=index.js.map