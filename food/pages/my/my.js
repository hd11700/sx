Page({

    /**
     * 页面的初始数据
     */
    data: {
      //图片存储链接
      bodyIntroduce:"人体阳气化生不足，温煦作用下降生里寒。",
      userInfo: {},
      hasUserInfo: false, 
      canIUse: wx.canIUse('button.open-type.getUserInfo'),
      canIUseGetUserProfile: false,
      canIUseOpenData: wx.canIUse('open-data.type.userAvatarUrl') && wx.canIUse('open-data.type.userNickName'), // 如需尝试获取用户信息可改为false
    },
  
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
      let user = wx.getStorageSync('user')
      this.setData({
        userInfo: user
      })
    },
    login() {
      wx.getUserProfile({
          desc: '必须授权才能继续使用', // 必填 声明获取用户个人信息后的用途，后续会展示在弹窗中
          success:(res)=> { 
              console.log('授权成功', res);
              wx.setStorageSync('user',res.userInfo)
              this.setData({ 
                  userInfo:res.userInfo
              })
          },
          fail:(err)=> {
              console.log('授权失败', err);
          }
      })
  },
  // 退出登录
  loginOut(){
      this.setData({ 
          userInfo:''
      })
      // 清空缓存
      wx.setStorageSync('user',null)
  },
  
    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {
      
    },
  
    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {
      
    },
  
    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {
      
    },
  
    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {
      
    },
  
    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {
      
    },
  
    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {
      
    },
  
    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {
      
    },
    goSign_in(){
      wx.navigateTo({
        url: '../sign_in/sign_in',
      })
    },
    goMedal(){
      wx.navigateTo({
          url: '../medal/medal',
      })
   },
   goInfo(){
      wx.navigateTo({
          url: '../info/info',
      })
   },
   goAttention(){
      wx.navigateTo({
          url: '../attention/attention',
      })
   },
   goOrder(){
      wx.navigateTo({
          url: '../order/order',
      })
   },
   goAbout(){
      wx.navigateTo({
          url: '../about/about',
      })
   },
   goNotic(){
    wx.navigateTo({
        url: '../notic/notic',
    })
 }
  
  })