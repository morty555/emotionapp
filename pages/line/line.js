// pages/line/line.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
       call1:'010-82951332',
       call2:'400-161-9995',
       call3:'12355',
       call4:'12320',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  makePhoneCall1() {
    const phoneNumber = '010-82951332'; // 替换成要拨打的电话号码
    wx.makePhoneCall({
      phoneNumber: phoneNumber
    })
  },
  makePhoneCall2() {
    const phoneNumber = '400-161-9995'; // 替换成要拨打的电话号码
    wx.makePhoneCall({
      phoneNumber: phoneNumber
    })
  },
  makePhoneCall3() {
    const phoneNumber = '12355'; // 替换成要拨打的电话号码
    wx.makePhoneCall({
      phoneNumber: phoneNumber
    })
  },
  makePhoneCall4() {
    const phoneNumber = '12320'; // 替换成要拨打的电话号码
    wx.makePhoneCall({
      phoneNumber: phoneNumber
    })
  },

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