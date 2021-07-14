
import request from '../utils/request'



/** 
*接收消息并处理和返回相应结果
*@param msg_signature 当加密模式时才会有该变量（消息签名）
*@param signature 签名
*@param timestamp 时间戳
*@param nonce 
*

*/
export async function Message(params:any) {
	return request.post("WeChat/Message",params);
}
        
 /** 
 *

 */
export async function AccessToken() {
	return request.get("WeChat/AccessToken");
}
        
 /** 
 *
*@param access_token 
*@param openId 
 */
export async function UserInfo(access_token:string,openId:string) {
	return request.get("WeChat/UserInfo",{
    "access_token":access_token,
    "openId":openId,
        });
}

