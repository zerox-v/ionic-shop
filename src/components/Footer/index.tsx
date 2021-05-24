import { View, Text, Button } from '@tarojs/components';
import React, { useState, useEffect } from 'react';
import './index.scss'
import ShoppingCart from '../../components/ShoppingCart'
import Taro from '@tarojs/taro'
interface IFooterProps {
  cartData: any,
  onChange?: Function
}

const Footer: React.FunctionComponent<IFooterProps> = (props) => {
  const [shoppingCartVisible, setShoppingCartVisible] = useState(false);
  const [totalNumber, setTotalNumber] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0.00);

  useEffect(() => {
    let number = 0;
    let price = 0.00;
    props.cartData.forEach(item => {
      number += item.number;
      price += item.price*item.number;
    });
    setTotalNumber(number);
    setTotalPrice(price);
  }, [props.cartData]);

  return <View >
    <ShoppingCart data={props.cartData} visibility={shoppingCartVisible} onClose={() => {
      setShoppingCartVisible(false);
    }} onChange={props.onChange} />
    <View className={"footerWarp " + (shoppingCartVisible ? "box" : "")}>
      <View onClick={() => {
        setShoppingCartVisible(!shoppingCartVisible);
      }} style={{ position: "relative" }}>
        <Text className="iconfont icongouwulan" />
        {totalNumber == 0 ? null : <Text className="redDot">{totalNumber}</Text>}
      </View>
      {totalPrice == 0 ? null : <View className="flex flex-grow  footerPrice">
        <Text className="price">￥{totalPrice.toFixed(2)}</Text>
        <Text className="label">免费配送</Text>
      </View>}
      <View>
        <Button className="submitOrder" disabled={totalNumber==0} onClick={()=>{
          Taro.navigateTo({
            url:"/pages/order/index"
          });
        }} >去结算</Button>
      </View>
    </View>

  </View>;
};

export default Footer;
