import { wxRequest } from '@/utils/wxRequest';
//服务器路径
// const Home = "http://www.xing-ya.cn/Star/"
// const Home = 'http://39.105.27.120:8080/Star/';     //正式*****
const Home = 'http://39.107.70.80:8080/Star/';   //测试测试
// const Home = 'http://192.168.1.154:8080/Star/';  //shenjm
//上传图片路径
const uploadFileUrl = 'https://star-1.oss-cn-beijing.aliyuncs.com/';
// const uploadFileUrl = 'https://star-2.oss-cn-beijing.aliyuncs.com/';
//小程序上传图片
const UploadFiles = Home + 'user/UploadFiles';
/**
 * 获取发现好商品接口
 * @param  {[type]} params [description]
 * @return {[type]}        [description]
 */
// 微信支付
const wxPay = (params) => wxRequest(params, Home + 'user/wxPay');
/*于*/
// 首页轮播图
const Home_swiper = (params) => wxRequest(params, Home + "firstPage/getAD")
// 首页活动
const Home_activity = (params) => wxRequest(params, Home + "firstPage/getFirstPageActivity")
// 首页演艺
const Home_acting = (params) => wxRequest(params, Home + "firstPage/getFirstPageEmploy")
// 首页分类
const Home_class = (params) => wxRequest(params, Home + "firstPage/getGroup")
// 广场的星秀和星职场
const square = (params) => wxRequest(params, Home + "user/getUserBlogs")
// 广场的关注
const getFocusOnBlog = (params) => wxRequest(params, Home + "square/getFocusOnBlog")
//学生动态详情
const getUserBlogDetails = (params) => wxRequest(params, Home + "user/getUserBlogDetails")
/*// 关注公司或学生(类型是我关注那个人的类型)
const addfocusOn = (params) => wxRequest(params, Home + "firstPage/addfocusOn")
// 取消关注
const delfocusOn = (params) => wxRequest(params, Home + "firstPage/delfocusOn")
// 给动态点赞
const addBlogRecommend = (params) => wxRequest(params, Home + "firstPage/addBlogRecommend")
// 公司上方用户信息
const getUserDetails = (params) => wxRequest(params, Home + "firstPage/getStudentDetail")*/
// 公司的公告
const getCompanyBlogByStudent = (params) => wxRequest(params, Home + "user/getCompanyBlogByStudent")
// 公司的星招聘
const getEmployByStudent = (params) => wxRequest(params, Home + "user/getEmployByStudent")

//获取星秀
const guessLike = (params) => wxRequest(params, Home + "firstPage/getFirstPageSelectStudent")
// 获取活动
const SelectActivity = (params) => wxRequest(params, Home + "firstPage/getFirstPageSelectActivity")
// 星职场
const SelectEmploy = (params) => wxRequest(params, Home + "firstPage/getFirstPageSelectEmploy")
// 关注学生
const focusOn = (params) => wxRequest(params, Home + "firstPage/addfocusOn")

// 学生的头部信息
const getStudentDetail = (params) => wxRequest(params, Home + "firstPage/getStudentDetail")
// 学生动态
const getStudentBlog = (params) => wxRequest(params, Home + "user/getStudentBlog")
// 学生作品集
const getStudentCollection = (params) => wxRequest(params, Home + "user/getStudentCollection")
/*// 学生星活动
const getActivityByuserCode = (params) => wxRequest(params, Home + "user/getActivityByuserCode")
// 作品集点赞
const addCollectionRecommend = (params) => wxRequest(params, Home + "firstPage/addCollectionRecommend")*/
// 给学生点赞
const addStudentRecommendFree = (params) => wxRequest(params, Home + "firstPage/addStudentRecommendFree")
// 分类的搜索
const getGroupListSelect = (params) => wxRequest(params, Home + "firstPage/getGroupListSelect")
// 招聘
const getEmployDetail = (params) => wxRequest(params, Home + "firstPage/getEmployDetail")
const addUserEmploy = (params) => wxRequest(params, Home + "user/addUserEmploy")
/*于*/


