
import request from '../utils/request'


 /** 
 *获取实体dll

 */
export async function GetEntitys() {
	return request.get("Code/GetEntitys");
}
        
 /** 
 *获取类型
*@param dellName 
 */
export async function GetExportedTypes(dellName:string) {
	return request.get("Code/GetExportedTypes",{
    "dellName":dellName,
        });
}
        

/** 
*创建代码
*
*@param nameSpace 
*@param className 
*@param fieldsList 
*@param createType 

*/
export async function Create(params:IClassInfo) {
	return request.post("Code/Create",params);
}

