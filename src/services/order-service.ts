
import request from '../utils/request'


/** 
*根据Id获取
*@param id Id
*/
export async function GetById(id: string) {
    return request.get("Order/GetById", {
        "id": id,
    });
}

/** 
*创建订单

*/
export async function CreateOrder() {
    return request.get("Order/CreateOrder");
}

/** 
*获取订单列表

*/
export async function GetOrderList() {
    return request.get("Order/GetOrderList");
}


/** 
*编辑
*
*@param id Id
*@param orderNumber 订单编号
*@param money 订单金额

*/
export async function Edit(params: IOrderDto) {
    return request.post("Order/Edit", params);
}


/** 
*获取列表
*
*@param pageIndex 
*@param pageSize 
*@param params 

*/
export async function GetPage(params: IBaseListInput) {
    return request.post("Order/GetPage", params);
}

/** 
*根据Id删除 多个Id用逗号隔开
*@param id Id
*/
export async function Delete(id: string) {
    return request.get("Order/Delete", {
        "id": id,
    });
}

/** 
*修改状态
*@param id 用户Id
*@param status 状态
*/
export async function UpdataStatus(id: string, status: number) {
    return request.get("Order/UpdataStatus", {
        "id": id,
        "status": status,
    });
}

