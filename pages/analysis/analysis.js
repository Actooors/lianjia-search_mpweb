Page({
  data:{
    current:'analysis'
  },
  handleChange({ detail }) {
    console.log(detail.key)
    console.log("切换！")
    this.setData({
      current: detail.key
    });
    wx.redirectTo({
      url: '/pages/' + this.data.current + '/' + this.data.current
    })
  },
  goBaidu:function(){
    wx.navigateTo({
      url: '/pages/out/out',
    })
  }
})