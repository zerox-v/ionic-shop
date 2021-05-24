import React from 'react';
import Config from '@/utils/config';
import { Image as TaroImage } from '@tarojs/components';
import { ImageProps } from '@tarojs/components/types/Image';
import defImage from '../../assets/def.png'

const Image: React.FC<ImageProps> = (props) => {
  let src = defImage;
  if (props.src?.indexOf("http") == 0) {
    src = props.src;
  } else if (props.src) {
    src = Config.IMGHOST + JSON.parse(props.src)[0];
  }
  return <TaroImage   {...props} src={src} />;
};

export default Image;
