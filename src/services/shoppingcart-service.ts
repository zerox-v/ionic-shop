
import request from '../utils/request'



/** 
*添加到购物车
*
*@param id 购物车Id
*@param shopId 店铺Id
*@param goodsId 商品Id
*@param productId 商品Id
*@param productName 商品名称
*@param productImage 商品图片
*@param productSpecs 
*@param price 
*@param number 商品数量
*@param orderId 订单Id

*/
export async function AddShoppingCart(params: IShoppingCartDto) {
	return request.post("ShoppingCart/AddShoppingCart", params);
}

/** 
*修改数量
*@param id 购物车Id
*@param number 商品数量
*/
export async function ChangeNumnber(id: string, number: number) {
	return request.get("ShoppingCart/ChangeNumnber", {
		"id": id,
		"number": number,
	});
}

/** 
*清空购物车

*/
export async function ClecrCart() {
	return request.get("ShoppingCart/ClecrCart");
}

/** 
*获取购物车

*/
export async function GetCart() {
	return request.get("ShoppingCart/GetCart");
}


/** 
*获取列表
*
*@param pageIndex 
*@param pageSize 
*@param params 

*/
export async function GetPage(params: IBaseListInput) {
	return request.post("ShoppingCart/GetPage", params);
}

/** 
*根据Id删除 多个Id用逗号隔开
*@param id Id
*/
export async function Delete(id: string) {
	return request.get("ShoppingCart/Delete", {
		"id": id,
	});
}

