import wepy from 'wepy';
import tip from './tip';

const wxRequest = async (params = {}, url) => {
    tip.loading();
    let data = params.query || {};
    let res = await wepy.request({
        url: url,
        method: params.method || 'POST',
        data: data,
        header: { 'content-type': 'application/x-www-form-urlencoded' }
    });
    tip.loaded();
    // return res;
    if (res.data.state ==1) {
        if(res.data.data){
            return res.data.data;
        }else{
            return true;
        }
    } else {
        tip.longtoast(res.data.message);
        /*if(res.data.message=='星币不足，请充值'){
            wx.navigateTo({
              url: '/pages/user/purseCenter'
          });
        }*/
        return  false;
    }
};

module.exports = {
    wxRequest
};
