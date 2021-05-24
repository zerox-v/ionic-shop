
import request from '../utils/request'


 /** 
 *根据Id获取
*@param id Id
 */
export async function GetById(id:string) {
	return request.get("Goods/GetById",{
    "id":id,
        });
}
        

/** 
*编辑
*
*@param shopId ShopId  店铺Id
*@param id Id
*@param categoryId 分类Id
*@param categoryName 分类名称
*@param name 商品名称
*@param description 商品说明
*@param image 图片
*@param attr 商品属性
*@param status 状态
*@param code 商品编码
*@param unit 单位
*@param isMoreSpec 是否是多规格
*@param price 价格
*@param specs 
*@param products 

*/
export async function Edit(params:IGoodsEditDto) {
	return request.post("Goods/Edit",params);
}
        

/** 
*获取列表
*
*@param pageIndex 
*@param pageSize 
*@param params 

*/
export async function GetPage(params:IBaseListInput) {
	return request.post("Goods/GetPage",params);
}
        
 /** 
 *根据Id删除 多个Id用逗号隔开
*@param id Id
 */
export async function Delete(id:string) {
	return request.get("Goods/Delete",{
    "id":id,
        });
}
        
 /** 
 *修改状态
*@param id 用户Id
*@param status 状态
 */
export async function UpdataStatus(id:string,status:number) {
	return request.get("Goods/UpdataStatus",{
    "id":id,
    "status":status,
        });
}
        
 /** 
 *根据分类Id获取商品
*@param categoryId 分类Id
 */
export async function GetListByCategoryId(categoryId:string) {
	return request.get("Goods/GetListByCategoryId",{
    "categoryId":categoryId,
        });
}

