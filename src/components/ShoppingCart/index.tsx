import React, { useState } from 'react';
import { View, Text, Radio } from '@tarojs/components'
import './index.scss'
import Marks from '../Marks';

import { ChangeNumnber as ChangeNum, ClecrCart } from '@/services/shoppingcart-service'
import ShoppingCartItem from '../ShoppingCartItem';
import NoData from '../NoData';
interface IShoppingCartProps {
  visibility?: boolean,
  data?: any,
  onClose?: Function,
  onChange?: Function
}

const ShoppingCart: React.FunctionComponent<IShoppingCartProps> = (props) => {

  const close = () => {
    let { onClose } = props;
    onClose && onClose();
  }
  return props.visibility ? <View className="shoppingCartWarp">
    <Marks onClick={close} />
    <View className="shoppingCart">
      <View className="flex justify-between shoppingTitleWarp">
        {/* <View>
          <Radio color="#02b6fe" /><Text>全选</Text>
        </View> */}
        <Text>已选商品</Text>
        <Text style={{ fontSize: '28rpx' }} onClick={() => {
          ClecrCart().then(res => {
            let { onChange } = props;
            onChange && onChange();
            close();
          });
        }}>清空</Text>
      </View>
      <View style={{ overflowY: "auto" }}>
        {props.data.map((item: any, i: number) => {

          return <ShoppingCartItem isCanChangeNumber={true} item={item} key={i} onChange={props.onChange} />;
        })}
      </View>
      {props.data?.length == 0 ? <NoData /> : null}
    </View>
  </View> : null;
};

export default ShoppingCart;

