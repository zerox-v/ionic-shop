import React from 'react'
import { View } from '@tarojs/components';
import './index.scss'
interface IMarksProps {
  onClick?: Function
}

const Marks: React.FunctionComponent<IMarksProps> = (props) => {
  return <View onClick={() => {
    let { onClick } = props;
    onClick && onClick();
  }} className="marksWarp">
    {props.children}
  </View>;
};

export default Marks;
