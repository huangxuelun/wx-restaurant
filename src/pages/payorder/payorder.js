// 获取全局应用程序实例对象
// const app = getApp()

// 创建页面实例对象
Page({
  /**
   * 页面的初始数据
   */
  data: {
    title: 'payorder',
    order: {
      restaurant: '人马大饭堂',
      count: 5,
      number: '20170326122',
      time: '2017/3/26 13:23:02',
      goods: [
        {
          name: '鱼香肉丝',
          count: 2,
          money: '23.00'
        },
        {
          name: '鱼香肉丝',
          count: 2,
          money: '23.00'
        },
        {
          name: '鱼香肉丝',
          count: 2,
          money: '23.00'
        },
        {
          name: '鱼香肉丝',
          count: 2,
          money: '23.00'
        },
        {
          name: '鱼香肉丝',
          count: 2,
          money: '23.00'
        }
      ],
      allMoney: '582.00'
    }
  },
  /**
   * 支付货款
   */
  payMoney () {
    wx.showActionSheet({
      itemList: ['微信付款', '扫描二维码'],
      success (res) {
        console.log(res)
        if (res.tapIndex === 0) {
          wx.switchTab({
            url: '../index/index'
          })
        } else if (res.tapIndex === 1) {
          wx.scanCode({
            success (res) {
              console.log(res)
            }
          })
        }
      }
    })

    // wx.requestPayment({
    //   'timeStamp': '',
    //   'nonceStr': '',
    //   'package': '',
    //   'signType': 'MD5',
    //   'paySign': '',
    //   'success':function(res){
    //   },
    //   'fail':function(res){
    //   }
    // })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad () {
    // TODO: onLoad
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady () {
    // TODO: onReady
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow () {
    // TODO: onShow
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide () {
    // TODO: onHide
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload () {
    // TODO: onUnload
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh () {
    // TODO: onPullDownRefresh
  }
})