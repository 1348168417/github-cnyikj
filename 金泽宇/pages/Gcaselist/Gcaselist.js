// pages/classlist/classlist.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var tYpe = options.type;
    if (tYpe == "hdxhltpd") {
      this.setData({
        url: [
          {
            "word": "横店小红楼甜品店",
            "img": "http://www.cnyikj.com/clientInfo/jinhuazxzs/小程序case/工装/横店小红楼甜品店/茶餐厅2.jpg",
          },
          {
            "img": "http://www.cnyikj.com/clientInfo/jinhuazxzs/小程序case/工装/横店小红楼甜品店/横店小红楼.jpg",
          }
        ]
      })
    }
    else if (tYpe == "kfd") {
      this.setData({
        url: [
          {
            "word": "咖啡店",
            "img": "http://www.cnyikj.com/clientInfo/jinhuazxzs/小程序case/工装/咖啡店/1.jpg",
          },
          {
            "img": "http://www.cnyikj.com/clientInfo/jinhuazxzs/小程序case/工装/咖啡店/2.jpg",
          },
          {
            "img": "http://www.cnyikj.com/clientInfo/jinhuazxzs/小程序case/工装/咖啡店/22.jpg",
          },
          {
            "img": "http://www.cnyikj.com/clientInfo/jinhuazxzs/小程序case/工装/咖啡店/33.jpg",
          },
          {
            "img": "http://www.cnyikj.com/clientInfo/jinhuazxzs/小程序case/工装/咖啡店/33333.jpg",
          }
        ]
      })
    }
    else if (tYpe == "myjmjd") {
      this.setData({
        url: [
          {
            "word": "明月街美甲店",
            "img": "http://www.cnyikj.com/clientInfo/jinhuazxzs/小程序case/工装/明月街美甲店/明月街.jpg",
          },
          {
            "img": "http://www.cnyikj.com/clientInfo/jinhuazxzs/小程序case/工装/明月街美甲店/明月街2.jpg",
          },
          {
            "img": "http://www.cnyikj.com/clientInfo/jinhuazxzs/小程序case/工装/明月街美甲店/明月街238号美甲.jpg",
          }
        ]
      })
    }
    else if (tYpe == "wyyjg") {
      this.setData({
        url: [
          {
            "word": "武义瑜伽馆",
            "img": "http://www.cnyikj.com/clientInfo/jinhuazxzs/小程序case/工装/武义瑜伽馆/瑜伽1.jpg",
          },
          {
            "img": "http://www.cnyikj.com/clientInfo/jinhuazxzs/小程序case/工装/武义瑜伽馆/瑜伽2.jpg",
          },
          {
            "img": "http://www.cnyikj.com/clientInfo/jinhuazxzs/小程序case/工装/武义瑜伽馆/瑜伽教室.jpg",
          }
        ]
      })
    }
    else if (tYpe == "ykwjjsf") {
      this.setData({
        url: [
          {
            "word": "永康无界健身房",
            "img": "http://www.cnyikj.com/clientInfo/jinhuazxzs/小程序case/工装/永康无界健身房/231.jpg",
          },
          {
            "img": "http://www.cnyikj.com/clientInfo/jinhuazxzs/小程序case/工装/永康无界健身房/232.jpg",
          },
          {
            "img": "http://www.cnyikj.com/clientInfo/jinhuazxzs/小程序case/工装/永康无界健身房/233.jpg",
          },
          {
            "img": "http://www.cnyikj.com/clientInfo/jinhuazxzs/小程序case/工装/永康无界健身房/234.jpg",
          },
          {
            "img": "http://www.cnyikj.com/clientInfo/jinhuazxzs/小程序case/工装/永康无界健身房/235.jpg",
          },
          {
            "img": "http://www.cnyikj.com/clientInfo/jinhuazxzs/小程序case/工装/永康无界健身房/236.jpg",
          }
        ]
      })
    }
    else if (tYpe == "hthy") {
      this.setData({
        url: [
          {
            "word": "海棠花园",
            "img": "http://www.cnyikj.com/clientInfo/jinhuazxzs/小程序case/工装/海棠花园/海棠花园丁倩1.jpg",
          }
        ]
      })
    }
    else if (tYpe == "yycxjs") {
      this.setData({
        url: [
          {
            "word": "御园禅修教室",
            "img": "http://www.cnyikj.com/clientInfo/jinhuazxzs/小程序case/工装/御园禅修教室/heshang0000.jpg",
          },
          {
            "img": "http://www.cnyikj.com/clientInfo/jinhuazxzs/小程序case/工装/御园禅修教室/heshang20000.jpg",
          },
          {
            "img": "http://www.cnyikj.com/clientInfo/jinhuazxzs/小程序case/工装/御园禅修教室/TB2Meh4drWJ.eBjSspdXXXiXFXa_!!2901378455.jpg",
          }
        ]
      })
    }
    else if (tYpe == "zh") {
      this.setData({
        url: [
          {
            "word": "展位",
            "img": "http://www.cnyikj.com/clientInfo/jinhuazxzs/小程序case/工装/展位/展会1.jpg",
          },
          {
            "img": "http://www.cnyikj.com/clientInfo/jinhuazxzs/小程序case/工装/展位/展位2.jpg",
          },
          {
            "img": "http://www.cnyikj.com/clientInfo/jinhuazxzs/小程序case/工装/展位/展会3.jpg",
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