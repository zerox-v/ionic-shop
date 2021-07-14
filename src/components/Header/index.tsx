import React, { useEffect, useState } from 'react'
import { View, Text } from '@tarojs/components'
import Taro from '@tarojs/taro'
import './index.scss'

interface IHeaderProps {
    scrollHeight?: number,
    type?: "search" | "text",
    title?: string
}

const Header: React.FC<IHeaderProps> = (props) => {
    const [statusBarHeight, setStatusBarHeight] = useState(0);
    const [titleBarHeight, setTitleBarHeight] = useState(48);
    useEffect(() => {
        Taro.getSystemInfo({
            success: (res:any) => {
                console.log("getSystemInfo",res);
                setStatusBarHeight(res.statusBarHeight);
                setTitleBarHeight(res.titleBarHeight||48);
            }
        })
     
    }, []);

    return <View className={"cust-header " + (((props.scrollHeight ? props.scrollHeight : 0) > (statusBarHeight + 60) && props.type == "search") ? "bg-white" : "")} style={{ paddingTop: statusBarHeight+ "px",height:titleBarHeight+'px' }}>

        {props.type == "search" ? <View className="search"></View> : <Text className="title">{props.title}</Text>}
        {props.children}

    </View>
        ;
};

export default Header;
