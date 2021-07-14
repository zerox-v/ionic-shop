

interface DynamicFilterInfo {

    /**@name field 字段名称*/
    field?: string

    /**
     *operator 操作
     *备选值：
     *@name 0 like
     *@name 1 StartsWith
     *@name 2 EndsWith
     *@name 3 NotContains
     *@name 4 NotStartsWith
     *@name 5 NotEndsWith
     *@name 6 Equal  =  Equal/Equals/Eq 效果相同
     *@name 7 Equals = Equal/Equals/Eq 效果相同
     *@name 8 Eq = Equal/Equals/Eq 效果相同
     *@name 9 NotEqual  <>
     *@name 10 GreaterThan > 
     *@name 11 GreaterThanOrEqual >=
     *@name 12 LessThan <
     *@name 13 LessThanOrEqual <=
     *@name 14 Range  >= and <    此时 Value 的值格式为逗号分割：value1,value2 或者数组
     *@name 15 DateRange  >= and <   此时 Value 的值格式为逗号分割：date1,date2 或者数组
     *@name 16 Any  in (1,2,3)  此时 Value 的值格式为逗号分割：value1,value2,value3... 或者数组
     *@name 17 NotAny  not in (1,2,3) 此时 Value 的值格式为逗号分割：value1,value2,value3... 或者数组
     */
    operator?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17

    /**@name value 值*/
    value?: string

    /** 逻辑
     *@name 0 And 
     *@name 1 Or
     */
    logic?: 0 | 1

    /**
     *@name filters 过滤条件
     */
    filters?: DynamicFilterInfo[]
}


interface ILoginInput {

    /**账号*/
    account:string

    /**密码*/
    password:string

    /**验证码*/
    vCode:string
}


interface ICategoryDto {

    /**Id*/
    id?:string

    /**ShopId*/
    shopId?:string

    /**分类名称*/
    name:string

    /**分类图片*/
    image?:string

    /**说明*/
    description?:string

    
    status:number

    /**父级Id*/
    parentId:string

    
    goods?:any
}


interface IBaseListInput {

    
    pageIndex?:number

    
    pageSize?:number

    /**查询参数*/
    params?:DynamicFilterInfo
}


interface IClassInfo {

    
    nameSpace?:string

    
    className?:string

    
    fieldsList?:any

    
    createType?:string
}


interface IDictionaryDto {

    /**Id*/
    id?:string

    /**标题*/
    title:string

    /**编码*/
    code?:string

    /**值*/
    value?:string

    /**父级Id*/
    parentId?:string

    /**路径*/
    path?:string

    /**顺序*/
    sort?:number

    /**备注*/
    note?:string
}


interface IGoodsEditDto {

    /**ShopId  店铺Id*/
    shopId?:string

    /**Id*/
    id?:string

    /**分类Id*/
    categoryId:string

    /**分类名称*/
    categoryName?:string

    /**商品名称*/
    name:string

    /**商品说明*/
    description?:string

    /**图片*/
    image?:string

    /**商品属性*/
    attr?:string

    /**状态*/
    status:number

    /**商品编码*/
    code?:string

    /**单位*/
    unit?:string

    /**是否是多规格*/
    isMoreSpec:any

    /**价格*/
    price:any

    
    specs?:any

    
    products?:any
}


interface IScheduleEntity {

    /**任务名称*/
    jobName?:string

    /**任务分组*/
    jobGroup?:string

    
    jobType:any

    /**开始时间*/
    beginTime:string

    /**结束时间*/
    endTime?:string

    /**Cron表达式*/
    cron?:string

    /**执行次数（默认无限循环）*/
    runTimes?:number

    /**执行间隔时间，单位秒（如果有Cron，则IntervalSecond失效）*/
    intervalSecond?:number

    
    triggerType:any

    /**描述*/
    description?:string

    
    mailMessage:any

    /**请求url*/
    requestUrl?:string

    /**请求参数（Post，Put请求用）*/
    requestParameters?:string

    /**Headers(可以包含如：Authorization授权认证)
格式：{"Authorization":"userpassword.."}*/
    headers?:string

    
    requestType:any
}


interface IJobKey {

    
    name?:string

    
    group?:string
}


interface IModifyJobInput {

    
    newScheduleEntity:any

    
    oldScheduleEntity:any
}


interface IMembersDto {

    /**Id*/
    id?:string

    /**手机号*/
    phone?:string

    /**邮箱*/
    email?:string

    /**头像*/
    avatar?:string

    /**昵称*/
    nickName?:string

    /**来源*/
    source?:string

    /**OpenId*/
    openId?:string
}


interface IMenuDto {

    
    id?:string

    
    title:string

    
    src?:string

    
    parentId:string

    
    openType:number

    
    icon?:string

    
    sort:number
}


interface IOrderDto {

    /**Id*/
    id?:string

    /**订单编号*/
    orderNumber?:string

    /**取货码*/
    code?:string

    /**订单金额*/
    totalMoney:any

    /**支付金额*/
    payMoney:any

    /**货地址Id*/
    addressId?:string

    /**收货地址*/
    address?:string

    
    useType:number

    /**订单状态 1待支付 2已支付*/
    status:number

    /**商品详细*/
    goods?:any
}


interface IProductDto {

    /**Id*/
    id?:string

    /**商品Id*/
    goodsId?:string

    /**图片*/
    image?:string

    /**库存*/
    stock:number

    /**价格*/
    price:any

    /**规格名称*/
    specsName?:string
}


interface IMessageDto {

    
    to?:string

    
    message?:string
}


interface IPushAppDto {

    /**Id*/
    id?:string

    /**应用Id*/
    appId:string

    /**应用名称*/
    name:string

    /**Secret*/
    secret:string

    
    status:number
}


interface IRoleDto {

    
    id?:string

    
    name:string

    /**模块值*/
    key:string

    /**模块名称*/
    moduleNames?:string
}


interface IUserRoleDto {

    /**角色Id*/
    roleId:string

    /**用户Id 或者 菜单Id 用逗号隔开*/
    valueIds?:string
}


interface IShopDto {

    /**Id*/
    id?:string

    /**店铺名称*/
    name:string

    /**店铺图片*/
    image?:string

    /**域名*/
    doMain:string

    
    status:number

    /**微信 AppId*/
    weChatAppId?:string

    /**微信WeChatSecret*/
    weChatSecret?:string
}


interface IShoppingCartDto {

    /**购物车Id*/
    id?:string

    /**店铺Id*/
    shopId?:string

    /**商品Id*/
    goodsId?:string

    /**商品Id*/
    productId:string

    /**商品名称*/
    productName?:string

    /**商品图片*/
    productImage?:string

    
    productSpecs?:string

    
    price?:any

    /**商品数量*/
    number:number

    /**订单Id*/
    orderId?:string
}


interface ISpecsDto {

    /**Id*/
    id?:string

    
    goodsId?:string

    /**规格名称*/
    name:string

    /**规格值*/
    values:string
}


/**
*用户传输对象
**/
interface IUserDto {

    /**用户Id*/
    id?:string

    /**用户名称*/
    loginName:string

    /**邮箱*/
    email?:string

    /**头像*/
    avatar?:string

    /**昵称*/
    nickName?:string

    /**状态 1正常 2冻结*/
    status:number
}


interface IChangePasswordDto {

    /**旧密码*/
    oldPassword:string

    /**新密码*/
    newPassword:string
}


interface INotifyInput {

    
    id?:string

    
    create_time?:string

    
    event_type?:string

    
    resource_type?:string

    
    resource:any

    
    summary?:string
}


