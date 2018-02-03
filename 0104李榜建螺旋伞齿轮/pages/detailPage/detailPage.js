// pages/detailPage/detailPage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    img: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var tyPe = options.type;
    console.log(tyPe);
    if (tyPe == "azfl1") {
      this.setData({
        img: [
          "http://www.cnyikj.com/clientInfo/luoxuansan0104/打包机齿轮1.jpg",
        ]
      })
    } else if (tyPe == "azfl2") {
      this.setData({
        img: [
          "http://www.cnyikj.com/clientInfo/luoxuansan0104/打包机齿轮2.jpg",
        ]
      })
    } else if (tyPe == "azfl3") {
      this.setData({
        img: [
          "http://www.cnyikj.com/clientInfo/luoxuansan0104/打包机齿轮02.jpg",
        ]
      })
    } else if (tyPe == "azfl4") {
      this.setData({
        img: [
          "http://www.cnyikj.com/clientInfo/luoxuansan0104/打包机齿轮02.jpg",
        ]
      })
    } else if (tyPe == "smtjx1") {
      this.setData({
        img: [
          "http://www.cnyikj.com/clientInfo/luoxuansan0104/减速器01.jpg",
        ]
      })
    } else if (tyPe == "smtjx2") {
      this.setData({
        img: [
          "http://www.cnyikj.com/clientInfo/luoxuansan0104/减速器02.jpg",
        ]
      })
    } else if (tyPe == "smtjx3") {
      this.setData({
        img: [
          "http://www.cnyikj.com/clientInfo/luoxuansan0104/减速器齿轮.jpg",
        ]
      })
    } else if (tyPe == "qhtjx1") {
      this.setData({
        img: [
          "http://www.cnyikj.com/clientInfo/luoxuansan0104/自行车齿轮1.jpg",

        ]
      })
    } else if (tyPe == "qhtjx2") {
      this.setData({
        img: [
          "http://www.cnyikj.com/clientInfo/luoxuansan0104/自行车齿轮2.jpg",

        ]
      })
    } else if (tyPe == "smskt1") {
      this.setData({
        img: [
          "http://www.cnyikj.com/clientInfo/luoxuansan0104/6马力船外机齿轮.jpg",

        ]
      })
    } else if (tyPe == "smskt2") {
      this.setData({
        img: [
          "http://www.cnyikj.com/clientInfo/luoxuansan0104/30马力船外机齿轮1.jpg",

        ]
      })
    } else if (tyPe == "smskt3") {
      this.setData({
        img: [
          "http://www.cnyikj.com/clientInfo/luoxuansan0104/30马力船外机齿轮2.jpg",

        ]
      })
    } else if (tyPe == "qhskt1") {
      this.setData({
        img: [
          "http://www.cnyikj.com/clientInfo/luoxuansan0104/割草机齿轮2.jpg",

        ]
      })
    } else if (tyPe == "qhskt2") {
      this.setData({
        img: [
          "http://www.cnyikj.com/clientInfo/luoxuansan0104/割草机齿轮3.jpg",

        ]
      })
    } else if (tyPe == "qhskt3") {
      this.setData({
        img: [
          "http://www.cnyikj.com/clientInfo/luoxuansan0104/割草机齿轮1.jpg",

        ]
      })
    } else if (tyPe == "qhpmdb1") {
      this.setData({
        img: [
          "http://www.cnyikj.com/clientInfo/luoxuansan0104/女式摩托齿轮.jpg",

        ]
      })
    } else if (tyPe == "qhfgdb1") {
      this.setData({
        img: [
          "http://www.cnyikj.com/clientInfo/luoxuansan0104/汽车盆角齿轮.jpg",

        ]
      })
    } else if (tyPe == "qhphdb1") {
      this.setData({
        img: [
          "http://www.cnyikj.com/clientInfo/luoxuansan0104/挖机齿轮2.jpg"
        ]
      })
    } else if (tyPe == "qhzsdb1") {
      this.setData({
        img: [
          "http://www.cnyikj.com/clientInfo/luoxuansan0104/玩具车齿轮1.jpg"
        ]
      })
    } else if (tyPe == "qhzsdb2") {
      this.setData({
        img: [
          "http://www.cnyikj.com/clientInfo/luoxuansan0104/玩具车齿轮2.jpg"
        ]
      })
    } else if (tyPe == "qhzsdb3") {
      this.setData({
        img: [
          "http://www.cnyikj.com/clientInfo/luoxuansan0104/玩具车模型齿轮3.jpg"
        ]
      })
    } else if (tyPe == "qhzsdb4") {
      this.setData({
        img: [
          "http://www.cnyikj.com/clientInfo/luoxuansan0104/玩具车模型齿轮2.jpg"
        ]
      })
    } else if (tyPe == "qhzsdb5") {
      this.setData({
        img: [
          "http://www.cnyikj.com/clientInfo/luoxuansan0104/玩具车模型齿轮1.jpg"
        ]
      })
    } else if (tyPe == "scsmdb1") {
      this.setData({
        img: [
          "http://www.cnyikj.com/clientInfo/luoxuansan0104/直伞齿轮1.jpg",

        ]
      })
    } else if (tyPe == "scsmdb2") {
      this.setData({
        img: [
          "http://www.cnyikj.com/clientInfo/luoxuansan0104/直伞齿轮2.jpg",

        ]
      })
    } else if (tyPe == "drwsmdb1") {
      this.setData({
        img: [
          "http://www.cnyikj.com/clientInfo/luoxuansan0104/无链条自行车齿轮.jpg",

        ]
      })
    } else if (tyPe == "drwsmdb2") {
      this.setData({
        img: [
          "http://www.cnyikj.com/clientInfo/luoxuansan0104/无链条自行车齿轮1.jpg",

        ]
      })
    }










    else if (tyPe == "pmtjmdb1") {
      this.setData({
        img: [
          "http://www.cnyikj.com/clientInfo/luoxuansan0104/食品机械齿轮1.jpg",

        ]
      })
    } else if (tyPe == "pmtjmdb2") {
      this.setData({
        img: [
          "http://www.cnyikj.com/clientInfo/luoxuansan0104/食品机械齿轮2.jpg",

        ]
      })
    } else if (tyPe == "pmtjmdb3") {
      this.setData({
        img: [
          "http://www.cnyikj.com/clientInfo/luoxuansan0104/食品机械齿轮3.jpg",

        ]
      })
    } else if (tyPe == "fgtjmdb1") {
      this.setData({
        img: [
          "http://www.cnyikj.com/clientInfo/hzDb/仿古钛晶面地板/哈钦森.jpg",
          "http://www.cnyikj.com/clientInfo/hzDb/仿古钛晶面地板/哈钦森S-SJ7303.jpg",

        ]
      })
    } else if (tyPe == "dcpmsmfhdb1") {
      this.setData({
        img: [
          "http://www.cnyikj.com/clientInfo/hzDb/多层平面实木复合地板/亚花梨.jpg",
          "http://www.cnyikj.com/clientInfo/hzDb/多层平面实木复合地板/亚花梨F57G01-06-TJ（E0）.jpg",

        ]
      })
    } else if (tyPe == "dcphsmfhdb1") {
      this.setData({
        img: [
        ]
      })
    }
    else if (tyPe == "dcfgsmfhdb1") {
      this.setData({
        img: [
          "http://www.cnyikj.com/clientInfo/hzDb/多层仿古实木复合地板/白金汉宫.jpg",
          "http://www.cnyikj.com/clientInfo/hzDb/多层仿古实木复合地板/白金汉宫F-SJ0508(E0).jpg"
        ]
      })
    }
    else if (tyPe == "smdb1") {
      this.setData({
        img: [
          "http://www.cnyikj.com/clientInfo/hzDb/平面钛晶面地板/那不勒斯轻语.jpg",
          "http://www.cnyikj.com/clientInfo/hzDb/平面钛晶面地板/那不勒斯轻语S108G02-TJ.jpg"
        ]
      })
    }
    else if (tyPe == "qhdb1") {
      this.setData({
        img: [
          "http://www.cnyikj.com/clientInfo/hzDb/强化平面地板/北美黄橡.jpg",
          "http://www.cnyikj.com/clientInfo/hzDb/强化平面地板/北美黄橡LF751.jpg"
        ]
      })
    }
    else if (tyPe == "smfhdb1") {
      this.setData({
        img: [
          "http://www.cnyikj.com/clientInfo/hzDb/多层平面实木复合地板/亚花梨.jpg",
          "http://www.cnyikj.com/clientInfo/hzDb/多层平面实木复合地板/亚花梨F57G01-06-TJ（E0）.jpg"
        ]
      })
    }
    else if (tyPe == "fl1") {
      this.setData({
        img: [
          "http://www.cnyikj.com/clientInfo/hzDb/安装辅料/阴角阳角1.jpg",
          "http://www.cnyikj.com/clientInfo/hzDb/安装辅料/阴角阳角.jpg"
        ]
      })
    }
  },

  dingzhi: function () {
    wx.switchTab({
      url: '../my/my'
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