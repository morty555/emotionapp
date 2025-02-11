// pages/myself/myself.js
var app = getApp() 
app.globalData.personname ='请登录',
app.globalData.detailtap=false
Page({

  /**
   * 页面的初始数据
   */
  data: {
     state:'登录',
     statefunction:'toLogin',//控制登录状态
     isEnabled: false,                                            
     personname:'',//用户名
     persontext:'',//个性签名
     detailtap:true//控制个人信息页面打开
  },
  toPersonDetail(){
    if(this.data.detailtap)
    {
     wx.navigateTo({
       url: '/pages/persondetail/persondetail',
     })   
    }
  },
toLogin(){
  wx.navigateTo({
    url: '/pages/login/login',
  })
},
handlelogout(){
  
  wx.showToast({
    title: '账号已退出',
    icon:'success',
    duration:1000
  })
  this.setData({
    state:"登录",
    statefunction:'toLogin'
  })

},
toreadme(){
wx.navigateTo({
  url: '/pages/readme/readme',
})
},
torelation(){
  if(this.data.isEnabled)
  {
    if(this.data.isEnabled)
    {
    
      wx.navigateTo({
        url: '/pages/relation/relation',
     })
    }
    else
    {
      wx.showToast({
        title: '请先登录',
        icon: "error",
        duration: 1000,
      })
    }
  }
  else
  {
    wx.showToast({
      title: '请先登录',
      icon: "error",
      duration: 1000,
    })
  }
},
tosetting(){
  if(this.data.isEnabled)
    {
     wx.navigateTo({
       url: '/pages/setting/setting',
     })
    }
    else
    {
      wx.showToast({
        title: '请先登录',
        icon: "error",
        duration: 1000,
      })
    }
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
    let times=1;
    this.setData({
      personname:app.globalData.personname,
      detailtap:app.globalData.detailtap
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    if(this.times===0){
    let that=this
  const loginstate = wx.getStorageSync('state');
  if(this.data.personname=="请登录")
  {
    that.setData({
      state:loginstate
    })
    console.log(that.data.state);
    let loginfunction = wx.getStorageSync('statefunction');
    that.setData({
      statefunction:loginfunction
    })
    console.log(that.data.statefunction);
   
  }
  wx.clearStorageSync();
  }
  this.times=0;
  this.setData({
    personname:"您还未设置用户名",
    detailtap:true,
    isEnabled:true
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