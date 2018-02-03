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
          "http://www.cnyikj.com/clientInfo/shuilifa/水力阀厂家/倒流防止器/防污隔断阀1.jpg",
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
          "http://www.cnyikj.com/clientInfo/shuilifa/水力阀厂家/蝶阀/D343H硬密封蝶阀1.jpg",
        ]
      })
    } else if (tyPe == "smtjx2") {
      this.setData({
        img: [
          "http://www.cnyikj.com/clientInfo/shuilifa/水力阀厂家/蝶阀/对焊蝶阀1.jpg",
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
          "http://www.cnyikj.com/clientInfo/shuilifa/水力阀厂家/多功能水泵控制阀/AX742X泄压持压阀.jpg",

        ]
      })
    } else if (tyPe == "qhtjx2") {
      this.setData({
        img: [
          "http://www.cnyikj.com/clientInfo/shuilifa/水力阀厂家/多功能水泵控制阀/DY30AX缓开缓闭止回阀.jpg",

        ]
      })
    } else if (tyPe == "qhtjx3") {
      this.setData({
        img: [
          "http://www.cnyikj.com/clientInfo/shuilifa/水力阀厂家/多功能水泵控制阀/F745X遥控浮球阀.jpg",

        ]
      })
    } else if (tyPe == "qhtjx4") {
      this.setData({
        img: [
          "http://www.cnyikj.com/clientInfo/shuilifa/水力阀厂家/多功能水泵控制阀/J145X电动遥控阀.jpg",

        ]
      })
    } else if (tyPe == "qhtjx5") {
      this.setData({
        img: [
          "http://www.cnyikj.com/clientInfo/shuilifa/水力阀厂家/多功能水泵控制阀/JD745X多功能水泵控制阀.jpg",

        ]
      })
    } else if (tyPe == "qhtjx6") {
      this.setData({
        img: [
          "http://www.cnyikj.com/clientInfo/shuilifa/水力阀厂家/多功能水泵控制阀/JTJD745X反冲洗多功能水泵控制阀.jpg",

        ]
      })
    } else if (tyPe == "qhtjx7") {
      this.setData({
        img: [
          "http://www.cnyikj.com/clientInfo/shuilifa/水力阀厂家/多功能水泵控制阀/YX741X减压稳压阀.jpg",

        ]
      })
    } else if (tyPe == "smskt1") {
      this.setData({
        img: [
          "http://www.cnyikj.com/clientInfo/shuilifa/水力阀厂家/截止阀/铸钢截止阀1.jpg",

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
          "http://www.cnyikj.com/clientInfo/shuilifa/水力阀厂家/排泥阀/J744X气动、液动快开排泥阀1.jpg",

        ]
      })
    } else if (tyPe == "qhskt2") {
      this.setData({
        img: [
          "http://www.cnyikj.com/clientInfo/shuilifa/水力阀厂家/排泥阀/JM744X快开排泥阀1.jpg",

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
          "http://www.cnyikj.com/clientInfo/shuilifa/水力阀厂家/排气阀/复合式排气阀1.jpg",

        ]
      })
    } else if (tyPe == "qhpmdb2") {
      this.setData({
        img: [
          "http://www.cnyikj.com/clientInfo/shuilifa/水力阀厂家/排气阀/排气阀.jpg",

        ]
      })
    } else if (tyPe == "qhfgdb1") {
      this.setData({
        img: [
          "http://www.cnyikj.com/clientInfo/shuilifa/水力阀厂家/水锤消除器/水锤消除器1.jpg",

        ]
      })
    } else if (tyPe == "qhphdb1") {
      this.setData({
        img: [
          "http://www.cnyikj.com/clientInfo/shuilifa/水力阀厂家/球阀/球阀1.jpg"
        ]
      })
    } else if (tyPe == "qhzsdb1") {
      this.setData({
        img: [
          "http://www.cnyikj.com/clientInfo/shuilifa/水力阀厂家/水力控制阀/100X遥控浮球阀1.jpg"
        ]
      })
    }
    else if (tyPe == "qhzsdb2") {
      this.setData({
        img: [
          "http://www.cnyikj.com/clientInfo/shuilifa/水力阀厂家/水力控制阀/200X减压阀1.jpg"
        ]
      })
    } else if (tyPe == "qhzsdb3") {
      this.setData({
        img: [
          "http://www.cnyikj.com/clientInfo/shuilifa/水力阀厂家/水力控制阀/300X缓闭止回阀1.jpg"
        ]
      })
    } else if (tyPe == "qhzsdb4") {
      this.setData({
        img: [
          "http://www.cnyikj.com/clientInfo/shuilifa/水力阀厂家/水力控制阀/400X流量控制阀1.jpg"
        ]
      })
    } else if (tyPe == "qhzsdb5") {
      this.setData({
        img: [
          "http://www.cnyikj.com/clientInfo/shuilifa/水力阀厂家/水力控制阀/500X泄压持压阀1.jpg"
        ]
      })
    } else if (tyPe == "qhzsdb6") {
      this.setData({
        img: [
          "http://www.cnyikj.com/clientInfo/shuilifa/水力阀厂家/水力控制阀/600X水力电动控制阀1.jpg"
        ]
      })
    } else if (tyPe == "qhzsdb7") {
      this.setData({
        img: [
          "http://www.cnyikj.com/clientInfo/shuilifa/水力阀厂家/水力控制阀/700X1.jpg"
        ]
      })
    } else if (tyPe == "qhzsdb8") {
      this.setData({
        img: [
          "http://www.cnyikj.com/clientInfo/shuilifa/水力阀厂家/水力控制阀/800X压差旁通阀1.jpg"
        ]
      })
    } else if (tyPe == "qhzsdb9") {
      this.setData({
        img: [
          "http://www.cnyikj.com/clientInfo/shuilifa/水力阀厂家/水力控制阀/900X紧急关闭阀1.jpg"
        ]
      })
    } else if (tyPe == "qhzsdb10") {
      this.setData({
        img: [
          "http://www.cnyikj.com/clientInfo/shuilifa/水力阀厂家/水力控制阀/Y42X减压阀1.jpg"
        ]
      })
    } else if (tyPe == "qhzsdb11") {
      this.setData({
        img: [
          "http://www.cnyikj.com/clientInfo/shuilifa/水力阀厂家/水力控制阀/Y43H蒸汽减压阀1.jpg"
        ]
      })
    } else if (tyPe == "qhzsdb12") {
      this.setData({
        img: [
          "http://www.cnyikj.com/clientInfo/shuilifa/水力阀厂家/水力控制阀/YK43X减压阀1.jpg"
        ]
      })
    } else if (tyPe == "qhzsdb13") {
      this.setData({
        img: [
          "http://www.cnyikj.com/clientInfo/shuilifa/水力阀厂家/水力控制阀/缓闭式止回阀1.jpg"
        ]
      })
    } else if (tyPe == "qhzsdb14") {
      this.setData({
        img: [
          "http://www.cnyikj.com/clientInfo/shuilifa/水力阀厂家/水力控制阀/遥控浮球阀.jpg"
        ]
      })
    }else if (tyPe == "scsmdb1") {
      this.setData({
        img: [
          "http://www.cnyikj.com/clientInfo/shuilifa/水力阀厂家/调流阀/活塞式调流阀1.jpg",

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
          "http://www.cnyikj.com/clientInfo/shuilifa/水力阀厂家/闸阀/不锈钢闸阀1.jpg",

        ]
      })
    } else if (tyPe == "drwsmdb2") {
      this.setData({
        img: [
          "http://www.cnyikj.com/clientInfo/shuilifa/水力阀厂家/闸阀/美标闸阀1.jpg",

        ]
      })
    } else if (tyPe == "drwsmdb3") {
      this.setData({
        img: [
          "http://www.cnyikj.com/clientInfo/shuilifa/水力阀厂家/闸阀/伞齿轮闸阀1.jpg",

        ]
      })
    } else if (tyPe == "drwsmdb4") {
      this.setData({
        img: [
          "http://www.cnyikj.com/clientInfo/shuilifa/水力阀厂家/闸阀/铸钢闸阀1.jpg",

        ]
      })
    } else if (tyPe == "drwsmdb5") {
      this.setData({
        img: [
          "http://www.cnyikj.com/clientInfo/shuilifa/水力阀厂家/闸阀/铸铁闸阀1.jpg",

        ]
      })
    }
    
    
     else if (tyPe == "pmtjmdb1") {
      this.setData({
        img: [
          "http://www.cnyikj.com/clientInfo/shuilifa/水力阀厂家/止回阀/HC42X静音止回阀1.jpg",

        ]
      })
    } else if (tyPe == "pmtjmdb2") {
      this.setData({
        img: [
          "http://www.cnyikj.com/clientInfo/shuilifa/水力阀厂家/止回阀/HH44X微阻缓闭止回阀1.jpg",

        ]
      })
    } else if (tyPe == "pmtjmdb3") {
      this.setData({
        img: [
          "http://www.cnyikj.com/clientInfo/shuilifa/水力阀厂家/止回阀/HH49X微阻缓闭蝶式止回阀1.jpg",

        ]
      })
    } else if (tyPe == "pmtjmdb4") {
      this.setData({
        img: [
          "http://www.cnyikj.com/clientInfo/shuilifa/水力阀厂家/止回阀/底阀1.jpg",

        ]
      })
    } else if (tyPe == "pmtjmdb5") {
      this.setData({
        img: [
          "http://www.cnyikj.com/clientInfo/shuilifa/水力阀厂家/止回阀/蝶式缓冲止回阀1.jpg",

        ]
      })
    } else if (tyPe == "pmtjmdb6") {
      this.setData({
        img: [
          "http://www.cnyikj.com/clientInfo/shuilifa/水力阀厂家/止回阀/多弹簧静音止回阀1.jpg",

        ]
      })
    } else if (tyPe == "pmtjmdb7") {
      this.setData({
        img: [
          "http://www.cnyikj.com/clientInfo/shuilifa/水力阀厂家/止回阀/管力阀1.jpg",

        ]
      })
    } else if (tyPe == "pmtjmdb8") {
      this.setData({
        img: [
          "http://www.cnyikj.com/clientInfo/shuilifa/水力阀厂家/止回阀/配水管道用管力阀1.jpg",

        ]
      })
    } else if (tyPe == "pmtjmdb9") {
      this.setData({
        img: [
          "http://www.cnyikj.com/clientInfo/shuilifa/水力阀厂家/止回阀/球形止回阀1.jpg",

        ]
      })
    } else if (tyPe == "pmtjmdb10") {
      this.setData({
        img: [
          "http://www.cnyikj.com/clientInfo/shuilifa/水力阀厂家/止回阀/微阻缓闭蝶式止回阀1.jpg",

        ]
      })
    } else if (tyPe == "pmtjmdb11") {
      this.setData({
        img: [
          "http://www.cnyikj.com/clientInfo/luoxuansan0104/食品机械齿轮3.jpg",

        ]
      })
    } else if (tyPe == "pmtjmdb12") {
      this.setData({
        img: [
          "http://www.cnyikj.com/clientInfo/shuilifa/水力阀厂家/止回阀/消声止回阀1.jpg",

        ]
      })
    } else if (tyPe == "pmtjmdb13") {
      this.setData({
        img: [
          "http://www.cnyikj.com/clientInfo/shuilifa/水力阀厂家/止回阀/旋启式止回阀1.jpg",

        ]
      })
    } else if (tyPe == "pmtjmdb14") {
      this.setData({
        img: [
          "http://www.cnyikj.com/clientInfo/shuilifa/水力阀厂家/止回阀/液力自动阀1.jpg",

        ]
      })
    } else if (tyPe == "pmtjmdb15") {
      this.setData({
        img: [
          "http://www.cnyikj.com/clientInfo/shuilifa/水力阀厂家/止回阀/智能自控阀1.jpg",

        ]
      })
    }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
     else if (tyPe == "fgtjmdb1") {
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