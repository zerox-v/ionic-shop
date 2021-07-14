import * as React from 'react'
import { View, Text } from '@tarojs/components'
import './index.scss'
interface ISwitchOption {
    title:string,
    value:any
}
interface ISwitchProps {
    options?:ISwitchOption[]
    value?:any
    onChange?:Function
    className?:string
}

const Switch: React.FunctionComponent<ISwitchProps> = (props) => {
  return <View className={"switch flex flex-row items-center "+props.className}>
      <View className="active"></View>
    {props.options?.map((item,i)=>{
        return <Text onClick={()=>{
            if(item.value!=props.value){
                let {onChange}=props;
                onChange&&onChange(item.value);
            }
           
        }} className={"item "+ (item.value==props.value?"active":"")} key={i}>{item.title}</Text>
    })}
  </View>;
};

export default Switch;
