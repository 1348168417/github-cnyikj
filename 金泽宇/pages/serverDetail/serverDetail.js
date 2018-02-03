// pages/serverDetail/serverDetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    url: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var tYpe = options.type;
    if (tYpe == "qiangweizhimeng") {
      this.setData({
        url: [
          {
            "img": "http://www.cnyikj.com/clientInfo/jinhuazxzs/工装/横店小红楼甜品店/茶餐厅2.jpg",
            "word": "茶餐厅"
          },
          {
            "img": "http://www.cnyikj.com/clientInfo/jinhuazxzs/工装/横店小红楼甜品店/横店小红楼.jpg",
            "word": "横店小红楼"
          }
        ]
      })
    }
    else if (tYpe == "xiehounvwang") {
      this.setData({
        url: [
          {
            "img": "http://www.cnyikj.com/clientInfo/jinhuazxzs/工装/横店小红楼甜品店/茶餐厅2.jpg",
            "word": "茶餐厅"
          },
          {
            "img": "http://www.cnyikj.com/clientInfo/jinhuazxzs/工装/横店小红楼甜品店/横店小红楼.jpg",
            "word": "横店小红楼"
          }
        ]
      })
    }
    else if (tYpe == "moon") {
      this.setData({
        url: [
          {
            "img": "http://www.cnyikj.com/clientInfo/jinhuazxzs/工装/横店小红楼甜品店/茶餐厅2.jpg",
            "word": "茶餐厅"
          },
          {
            "img": "http://www.cnyikj.com/clientInfo/jinhuazxzs/工装/横店小红楼甜品店/横店小红楼.jpg",
            "word": "横店小红楼"
          }
        ]
      })
    }
    else if (tYpe == "SCENT") {
      this.setData({
        url: [
          {
            "img": "http://www.cnyikj.com/clientInfo/jinhuazxzs/工装/横店小红楼甜品店/茶餐厅2.jpg",
            "word": "茶餐厅"
          },
          {
            "img": "http://www.cnyikj.com/clientInfo/jinhuazxzs/工装/横店小红楼甜品店/横店小红楼.jpg",
            "word": "横店小红楼"
          }
        ]
      })
    }
    else if (tYpe == "SCENT") {  
      this.setData({
        url: [
          {
            "img": "http://www.cnyikj.com/clientInfo/jinhuazxzs/工装/横店小红楼甜品店/茶餐厅2.jpg",
            "word": "茶餐厅"
          },
          {
            "img": "http://www.cnyikj.com/clientInfo/jinhuazxzs/工装/横店小红楼甜品店/横店小红楼.jpg",
            "word": "横店小红楼"
          }
        ]
      })
    }
    else if (tYpe == "SCENT") {
      this.setData({
        url: [
          {
            "img": "http://www.cnyikj.com/clientInfo/jinhuazxzs/工装/横店小红楼甜品店/茶餐厅2.jpg ",
            "word": "茶餐厅"
          },
          {
            "img": "http://www.cnyikj.com/clientInfo/jinhuazxzs/工装/横店小红楼甜品店/横店小红楼.jpg",
            "word": "横店小红楼"
          }
        ]
      })
    }
    else if (tYpe == "SCENT") {
      this.setData({
        url: [
          {
            "img": "http://www.cnyikj.com/clientInfo/jinhuazxzs/工装/横店小红楼甜品店/茶餐厅2.jpg",
            "word": "茶餐厅"
          },
          {
            "img": "http://www.cnyikj.com/clientInfo/jinhuazxzs/工装/横店小红楼甜品店/横店小红楼.jpg",
            "word": "横店小红楼"
          }
        ]
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