Page({

  /**
   * 页面的初始数据
   */
  data: {
    num_input:"",
    usr:"admin",
    key:"123456",
},
  inputUsr:function(e){
this.setData({
    user_input: e.detail.value
  })
},
inputNum:function(e){
this.setData({
  num_input: e.detail.value
})
},

confirmNum:function(){
var usr = this.data.user_input;
var pwd = this.data.num_input;
var that = this
if(pwd==""||usr==""){
    wx.showToast({
      title: '请输入姓名和',
      icon: 'none',
      duration: 2000
    })
}
else if(pwd != this.data.key||usr != this.data.usr){
  wx.showToast({
    title: '账号或密码错误',
    icon: 'none',
    duration: 2000
  })
}else{
  wx.showToast({
    title: '验证通过',
    icon: 'success',
    duration: 2000
  })
  wx.setStorage({
    key: "123456",
    data: pwd,
  })
  wx.navigateTo({
    url: '../dietitian/dietitian',
  })
}
},

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
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
    
  }
})