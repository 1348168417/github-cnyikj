//app.js
var cf = require("/config.js");
App({
  onLaunch: function () {
    //调用API从本地缓存中获取数据
    //var logs = wx.getStorageSync('logs') || []
    //logs.unshift(Date.now())
    //wx.setStorageSync('logs', logs)
    var that = this;
  },
  getUserInfo: function (cb) {
    var that = this
    if (!wx.getStorageSync('lastTokenTime')){
      wx.removeStorageSync("cusmallToken");
    } else{
      var lastTokenTime = wx.getStorageSync('lastTokenTime');
      // token 默认两天后失效
      if (new Date().getTime() - lastTokenTime > 2 * 24 *60 * 60 * 1000){
        wx.removeStorageSync("cusmallToken");
      }
    }

    if (!wx.getStorageSync('userInfo') || !wx.getStorageSync('cusmallToken')) {
      //调用登录接口
      wx.login({
        success: function (res) {
          var wxCode = res.code;
          // 获取用户信息
          wx.getUserInfo({
            success: function (res) {
              that.globalData.userInfo = res.userInfo;
              wx.setStorageSync('userInfo', res.userInfo);
              // 调用后台接口获取cusmallToken
              wx.request({
                url: cf.config.pageDomain + '/applet/oauth/getCusmallToken',
                data: {
                  wxCode: wxCode,
                  encryptedData: res.encryptedData,
                  iv: res.iv,
                  uid: cf.config.uid
                },
                header: {
                  'content-type': 'application/json'
                },
                success: function (res) {
                  console.log(res.data);
                  if(res.data.ret == 0){
                    wx.setStorageSync('cusmallToken', res.data.model.cusmallToken);
                    wx.setStorageSync('lastTokenTime', new Date().getTime());
                    that.globalData.userInfo = wx.getStorageSync('userInfo');
                    that.globalData.cusmallToken = wx.getStorageSync('cusmallToken');
                    var mallSiteId = wx.getStorageSync('mallSiteId');
                    if (!mallSiteId){
                      that.fetchMallSite(cb);
                    } else {
                      typeof cb == "function" && cb(that.globalData.userInfo);
                    }
                  } else{
                    var errMsg = res.data.msg;

                    if (res.data.ret == -4000){
                      errMsg = "请检查配置参数";
                    }
                    wx.showModal({
                      title: '获取授权信息异常',
                      showCancel: false,
                      content: errMsg
                    })
                  }
                }
              })
            }
          })
        },
        fail: function (res) {
          console.log("wxlogin fail:" + res);
        }
      })
    } else if (!wx.getStorageSync('mallSiteId')){
      that.fetchMallSite(cb);
    } else {
      that.globalData.userInfo = wx.getStorageSync('userInfo');
      that.globalData.cusmallToken = wx.getStorageSync('cusmallToken');
      typeof cb == "function" && cb(this.globalData.userInfo);
    }
  },
  fetchMallSite:function(cb){
    var that = this;
    wx.showLoading({
      title: '加载中',
    })
    wx.request({
      url: cf.config.pageDomain + '/applet/mobile/mallSite/getMallSite',
      data: {
        cusmallToken: wx.getStorageSync('cusmallToken')
      },
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        var mallSite = res.data.model.mallSite;
        wx.setStorageSync('mallSiteId', mallSite.id);
        typeof cb == "function" && cb(that.globalData.userInfo, res);
        wx.hideLoading();
      }
    })
  },
  globalData:{
    userInfo:null,
    cusmallToken:null
  }
})