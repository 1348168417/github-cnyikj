// refund.js
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
    orderNum:"",
    status:0,
    btnLoading: false,
    reasonText: "",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    cusmallToken = wx.getStorageSync('cusmallToken');
    mallSiteId = wx.getStorageSync('mallSiteId');
    wx.hideShareMenu();
    wx.setNavigationBarTitle({
      title: "申请退款"
    })
    this.setData({ id: options.id });
    this.setData({ status: options.status });
    this.setData({ orderNum: options.orderNum });
  },

  bindFormSubmit: function (e) {
    var that = this;
    var reason = e.detail.value.reasonText; 
    if (reason == "") {
      wx.showModal({
        showCancel: false,
        content: "亲，您还没有填写退款原因"
      })
    } else {
      wx.showLoading({
        title: '处理中',
      });
      that.setData({ btnLoading: true });
      wx.request({
        url: cf.config.pageDomain + '/applet/mobile/order/returnOrder',
        data: {
          cusmallToken: cusmallToken,
          id: that.data.id,
          reason: reason
        },
        header: {
          'content-type': 'application/json'
        },
        success: function (res) {
          wx.showToast({
            title: '亲，您的退款申请提交成功',
            duration: 2500,
            complete: function () {

            }
          });
          setTimeout(function () {
            that.setData({ btnLoading: false });
            wx.redirectTo({
              url: '/pages/orderinfo/orderinfo?orderid=' + that.data.id
            })
          }, 2800);
        }
      })
    }
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