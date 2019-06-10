const app = getApp()
Page({
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    Custom: app.globalData.Custom,
    TabCur: 0,
    MainCur: 0,
    VerticalNavTop: 0,
    list: [{
      name: "hh"
    }, {
      name: "aaa"
    }],
    tab: [{
      name: "商品",
      code: "sp"
    }, {
      name: "评论",
      code: "pl"
    }, {
      name: "商家",
      code: "sj"
    }],
    pltype: [{
      name: "全部",
      code: "01"
    }, {
      name: "分类1",
      code: "02"
    }, {
      name: "分类2",
      code: "03"
    }],
    currentTab: "sp",
    currentType: "01",
    load: true,
    isShow: true,
    isCar: true
  },
  showModal(e) {
    this.setData({
      modalName: e.currentTarget.dataset.target
    })
  },
  hideModal(e) {
    this.setData({
      modalName: null
    })
  },
  showPage(e) {
    this.setData({
      isCar: !this.data.isCar
    })
  },
  showP(e) {
    this.setData({
      isShow: false
    })
  },
  hideP(e) {
    this.setData({
      isShow: true
    })
  },
  tabChange(e) {
    let code = e.currentTarget.dataset.code;
    this.setData({
      currentTab: code
    });
    // this.data.tab.code = code;
    console.log(this.data.currentTab);
  },

  typeChange(e) {
    let code = e.currentTarget.dataset.code;
    this.setData({
      currentType: code
    });
    // this.data.tab.code = code;
    console.log(this.data.currentType);
  },
  onLoad() {
    wx.showLoading({
      title: '加载中...',
      mask: true
    });
    let list = [{}];
    for (let i = 0; i < list.length; i++) {
      list[i] = {};
      list[i].name = data.list[i].name;
      list[i].id = i;
    }

    this.setData({
      list: list,
      listCur: list[0]
    })
  },
  onReady() {
    wx.hideLoading()
  },
  tabSelect(e) {
    this.setData({
      TabCur: e.currentTarget.dataset.id,
      MainCur: e.currentTarget.dataset.id,
      VerticalNavTop: (e.currentTarget.dataset.id - 1) * 50
    })
  },
  VerticalMain(e) {
    let that = this;
    let list = this.data.list;
    let tabHeight = 0;
    if (this.data.load) {
      for (let i = 0; i < list.length; i++) {
        let view = wx.createSelectorQuery().select("#main-" + list[i].id);
        view.fields({
          size: true
        }, data => {
          list[i].top = tabHeight;
          tabHeight = tabHeight + data.height;
          list[i].bottom = tabHeight;
        }).exec();
      }
      that.setData({
        load: false,
        list: list
      })
    }
    let scrollTop = e.detail.scrollTop + 20;
    for (let i = 0; i < list.length; i++) {
      if (scrollTop > list[i].top && scrollTop < list[i].bottom) {
        that.setData({
          VerticalNavTop: (list[i].id - 1) * 50,
          TabCur: list[i].id
        })
        return false
      }
    }
  }
})