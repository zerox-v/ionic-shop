
import request from '../utils/request'


 /** 
 *获取文件目录
*@param path 
 */
export async function GetFileList(path:string) {
	return request.get("File/GetFileList",{
    "path":path,
        });
}
        
 /** 
 *获取文件
*@param path 
 */
export async function GetFile(path:string) {
	return request.get("File/GetFile",{
    "path":path,
        });
}

