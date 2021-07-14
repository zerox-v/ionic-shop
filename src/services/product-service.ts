
import request from '../utils/request'


 /** 
 *根据Id获取
*@param id Id
 */
export async function GetById(id:string) {
	return request.get("Product/GetById",{
    "id":id,
        });
}
        

/** 
*编辑
*
*@param id Id
*@param goodsId 商品Id
*@param image 图片
*@param stock 库存
*@param price 价格
*@param specsName 规格名称

*/
export async function Edit(params:IProductDto) {
	return request.post("Product/Edit",params);
}
        

/** 
*获取列表
*
*@param pageIndex 
*@param pageSize 
*@param params 

*/
export async function GetPage(params:IBaseListInput) {
	return request.post("Product/GetPage",params);
}
        
 /** 
 *根据Id删除 多个Id用逗号隔开
*@param id Id
 */
export async function Delete(id:string) {
	return request.get("Product/Delete",{
    "id":id,
        });
}
        
 /** 
 *修改状态
*@param id 用户Id
*@param status 状态
 */
export async function UpdataStatus(id:string,status:number) {
	return request.get("Product/UpdataStatus",{
    "id":id,
    "status":status,
        });
}
        
 /** 
 *根据商品Id 获取
*@param goodsId 
 */
export async function GetByGoodsId(goodsId:string) {
	return request.get("Product/GetByGoodsId",{
    "goodsId":goodsId,
        });
}