//wrr段落1start
//小程序登录
const xcxLogin = (params) => wxRequest(params, Home + 'user/xcxLogin');
//绑定三方账号
const updateCode = (params) => wxRequest(params, Home + 'user/updateCode');
//三方登录
const wxlogen = (params) => wxRequest(params, Home + 'user/wxlogen');
//查询消息列表
const getUserSystemInfo = (params) => wxRequest(params, Home + 'user/getUserSystemInfo');
//查询消息详情
const getUserSystemInfoDetails = (params) => wxRequest(params, Home + 'user/getUserSystemInfoDetails');
// 删除用户消息
const deleteSystemINFO = (params) => wxRequest(params, Home + 'user/deleteSystemINFO');
//查询客服电话
const getCustomTel = (params) => wxRequest(params, Home + 'user/getCustomTel');
//我的动态列表
const getUserBlog = (params) => wxRequest(params, Home + 'user/getUserBlog');
//我的作品集列表
const getUserCollection = (params) => wxRequest(params, Home + 'user/getUserCollection');
//我的个人页信息
const getUserByCode = (params) => wxRequest(params, Home + 'user/getUserByCode');
//关注公司或学生
const addfocusOn = (params) => wxRequest(params, Home + 'firstPage/addfocusOn');
//取消关注
const delfocusOn = (params) => wxRequest(params, Home + 'firstPage/delfocusOn');
// 我关注的学生
const getUserConcernStudent = (params) => wxRequest(params, Home + 'user/getUserConcernStudent');
// 学生关注的公司
const getUserConcernCompany = (params) => wxRequest(params, Home + 'user/getUserConcernCompany');
//查看学生参加的活动
const getActivityByuserCode = (params) => wxRequest(params, Home + 'user/getActivityByuserCode');
//(首页)活动详情
const getActivityDetail = (params) => wxRequest(params, Home + 'firstPage/getActivityDetail');
// 参加活动的人的列表
const getActivityUser = (params) => wxRequest(params, Home + 'firstPage/getActivityUser');
//作品集详情
const getUserCollectionDetails = (params) => wxRequest(params, Home + 'user/getUserCollectionDetails');
//修改作品集
const updateUserCollection = (params) => wxRequest(params, Home + 'user/updateUserCollection');
//给作品集点赞
const addCollectionRecommend = (params) => wxRequest(params, Home + 'firstPage/addCollectionRecommend');
//删除作品集
const deleteCollection = (params) => wxRequest(params, Home + 'user/deleteCollection');
//删除动态
const deleteUserBlog = (params) => wxRequest(params, Home + 'user/deleteUserBlog');
//给动态点赞
const addBlogRecommend = (params) => wxRequest(params, Home + 'firstPage/addBlogRecommend');
//发布动态
const addUserBlog = (params) => wxRequest(params, Home + 'user/addUserBlog');
//删除作品集多媒体
const deleteUserMedia = (params) => wxRequest(params, Home + 'user/deleteUserMedia');
// 添加多媒体资料
const addUserMedia = (params) => wxRequest(params, Home + 'user/addUserMedia');
// 给活动作品集点赞
const addActivityCollectionRecommend = (params) => wxRequest(params, Home + 'firstPage/addActivityCollectionRecommend');
//发布作品集
const addUserCollection = (params) => wxRequest(params, Home + 'user/addUserCollection');


