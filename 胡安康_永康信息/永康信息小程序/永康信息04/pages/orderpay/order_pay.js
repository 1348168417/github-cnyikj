// order_pay.js
var cf = require("../../config.js");
//获取应用实例
var app = getApp();
var mallSiteId = wx.getStorageSync('mallSiteId');
var cusmallToken = wx.getStorageSync('cusmallToken');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id: "",
    orderData: {},
    goodsList:[],
    deliveryTxt: "-",
    btnLoading: false,
    staticResPath: cf.config.staticResPath,
    userImagePath: cf.config.userImagePath,
    totalPrice: 0,
    allPrice: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    cusmallToken = wx.getStorageSync('cusmallToken');
    mallSiteId = wx.getStorageSync('mallSiteId');
    wx.hideShareMenu();
    wx.setNavigationBarTitle({
      title: "支付确认"
    })
    this.setData({ id: options.id });
    this.fetchData();
  },

  fetchData: function () {
    var that = this;
    wx.showLoading({
      title: '加载中',
    });
    wx.request({
      url: cf.config.pageDomain + '/applet/mobile/order/getOrderDetail',
      data: {
        cusmallToken: cusmallToken,
        parId: that.data.id
      },
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        if (res.data.ret == 0) {
          var parOrder = res.data.model.parOrder;
          that.setData({ orderData: parOrder });
          that.setData({ totalPrice: (parOrder.totalPrice/100).toFixed(2) });
          that.setData({ goodsList: JSON.parse(parOrder.goodsList) });
          if (parOrder.deliveryPrice == null || parOrder.deliveryPrice == 0){
            that.setData({ deliveryTxt: "商家承担运费" });
            that.setData({ allPrice: (parOrder.totalPrice/100).toFixed(2) });
          } else{
            that.setData({ deliveryTxt: "￥" + (parOrder.deliveryPrice/100).toFixed(2)});
            that.setData({ allPrice: ((parOrder.totalPrice + parOrder.deliveryPrice)/100).toFixed(2) });

          }
          wx.hideLoading();
        } else {
          wx.hideLoading();
          wx.showModal({
            title: '获取订单信息异常',
            showCancel: false,
            content: res.data.msg
          })
        }
      }
    })

  },

  onPayOrder: function () {
    var that = this;
    wx.showLoading({
      title: '订单提交中',
    });
    that.setData({ btnLoading: true });
    wx.request({
      url: cf.config.pageDomain + '/applet/mobile/wxpay/generateWxPayOrder',
      method:"POST",
      data: {
        cusmallToken: cusmallToken,
        goodDescribe: that.data.orderData.goodsNames,
        out_trade_no: that.data.orderData.orderNum,
        total_fee: that.data.allPrice*100
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success: function (res) {
        if (res.data.ret == 0) {
          var wxOrderData = res.data.model.wxOrderData;
          wx.hideLoading();
          wx.requestPayment({
            'timeStamp': wxOrderData.timeStamp,
            'nonceStr': wxOrderData.nonceStr,
            'package': wxOrderData.package,
            'signType': wxOrderData.signType,
            'paySign': wxOrderData.paySign,
            'success': function (res) {
              wx.showModal({
                title: '温馨提示',
                cancelText:"我的订单",
                confirmText:"确定",
                cancelColor:"#353535",
                confirmColor:"#ED5030",
                success: function (res) {
                  that.setData({ btnLoading: false });
                  wx.hideLoading();
                  if (res.confirm) {
                    wx.redirectTo({
                      url: '/pages/orderlist/orderlist?status=',
                    })
                  } else if (res.cancel) {
                    wx.reLaunch({
                      url: '/pages/uniquecenter/uniquecenter',
                    })
                  }
                },
                content: "支付成功"
              })
            },
            'fail': function (res) {
              console.log(res);
              that.setData({ btnLoading: false });
              wx.hideLoading();
              wx.showModal({
                title: '支付失败',
                showCancel: false,
                content: "尚未完成支付"
              })
            }
          })
        } else {
          wx.hideLoading();
          wx.showModal({
            title: '支付订单异常',
            showCancel: false,
            content: res.data.msg || "服务器异常"
          })
        }
      }
    })
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})