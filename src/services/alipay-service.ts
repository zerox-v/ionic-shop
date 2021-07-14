
import request from '../utils/request'


 /** 
 *支付
*@param orderId 
 */
export async function Pay(orderId:string) {
	return request.get("AliPay/Pay",{
    "orderId":orderId,
        });
}
        
 /** 
 *通知
*@param notify_time 
*@param notify_type 
*@param notify_id 
*@param sign_type 
*@param sign 
*@param trade_no 
*@param app_id 
*@param out_trade_no 
*@param trade_status 
*@param total_amount 
*@param receipt_amount 
 */
export async function Notify(notify_time:string,notify_type:string,notify_id:string,sign_type:string,sign:string,trade_no:string,app_id:string,out_trade_no:string,trade_status:string,total_amount:any,receipt_amount:any) {
	return request.get("AliPay/Notify",{
    "notify_time":notify_time,
    "notify_type":notify_type,
    "notify_id":notify_id,
    "sign_type":sign_type,
    "sign":sign,
    "trade_no":trade_no,
    "app_id":app_id,
    "out_trade_no":out_trade_no,
    "trade_status":trade_status,
    "total_amount":total_amount,
    "receipt_amount":receipt_amount,
        });
}

