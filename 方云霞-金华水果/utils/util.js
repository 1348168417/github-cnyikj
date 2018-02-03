var cf = require("../config.js");
var WxParse = require('../wxParse/wxParse.js');
function formatTime(date) {
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()

  var hour = date.getHours()
  var minute = date.getMinutes()
  var second = date.getSeconds()


  return [year, month, day].map(formatNumber).join('-') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

function formatNumber(n) {
  n = n.toString()
  return n[1] ? n : '0' + n
}

function getOrderStatus(status) {
  if (status == 1) {
    return "待支付";
  } else if (status == 2) {
    return "待发货";
  } else if (status == 3) {
    return "待收货";
  } else if (status == 4) {
    return "交易完成";
  } else if (status == 5) {
    return "已取消";
  } else if (status == 6) {
    return "已退货";
  } else if (status == 7) {
    return "待发货，退货中";
  } else if (status == 8) {
    return "已发货，退货中";
  } else if (status == 9) {
    return "已完成，退货中";
  }
}

function getShoppingCartCount(cb){
  var cusmallToken = wx.getStorageSync('cusmallToken');
  wx.request({
    url: cf.config.pageDomain + '/applet/mobile/shopping_cart/getCartCount',
    data: {
      cusmallToken: cusmallToken
    },
    header: {
      'content-type': 'application/json'
    },
    success: function (res) {
      if (res.data.ret == 0) {
        typeof cb == "function" && cb(res.data.model.count);
      }

    }
  })
}
// 统计PV流量
function addPVStat(cb){
  var cusmallToken = wx.getStorageSync('cusmallToken');
  wx.request({
    url: cf.config.pageDomain + '/applet/mobile/stat/addBrowsePvUv',
    data: {
      cusmallToken: cusmallToken
    },
    header: {
      'content-type': 'application/json'
    },
    success: function (res) {
      typeof cb == "function" && cb(res.data.model.count);
    }
  })
}
// 处理模板数据（初始化富文本插件，商家金额除以100取小数点2位）
function processDecorationData(decorationData,page){
  var bannerIndex = 0;
  if (decorationData != null && decorationData.items != null) {
    for (var i = 0; i < decorationData.items.length; i++) {
      var item = decorationData.items[i];
      if (item.item_type == "richtext") {
        WxParse.wxParse('article', 'html', item.data.richtext, page, 5);
      } else if (item.item_type == "mc_goodslist"){
        var goodsList = item.data.list;
        for(var j=0;j<goodsList.length;j++){
          var goods = goodsList[j];
          goods.price = (goods.price/100).toFixed(2);
        }
      } else if(item.item_type == "img_ad"){
        item.item_index = bannerIndex;
        bannerIndex++;
      }
    }
  }
}

// 处理订单数据（时间格式转换）
function processOrderData(orderData) {
  if (orderData.buyTime){
    orderData.buyTime = formatTime(new Date(orderData.buyTime));
  }
  if (orderData.payTime){
    orderData.payTime = formatTime(new Date(orderData.payTime));
  }
  if (orderData.realDeliveryTime){
    orderData.realDeliveryTime = formatTime(new Date(orderData.realDeliveryTime));
  }
}

// 处理banner高度根据image高度自适应
function processBannerImgLoad(e,page) {
  var w = e.detail.width;
  var h = e.detail.height;
  var bannerIndex = e.currentTarget.dataset.bannerindex;
  var bannerHeight = (h / w) * 750;
  if (page.data.bannerHeight[bannerIndex] != bannerHeight) {
    page.data.bannerHeight[bannerIndex] = bannerHeight;
    page.setData({ bannerHeight: page.data.bannerHeight });
  }
}

module.exports = {
  formatTime: formatTime,
  getShoppingCartCount: getShoppingCartCount,
  addPVStat: addPVStat,
  processOrderData: processOrderData,
  processBannerImgLoad: processBannerImgLoad,
  processDecorationData: processDecorationData,
  getOrderStatus: getOrderStatus
}
