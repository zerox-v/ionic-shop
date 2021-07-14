
import request from '../utils/request'


 /** 
 *
*@param id 
 */
export async function GetById(id:string) {
	return request.get("PushApp/GetById",{
    "id":id,
        });
}
        

/** 
*
*
*@param id Id
*@param appId 应用Id
*@param name 应用名称
*@param secret Secret
*@param status 

*/
export async function Edit(params:IPushAppDto) {
	return request.post("PushApp/Edit",params);
}
        

/** 
*
*
*@param pageIndex 
*@param pageSize 
*@param params 

*/
export async function GetPage(params:IBaseListInput) {
	return request.post("PushApp/GetPage",params);
}
        
 /** 
 *
*@param id 
 */
export async function Delete(id:string) {
	return request.get("PushApp/Delete",{
    "id":id,
        });
}
        
 /** 
 *
*@param id 
*@param status 
 */
export async function UpdataStatus(id:string,status:number) {
	return request.get("PushApp/UpdataStatus",{
    "id":id,
    "status":status,
        });
}

