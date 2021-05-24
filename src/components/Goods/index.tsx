import { View, Text, ScrollView } from '@tarojs/components';
import React, { useEffect, useState } from 'react';
import "./index.scss"
import { GetAll } from '../../services/category-service'
import { GetListByCategoryId } from '../../services/goods-service'
import GoodsItem from '../GoodsItem'
interface IGoodsProps {
    style?: any,
    isScroll?: boolean,
    onSelectSpec?: Function
    cartDadta?: any

}

const Goods: React.FunctionComponent<IGoodsProps> = (props) => {
    const [goodsCategory, setGoodsCategory] = useState<any>([]);
    const [goodsList, setGoodsList] = useState<any>([]);
    const [nowSelectCategoryId, setNowSelectCategoryId] = useState<any>();


    useEffect(() => {

        GetAll().then((res: any) => {
            setGoodsCategory(res);
            if (res.length > 0)
                loadGoodList(res[0].id);
        });

    }, []);

    useEffect(() => {
        let goods: any = [];
        goodsList.map(item => {
            goods.push({ ...item, selectNumer: getCartNumber(item) });
        });
        setGoodsList(goods);

    }, [props.cartDadta]);

    const loadGoodList = (categoryId) => {
        setNowSelectCategoryId(categoryId);
        let goods: any = [];
        GetListByCategoryId(categoryId).then((res: any) => {
            res.map(item => {
                goods.push({ ...item, selectNumer: getCartNumber(item) });
            });
            setGoodsList(goods);
        });
    }

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

    return <View className="goodsWarp">
        <View className="goodsContentWarp">
            <ScrollView enableFlex={true} style={props.style} scrollY={props.isScroll} className="goodsCategory">
                {goodsCategory.map((item, i) => {
                    return <View className={"goodsCategoryItem " + (item.id == nowSelectCategoryId ? "active" : "")} key={i} onClick={() => {
                        loadGoodList(item.id);
                    }}>
                        <Text >{item.name}</Text>
                    </View>;
                })}
                <View className="footerPosition" />
            </ScrollView>
            <ScrollView enableFlex={true} style={{...props.style,backgroundColor:"#fff"}} scrollY={props.isScroll} className="goodsList">
                {goodsList.map((item, i) => {


                    return <GoodsItem data={item} key={i} onSelectSpec={(data) => {
                        let { onSelectSpec } = props;
                        onSelectSpec && onSelectSpec(data);

                    }} />;
                })}
                <View className="footerPosition" />
            </ScrollView>
        </View>

    </View>;
};

export default Goods;
