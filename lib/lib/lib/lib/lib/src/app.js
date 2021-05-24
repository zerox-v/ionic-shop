"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
require("./app.scss");
class App extends react_1.Component {
    componentDidMount() { }
    componentDidShow() { }
    componentDidHide() { }
    componentDidCatchError() { }
    // this.props.children 是将要会渲染的页面
    render() {
        return this.props.children;
    }
}
exports.default = App;
//# sourceMappingURL=app.js.map