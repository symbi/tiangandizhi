// miniprogram/pages/createPost/createpost.js.js
Page({

  /**
   * Page initial data
   */
  data: {

  },
  test: function (option){
    console.log("in test")
  },

  submitPost: function (event) {
    console.log("submitPOst in")
    wx.cloud.callFunction({
      name:"savePost",
      data:{
        content:event.detail.value.content
      },
      success:(res)=>{
        console.log("success res:",res)
        wx.navigateTo({
          url: '/pages/index/index',
        })
      },
      fail:console.error,
    })
  },
  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {

  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  }
})