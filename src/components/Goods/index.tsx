import { View, Text, ScrollView } from '@tarojs/components';
import React, { useEffect, useState } from 'react';
import Taro, { useReady } from '@tarojs/taro'
import "./index.scss"
import { GetAll, GetAllAndGoods } from '../../services/category-service'
import { GetListByCategoryId } from '../../services/goods-service'
import GoodsItem from '../GoodsItem'
interface IGoodsProps {
    style?: any,
    isScroll?: boolean,
    onSelectSpec?: Function
    cartDadta?: any
    onGoodsChange?: Function
}

const Goods: React.FunctionComponent<IGoodsProps> = (props) => {
    const [goodsCategory, setGoodsCategory] = useState<any>([]);
    const [scrollTop, setScrollTop] = useState<number>(0);
    const [contentTop, setContentTop] = useState<number[]>([]);
    const [nowSelectIndex, setNowSelectIndex] = useState<number>(1);
    const query = Taro.createSelectorQuery();
    useReady(() => {
        console.log("useReady");
    });
    useEffect(() => {

        GetAllAndGoods().then((res: any) => {
            setGoodsCategory(res);
            res.map((_, i) => {
                query.select('#category-' + i).boundingClientRect();

            });
            query.selectViewport().scrollOffset()

            setTimeout(() => {

                query.exec((resQuery) => {
                    console.log(resQuery);
                    let tops: any = [];
                    let fristTop: number = 0;
                    resQuery.map((item, i) => {
                        if (i < res.length) {
                            console.log(item);
                            if (i == 0) {
                                fristTop = item.top;
                                tops.push(0);
                            } else {
                                tops.push(parseInt((item.top - fristTop).toString()));
                            }

                        }
                    });
                    setContentTop(tops);
                })
            }, 100);


        });

    }, []);

    // useEffect(() => {
    //     let goods: any = [];
    //     goodsList.map(item => {
    //         goods.push({ ...item, selectNumer: getCartNumber(item) });
    //     });
    //     console.log("goods",goods);
    //     setGoodsList(goods);

    // }, [props.cartDadta]);

    // const loadGoodList = (index) => {
    //     let category = goodsCategory[index];
    //     setGoodsList(category.goods);
    //     // let goods: any = [];
    //     // GetListByCategoryId(categoryId).then((res: any) => {
    //     //     res.map(item => {
    //     //         goods.push({ ...item, selectNumer: getCartNumber(item) });
    //     //     });
    //     //     setGoodsList(goods);
    //     // });
    // }

    const getCartNumber = (item) => {
        var { cartDadta } = props;
        let cart = cartDadta.filter((cartItem: any) => {
            return cartItem.goodsId == item.id;
        });
        let number = 0;

        cart.map((cartItem: any) => {
            number += cartItem.number;
        });
        return number;
    }

    const goodsScroll = (e) => {
        let scrollTop = e.detail.scrollTop;
        if (contentTop.length > 1) {

            let index = 1;
            for (let i = 1; index < contentTop.length; i++) {
                if (scrollTop >= (contentTop[i - 1]) && scrollTop < (contentTop[i])) {
                    index = i;
                    break
                }
            }
            if (nowSelectIndex != index) {
                setNowSelectIndex(index);
            }
        }

    }

    return <View className="goodsWarp">
        <View className="goodsContentWarp">
            <ScrollView enableFlex={true} style={props.style} scrollY={props.isScroll} className="goodsCategory">
                {goodsCategory.map((item, i) => {
                    return <View className={"goodsCategoryItem " + ((i + 1) == nowSelectIndex ? "active" : "")} key={i} onClick={() => {
                        setNowSelectIndex(i + 1);
                        setScrollTop(contentTop[i]);
                    }}>
                        <Text >{item.name}</Text>
                    </View>;
                })}
                <View className="footerPosition" />
            </ScrollView>
            <ScrollView enableFlex={true} scrollTop={scrollTop} onScroll={goodsScroll} style={{ ...props.style, backgroundColor: "#fff" }} scrollY={props.isScroll} className="goodsList">
                <View>
                    {goodsCategory.map((item, i) => {
                        return <View key={i} className={(goodsCategory.length == i + 1 ? "lastItem" : "")} >
                            <View id={'category-' + i} className="item-sticky">
                                <Text >{item.name}</Text>
                            </View>
                            {item.goods.map((goodsItem, index) => {
                                let goodsData = { ...goodsItem, selectNumer: getCartNumber(goodsItem) }
                                return <GoodsItem onGoodsChange={props.onGoodsChange} data={goodsData} key={index} onSelectSpec={(data) => {
                                    let { onSelectSpec } = props;
                                    onSelectSpec && onSelectSpec(data);
                                }} />;
                            })
                            }

                        </View>

                    })}
                </View>
                <View className="footerPosition" />
            </ScrollView>
        </View>

    </View>;
};

export default Goods;
