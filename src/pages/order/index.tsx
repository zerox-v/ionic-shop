import React, { useState, useEffect } from 'react';
import { View, Text, Button, Textarea } from '@tarojs/components'
import { GetCart } from '../../services/shoppingcart-service'
import { CreateOrder } from '../../services/order-service'
import './index.scss'
import ShoppingCartItem from '@/components/ShoppingCartItem';
import Taro from '@tarojs/taro'
import Switch from '@/components/Switch';
interface IOrderProps {

}

const Order: React.FunctionComponent<IOrderProps> = (props) => {
  const [useType, setUseType] = useState(1);
  const [cartList, SetCartList] = useState<any>([]);
  const quickInput = ["少糖", "不要葱", "不要蒜", "不要肉", "不要香菜"];
  useEffect(() => {
    getCart();
  }, []);

  const [remark, setRemark] = useState("");
  const getCart = () => {
    GetCart().then(res => {
      SetCartList(res);
    });
  }

  return <View className="orderPage">

    <View className="topBg">

      <View className="orderContent card" >
        <Text>全部商品</Text>
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
        <View className="mt10 flex justify-between ">
          <Text>用餐方式：</Text>
          <Switch value={useType} onChange={(value) => {
            setUseType(value);
          }} options={[{ title: "堂食", value: 1 }, { title: "打包", value: 2 }]} />
        </View>
      </View>
      <View className="card mt20">

        <View >
          <Text>备注：</Text>
        </View>
        <View className="textareaWarp mt10">
          <Textarea onInput={(e) => {
            setRemark(e.detail.value);
          }} autoHeight={true} value={remark} placeholder="请输入备注" >

          </Textarea>
        </View>
        <View className="mt20">
          <Text className="label">快捷输入</Text>
        </View>

        <View className="flex flex-wrap">
          {quickInput.map((item, i) => {
            return <Button onClick={() => {
              setRemark(item);
            }} className="flex quickBtn" key={i}>{item}</Button>
          })}
        </View>
      </View>
      <View className="footerPosition"></View>
      <View className="orderFooter">
        <Button className="submitOrder" onClick={() => {
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
