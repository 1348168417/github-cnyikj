// pages/listmore/listaa/listaa.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrl: [
      {
        tit:"平面描述",
        img: "http://www.cnyikj.com/clientInfo/hangzhouzhuangshi/项目/湘湖壹号李姐软装设计方案/图2.png",
        arc:"湘湖壹号位于风景秀丽的杭州萧山香湘湖度假区内，占地380亩，规划建筑面积25万平方米，建筑以法式、英式、意式风格为主，建筑面积500万平方米-850万平方米，会所总建筑面积10500平方米，拥有餐饮、娱乐。SPA、室内泳池、私家酒窖等设施。项目东、面临规划湘湖三期湖面，北接风情大道与索菲特世外桃源大酒店。地理位置优越，景观资源丰富，是杭州市区罕见的临湖景观城市大宅。"
      },
      {
        tit: "硬装分析",
        img: "http://www.cnyikj.com/clientInfo/hangzhouzhuangshi/项目/湘湖壹号李姐软装设计方案/图3.png",
      },
      {
        tit: "人群定位",
        img: "http://www.cnyikj.com/clientInfo/hangzhouzhuangshi/项目/湘湖壹号李姐软装设计方案/图4.png",
      },
      {
        tit: "平面描述",
        img: "http://www.cnyikj.com/clientInfo/hangzhouzhuangshi/项目/湘湖壹号李姐软装设计方案/图5.png",
      },
      {
        tit: "色彩提取",
        img: "http://www.cnyikj.com/clientInfo/hangzhouzhuangshi/项目/湘湖壹号李姐软装设计方案/图6.png",
      },
      {
        tit: "平面- 一楼",
        img: "http://www.cnyikj.com/clientInfo/hangzhouzhuangshi/项目/湘湖壹号李姐软装设计方案/图7.png",
      },
      {
        tit: "实景- 一楼",
        img: "http://www.cnyikj.com/clientInfo/hangzhouzhuangshi/项目/湘湖壹号李姐软装设计方案/图8.png",
      },
      {
        img: "http://www.cnyikj.com/clientInfo/hangzhouzhuangshi/项目/湘湖壹号李姐软装设计方案/图9.png",
      },
      {
        img: "http://www.cnyikj.com/clientInfo/hangzhouzhuangshi/项目/湘湖壹号李姐软装设计方案/图10.png",
      },
      {
        img: "http://www.cnyikj.com/clientInfo/hangzhouzhuangshi/项目/湘湖壹号李姐软装设计方案/图11.png",
      },
      {
        img: "http://www.cnyikj.com/clientInfo/hangzhouzhuangshi/项目/湘湖壹号李姐软装设计方案/图12.png",
      },
      {
        img: "http://www.cnyikj.com/clientInfo/hangzhouzhuangshi/项目/湘湖壹号李姐软装设计方案/图13.png",
      },
      {
        tit: "方案意向- 一楼",
        img: "http://www.cnyikj.com/clientInfo/hangzhouzhuangshi/项目/湘湖壹号李姐软装设计方案/图14.png",
      },
      {
        tit: "平面- 二楼",
        img: "http://www.cnyikj.com/clientInfo/hangzhouzhuangshi/项目/湘湖壹号李姐软装设计方案/图15.png",
      },
      {
        tit: "实景- 二楼",
        img: "http://www.cnyikj.com/clientInfo/hangzhouzhuangshi/项目/湘湖壹号李姐软装设计方案/图16.png",
      },
      {
        img: "http://www.cnyikj.com/clientInfo/hangzhouzhuangshi/项目/湘湖壹号李姐软装设计方案/图17.png",
      },
      {
        img: "http://www.cnyikj.com/clientInfo/hangzhouzhuangshi/项目/湘湖壹号李姐软装设计方案/图18.png",
      },
      {
        img: "http://www.cnyikj.com/clientInfo/hangzhouzhuangshi/项目/湘湖壹号李姐软装设计方案/图19.png",
      },
      {
        tit: "方案意向- 二楼",
        img: "http://www.cnyikj.com/clientInfo/hangzhouzhuangshi/项目/湘湖壹号李姐软装设计方案/图20.png",
      },
      {
        tit: "平面- 三楼",
        img: "http://www.cnyikj.com/clientInfo/hangzhouzhuangshi/项目/湘湖壹号李姐软装设计方案/图21.png",
      },
      {
        tit: "实景- 三楼",
        img: "http://www.cnyikj.com/clientInfo/hangzhouzhuangshi/项目/湘湖壹号李姐软装设计方案/图22.png",
      },
      {
        img: "http://www.cnyikj.com/clientInfo/hangzhouzhuangshi/项目/湘湖壹号李姐软装设计方案/图23.png",
      },
      {
        tit: "方案意向- 地下室",
        img: "http://www.cnyikj.com/clientInfo/hangzhouzhuangshi/项目/湘湖壹号李姐软装设计方案/图24.png",
      },
      {
        img: "http://www.cnyikj.com/clientInfo/hangzhouzhuangshi/项目/湘湖壹号李姐软装设计方案/图25.png",
      },
      {
        img: "http://www.cnyikj.com/clientInfo/hangzhouzhuangshi/项目/湘湖壹号李姐软装设计方案/图26.png",
      },
      {
        tit: "实景- 三楼",
        img: "http://www.cnyikj.com/clientInfo/hangzhouzhuangshi/项目/湘湖壹号李姐软装设计方案/图27.png",
      },
      {
        tit: "方案意向- 三楼",
        img: "http://www.cnyikj.com/clientInfo/hangzhouzhuangshi/项目/湘湖壹号李姐软装设计方案/图28.png",
      },
      {
        tit: "平面- 地下一层",
        img: "http://www.cnyikj.com/clientInfo/hangzhouzhuangshi/项目/湘湖壹号李姐软装设计方案/图29.png",
      },
      {
        tit: "实景- 地下一层",
        img: "http://www.cnyikj.com/clientInfo/hangzhouzhuangshi/项目/湘湖壹号李姐软装设计方案/图30.png",
      },
      {
        img: "http://www.cnyikj.com/clientInfo/hangzhouzhuangshi/项目/湘湖壹号李姐软装设计方案/图31.png",
      },
      {
        img: "http://www.cnyikj.com/clientInfo/hangzhouzhuangshi/项目/湘湖壹号李姐软装设计方案/图32.png",
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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