
import request from '../utils/request'


 /** 
 *根据Id获取
*@param id Id
 */
export async function GetById(id:string) {
	return request.get("Dictionary/GetById",{
    "id":id,
        });
}
        

/** 
*编辑
*
*@param id Id
*@param title 标题
*@param code 编码
*@param value 值
*@param parentId 父级Id
*@param path 路径
*@param sort 顺序
*@param note 备注

*/
export async function Edit(params:IDictionaryDto) {
	return request.post("Dictionary/Edit",params);
}
        

/** 
*获取列表
*
*@param pageIndex 
*@param pageSize 
*@param params 

*/
export async function GetPage(params:IBaseListInput) {
	return request.post("Dictionary/GetPage",params);
}
        
 /** 
 *根据Id删除 多个Id用逗号隔开
*@param id Id
 */
export async function Delete(id:string) {
	return request.get("Dictionary/Delete",{
    "id":id,
        });
}
        
 /** 
 *获取菜单树

 */
export async function GetTree() {
	return request.get("Dictionary/GetTree");
}
        
 /** 
 *根据父级Id获取菜单树
*@param parentId 
 */
export async function GetTreeByParentId(parentId:string) {
	return request.get("Dictionary/GetTreeByParentId",{
    "parentId":parentId,
        });
}
        
 /** 
 *删除菜单
*@param id 
 */
export async function DeleteByPath(id:string) {
	return request.get("Dictionary/DeleteByPath",{
    "id":id,
        });
}
        
 /** 
 *根据code获取子集
*@param code 
 */
export async function GetChildsByCode(code:string) {
	return request.get("Dictionary/GetChildsByCode",{
    "code":code,
        });
}
        
 /** 
 *根据code获取子集
*@param code 
 */
export async function GetByCode(code:string) {
	return request.get("Dictionary/GetByCode",{
    "code":code,
        });
}

