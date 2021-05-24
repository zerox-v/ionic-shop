"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const components_1 = require("@tarojs/components");
require("./index.scss");
const Tab = (props) => {
    var _a;
    return react_1.default.createElement(components_1.View, { id: props.id, className: "tabWarp" }, (_a = props.tabs) === null || _a === void 0 ? void 0 : _a.map((item, i) => {
        return (react_1.default.createElement(components_1.View, { className: "tabItem " + (props.selectIndex == i ? " active" : ""), key: i, onClick: () => {
                let { onChange } = props;
                if (onChange)
                    onChange(i);
            } }, react_1.default.createElement(components_1.Text, { className: "tabTitle" }, item)));
    }));
};
exports.default = Tab;
//# sourceMappingURL=index.js.map