Page({

    /**
     * 页面的初始数据
     */
    data: {
      selectImgs: null,
      text: '',
      uploadImgs: []
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
    selectImg(){
      wx.chooseImage({
        count: 8,
        success: (res) => {
          this.setData({
            selectImgs: res.tempFilePaths
          })
        }
      })
    },
    setText(e){
      let text = e.detail.value
      console.log(text)
      this.setData({
        text: text
      })
    },
      //发表动态
      publish(){

        },
        //上传图片到云存储
    uploadImages() {

    },
  })