
import request from '../utils/request'


 /** 
 *获取全部角色
*@param key 关键字
 */
export async function GetAllRole(key:string) {
	return request.get("Role/GetAllRole",{
    "key":key,
        });
}
        

/** 
*添加角色
*
*@param id 
*@param name 
*@param key 模块值
*@param moduleNames 模块名称

*/
export async function EditRole(params:IRoleDto) {
	return request.post("Role/EditRole",params);
}
        

/** 
*设置角色菜单
*
*@param roleId 角色Id
*@param valueIds 用户Id 或者 菜单Id 用逗号隔开

*/
export async function SetRoleMenu(params:IUserRoleDto) {
	return request.post("Role/SetRoleMenu",params);
}
        

/** 
*设置角色用户
*
*@param roleId 角色Id
*@param valueIds 用户Id 或者 菜单Id 用逗号隔开

*/
export async function SetRoleUser(params:IUserRoleDto) {
	return request.post("Role/SetRoleUser",params);
}
        
 /** 
 *获取角色菜单
*@param roleId 
 */
export async function GetRoleMenu(roleId:string) {
	return request.get("Role/GetRoleMenu",{
    "roleId":roleId,
        });
}
        
 /** 
 *获取角色用户
*@param roleId 
 */
export async function GetRoleUser(roleId:string) {
	return request.get("Role/GetRoleUser",{
    "roleId":roleId,
        });
}
        
 /** 
 *删除角色
*@param id 
 */
export async function Delete(id:string) {
	return request.get("Role/Delete",{
    "id":id,
        });
}
        
 /** 
 *获取全部模块

 */
export async function GetAllModule() {
	return request.get("Role/GetAllModule");
}

