// pages/service/service.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  tomap(){
wx.navigateTo({
  url: '/pages/map/map',
})
  },
  todairy(){
    wx.navigateTo({
      url: '/pages/diary/diary',
    })
  },
tocall(){
  wx.navigateTo({
    url: '/pages/call/call',
  })
},
toline(){
wx.navigateTo({
  url: '/pages/line/line',
})
},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})