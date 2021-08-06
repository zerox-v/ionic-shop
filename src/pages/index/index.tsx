import React, { useEffect, useState } from 'react'
import { View, Text, Swiper, SwiperItem, Button } from '@tarojs/components'
import Header from '../../components/Header'

import Goods from '../../components/Goods'
import Order from '../../components/Order'
import Shop from '../../components/Shop'
import Footer from '../../components/Footer'
import SelectSpec from '../../components/SelectSpec'

import { GetShopInfo, GetWeChatOpenId, GetAliPayUserId } from '../../services/shop-service'
import { GetBySourceAndOpenId } from '../../services/members-service'
import { GetCart } from '../../services/shoppingcart-service'
import Taro, { eventCenter, getCurrentInstance, usePageScroll } from '@tarojs/taro'
import './index.scss'
import Config from '../../utils/config'
import Tab from '@/components/Tab'
import Image from '@/components/Image'
import { GetOrderList } from '@/services/order-service'
import Switch from '@/components/Switch'

declare var my: any;

interface IIndexProps {

}

const Index: React.FunctionComponent<IIndexProps> = (props) => {
  const [statusBarHeight, setStatusBarHeight] = useState(0);
  const [screenHeight, setScreenHeight] = useState(0);
  const [scrollHeight, setScrollHeight] = useState(0);
  const [tabSelectedIndex, setTabSelectedIndex] = useState(0);
  const tabData = ["全部商品", "订单", "店铺"];
  const [isScroll, setIsScroll] = useState(false);

  const [selectSpecVisible, setSelectSpecVisible] = useState(false);

  const [clickGoodsId, setClickGoodsId] = useState();

  const [shopInfo, SetshopInfo] = useState<any>({});
  const [cartList, SetCartList] = useState<any>([]);
  const [orderList, setOrderList] = useState<any>([]);
  const [useType, setUseType] = useState(1);
  usePageScroll((e) => {
    setScrollHeight(e.scrollTop)
    if (e.scrollTop == 0) {
      setIsScroll(false);
    } else if (e.scrollTop > statusBarHeight + 60) {
      setIsScroll(true);
    }
  })

  useEffect(() => {
    Taro.getSystemInfo({
      success: res => {
        setStatusBarHeight(res.statusBarHeight);
        setScreenHeight(res.windowHeight);
      }
    })

    var env = Taro.getEnv();
    console.log()
    if (env == "WEAPP") {
      Taro.login({
        success: (res) => {
          GetWeChatOpenId(res.code).then((res1: string) => {
            {
              getUserInfo(JSON.parse(res1).openid);

            }
          });
        }
      });

    } else if (env == "ALIPAY") {

      my.getAuthCode({
        scopes: 'auth_base',
        success: ({ authCode }) => {
          console.log(authCode);
          GetAliPayUserId(authCode).then((res: any) => {
            getUserInfo(res);
          })
        },
      });

    }



    GetShopInfo().then((res: any) => {
      SetshopInfo(res);
    });


  }, []);

  const getUserInfo = (code: any) => {
    let env = Taro.getEnv();
    GetBySourceAndOpenId(env, code).then(resx => {
      Taro.setStorageSync(Config.TOKEN_SAVE_KEY, resx);
      getCart();
      getOrder();
      const onShowEventId = getCurrentInstance().router?.onShow;
      if (onShowEventId)
        eventCenter.on(onShowEventId, () => {
          getCart();
          getOrder();
        })
    });
  }

  const getOrder = () => {
    GetOrderList().then((res: any) => {
      setOrderList(res);
    })
  }


  const getCart = () => {
    GetCart().then(res => {
      SetCartList(res);
    });
  }

  return <View className='index' >
    <Header type="search" scrollHeight={scrollHeight} ></Header>
    <View className="content">
      <Image className="shopImage" src="http://shop-img.ionic.fun/FkdsrbcJtyUAfqvaFDN5I_0cHCz0" />
      <View className="shopInfo" style={{ top: (statusBarHeight + 60) + "px" }}>
        <View className="flex justify-between">
          <View className="flex flex-col">
            <Text className="shopName" >{shopInfo.name}</Text>
            <Text className="label mt20">公告:不定时营业，哈哈。</Text>
          </View>
          <Image className="shopLogo" src={shopInfo.image} />
        </View>
        <View className="flex flex-row ">
          <Button className="couponTag">满20减3</Button>
          <Button className="couponTag">满30减5</Button>
          <Button className="couponTag">满40减7</Button>
        </View>
        <Text className="label mt10"></Text>
      </View>
      <View className="goodsContent">
        <View className="flex flex-row justify-between items-center">
          <Tab id="tab-id" tabs={tabData} selectIndex={tabSelectedIndex} onChange={(index) => {
            setTabSelectedIndex(index);
          }} />
          <Switch className="mr10" value={useType} onChange={(value) => {
            setUseType(value);
          }} options={[{ title: "堂食", value: 1 }, { title: "打包", value: 2 }]} />
        </View>

        <Swiper className="mainBg" style={{ height: (screenHeight - statusBarHeight - 90) + 'px' }} current={tabSelectedIndex} onChange={(e) => {
          setTabSelectedIndex(e.detail.current);
        }}>
          <SwiperItem className="swiperItem">
            <Goods cartDadta={cartList} isScroll={isScroll} style={{ height: (screenHeight - statusBarHeight - 90) + 'px' }} onSelectSpec={(data) => {
              setClickGoodsId(data.id);
              setSelectSpecVisible(true);
            }} onGoodsChange={() => {
              getCart();
            }} />
          </SwiperItem>
          <SwiperItem className="swiperItem">
            <Order orderList={orderList} onChange={() => {
              getOrder()
            }} />
          </SwiperItem>
          <SwiperItem className="swiperItem">
            <Shop />
          </SwiperItem>
        </Swiper>
      </View>
    </View>
    <SelectSpec goodsId={clickGoodsId} visibility={selectSpecVisible} onClose={() => {
      setSelectSpecVisible(false);
    }} onSuccess={() => {
      getCart();
    }} />


    {tabSelectedIndex == 0 ? <Footer cartData={cartList} onChange={() => {
      getCart();
    }} /> : null}
  </View>;
};

export default Index;



