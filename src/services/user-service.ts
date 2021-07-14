
import request from '../utils/request'


 /** 
 *获取当前用户

 */
export async function CurrentUser() {
	return request.get("User/CurrentUser");
}
        

/** 
*编辑用户
*
*@param id 用户Id
*@param loginName 用户名称
*@param email 邮箱
*@param avatar 头像
*@param nickName 昵称
*@param status 状态 1正常 2冻结

*/
export async function EditUser(params:IUserDto) {
	return request.post("User/EditUser",params);
}
        
 /** 
 *获取全部用户

 */
export async function GetAll() {
	return request.get("User/GetAll");
}
        

/** 
*获取用户列表
*
*@param pageIndex 
*@param pageSize 
*@param params 

*/
export async function GetList(params:IBaseListInput) {
	return request.post("User/GetList",params);
}
        
 /** 
 *重置密码
*@param id 
 */
export async function ResetPassword(id:string) {
	return request.get("User/ResetPassword",{
    "id":id,
        });
}
        
 /** 
 *修改用户状态
*@param id 用户Id
*@param status 状态
 */
export async function UpdataStatus(id:string,status:number) {
	return request.get("User/UpdataStatus",{
    "id":id,
    "status":status,
        });
}
        
 /** 
 *批量删除用户
*@param ids 用户Id用逗号隔开
 */
export async function Delete(ids:string) {
	return request.get("User/Delete",{
    "ids":ids,
        });
}
        

/** 
*修改密码
*
*@param oldPassword 旧密码
*@param newPassword 新密码

*/
export async function ChangePassword(params:IChangePasswordDto) {
	return request.post("User/ChangePassword",params);
}

