
import request from '../utils/request'



/** 
*登录
*登录相关参数
*@param account 账号
*@param password 密码
*@param vCode 验证码

*/
export async function Login(params:ILoginInput) {
	return request.post("Auth/Login",params);
}
        
 /** 
 *获取验证码

 */
export async function VCode() {
	return request.get("Auth/VCode");
}
        
 /** 
 *初始化session

 */
export async function InitSession() {
	return request.get("Auth/InitSession");
}
        
 /** 
 *刷新Token
*@param refreshToken 
 */
export async function RefreshToken(refreshToken:string) {
	return request.get("Auth/RefreshToken",{
    "refreshToken":refreshToken,
        });
}

