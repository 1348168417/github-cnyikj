// orderdetail.js
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
    orderId:10,
    parOrder:{},
    goodsList:[],
    staticResPath: cf.config.staticResPath,
    userImagePath: cf.config.userImagePath
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    /*this.setData({
        orderId: options.orderid
    });*/
    cusmallToken = wx.getStorageSync('cusmallToken');
    mallSiteId = wx.getStorageSync('mallSiteId');
    this.fetchData();
  },
  fetchData:function(){
    var that = this;
    wx.showLoading({
      title: '加载中',
    });
    wx.request({
        url: cf.config.pageDomain +'/applet/mobile/order/getOrderDetail',
        data:{
            cusmallToken: cusmallToken,
            parId:that.data.orderId
        },
        header: {
            'content-type': 'application/json'
        },
        success: function (res) {
            if (res.data.ret == 0) {
                console.log(res.data);
                var parOrder = res.data.model.parOrder;
                var goods = JSON.parse(parOrder.goodsList);
                var goodsList = [];
                parOrder.buyTime = that.formatTime(parOrder.buyTime);
                //收货时间
                parOrder.finishTime = that.formatTime(parOrder.finishTime);
                parOrder.status = that.transStatus(parOrder.status);
                //商品总价格，不包括运费
                parOrder.totalPrice = (parOrder.totalPrice/100).toFixed(2);
                parOrder.deliveryPrice = (parOrder.deliveryPrice/100).toFixed(2);
                for(var i= 0;i<goods.length;i++){
                  goods[i].price = (goods[i].price/100).toFixed(2);
                  goodsList.push(goods[i]);
                }
                that.setData({
                  parOrder:parOrder,
                  goodsList:goodsList
                });
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
  transStatus:function(statu){
    switch (statu) {
      case 1:
        return "代付款"
        break;
      case 2:
        return "待发货"
        break;
      case 3:
        return "待收货"
        break;
      case 4:
        return "交易完成"
        break;
      case 5:
        return "已取消"
        break;
      case 6:
        return "已退款"
        break;
      case 7:
        return "待退款"
        break;
      case 8:
        return "待退款"
        break;
      case 9:
        return "待退款"
        break;
      default:
        return "-"
        break;
    }
  },
  add0:function(m){
    return m<10?'0'+m:m;
  },
  formatTime:function(time,type){
    //time是整数，否则要parseInt转换
    if(!time){
      return '-';
    }
    var time = new Date(time);
    var y = time.getFullYear();
    var m = time.getMonth()+1;
    var d = time.getDate();
    var h = time.getHours();
    var mm = time.getMinutes();
    var s = time.getSeconds();
    if(type == 'YMD'){
      return y+'-'+this.add0(m)+'-'+this.add0(d);
    }else{
      return y+'-'+this.add0(m)+'-'+this.add0(d)+' '+this.add0(h)+':'+this.add0(mm)+':'+this.add0(s);
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