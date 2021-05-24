
import request from '../utils/request'


/** 
*根据Id获取
*@param id Id
*/
export async function GetById(id: string) {
    return request.get("Specs/GetById", {
        "id": id,
    });
}


/** 
*编辑
*
*@param id Id
*@param goodsId 
*@param name 规格名称
*@param values 规格值

*/
export async function Edit(params: ISpecsDto) {
    return request.post("Specs/Edit", params);
}


/** 
*获取列表
*
*@param pageIndex 
*@param pageSize 
*@param params 

*/
export async function GetPage(params: IBaseListInput) {
    return request.post("Specs/GetPage", params);
}

/** 
*根据Id删除 多个Id用逗号隔开
*@param id Id
*/
export async function Delete(id: string) {
    return request.get("Specs/Delete", {
        "id": id,
    });
}

/** 
*修改状态
*@param id 用户Id
*@param status 状态
*/
export async function UpdataStatus(id: string, status: number) {
    return request.get("Specs/UpdataStatus", {
        "id": id,
        "status": status,
    });
}

/** 
*根据商品Id 获取
*@param goodsId 
*/
export async function GetByGoodsId(goodsId: string) {
    return request.get("Specs/GetByGoodsId", {
        "goodsId": goodsId,
    });
}

