export default defineAppConfig({
  pages: ["__pages/index/index",
    'pages/index/index',
    'pages/home/index'
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#f0f',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },

  tabBar: {
    "color": "#000",
    "borderStyle": "white",
    "selectedColor": "#0f0",
    "list": [
      {
        "pagePath": "pages/home/index",
        "text": "home222"
      },
      {
        "pagePath": "pages/index/index",
        "text": "index111"
      }
    ]
  }
})
