
import request from '../utils/request'



/** 
*添加任务
*
*@param jobName 任务名称
*@param jobGroup 任务分组
*@param jobType 
*@param beginTime 开始时间
*@param endTime 结束时间
*@param cron Cron表达式
*@param runTimes 执行次数（默认无限循环）
*@param intervalSecond 执行间隔时间，单位秒（如果有Cron，则IntervalSecond失效）
*@param triggerType 
*@param description 描述
*@param mailMessage 
*@param requestUrl 请求url
*@param requestParameters 请求参数（Post，Put请求用）
*@param headers Headers(可以包含如：Authorization授权认证)
格式：{"Authorization":"userpassword.."}
*@param requestType 

*/
export async function AddJob(params:IScheduleEntity) {
	return request.post("Job/AddJob",params);
}
        

/** 
*暂停任务
*
*@param name 
*@param group 

*/
export async function StopJob(params:IJobKey) {
	return request.post("Job/StopJob",params);
}
        

/** 
*删除任务
*
*@param name 
*@param group 

*/
export async function RemoveJob(params:IJobKey) {
	return request.post("Job/RemoveJob",params);
}
        

/** 
*恢复运行暂停的任务
*
*@param name 
*@param group 

*/
export async function ResumeJob(params:IJobKey) {
	return request.post("Job/ResumeJob",params);
}
        

/** 
*查询任务
*
*@param name 
*@param group 

*/
export async function QueryJob(params:IJobKey) {
	return request.post("Job/QueryJob",params);
}
        

/** 
*修改
*
*@param newScheduleEntity 
*@param oldScheduleEntity 

*/
export async function ModifyJob(params:IModifyJobInput) {
	return request.post("Job/ModifyJob",params);
}
        

/** 
*立即执行
*
*@param name 
*@param group 

*/
export async function TriggerJob(params:IJobKey) {
	return request.post("Job/TriggerJob",params);
}
        

/** 
*获取job日志
*
*@param name 
*@param group 

*/
export async function GetJobLogs(params:IJobKey) {
	return request.post("Job/GetJobLogs",params);
}
        
 /** 
 *启动调度

 */
export async function StartSchedule() {
	return request.get("Job/StartSchedule");
}
        
 /** 
 *停止调度

 */
export async function StopSchedule() {
	return request.get("Job/StopSchedule");
}
        
 /** 
 *获取所有任务

 */
export async function GetAllJob() {
	return request.get("Job/GetAllJob");
}
        
 /** 
 *获取所有Job信息（简要信息 - 刷新数据的时候使用）

 */
export async function GetAllJobBriefInfo() {
	return request.get("Job/GetAllJobBriefInfo");
}

