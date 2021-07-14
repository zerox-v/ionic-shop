
import request from '../utils/request'



/** 
*获取菜单列表
*
*@param pageIndex 
*@param pageSize 
*@param params 

*/
export async function GetList(params:IBaseListInput) {
	return request.post("Menu/GetList",params);
}
        
 /** 
 *获取菜单
*@param menuId 
 */
export async function GetById(menuId:string) {
	return request.get("Menu/GetById",{
    "menuId":menuId,
        });
}
        
 /** 
 *获取用户菜单

 */
export async function GetMenuByUserId() {
	return request.get("Menu/GetMenuByUserId");
}
        

/** 
*添加菜单
*
*@param id 
*@param title 
*@param src 
*@param parentId 
*@param openType 
*@param icon 
*@param sort 

*/
export async function EditMenu(params:IMenuDto) {
	return request.post("Menu/EditMenu",params);
}
        
 /** 
 *获取菜单树

 */
export async function GetTree() {
	return request.get("Menu/GetTree");
}
        
 /** 
 *根据父级Id获取菜单树
*@param parentId 
 */
export async function GetTreeByParentId(parentId:string) {
	return request.get("Menu/GetTreeByParentId",{
    "parentId":parentId,
        });
}
        
 /** 
 *删除菜单
*@param id 
 */
export async function Delete(id:string) {
	return request.get("Menu/Delete",{
    "id":id,
        });
}

