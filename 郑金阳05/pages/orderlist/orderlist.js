// orderlist.js
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
    status:"",
    size:20,
    staticResPath: cf.config.staticResPath,
    userImagePath: cf.config.userImagePath,
    orderList:{},
    orderListTotal:0,
    goodsList:[],
    cancleOrderId:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      cusmallToken = wx.getStorageSync('cusmallToken');
      mallSiteId = wx.getStorageSync('mallSiteId');
      //console.log(options.status)
      wx.hideShareMenu();
      this.setData({
          status: options.status
      });
      this.fetchData(1);
  },
  fetchData:function(page){
      var that = this;
      wx.showLoading({
      	title: '加载中',
      });
      wx.request({
          url: cf.config.pageDomain +'/applet/mobile/order/getOrderList',
          data:{
              cusmallToken: cusmallToken,
              status:that.data.status,
              start:(page-1)*that.data.size,
              limit: that.data.size
          },
          header: {
              'content-type': 'application/json'
          },
          success: function (res) {
                var goodsList=[];
              if (res.data.ret == 0) {
                var list = res.data.model.list;
                for(var i= 0;i<res.data.model.list.length;i++){
                  var goods = JSON.parse(list[i].goodsList);
                  for(var j= 0;j<goods.length;j++){
                    goods[j].price = (goods[j].price/100).toFixed(2);
                  }
                  goodsList.push(goods);
                }
                for(var k = 0;k<list.length;k++){
                  list[k].allPrice = ((list[k].totalPrice+list[k].deliveryPrice)/100).toFixed(2);
                  list[k].totalPrice = (list[k].totalPrice/100).toFixed(2);
                  list[k].deliveryPrice = (list[k].deliveryPrice/100).toFixed(2);
                  //list[k].allPrice = (list[k].deliveryPrice/100).toFixed(2);
                }
                  that.setData({
                    orderList:list,
                    orderListTotal: res.data.model.total,
                    goodsList:goodsList
                  });
                  //console.log(goodsList);
                  wx.hideLoading();
              } else {
                  wx.hideLoading();
                  wx.showModal({
                      title: '获取商品信息异常',
                      showCancel: false,
                      content: res.data.msg
                  })
              }
          }
      })
  },
  getOrderList:function(event){
    var that = this;
    this.setData({ status: event.target.dataset.status});
    that.fetchData(1);
  },
  modalTap: function(e) {
    var that = this;
    this.setData({ cancleOrderId: e.target.dataset.cancleid});
    //console.log(e.target);
    wx.showModal({
      title: "温馨提示",
      content: "您确认取消此商品订单么？",
      confirmText: "确定",
      cancelText: "取消",
      success:function(res){
        if(res.confirm){
          that.cancelOrder();
        }
      }
    })
  },
  cancelOrder:function(){
    var that = this;
    wx.showLoading({
      title: '处理中',
    });
    wx.request({
        url: cf.config.pageDomain +'/applet/mobile/order/cancelOrder',
        data:{
            cusmallToken: cusmallToken,
            parId:that.data.cancleOrderId
        },
        header: {
            'content-type': 'application/json'
        },
        success: function (res) {
            if (res.data.ret == 0) {
              wx.hideLoading();
              wx.showModal({
                  showCancel: false,
                  content: "订单取消成功",
                  success:function(ress){
                    if(ress.confirm){
                      that.fetchData(1);
                    }
                  }
              })
            } else {
                wx.hideLoading();
                wx.showModal({
                    title: '订单取消失败',
                    showCancel: false,
                    content: res.data.msg
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
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  }
})