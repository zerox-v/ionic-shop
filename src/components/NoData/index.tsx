import React, { useState, useEffect } from 'react';
import { View, Text, Button, Image } from '@tarojs/components';
interface INoDataProps {
}

const NoData: React.FunctionComponent<INoDataProps> = (props) => {
  return <View style={{height:"230rpx",marginTop:"100rpx"}} className="flex flex-col justify-items-center self-center">
    <Image style={{ width: "200rpx" }} mode="aspectFit" src={require("../../assets/nodata.png")}></Image>
   <Text className="label self-center">暂无数据</Text>
  </View>;
};

export default NoData;
