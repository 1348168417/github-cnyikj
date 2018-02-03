// pages/listPage/listPage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: "",
    listPage: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var tyPe = options.type;
    console.log(tyPe);
    if (tyPe == "azfl") {//全部分类
      this.setData({
        title: "打包机齿轮",
        note: [
          {
            heart_num: '1',
            "title": '专业精剪',
            "url": 'http://www.cnyikj.com/clientInfo/goddess/发型图片/女长/1 (1).jpg',
            "arc": "¥466",
            "bindtap": "azfl1"
          }, {
            heart_num: '2',
            "title": '专业精剪',
            "url": 'http://www.cnyikj.com/clientInfo/goddess/发型图片/女长/1 (2).jpg',
            "arc": "¥466",
            "bindtap": "azfl2"
          }, {
            heart_num: '3',
            "title": '专业精剪',
            "url": 'http://www.cnyikj.com/clientInfo/goddess/发型图片/女长/1 (3).jpg',
            "arc": "¥466",
            "bindtap": "azfl1"
          }, {
            heart_num: '4',
            "title": '专业精剪',
            "url": 'http://www.cnyikj.com/clientInfo/goddess/发型图片/女长/1 (4).jpg',
            "arc": "¥466",
            "bindtap": "azfl1"
          }, {
            heart_num: '5',
            "title": '专业精剪',
            "url": 'http://www.cnyikj.com/clientInfo/goddess/发型图片/女长/1 (5).jpg',
            "arc": "¥466",
            "bindtap": "azfl1"
          }, {
            heart_num: '6',
            "title": '专业精剪',
            "url": 'http://www.cnyikj.com/clientInfo/goddess/发型图片/女长/1 (6).jpg',
            "arc": "¥466",
            "bindtap": "azfl1"
          }, {
            heart_num: '7',
            "title": '专业精剪',
            "url": 'http://www.cnyikj.com/clientInfo/goddess/发型图片/女长/1 (7).jpg',
            "arc": "¥466",
            "bindtap": "azfl1"
          }, {
            heart_num: '8',
            "title": '专业精剪',
            "url": 'http://www.cnyikj.com/clientInfo/goddess/发型图片/女长/1 (8).jpg',
            "arc": "¥466",
            "bindtap": "azfl1"
          }, {
            heart_num: '9',
            "title": '专业精剪',
            "url": 'http://www.cnyikj.com/clientInfo/goddess/发型图片/女长/1 (9).jpg',
            "arc": "¥466",
            "bindtap": "azfl1"
          }, {
            heart_num: '10',
            "title": '专业精剪',
            "url": 'http://www.cnyikj.com/clientInfo/goddess/发型图片/女长/1 (10).jpg',
            "arc": "¥466",
            "bindtap": "azfl1"
          }, {
            heart_num: '11',
            "title": '专业精剪',
            "url": 'http://www.cnyikj.com/clientInfo/goddess/发型图片/女长/1 (11).jpg',
            "arc": "¥466",
            "bindtap": "azfl1"
          }, {
            heart_num: '12',
            "title": '专业精剪',
            "url": 'http://www.cnyikj.com/clientInfo/goddess/发型图片/女长/1 (12).jpg',
            "arc": "¥466",
            "bindtap": "azfl1"
          }, {
            heart_num: '13',
            "title": '专业精剪',
            "url": 'http://www.cnyikj.com/clientInfo/goddess/发型图片/女长/1 (13).jpg',
            "arc": "¥466",
            "bindtap": "azfl1"
          }, {
            heart_num: '14',
            "title": '专业精剪',
            "url": 'http://www.cnyikj.com/clientInfo/goddess/发型图片/女长/1 (14).jpg',
            "arc": "¥466",
            "bindtap": "azfl1"
          }, {
            heart_num: '15',
            "title": '专业精剪',
            "url": 'http://www.cnyikj.com/clientInfo/goddess/发型图片/女长/1 (15).jpg',
            "arc": "¥466",
            "bindtap": "azfl1"
          }, {
            heart_num: '16',
            "title": '专业精剪',
            "url": 'http://www.cnyikj.com/clientInfo/goddess/发型图片/女长/1 (16).jpg',
            "arc": "¥466",
            "bindtap": "azfl1"
          }, {
            heart_num: '17',
            "title": '专业精剪',
            "url": 'http://www.cnyikj.com/clientInfo/goddess/发型图片/女长/1 (17).jpg',
            "arc": "¥466",
            "bindtap": "azfl1"
          }, {
            heart_num: '18',
            "title": '专业精剪',
            "url": 'http://www.cnyikj.com/clientInfo/goddess/发型图片/女长/1 (18).jpg',
            "arc": "¥466",
            "bindtap": "azfl1"
          }, {
            heart_num: '19',
            "title": '专业精剪',
            "url": 'http://www.cnyikj.com/clientInfo/goddess/发型图片/女长/1 (19).jpg',
            "arc": "¥466",
            "bindtap": "azfl1"
          }, {
            heart_num: '20',
            "title": '专业精剪',
            "url": 'http://www.cnyikj.com/clientInfo/goddess/发型图片/女长/1 (20).jpg',
            "arc": "¥466",
            "bindtap": "azfl1"
          }, {
            heart_num: '21',
            "title": '专业精剪',
            "url": 'http://www.cnyikj.com/clientInfo/goddess/发型图片/女长/1 (21).jpg',
            "arc": "¥466",
            "bindtap": "azfl1"
          }, {
            heart_num: '22',
            "title": '专业精剪',
            "url": 'http://www.cnyikj.com/clientInfo/goddess/发型图片/女长/1 (22).jpg',
            "arc": "¥466",
            "bindtap": "azfl1"
          }, {
            heart_num: '23',
            "title": '专业精剪',
            "url": 'http://www.cnyikj.com/clientInfo/goddess/发型图片/女长/1 (23).jpg',
            "arc": "¥466",
            "bindtap": "azfl1"
          }, {
            heart_num: '24',
            "title": '专业精剪',
            "url": 'http://www.cnyikj.com/clientInfo/goddess/发型图片/女长/1 (24).jpg',
            "arc": "¥466",
            "bindtap": "azfl1"
          }, {
            heart_num: '25',
            "title": '专业精剪',
            "url": 'http://www.cnyikj.com/clientInfo/goddess/发型图片/女长/1 (25).jpg',
            "arc": "¥466",
            "bindtap": "azfl1"
          }, {
            heart_num: '26',
            "title": '专业精剪',
            "url": 'http://www.cnyikj.com/clientInfo/goddess/发型图片/女长/1 (26).jpg',
            "arc": "¥466",
            "bindtap": "azfl1"
          }, {
            heart_num: '27',
            "title": '专业精剪',
            "url": 'http://www.cnyikj.com/clientInfo/goddess/发型图片/女长/1 (27).jpg',
            "arc": "¥466",
            "bindtap": "azfl1"
          }, {
            heart_num: '28',
            "title": '专业精剪',
            "url": 'http://www.cnyikj.com/clientInfo/goddess/发型图片/女长/1 (28).jpg',
            "arc": "¥466",
            "bindtap": "azfl1"
          }, {
            heart_num: '29',
            "title": '专业精剪',
            "url": 'http://www.cnyikj.com/clientInfo/goddess/发型图片/女长/1 (29).jpg',
            "arc": "¥466",
            "bindtap": "azfl1"
          }, {
            heart_num: '30',
            "title": '专业精剪',
            "url": 'http://www.cnyikj.com/clientInfo/goddess/发型图片/女长/1 (30).jpg',
            "arc": "¥466",
            "bindtap": "azfl1"
          }, {
            heart_num: '31',
            "title": '专业精剪',
            "url": 'http://www.cnyikj.com/clientInfo/goddess/发型图片/女长/1 (31).jpg',
            "arc": "¥466",
            "bindtap": "azfl1"
          }, {
            heart_num: '32',
            "title": '专业精剪',
            "url": 'http://www.cnyikj.com/clientInfo/goddess/发型图片/女长/1 (32).jpg',
            "arc": "¥466",
            "bindtap": "azfl1"
          }, {
            heart_num: '33',
            "title": '专业精剪',
            "url": 'http://www.cnyikj.com/clientInfo/goddess/发型图片/女长/1 (33).jpg',
            "arc": "¥466",
            "bindtap": "azfl1"
          }, {
            heart_num: '34',
            "title": '专业精剪',
            "url": 'http://www.cnyikj.com/clientInfo/goddess/发型图片/女长/1 (34).jpg',
            "arc": "¥466",
            "bindtap": "azfl1"
          }, {
            heart_num: '35',
            "title": '专业精剪',
            "url": 'http://www.cnyikj.com/clientInfo/goddess/发型图片/女长/1 (35).jpg',
            "arc": "¥466",
            "bindtap": "azfl1"
          }, {
            heart_num: '36',
            "title": '专业精剪',
            "url": 'http://www.cnyikj.com/clientInfo/goddess/发型图片/女长/1 (36).jpg',
            "arc": "¥466",
            "bindtap": "azfl1"
          }

        ]

      })
    } else if (tyPe == "smtjx") {
      this.setData({
        title: "女士短发",
        note: [

          {
            heart_num: '1',
            "title": '专业精剪',
            "url": 'http://www.cnyikj.com/clientInfo/goddess/发型图片/女短/1 (1).jpg',
            "arc": "¥466",
            "bindtap": "azfl1"
          }, {
            heart_num: '2',
            "title": '专业精剪',
            "url": 'http://www.cnyikj.com/clientInfo/goddess/发型图片/女短/1 (2).jpg',
            "arc": "¥466",
            "bindtap": "azfl2"
          }, {
            heart_num: '3',
            "title": '专业精剪',
            "url": 'http://www.cnyikj.com/clientInfo/goddess/发型图片/女短/1 (3).jpg',
            "arc": "¥466",
            "bindtap": "azfl1"
          }, {
            heart_num: '4',
            "title": '专业精剪',
            "url": 'http://www.cnyikj.com/clientInfo/goddess/发型图片/女短/1 (4).jpg',
            "arc": "¥466",
            "bindtap": "azfl1"
          }, {
            heart_num: '5',
            "title": '专业精剪',
            "url": 'http://www.cnyikj.com/clientInfo/goddess/发型图片/女短/1 (5).jpg',
            "arc": "¥466",
            "bindtap": "azfl1"
          }, {
            heart_num: '6',
            "title": '专业精剪',
            "url": 'http://www.cnyikj.com/clientInfo/goddess/发型图片/女短/1 (6).jpg',
            "arc": "¥466",
            "bindtap": "azfl1"
          }, {
            heart_num: '7',
            "title": '专业精剪',
            "url": 'http://www.cnyikj.com/clientInfo/goddess/发型图片/女短/1 (7).jpg',
            "arc": "¥466",
            "bindtap": "azfl1"
          }, {
            heart_num: '8',
            "title": '专业精剪',
            "url": 'http://www.cnyikj.com/clientInfo/goddess/发型图片/女短/1 (8).jpg',
            "arc": "¥466",
            "bindtap": "azfl1"
          }, {
            heart_num: '9',
            "title": '专业精剪',
            "url": 'http://www.cnyikj.com/clientInfo/goddess/发型图片/女短/1 (9).jpg',
            "arc": "¥466",
            "bindtap": "azfl1"
          }, {
            heart_num: '10',
            "title": '专业精剪',
            "url": 'http://www.cnyikj.com/clientInfo/goddess/发型图片/女短/1 (10).jpg',
            "arc": "¥466",
            "bindtap": "azfl1"
          }, {
            heart_num: '11',
            "title": '专业精剪',
            "url": 'http://www.cnyikj.com/clientInfo/goddess/发型图片/女短/1 (11).jpg',
            "arc": "¥466",
            "bindtap": "azfl1"
          }, {
            heart_num: '12',
            "title": '专业精剪',
            "url": 'http://www.cnyikj.com/clientInfo/goddess/发型图片/女短/1 (12).jpg',
            "arc": "¥466",
            "bindtap": "azfl1"
          }, {
            heart_num: '13',
            "title": '专业精剪',
            "url": 'http://www.cnyikj.com/clientInfo/goddess/发型图片/女短/1 (13).jpg',
            "arc": "¥466",
            "bindtap": "azfl1"
          }, {
            heart_num: '14',
            "title": '专业精剪',
            "url": 'http://www.cnyikj.com/clientInfo/goddess/发型图片/女短/1 (14).jpg',
            "arc": "¥466",
            "bindtap": "azfl1"
          }, {
            heart_num: '15',
            "title": '专业精剪',
            "url": 'http://www.cnyikj.com/clientInfo/goddess/发型图片/女短/1 (15).jpg',
            "arc": "¥466",
            "bindtap": "azfl1"
          }, {
            heart_num: '16',
            "title": '专业精剪',
            "url": 'http://www.cnyikj.com/clientInfo/goddess/发型图片/女短/1 (16).jpg',
            "arc": "¥466",
            "bindtap": "azfl1"
          }, {
            heart_num: '17',
            "title": '专业精剪',
            "url": 'http://www.cnyikj.com/clientInfo/goddess/发型图片/女短/1 (17).jpg',
            "arc": "¥466",
            "bindtap": "azfl1"
          }, {
            heart_num: '18',
            "title": '专业精剪',
            "url": 'http://www.cnyikj.com/clientInfo/goddess/发型图片/女短/1 (18).jpg',
            "arc": "¥466",
            "bindtap": "azfl1"
          }, {
            heart_num: '19',
            "title": '专业精剪',
            "url": 'http://www.cnyikj.com/clientInfo/goddess/发型图片/女短/1 (19).jpg',
            "arc": "¥466",
            "bindtap": "azfl1"
          }, {
            heart_num: '20',
            "title": '专业精剪',
            "url": 'http://www.cnyikj.com/clientInfo/goddess/发型图片/女短/1 (20).jpg',
            "arc": "¥466",
            "bindtap": "azfl1"
          }, {
            heart_num: '21',
            "title": '专业精剪',
            "url": 'http://www.cnyikj.com/clientInfo/goddess/发型图片/女短/1 (21).jpg',
            "arc": "¥466",
            "bindtap": "azfl1"
          }, {
            heart_num: '22',
            "title": '专业精剪',
            "url": 'http://www.cnyikj.com/clientInfo/goddess/发型图片/女短/1 (22).jpg',
            "arc": "¥466",
            "bindtap": "azfl1"
          }, {
            heart_num: '23',
            "title": '专业精剪',
            "url": 'http://www.cnyikj.com/clientInfo/goddess/发型图片/女短/1 (23).jpg',
            "arc": "¥466",
            "bindtap": "azfl1"
          }, {
            heart_num: '24',
            "title": '专业精剪',
            "url": 'http://www.cnyikj.com/clientInfo/goddess/发型图片/女短/1 (24).jpg',
            "arc": "¥466",
            "bindtap": "azfl1"
          }, {
            heart_num: '25',
            "title": '专业精剪',
            "url": 'http://www.cnyikj.com/clientInfo/goddess/发型图片/女短/1 (25).jpg',
            "arc": "¥466",
            "bindtap": "azfl1"
          }, {
            heart_num: '26',
            "title": '专业精剪',
            "url": 'http://www.cnyikj.com/clientInfo/goddess/发型图片/女短/1 (26).jpg',
            "arc": "¥466",
            "bindtap": "azfl1"
          }, {
            heart_num: '27',
            "title": '专业精剪',
            "url": 'http://www.cnyikj.com/clientInfo/goddess/发型图片/女短/1 (27).jpg',
            "arc": "¥466",
            "bindtap": "azfl1"
          }, {
            heart_num: '28',
            "title": '专业精剪',
            "url": 'http://www.cnyikj.com/clientInfo/goddess/发型图片/女短/1 (28).jpg',
            "arc": "¥466",
            "bindtap": "azfl1"
          }, {
            heart_num: '29',
            "title": '专业精剪',
            "url": 'http://www.cnyikj.com/clientInfo/goddess/发型图片/女短/1 (29).jpg',
            "arc": "¥466",
            "bindtap": "azfl1"
          }, {
            heart_num: '30',
            "title": '专业精剪',
            "url": 'http://www.cnyikj.com/clientInfo/goddess/发型图片/女短/1 (30).jpg',
            "arc": "¥466",
            "bindtap": "azfl1"
          }, {
            heart_num: '31',
            "title": '专业精剪',
            "url": 'http://www.cnyikj.com/clientInfo/goddess/发型图片/女短/1 (31).jpg',
            "arc": "¥466",
            "bindtap": "azfl1"
          }, {
            heart_num: '32',
            "title": '专业精剪',
            "url": 'http://www.cnyikj.com/clientInfo/goddess/发型图片/女短/1 (32).jpg',
            "arc": "¥466",
            "bindtap": "azfl1"
          }, {
            heart_num: '33',
            "title": '专业精剪',
            "url": 'http://www.cnyikj.com/clientInfo/goddess/发型图片/女短/1 (33).jpg',
            "arc": "¥466",
            "bindtap": "azfl1"
          }, {
            heart_num: '34',
            "title": '专业精剪',
            "url": 'http://www.cnyikj.com/clientInfo/goddess/发型图片/女短/1 (34).jpg',
            "arc": "¥466",
            "bindtap": "azfl1"
          }, {
            heart_num: '35',
            "title": '专业精剪',
            "url": 'http://www.cnyikj.com/clientInfo/goddess/发型图片/女短/1 (35).jpg',
            "arc": "¥466",
            "bindtap": "azfl1"
          }, {
            heart_num: '36',
            "title": '专业精剪',
            "url": 'http://www.cnyikj.com/clientInfo/goddess/发型图片/女短/1 (36).jpg',
            "arc": "¥466",
            "bindtap": "azfl1"
          }
        ]
      })
    } else if (tyPe == "qhtjx") {
      this.setData({
        title: "小女孩",
        note: [

          {
            heart_num: '1',
            "title": '专业精剪',
            "url": 'http://www.cnyikj.com/clientInfo/goddess/发型图片/小女孩/1.jpg',
            "arc": "¥466",
            "bindtap": "azfl1"
          },
        ]
      })
    } else if (tyPe == "smskt") {
      this.setData({
        title: "小女孩",
        note: [

          {
            heart_num: '1',
            "title": '专业精剪',
            "url": 'http://www.cnyikj.com/clientInfo/goddess/发型图片/小女孩/1.jpg',
            "arc": "¥466",
            "bindtap": "azfl1"
          },
        ]
      })
    } 
  },

  azfl1: function () {
    wx.navigateTo({
      url: '../detailPage/detailPage?type=azfl1'
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