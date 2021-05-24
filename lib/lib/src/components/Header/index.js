"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const components_1 = require("@tarojs/components");
const taro_1 = require("@tarojs/taro");
require("./index.scss");
const Header = (props) => {
    const [statusBarHeight, setStatusBarHeight] = react_1.useState(0);
    react_1.useEffect(() => {
        taro_1.default.getSystemInfo({
            success: res => {
                setStatusBarHeight(res.statusBarHeight);
            }
        });
    }, []);
    return react_1.default.createElement(components_1.View, { className: "cust-header " + (((props.scrollHeight ? props.scrollHeight : 0) > (statusBarHeight + 60) && props.type == "search") ? "bg-white" : ""), style: { paddingTop: statusBarHeight + 6 + "px" } }, props.type == "search" ? react_1.default.createElement(components_1.View, { className: "search" }) : react_1.default.createElement(components_1.Text, { className: "title" }, props.title), props.children);
};
exports.default = Header;
//# sourceMappingURL=index.js.map