import { View, Text, Button } from '@tarojs/components';
import React from 'react';
import ChangeNumber from '../ChangeNumber';
import Image from '../Image';
import { AddShoppingCart } from '../../services/shoppingcart-service'
import './index.scss'
interface IGoodsItemProps {
    data: any,
    onSelectSpec?: Function
    onGoodsChange?:Function

}

const GoodsItem: React.FunctionComponent<IGoodsItemProps> = (props) => {
    const { data } = props;

    return <View className="goodsItemWarp">
        <View className="goodsItemLeft">
            <Image className="goodsImage" src={data.image} />
        </View>
        <View className="goodsItemRight">
            <View className="titleWarp">
                <Text className="goodsTitle">{data.name}</Text>
                {/* <Text className="salesVolume">销量：18</Text> */}
            </View>

            <View className="priceAndBtn flex justify-between">
                <Text className="price">{data.price}</Text>
                {(data.isMoreSpec && data.selectNumer == 0) ? <Button className="addBtn" onClick={() => {
                    let { onSelectSpec } = props;
                    onSelectSpec && onSelectSpec(data);
                }}>选规格</Button> : <ChangeNumber isMoreSpec={data.isMoreSpec} onSelectSpec={() => {
                    let { onSelectSpec } = props;
                    onSelectSpec && onSelectSpec(data);
                }} goodsNumber={data.selectNumer} onChange={(num)=>{
                    AddShoppingCart({
                        goodsId:data.id,
                        number:num
                    }).then(res=>{
                        let {onGoodsChange}=props;
                        onGoodsChange&&onGoodsChange();
                    });
                }} />}
            </View>
        </View>

    </View>;
};

export default GoodsItem;
