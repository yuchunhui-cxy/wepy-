/**
 * 提示与加载工具类
 */
export default class Tips {
    constructor() {
        this.isLoading = false;
    }
    /**
     * 长语句提示框
     */
    static longtoast(content){
        if(content=='星币不足，请充值'){
            return wx.showModal({
                title: '温馨提示',
                content: content,
                showCancel:true,
                success(res){
                    if (res.confirm) {
                        wx.navigateTo({
                            url: '/pages/user/purseCenter'
                        });
                    } else if (res.cancel) {
                    }
                }
            });
        }else{
            return wx.showModal({
                title: '温馨提示',
                content: content,
                showCancel:false,
            });
        }

    }

    /**
     * 弹出加载提示
     */
    static loading(title = '加载中') {
        if (Tips.isLoading) {
            return;
        }
        Tips.isLoading = true;
        wx.showLoading({
            title: title,
            mask: true
        });
    }

    /**
     * 加载完毕
     */
    static loaded() {
        if (Tips.isLoading) {
            Tips.isLoading = false;
            wx.hideLoading();
        }
    }
    /**
     * 加载完毕
     */
    static error(content) {
        wx.showToast({
            title: content,
            icon: 'none',
            duration: 2000
        })
    }

}

/**
 * 静态变量，是否加载中
 */
Tips.isLoading = false;
