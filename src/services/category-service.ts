
import request from '../utils/request'


 /** 
 *根据Id获取
*@param id Id
 */
export async function GetById(id:string) {
	return request.get("Category/GetById",{
    "id":id,
        });
}
        

/** 
*编辑
*
*@param id Id
*@param shopId ShopId
*@param name 分类名称
*@param image 分类图片
*@param description 说明
*@param status 
*@param parentId 父级Id
*@param goods 

*/
export async function Edit(params:ICategoryDto) {
	return request.post("Category/Edit",params);
}
        

/** 
*获取列表
*
*@param pageIndex 
*@param pageSize 
*@param params 

*/
export async function GetPage(params:IBaseListInput) {
	return request.post("Category/GetPage",params);
}
        
 /** 
 *根据Id删除 多个Id用逗号隔开
*@param id Id
 */
export async function Delete(id:string) {
	return request.get("Category/Delete",{
    "id":id,
        });
}
        
 /** 
 *修改状态
*@param id 用户Id
*@param status 状态
 */
export async function UpdataStatus(id:string,status:number) {
	return request.get("Category/UpdataStatus",{
    "id":id,
    "status":status,
        });
}
        
 /** 
 *获取全部分类

 */
export async function GetAll() {
	return request.get("Category/GetAll");
}
        
 /** 
 *获取全部分类和商品

 */
export async function GetAllAndGoods() {
	return request.get("Category/GetAllAndGoods");
}

