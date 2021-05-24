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
    useEffect(() => {
        Taro.getSystemInfo({
            success: res => {
                setStatusBarHeight(res.statusBarHeight);
            }
        })

    }, []);

    return <View className={"cust-header " + (((props.scrollHeight ? props.scrollHeight : 0) > (statusBarHeight + 60) && props.type == "search") ? "bg-white" : "")} style={{ paddingTop: statusBarHeight+6 + "px" }}>

        {props.type == "search" ? <View className="search"></View> : <Text className="title">{props.title}</Text>}
        {props.children}

    </View>
        ;
};

export default Header;
