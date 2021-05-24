import { View, Text, Button } from '@tarojs/components';
import React, { useEffect, useState } from 'react';
import './index.scss'
import Image from '../Image';
import Taro from '@tarojs/taro'
import { Delete } from '@/services/order-service'
interface IOrderProps {
  orderList?: any,
  onChange?: Function
}

const Order: React.FunctionComponent<IOrderProps> = (props) => {
  const { orderList } = props;
  const getTotal = (goods: any) => {
    var total = 0;
    goods.forEach((item: any) => {
      total += item.number;
    });
    return total;
  }
  return <View className="orderWarp">

    {orderList.map((item: any, i) => {
      return <View key={i} className="item">
        <Text className="label">NO：{item.orderNumber}</Text>
        <View className="flex flex-row mt10 justify-between">
          <View className="flex flex-row ">
            {item.goods.map((goodsItem: any, index: number) => {
              return <Image key={index} mode="scaleToFill" style={{ height: "120rpx", width: "120rpx" }} className="goodsImage mr10" src={goodsItem.productImage} />
            })}
            {item.goods.length==1? <View className="flex flex-col justify-between">
              <Text className="title">{item.goods[0].productName}</Text>
              <Text className="label mt10">{JSON.parse(item.goods[0].productSpecs).join("、")}</Text>
            </View>
            :null}
          </View>


          <View className="flex flex-col justify-center">
            <Text className="title self-center">
              {item.totalMoney}
            </Text>
            <Text className="label self-center">共{getTotal(item.goods)}件</Text>
          </View>


        </View>
        <View className="flex flex-row mt10  justify-between">
          <Text className="title self-center">
            {item.status==2?"取餐码:"+item.code:""}
            
          </Text>
          <View className="flex flex-row">
            <Button className="cancleBtn mr10" onClick={() => {
              Taro.showModal({
                title: '提示',
                content: '真的要删除吗？',
                confirmColor:"#ff0000",
                success: (res) =>{
                  if (res.confirm) {
                    Delete(item.id).then(res => {
                      let { onChange } = props;
                      onChange && onChange();
                    });
                  }
                }
              })
             
            }} >取消</Button>
            <Button className="primaryBtn" >去支付</Button>
          </View>

        </View>
      </View>
    })}
  </View>;
};

export default Order;
