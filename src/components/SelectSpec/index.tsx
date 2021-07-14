import React, { useEffect, useState } from 'react'
import { View, Button, Text } from '@tarojs/components';
import './index.scss'
import Marks from '../Marks';
import Image from '../Image';
import { GetById } from '../../services/goods-service'
import { AddShoppingCart } from '../../services/shoppingcart-service'
import ChangeNumber from '../ChangeNumber';

interface ISelectSpecProps {
  visibility?: boolean,
  onClose?: Function
  goodsId?: string
  onSuccess?: Function
}



const SelectSpec: React.FunctionComponent<ISelectSpecProps> = (props) => {
  const [goodsInfo, setGoodsInfo] = useState<any>({});
  const [specs, SetSpecs] = useState([]);
  const [number, SetNumber] = useState(1);

  const [nowSelectSpecs, setNowSelectSpecs] = useState<any>([]);
  const [nowSelectProduct, setNowSelectProduct] = useState<any>();

  useEffect(() => {
    if (props.goodsId && props.visibility)
      GetById(props.goodsId).then((res: any) => {
        setGoodsInfo(res);
        let result = groupArr(res.specs, "name");
        let defSelect: any = [];
        result.map((item: any) => {
          defSelect.push(item.list[0].values);
        });
        setNowSelectSpecs(defSelect);
        SetSpecs(result);
      });
  }, [props.goodsId]);

  useEffect(() => {
    if (props.goodsId && props.visibility) {
      setProduct();
    }
  }, [nowSelectSpecs])

  const groupArr = (list, field) => {
    var fieldList: any = [], att: any = [];
    list.map((e: any[]) => {
      fieldList.push(e[field])
    })
    //数组去重
    fieldList = fieldList.filter((e, i, self) => {
      return self.indexOf(e) == i
    })
    for (var j = 0; j < fieldList.length; j++) {
      //过滤出匹配到的数据
      var arr = list.filter((e) => {
        return e[field] == fieldList[j];
      })
      att.push({
        type: fieldList[j],
        list: arr
      })
    }
    return att;
  }


  const setProduct = () => {
    let product = goodsInfo.products?.find((item: any) => {
      return item.specsName == JSON.stringify(nowSelectSpecs);
    });
    console.log("product", product);
    setNowSelectProduct(product);
  }
  const close = () => {
    let { onClose } = props;
    onClose && onClose();
  }

  return props.visibility ? <View className="selectSpecWarp" >
    <Marks onClick={close} />
    <View className="flex flex-col selectSpec">
      <Button className="iconfont iconguanbi" onClick={close} />
   
      <View className="flex flex-row flex-1 flex-grow-0" >
        <Image className="goodsImage" src={(nowSelectProduct && nowSelectProduct.image) ? nowSelectProduct.image : goodsInfo.image} />
        <View className="flex flex-col ml10">
          <Text className="title">{goodsInfo.name}</Text>
          <Text className="label" >已选：{nowSelectSpecs.map((item, i) => {
            return item + (i < nowSelectSpecs.length - 1 ? "/" : "");
          })}</Text>
          <Text className="price">{(nowSelectProduct && nowSelectProduct?.price != 0) ? nowSelectProduct.price : goodsInfo.price}</Text>
        </View>
      </View>
      <View className="flex justify-between numberWarp flex-grow-0"  >
        <Text className="title" >数量：</Text>
        <ChangeNumber goodsNumber={number} onChange={(num) => {
          SetNumber(num);
        }} />
      </View>
      <View className="flex flex-col flex-grow">
        {specs.map((item: any, i: number) => {
          return <View key={i}  className="mt20">
            <Text className="title" >{item.type}</Text>
            <View className="flex flex-row mt10">
              {item.list.map((item: any, index: number) => {
                return <Button className={"specsBtn " + (nowSelectSpecs[i] == item.values ? "active" : "")} key={index} onClick={() => {
                  let arr: any = [].concat(nowSelectSpecs);
                  arr[i] = item.values;
                  setNowSelectSpecs(arr);
                }}>{item.values}</Button>;
              })}
            </View>
          </View>
        })}
      </View>
     
      <View className="flex flex-grow-0">
        <Button className="okBtn" onClick={() => {
          AddShoppingCart({
            productId: nowSelectProduct.id,
            number: number
          }).then(res => {
            let { onSuccess } = props;
            onSuccess && onSuccess();
            close();
          });

        }}>选好了</Button>
      </View>
    </View>

  </View> : null;
};

export default SelectSpec;
