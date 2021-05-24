"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const components_1 = require("@tarojs/components");
const react_1 = require("react");
require("./index.scss");
const GoodsItem_1 = require("../GoodsItem");
const Goods = (props) => {
    const goodsCategory = ["分类一", "分类二", "分类一", "分类二", "分类二", "分类一", "分类二", "分类一", "分类二", "分类二", "分类一", , "分类二", "分类二", "分类二", "分类二", "分类11"];
    return react_1.default.createElement(components_1.View, { className: "goodsWarp" }, react_1.default.createElement(components_1.View, { className: "goodsContentWarp" }, react_1.default.createElement(components_1.ScrollView, { enableFlex: true, style: props.style, scrollY: props.isScroll, className: "goodsCategory" }, goodsCategory.map((item, i) => {
        return react_1.default.createElement(components_1.View, { className: "goodsCategoryItem", key: i }, react_1.default.createElement(components_1.Text, null, item));
    }), react_1.default.createElement(components_1.View, { className: "footerPosition" })), react_1.default.createElement(components_1.ScrollView, { enableFlex: true, style: props.style, scrollY: props.isScroll, className: "goodsList" }, goodsCategory.map((item, i) => {
        return react_1.default.createElement(GoodsItem_1.default, { key: i });
    }), react_1.default.createElement(components_1.View, { className: "footerPosition" }))));
};
exports.default = Goods;
//# sourceMappingURL=index.js.map