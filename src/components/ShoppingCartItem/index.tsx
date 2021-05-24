import  React from 'react';
import { View, Text, Radio } from '@tarojs/components'

import ChangeNumber from '../ChangeNumber';
import { ChangeNumnber as ChangeNum } from '@/services/shoppingcart-service'
import './index.scss'
import Image from '../Image';
interface IShoppingCartItemProps {
  item:any
  onChange?:Function,
  isCanChangeNumber?:boolean
}

const ShoppingCartItem: React.FunctionComponent<IShoppingCartItemProps> = (props) => {
  let {item,isCanChangeNumber}=props;
  return <View className="flex flex-row cartItem mt10"   >
  {/* <View>
    <Radio color="#02b6fe" />
  </View> */}
  <View className="flex flex-row cartItemRightWarp" >
 
    <Image  mode="scaleToFill" className="goodsImage"  src={item.productImage} />
    <View className="flex flex-col justify-between  ml10 cartItemRight">
      <Text className="title" >{item.productName}</Text>
      <Text className="label" >{JSON.parse(item.productSpecs).join("、")}</Text>
      <View className="flex flex-row justify-between" style={{ height: "40rpx" }}>
        <Text className="price" >{item.price}</Text>
        {isCanChangeNumber? <ChangeNumber goodsNumber={item.number} onChange={(num: number) => {
          ChangeNum(item.id, num).then(res => {
            let { onChange } = props;
            onChange && onChange(num);
          });
        }} />: <Text className="title" > × {item.number}</Text>}
       
      </View>
    </View>

  </View>

</View>;
};

export default ShoppingCartItem;
