// pages/login/login.js
const db = wx.cloud.database()
const _=db.command
var app = getApp() 
app.globalData.personname ='',
app.globalData.detailtap=true
Page({

  /**
   * 页面的初始数据
   */
  data: {
        TitleText:"登录",
        btnText:"登录",
        btnState:true,
        ToText:"新用户注册",
        userText:"",
        passwordText:"",
        personname:'',
        detailtap:''
  },
change(){
  let that=this
  let type=that.data.TitleText
  if(type=='登录'){
    that.setData({
      TitleText:'注册',
      btnText:'注册',
      ToText:'返回登录',
      btnState:true,
      userValue:'',
      passwordValue:'',
      userText:'',
      passwordText:'',
    })
  }
else{
  that.setData({
    TitleText:'登录',
    btnText:'登录',
    ToText:'新用户注册',
    btnState:true,
    userValue:'',
    passwordValue:'',
    userText:'',
    passwordText:'',
  })  
  }
},

getinput(e){
  let that=this
  let type=e.currentTarget.dataset.id
  let value=e.detail.value
  if(type=='user'){
    that.setData({userText:value})
  }
  else{
    that.setData({passwordText:value})
  }
  if(that.data.userText&&that.data.passwordText){
    that.setData({btnState:false})
  }
  else{
    that.setData({btnState:true})
  }
},

login(){
  let pagearr= getCurrentPages()
  let that=this
  let type=that.data.TitleText
  if(type=='注册')
  {
    wx.showLoading({
      title: '正在注册',
    })
    /*本地开发
    let data={
      user:that.data.userText,
      password:that.data.passwordText
    }*/
        db.collection('login').add({  //以下为云开发
      data:{
            user:that.data.userText,
            password:that.data.passwordText
           }
       }).then(res=>{
          wx.hideLoading()
          console.log('注册成功',res);
          wx.showToast({
            title: '注册成功',
            duration:1000
          })
          duration:1000
          that.setData({
            TitleText:'登录',
            btnText:'登录',
            ToText:'新用户注册',
            userValue:that.data.userText,
            passwordValue:that.data.passwordText,
            btnState:false,
          })
        })
        .catch(err=>{
          wx.hideLoading()
          console.log('注册失败',err);
          wx.showToast({
            title: '注册失败',
            icon:'error',
            duration:1000
          })
        })
  }
  //登录
  else
  {
    db.collection('login').where({
      user: that.data.userText,
      password: that.data.passwordText
    }).get()
    .then(res => {
      wx.hideLoading();
      if (res.data.length === 0) {
        wx.showToast({
          title: '账号或密码错误',
          icon: 'error',
          duration: 2000,
        });
      } else {
        console.log('登录成功', res);
        wx.setStorageSync('state', '注销登录')
        wx.setStorageSync('statefunction', 'handlelogout')
        console.log(pagearr[pagearr.length-1].data.detailtap)
        this.setData({
          personname:app.globalData.personname,
          detailtap:app.globalData.detailtap
        })
        wx.navigateBack();
        wx.showToast({
          title: '登录成功',
          icon: 'success',
          duration: 2000,
        });
       
      }
    })
    .catch(err => {
      wx.hideLoading();
      console.error('查询失败:', err);
      wx.showToast({
        title: '登录失败，请稍后再试',
        icon: 'none',
        duration: 2000,
      })
    })}
},
/*本地登录判断
 wx.setStorageSync('userinfo', data)
     if(userinfo.user==that.data.userText)
     {
       if(userinfo.password==that.data.passwordText)
       {
        wx.hideLoading()
        wx.navigateBack()
       }
       else{
         wx.hideLoading()
         wx.showToast({
           title: '密码错误',
           icon:error,
           duration:1500
         })
       }
     }
     else{
       wx.hideLoading()
       wx.showToast({
         title: '用户名不存在',
         icon:'none',
         duration:1500,
       })
     }*/ 
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