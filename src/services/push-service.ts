
import request from '../utils/request'


 /** 
 *
*@param appId 
*@param cid 
 */
export async function Auth(appId:string,cid:string) {
	return request.get("Push/Auth",{
    "appId":appId,
    "cid":cid,
        });
}
        

/** 
*
*
*@param to 
*@param message 

*/
export async function SendMessage(params:IMessageDto) {
	return request.post("Push/SendMessage",params);
}
        
 /** 
 *

 */
export async function GetOnlineUser() {
	return request.get("Push/GetOnlineUser");
}

