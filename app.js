// app.js
App({
  onLaunch() {
    // 展示本地存储能力

    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    if(!wx.cloud){
      console.error('请使用2.3.3或以上的基础库以使用云能力');
    }
      else{
           wx.cloud.init({
             env:'emotinalprotecter-8etps654a6dccd',
             traceUser:true,
           })
      }
     this.globalData={};
    
    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
  },
  globalData: {
    userInfo: null,
    personname:'请登录',
    persontext:'',
    detailtap:false
  }
})
