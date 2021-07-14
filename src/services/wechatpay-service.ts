
import request from '../utils/request'


 /** 
 *支付
*@param orderId 
 */
export async function Pay(orderId:string) {
	return request.get("WeChatPay/Pay",{
    "orderId":orderId,
        });
}
        

/** 
*通知
*
*@param id 
*@param create_time 
*@param event_type 
*@param resource_type 
*@param resource 
*@param summary 

*/
export async function Notify(params:INotifyInput) {
	return request.post("WeChatPay/Notify",params);
}

