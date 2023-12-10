Page({

  /**
   * 页面的初始数据
   */
  data: {
    obj:{
        url:'../../images/头像.jpg'
    },
    array: ['请选择','中国', '美国', '巴西', '日本','韩国'],
    index: 0,
    date: '请选择',
    allValue:'' 
  },
  //表单提交按钮
  formSubmit: function(e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
    this.setData({
      allValue:e.detail.value
    })
  },
  //表单重置按钮
  formReset: function(e) {
    console.log('form发生了reset事件，携带数据为：', e.detail.value)
    this.setData({
      allValue:''
    })
  },
  //---------------------与选择器相关的方法
  //地区选择
  bindPickerChange: function(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },
  //日期选择
  bindDateChange: function(e) {
    this.setData({
      date: e.detail.value
    })
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
    
  },
  goInterest(){
    wx.navigateTo({
      url: '../interest/interest',
    })
  },
  goCondition(){
    wx.navigateTo({
        url: '../condition/condition',
      })
  }
})