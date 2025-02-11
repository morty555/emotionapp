// pages/adddiary/adddiary.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    inputText: '',   // 存储输入内容
    diaryid: ''
  },
  // 文字输入框
  getInputText(e) {
    //记录输入的文字   
    this.setData({
      inputText: e.detail.value
    })
  },
 // 保存按钮
 saveButton() {
  // 如果输入是空
  if (this.data.inputText.length == 0) {
    return;
  }
  // 输入内容不为空
  else {
    // 获取本地缓存的之前的所有日记内容
    var diaryContent = wx.getStorageSync('totalDiaryConcent');

    // 如果之前有日记内容
    if (diaryContent != null && diaryContent != '') {
      // 获取当前日记总条数
      var curTotalNum = wx.getStorageSync('totalDiaryNum');
      // 日记总条数加1作为下一条日记id
      var nextDiaryId = curTotalNum + 1;
      // 添加新日记，id为之前日记总条数加1
      diaryContent.push({ 'des': this.data.inputText, 'diaryid': nextDiaryId });
      // 存储新日记总条数
      wx.setStorageSync('totalDiaryNum', 'nextDiaryId');
    }
    // 之前没有日记内容，是第一条日记
    else {
      diaryContent = [{ 'des': this.data.inputText, 'diaryid': 0 }];
      // 保存第一条日记
      wx.setStorageSync('totalDiaryNum', '0');
      this.setData({
        id: '0'
      })
    }
  }
  // 将输入内容存入缓存
  wx.setStorageSync('totalDiaryConcent', diaryContent);
  // 跳转回上一页面
  wx.navigateBack({
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