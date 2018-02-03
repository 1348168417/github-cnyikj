Page({
  data: {
    markers: [{
      iconPath: "http://webapi.amap.com/theme/v1.3/markers/b/mark_bs.png",
      id: 0,
      latitude: 30.331609,
      longitude: 120.107299,
      width: 19,
      height: 33
    }],
    polyline: [{
      points: [{
        longitude: 113.3245211,
        latitude: 23.10229
      }, {
        longitude: 113.324520,
        latitude: 23.21229
      }],
      color: "#FF0000DD",
      width: 2,
      dottedLine: true
    }],
    imgUrls: [
      '../../images/carousel07.jpg',
      '../../images/Carousel08.jpg',
      '../../images/Carousel01.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 3000
  },
  regionchange(e) {
    console.log(e.type)
  },
  markertap(e) {
    console.log(e.markerId)
  },
  controltap(e) {
    console.log(e.controlId)
  }

})




//index.js    
//获取应用实例    
