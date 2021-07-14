
import request from '../utils/request'


 /** 
 *获取上传凭证

 */
export async function GetUploadToken() {
	return request.get("FileUplaod/GetUploadToken");
}
        
 /** 
 *获取文件列表
*@param mark 
 */
export async function GetFileList(mark:string) {
	return request.get("FileUplaod/GetFileList",{
    "mark":mark,
        });
}
        
 /** 
 *批量删除
*@param keys 
 */
export async function BatchDelete(keys:string) {
	return request.get("FileUplaod/BatchDelete",{
    "keys":keys,
        });
}

