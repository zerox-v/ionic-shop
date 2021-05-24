import React, { useEffect, useState } from 'react'
import { View, Text, ScrollView, Swiper, SwiperItem, Button } from '@tarojs/components'
import Header from '../../components/Header'

import Goods from '../../components/Goods'
import Order from '../../components/Order'
import Shop from '../../components/Shop'
import Footer from '../../components/Footer'
import SelectSpec from '../../components/SelectSpec'

import { GetShopInfo, GetWeChatOpenId } from '../../services/shop-service'
import { GetBySourceAndOpenId } from '../../services/members-service'
import { GetCart } from '../../services/shoppingcart-service'
import Taro, { eventCenter, getCurrentInstance } from '@tarojs/taro'
import './index.scss'
import Config from '../../utils/config'
import Tab from '@/components/Tab'
import Image from '@/components/Image'
import { GetOrderList } from '@/services/order-service'



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


  useEffect(() => {
    Taro.getSystemInfo({
      success: res => {
        setStatusBarHeight(res.statusBarHeight);
        setScreenHeight(res.screenHeight);
      }
    })
    Taro.login({
      success: (res) => {
        GetWeChatOpenId(res.code).then((res1: string) => {
          {
            GetBySourceAndOpenId(Config.SOURCE_KEY, JSON.parse(res1).openid).then(resx => {
              Taro.setStorageSync(Config.TOKEN_SAVE_KEY, resx);
              getCart();

            });
          }
        });
      }
    });
    const onShowEventId = getCurrentInstance().router?.onShow;
    if (onShowEventId)
      eventCenter.on(onShowEventId, () => {
        getCart();
        getOrder();
      })
    GetShopInfo().then((res: any) => {
      SetshopInfo(res);
    });


  }, []);

  const getOrder = () => {
    GetOrderList().then((res: any) => {
      setOrderList(res);
    })
  }
  const onScroll = (e) => {
    setScrollHeight(e.detail.scrollTop)
    var date = new Date()
    for (var i = 0; i <= 10; i++) {
      date.setHours(-i);
      console.log(date.getHours());
    }

    var date = new Date();
    for (var i = 0; i < 24; i++) {
      console.log(date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() + " " + date.getHours() + ":" + date.getMinutes());
      date.setHours(date.getHours() - 1);

    }
  }

  const getCart = () => {
    GetCart().then(res => {
      SetCartList(res);
    });
  }

  return <ScrollView className='index' style={{ height: screenHeight + "px" }} scrollY={true} onScrollToLower={(e) => {
    //console.log(e.detail);
    setIsScroll(true)
  }} onScrollToUpper={(e) => {
    // console.log(e.detail);
    setIsScroll(false);
  }} enableFlex={true} onScroll={onScroll} >
    <Header type="search" scrollHeight={scrollHeight} ></Header>
    <View className="content">
      <Image className="shopImage" src="http://imgs.soufun.com/newshezuo/201512/25/592/e39c10bb96011257a510862cedf7c8d6.jpeg" />
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
        <Tab id="tab-id" tabs={tabData} selectIndex={tabSelectedIndex} onChange={(index) => {
          setTabSelectedIndex(index);
        }} />
        <Swiper className="mainBg" style={{ height: (screenHeight - statusBarHeight - 90) + 'px' }} current={tabSelectedIndex} onChange={(e) => {
          setTabSelectedIndex(e.detail.current);
        }}>
          <SwiperItem className="swiperItem">
            <Goods  cartDadta={cartList} isScroll={isScroll} style={{ height: (screenHeight - statusBarHeight - 90) + 'px'}} onSelectSpec={(data) => {
              setClickGoodsId(data.id);
              setSelectSpecVisible(true);
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
  </ScrollView>;
};

export default Index;



