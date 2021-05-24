"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const components_1 = require("@tarojs/components");
const Header_1 = require("../../components/Header");
const Tab_1 = require("../../components/Tab");
const Goods_1 = require("../../components/Goods");
const Order_1 = require("../../components/Order");
const Shop_1 = require("../../components/Shop");
const Footer_1 = require("../../components/Footer");
const taro_1 = require("@tarojs/taro");
require("./index.scss");
const Index = (props) => {
    const [statusBarHeight, setStatusBarHeight] = react_1.useState(0);
    const [screenHeight, setScreenHeight] = react_1.useState(0);
    const [scrollHeight, setScrollHeight] = react_1.useState(0);
    const [tabSelectedIndex, setTabSelectedIndex] = react_1.useState(0);
    const tabData = ["全部商品", "订单", "店铺"];
    const [tabTop, setTabTop] = react_1.useState(0);
    const [isScroll, setIsScroll] = react_1.useState(false);
    react_1.useEffect(() => {
        taro_1.default.getSystemInfo({
            success: res => {
                setStatusBarHeight(res.statusBarHeight);
                setScreenHeight(res.screenHeight);
            }
        });
    }, []);
    const onScroll = (e) => {
        setScrollHeight(e.detail.scrollTop);
        // const query = Taro.createSelectorQuery();
        // query.select('#tab-id').boundingClientRect()
        // query.selectViewport().scrollOffset()
        // query.exec((res) => {
        //   setTabTop(res[0].top);
        // })
        // console.log(e.detail);
    };
    return react_1.default.createElement(components_1.ScrollView, { className: 'index', style: { height: screenHeight + "px" }, scrollY: true, onScrollToLower: (e) => {
            //console.log(e.detail);
            setIsScroll(true);
        }, onScrollToUpper: (e) => {
            // console.log(e.detail);
            setIsScroll(false);
        }, enableFlex: true, onScroll: onScroll },
        react_1.default.createElement(Header_1.default, { type: "search", scrollHeight: scrollHeight }),
        react_1.default.createElement(components_1.View, { className: "content" },
            react_1.default.createElement(components_1.Image, { className: "shopImage", src: "http://imgs.soufun.com/newshezuo/201512/25/592/e39c10bb96011257a510862cedf7c8d6.jpeg" }),
            react_1.default.createElement(components_1.View, { className: "shopInfo", style: { top: (statusBarHeight + 60) + "px" } },
                react_1.default.createElement(components_1.View, null,
                    react_1.default.createElement(components_1.Text, { className: "shopName" }, "\u7F57\u68EE\u4FBF\u5229\u5E97\uFF08\u957F\u6865\u5DE6\u5CB8\u5E97\uFF09"))),
            react_1.default.createElement(components_1.View, { className: "goodsContent" },
                react_1.default.createElement(Tab_1.default, { id: "tab-id", tabs: tabData, selectIndex: tabSelectedIndex, onChange: (index) => {
                        setTabSelectedIndex(index);
                    } }),
                react_1.default.createElement(components_1.Swiper, { style: { height: (screenHeight - statusBarHeight - 90) + 'px' }, current: tabSelectedIndex, onChange: (e) => {
                        setTabSelectedIndex(e.detail.current);
                    } },
                    react_1.default.createElement(components_1.SwiperItem, { className: "swiperItem" },
                        react_1.default.createElement(Goods_1.default, { isScroll: isScroll, style: { height: (screenHeight - statusBarHeight - 90) + 'px' } })),
                    react_1.default.createElement(components_1.SwiperItem, { className: "swiperItem" },
                        react_1.default.createElement(Order_1.default, null)),
                    react_1.default.createElement(components_1.SwiperItem, { className: "swiperItem" },
                        react_1.default.createElement(Shop_1.default, null))))),
        tabSelectedIndex == 0 ? react_1.default.createElement(Footer_1.default, null) : null);
};
exports.default = Index;
//# sourceMappingURL=index.js.map