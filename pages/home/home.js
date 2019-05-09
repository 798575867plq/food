// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

    cardCur: 0,
    swiperList: [{
      id: 0,
      type: 'image',
      url: '../../images/shop1.jpg'
    }, {
      id: 1,
      type: 'image',
        url: '../../images/shop1.jpg',
    }, {
      id: 2,
      type: 'image',
        url: '../../images/shop2.jpg'
    }, {
      id: 3,
      type: 'image',
        url: '../../images/shop1.jpg'
    }, {
      id: 4,
      type: 'image',
        url: '../../images/shop2.jpg'
    }],
    dotStyle: true,
    towerStart: 0,
    direction: '',


    listItem: [{
        img: '../../images/1.png',
        name: '汉堡'
      },
      {
        img: '../../images/1.png',
        name: '水果'
      }
    ],

    shopItem: [{
        img: "../../images/shop1.jpg",
        name: "商家名字",
        score: "4.8分",
        sale: "1900",
        start: "20元",
        tip: "1元"
      },
      {
        img: "../../images/shop2.jpg",
        name: "商家名字",
        score: "4.8分",
        sale: "1900",
        start: "20元",
        tip: "3元"
      }
    ]

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})