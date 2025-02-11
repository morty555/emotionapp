// pages/home/home.js
var util = require('../../utils/util.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isDisabled1:false,
    isDisabled2:false,
    percentage2:0,
    percentage1:0,
  },
  /**
   * 生命周期函数--监听页面加载
   */
  tobluetooth(){
    wx.navigateTo({
      url: '/pages/bluetooth/bluetooth',
    })
  },
 punchin2(){
  if(this.data.isDisabled2==false)
  {
   this.setData({  
      percentage2:this.data.percentage2+1,
      isDisabled2:true
   })
  }
   var that = this;
   that.data.timer = setTimeout(
       function () {
       that.setData({
         isDisabled2:false
       })
          
       },86400000 );    
       if(this.data.isDisabled2==false){
        clearTimeout(that.data.timer);
       }
 },
 punchin1(){
  if(this.data.isDisabled2==false)
  {
  this.setData({
    percentage1:this.data.percentage1+1,
    isDisabled1:true
  })
}
  var that = this;
  that.data.timer = setTimeout(
      function () {
      that.setData({
        isDisabled1:false
      })
         
      },86400000 );    
      if(this.data.isDisabled1==false){
       clearTimeout(that.data.timer);
      }
},


  onLoad(options) {
    // 定义一个定时器，每秒更新一次时间
    this.updateTime();
    this.timer = setInterval(() => {
      this.updateTime();
    }, 1000);
  },

  updateTime() {
    var time = util.formatTime(new Date());
    this.setData({
      time: time
    });
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {
    // 清除定时器以防内存泄漏
    clearInterval(this.timer);
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