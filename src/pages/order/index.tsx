import React, { useState, useEffect } from 'react';
import { View, Text, Button } from '@tarojs/components'
import { GetCart } from '../../services/shoppingcart-service'
import { CreateOrder } from '../../services/order-service'
import './index.scss'
import ShoppingCartItem from '@/components/ShoppingCartItem';
import Taro from '@tarojs/taro'
interface IOrderProps {

}

const Order: React.FunctionComponent<IOrderProps> = (props) => {
  const [useType, setUseType] = useState(0);
  const [cartList, SetCartList] = useState<any>([]);

  useEffect(() => {
    getCart();
  }, []);

  const getCart = () => {
    GetCart().then(res => {
      SetCartList(res);
    });
  }

  return <View className="orderPage">

    <View className="topBg">
      {/* <View className="flex flex-row  tabWarp">
        <View className={"tabItem mr10  " + (useType == 0 ? "active" : "")} onClick={() => {
          setUseType(0);
        }} >
          <Text>堂食</Text>
        </View>

        <View className={"tabItem " + (useType == 1 ? "active" : "")} onClick={() => {
          setUseType(1);
        }} >
          <Text>打包</Text>
        </View>
      </View> */}
      <View className="orderContent card" >
        <Text  >全部商品</Text>
        {cartList.map((item: any, i: number) => {
          return <ShoppingCartItem isCanChangeNumber={false} item={item} key={i} />;
        })}
        {/* <View className="flex justify-between">
          <Text>红包</Text>
          <Text> {">"} </Text>
        </View> */}
        <View className="preferential mt20 flex items-center justify-end ">
          <Text>已优惠</Text>   
          <Text className="price mr20">￥0.00</Text>
          <Text>小计￥0.00</Text>
        </View>
      </View>

      <View className="card mt20">

      </View>


      <View className="orderFooter">
        <Button className="primaryBtn" onClick={() => {
          CreateOrder().then(res => {
            Taro.navigateBack();
          });
        }}>提交订单</Button>
      </View>




    </View>
  </View>
    ;
};

export default Order;
