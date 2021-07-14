
import request from '../utils/request'


 /** 
 *获取用户信息

 */
export async function GetInfo() {
	return request.get("Members/GetInfo");
}
        
 /** 
 *根据来源和OpenId查询
*@param source 
*@param openId 
 */
export async function GetBySourceAndOpenId(source:string,openId:string) {
	return request.get("Members/GetBySourceAndOpenId",{
    "source":source,
    "openId":openId,
        });
}
        

/** 
*编辑
*
*@param id Id
*@param phone 手机号
*@param email 邮箱
*@param avatar 头像
*@param nickName 昵称
*@param source 来源
*@param openId OpenId

*/
export async function Edit(params:IMembersDto) {
	return request.post("Members/Edit",params);
}
        

/** 
*获取列表
*
*@param pageIndex 
*@param pageSize 
*@param params 

*/
export async function GetPage(params:IBaseListInput) {
	return request.post("Members/GetPage",params);
}
        
 /** 
 *根据Id删除 多个Id用逗号隔开
*@param id Id
 */
export async function Delete(id:string) {
	return request.get("Members/Delete",{
    "id":id,
        });
}

