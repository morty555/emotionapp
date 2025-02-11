// pages/diary/diary.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id: '',
    totalDiaryConcent: []   // 全部日记
  },
toadddiary(){
  wx.navigateTo({
    url: '/pages/adddiary/adddiary',
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
    var arryTemp = wx.getStorageSync('totalDiaryConcent');
    this.setData({
      totalDiaryConcent: arryTemp
    })
  },
  delet:function(e){
    // 进行作用域外部指向
    let that = this;
    wx.showModal({
      title: '温馨提示',
      content: '是否要删除这条日记？',
      // 点击确定后删除掉对应缓存
      success (res) {
        if (res.confirm) {
          // 获取传递过来的索引
          var curId = e.currentTarget.dataset.saveid;
          // 获取全部日记内容
          var arryTemp = wx.getStorageSync('totalDiaryConcent');
          // 设置一个新的数组
          var newDiaryContent = [];
          // 利用for循环将不需要删除的存储起来
          for (var i = 0;i < arryTemp.length;i ++) {
            if (i != curId) {
              newDiaryContent.push(arryTemp[i])
            }
          }
          // 重新更新全部日记内容，其中不包含要删除的日记
          // 一定注意这里不要将新的日记内容用单引号引起来，否则会出现删除一条日记后冒出来很多条空日记
          // 而且之后也不能再添加新日记
          wx.setStorageSync('totalDiaryConcent',newDiaryContent);
        }
        // 利用onShow中同样的方法重新渲染页面
        var arryTemp = wx.getStorageSync('totalDiaryConcent');
        that.setData({
          totalDiaryConcent: arryTemp
        })
      }
    })
  },
// 查看日记详情
diary_detail:function(e){
  // 获取点击的日记的内容
  var item = e.currentTarget.dataset.content
  // 将点击到的日记的内容传递到下一个页面
  var url = '/pages/diary_detail/diary_detail?des=' + item.des
  wx.navigateTo({
    url: url,
  })
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