import React, { useState, useEffect } from 'react';
import { View, Text, Button } from '@tarojs/components';
import Taro from '@tarojs/taro';
import './index.scss'

interface IChangeNumberProps {
  goodsNumber?: number,
  onChange?: Function
  isMoreSpec?: boolean
  onSelectSpec?: Function
}

const ChangeNumber: React.FunctionComponent<IChangeNumberProps> = (props) => {
  const [number, setNumber] = useState(0);
  useEffect(() => {
    setNumber(props.goodsNumber ? props.goodsNumber : 0);

  }, [props.goodsNumber]);
  const change = (num) => {
    setNumber(num);
    let { onChange } = props;
    onChange && onChange(num);
  }
  return <View className="changeNumber flex flex-row justify-center items-center ">{number != 0 ? <Button className={"iconfont iconjian " + (props.isMoreSpec ? " gray" : "")} onClick={() => {
    if (props.isMoreSpec) {
      console.log(props.isMoreSpec);
      Taro.showToast({
        title: "请在购物车里面调整数量",
        icon: "none"
      });
    } else {
      let num = number - 1;
      change(num);
    }

  }} ></Button>
    : null}
    {number != 0 ? <Text className="number">{number}</Text> : null}
    <Button className="iconfont iconjia" onClick={() => {
      if (props.isMoreSpec) {
        let { onSelectSpec } = props;
        onSelectSpec && onSelectSpec();
      } else {
        let num = number + 1;
        change(num);
      }

    }}></Button>
  </View>;
};

export default ChangeNumber;
