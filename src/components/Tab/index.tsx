import React from 'react';
import { View, Text } from '@tarojs/components'
import './index.scss'
interface ITabProps {
    tabs?: any
    selectIndex?:number
    onChange?: Function
    id?:any
}

const Tab: React.FunctionComponent<ITabProps> = (props) => {
   
    return <View id={props.id} className="tabWarp">
        {props.tabs?.map((item, i) => {
          return  (<View className={"tabItem " + (props.selectIndex == i ? " active" : "")} key={i} onClick={() => {
                let { onChange } = props;
                if (onChange)
                    onChange(i);
            }}>
                <Text className="tabTitle">
                    {item}
                </Text>
            </View>)
        })}
    </View>;
};

export default Tab;