//我的钱包信息
const getUserWallet = (params) => wxRequest(params, Home + 'user/getUserWallet');
//星芽币兑换星币芽币
const conversionCoin = (params) => wxRequest(params, Home + 'user/conversionCoin');
//用户信息详情
const getUserDetails = (params) => wxRequest(params, Home + 'user/getUserDetails');
//查询是否绑定三方登录
const checkLogin = (params) => wxRequest(params, Home + 'User/checkLogin');
//添加意见反馈
const addFeedback = (params) => wxRequest(params, Home + 'user/addFeedback');
//用户修改头像
const updateUserImg = (params) => wxRequest(params, Home + 'user/updateUserImg');
//查询身份标签
const getLabel = (params) => wxRequest(params, Home + 'user/getLabel');
//获取验证码
const getSms = (params) => wxRequest(params, Home + 'user/getSms');
//验证验证码
const checkSms = (params) => wxRequest(params, Home + 'user/checkSms');
//修改用户登录手机号
const updateUserMobile = (params) => wxRequest(params, Home + 'user/updateUserMobile');
//用户修改密码
const updateUserPassword = (params) => wxRequest(params, Home + 'user/updateUserPassword');
//查询用户认证信息
const getUserINFo = (params) => wxRequest(params, Home + 'user/getUserINFo');
//查询用户认证信息
const updateStudentINFO = (params) => wxRequest(params, Home + 'user/updateStudentINFO');
// 查询用户身份状态
const getUserType = (params) => wxRequest(params, Home + 'user/getUserType');
//选择学生身份
const addStudent = (params) => wxRequest(params, Home + 'user/addStudent');
//更换参赛作品集
const updateActivityCollection = (params) => wxRequest(params, Home + 'firstPage/updateActivityCollection');

//wrr段落1end

//星活动start
// 星活动列表
const requireArena = (params) => wxRequest(params, Home + 'square/getBattleActivity');
// 风云人物 /Star/square/getBattleActivityOver
const getBattleActivityOver = (params) => wxRequest(params, Home + 'square/getBattleActivityOver');
// 学生看公司招聘
const getBattleEmploy = (params) => wxRequest(params, Home + 'square/getBattleEmploy');
// 风云榜-风云人物详情
const getOverActivityDetail = (params) => wxRequest(params, Home + 'square/getOverActivityDetail');
// 学生报名活动  user/addUserActivity
const addUserActivity = (params) => wxRequest(params, Home + 'user/addUserActivity');
//星活动end
//修改邮箱
const updateMail = (params) => wxRequest(params, Home + 'user/updateMail');

export default {
    uploadFileUrl,
    UploadFiles,
    wxPay,
    /*于*/
    Home_swiper,
    Home_activity,
    Home_acting,
    Home_class,
    square,
    getFocusOnBlog,
    getUserBlogDetails,
    /*addfocusOn,
    delfocusOn,
    addBlogRecommend,
    getUserDetails,*/
    getCompanyBlogByStudent,
    getEmployByStudent,

    guessLike,
    SelectActivity,
    SelectEmploy,
    focusOn,

    getStudentDetail,
    getStudentBlog,
    getStudentCollection,
 /*   getActivityByuserCode,
    addCollectionRecommend,*/
    addStudentRecommendFree,
    getGroupListSelect,
    getEmployDetail,
    addUserEmploy,
    /*于*/


    /*wrr段落1start*/
    xcxLogin,
    updateCode,
    wxlogen,
    getUserSystemInfo,
    getUserSystemInfoDetails,
    deleteSystemINFO,
    getCustomTel,
    getUserBlog,
    getUserCollection,
    getUserByCode,
    addfocusOn,
    delfocusOn,
    getUserConcernStudent,
    getUserConcernCompany,
    getActivityByuserCode,
    getActivityDetail,
    getActivityUser,
    getUserCollectionDetails,
    updateUserCollection,
    addCollectionRecommend,
    deleteCollection,
    deleteUserBlog,
    addBlogRecommend,
    addUserBlog,
    deleteUserMedia,
    addUserMedia,
    addActivityCollectionRecommend,
    addUserCollection,

    getUserWallet,
    conversionCoin,
    getUserDetails,
    checkLogin,
    addFeedback,
    updateUserImg,
    getLabel,
    getSms,
    checkSms,
    updateUserMobile,
    updateUserPassword,
    getUserINFo,
    updateStudentINFO,
    getUserType,
    addStudent,
  updateActivityCollection,

    /*wrr段落1end*/
    /*xingStart*/
    requireArena,
    getBattleActivityOver,
    getBattleEmploy,
    getOverActivityDetail,
    addUserActivity,
    updateMail,
    /*xingEnd*/

};
