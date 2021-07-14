
import request from '../utils/request'


 /** 
 *根据物料Id获取商品
*@param materialId 物料Id
*@param pageIndex 页码
*@param pageSize 每页显示条数
 */
export async function GetMaterialById(materialId:number,pageIndex:number,pageSize:number) {
	return request.get("AliMom/GetMaterialById",{
    "materialId":materialId,
    "pageIndex":pageIndex,
    "pageSize":pageSize,
        });
}
        
 /** 
 *查询物料
*@param keyword 
*@param pageIndex 
*@param pageSize 
 */
export async function SearchMaterial(keyword:string,pageIndex:number,pageSize:number) {
	return request.get("AliMom/SearchMaterial",{
    "keyword":keyword,
    "pageIndex":pageIndex,
    "pageSize":pageSize,
        });
}
        
 /** 
 *查询推荐商品
*@param itemId 商品Id
 */
export async function GetRecommend(itemId:number) {
	return request.get("AliMom/GetRecommend",{
    "itemId":itemId,
        });
}
        
 /** 
 *生成淘口令
*@param text 
*@param url 
*@param logo 
 */
export async function CreateTPwd(text:string,url:string,logo:string) {
	return request.get("AliMom/CreateTPwd",{
    "text":text,
    "url":url,
    "logo":logo,
        });
}
        
 /** 
 *
*@param itemId 
 */
export async function GetDetail(itemId:string) {
	return request.get("AliMom/GetDetail",{
    "itemId":itemId,
        });
}
        
 /** 
 *
*@param Status 
*@param PageIndex 
*@param PageSize 
*@param Params.Field 
*@param Params.Operator 
*@param Params.Value 
*@param Params.Logic 
*@param Params.Filters 
 */
export async function GetOrder(Status:number,PageIndex:number,PageSize:number,Params.Field:string,Params.Operator:any,Params.Value:any,Params.Logic:any,Params.Filters:any) {
	return request.get("AliMom/GetOrder",{
    "Status":Status,
    "PageIndex":PageIndex,
    "PageSize":PageSize,
    "Params.Field":Params.Field,
    "Params.Operator":Params.Operator,
    "Params.Value":Params.Value,
    "Params.Logic":Params.Logic,
    "Params.Filters":Params.Filters,
        });
}
        
 /** 
 *
*@param endTime 
 */
export async function AsyncOrder(endTime:string) {
	return request.get("AliMom/AsyncOrder",{
    "endTime":endTime,
        });
}

