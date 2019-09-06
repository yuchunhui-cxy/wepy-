import wepy from 'wepy';

const util = require('@/utils/util.js');
import api from '@/utils/api';
import tip from '@/utils/tip';
import { USER_INFO } from '@/utils/constant';

let userInfo = wepy.getStorageSync(USER_INFO);
//音频
// const innerAudioContext = wx.createInnerAudioContext();
module.exports = {
    /**
     * 选择一张图片进行切图
     */
    chooseImg(suFun) {
        wx.chooseImage({
            count: 1,
            sizeType: ['original', 'compressed'],
            sourceType: ['camera', 'album'],
            success(res) {
                const filePaths = res.tempFilePaths[0];
                suFun(filePaths);
            }
        });
    },
    /**
     * 上传图片到服务器
     * @param successFun
     */
    /* 最多九张图片*/
    uploadFileToHostC(num,suFun) {
        let userInfo = wepy.getStorageSync(USER_INFO);
        wx.chooseImage({
            count: num,
            sizeType: ['original', 'compressed'],
            sourceType: ['album', 'camera'],
            success(res) {
                let filePaths = '';
                let i = 1;
                let len = res.tempFilePaths.length;
                tip.loading();
                res.tempFilePaths.forEach((items, indexs) => {
                    console.log(items);
                    // 上传文件
                    wx.uploadFile({
                        url: api.UploadFiles,
                        filePath: items,
                        method: 'POST',
                        header: {
                            'Content-Type': 'multipart/form-data'
                        },
                        name: 'file',
                        formData: {
                            'user': 'test',
                            'userCode': userInfo.user_code
                        },
                        success(res) {
                            let asd = JSON.parse(res.data);
                            let imgurl = asd.data.img;
                            filePaths += imgurl + ',';
                            if (i == len) {
                                filePaths = filePaths.slice(0, filePaths.length - 1);
                                console.log(filePaths);
                                suFun(filePaths);
                            }
                            i++;
                        },
                        fail(res) {
                            len--;
                        }
                    });
                });
                tip.loaded();
            }
        });
    },
    /* 视频的选择*/
    uploadVideo(suFun) {
        let userInfo = wepy.getStorageSync(USER_INFO);
        wx.chooseVideo({
            sourceType: ['album', 'camera'],
            // maxDuration: 60,
            camera: 'back',
            success(res) {
                const filePaths = res.tempFilePath;
                tip.loading();
                // 上传文件
                wx.uploadFile({
                    url: api.UploadFiles,
                    filePath: filePaths,
                    method: 'POST',
                    header: {
                        'Content-Type': 'multipart/form-data'
                    },
                    name: 'file',
                    formData: {
                        'user': 'test',
                        'userCode': userInfo.user_code
                    },
                    success(res) {
                        let asd = JSON.parse(res.data);
                        let imgurl = asd.data.img;
                        suFun(imgurl);
                    }
                });
                tip.loaded();
            }
        });
    },
    /*上传接口*/
    uploadJs(filePaths, suFun) {
        let userInfo = wepy.getStorageSync(USER_INFO);
        tip.loading();
        // 上传文件
        wx.uploadFile({
            url: api.UploadFiles,
            filePath: filePaths,
            method: 'POST',
            header: {
                'Content-Type': 'multipart/form-data'
            },
            name: 'file',
            formData: {
                'user': 'test',
                'userCode': userInfo.user_code
            },
            success(res) {
                let asd = JSON.parse(res.data);
                let imgurl = asd.data.img;
                suFun(imgurl);
            }
        });
        tip.loaded();
    },
    //播放音频
    listenMp3(data,innerAudioContext, suFun) {
        innerAudioContext.src = api.uploadFileUrl + data;
        innerAudioContext.play();
        innerAudioContext.onPlay(() => {
            console.log('开始播放play');
            console.log(innerAudioContext.paused);
            suFun(innerAudioContext.paused);
        });
        innerAudioContext.onError((res) => {
            console.log(res.errMsg);
            console.log(res.errCode);
        });
    },
    /*播放音频暂停*/
    pauselistenMp3(data, innerAudioContext,suFun) {
        innerAudioContext.pause();
        innerAudioContext.onPause((res) => {
            console.log('暂停播放');
            console.log(innerAudioContext);
            suFun(innerAudioContext.paused);
        });
        innerAudioContext.onError((res) => {
            console.log(res.errMsg);
            console.log(res.errCode);
        });
    },
    /*播放音频停止*/
    stoplistenMp3(data,innerAudioContext, suFun) {
        innerAudioContext.stop();
        innerAudioContext.onStop(() => {
            console.log('停止播放');
            suFun(innerAudioContext.paused);
        });
        innerAudioContext.onError((res) => {
            console.log(res.errMsg);
            console.log(res.errCode);
        });
    },
    /**
     * 微信支付
     * @param money     订单的金额
     * @param orderUUID 订单orderUUID
     * @param openid    用户的openid
     * @param body      显示的信息
     * @param suFun     成功执行的方法
     * @param errFun    失败执行的方法
     * @returns {Promise<void>}
     */
    async weixinPay(money, body,mold, openid, standardCoin, suFun, errFun) {
        let res = await api.wxPay({
            query: {
                money: money,
                body: body,
                mold: mold,
                tradeType: 'JSAPI',
                openid: openid,
                standardCoin:standardCoin,
            }
        });
        console.log(res)
        if (res) {
            let data = res;
            wx.requestPayment({
                'timeStamp': data.timeStamp,
                'nonceStr': data.nonceStr,
                'package': data.package,
                'signType': data.signType,
                'paySign': data.paySign,
                'success': function(res) {
                    suFun(res);
                },
                'fail': function(res) {
                    tip.error('支付失败');
                    errFun(res);
                }
            });
        } else {
            tip.error('支付失败');
        }
    },

};
