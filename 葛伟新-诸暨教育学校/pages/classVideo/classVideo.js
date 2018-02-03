// commom.js
Page({
  data: {
    title: "",
    url: ""
  },
  onLoad: function (option) {
    var tyPe = option.type;
    console.log("type==" + tyPe)
    if (tyPe == "class_one") {
      this.setData({
        title: "一年级数学课堂实录",
        url: "http://img39.ddimg.cn/60/8/8706219-1_o.jpg"
      })
    } else if (tyPe == "class_two") {
      this.setData({
        title: "二年级数学课堂实录",
        url: "http://pic2.ooopic.com/13/43/33/09b3OOOPIC78.jpg"
      })
    } else if (tyPe == "class_three") {
      this.setData({
        title: "三年级数学课堂实录",
        url: "http://pic.58pic.com/58pic/13/21/98/60I58PIC4xX_1024.jpg"
      })
    } else if (tyPe == "class_four") {
      this.setData({
        title: "四年级数学课堂实录",
        url: "http://pic.58pic.com/58pic/14/78/97/51258PICgry_1024.jpg"
      })
    } else if (tyPe == "class_five") {
      this.setData({
        title: "五年级数学课堂实录",
        url: "http://pic31.photophoto.cn/20140526/0017030224333197_b.jpg"
      })
    }

  }
})