
import request from '../utils/request'


/** 
*获取店铺信息

*/
export async function GetShopInfo() {
    return request.get("Shop/GetShopInfo");
}

/** 
*获取微信OpenId
*@param code 
*/
export async function GetWeChatOpenId(code: string) {
    return request.get("Shop/GetWeChatOpenId", {
        "code": code,
    });
}

/** 
*根据Id获取
*@param id Id
*/
export async function GetById(id: string) {
    return request.get("Shop/GetById", {
        "id": id,
    });
}


/** 
*编辑
*
*@param id Id
*@param name 店铺名称
*@param image 店铺图片
*@param doMain 域名
*@param status 
*@param weChatAppId 微信 AppId
*@param weChatSecret 微信WeChatSecret

*/
export async function Edit(params: IShopDto) {
    return request.post("Shop/Edit", params);
}


/** 
*获取列表
*
*@param pageIndex 
*@param pageSize 
*@param params 

*/
export async function GetPage(params: IBaseListInput) {
    return request.post("Shop/GetPage", params);
}

/** 
*根据Id删除 多个Id用逗号隔开
*@param id Id
*/
export async function Delete(id: string) {
    return request.get("Shop/Delete", {
        "id": id,
    });
}

/** 
*修改状态
*@param id 用户Id
*@param status 状态
*/
export async function UpdataStatus(id: string, status: number) {
    return request.get("Shop/UpdataStatus", {
        "id": id,
        "status": status,
    });
}

