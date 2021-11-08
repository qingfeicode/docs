module.exports= [ //导航栏设置
  {
    text: 'Home',
    link: '/'
  }, //单个导航栏
  {
    text: 'About',
    link: '/about/'
  },
  { //导航栏做下拉列表
    text: 'Languages',
    items: [{
        text: 'Group1', //通过嵌套item做下拉列表分组  
        items: [{
            text: 'Home',
            link: '/'
          },
          {
            text: 'Guide',
            link: '/about/'
          },
        ]
      },
      {
        text: 'Group2',
        items: [{
            text: 'Home',
            link: '/'
          },
          {
            text: 'Guide',
            link: '/about/'
          },
        ]
      }
    ]
  },
  {
    text: 'External',
    link: 'https://baidu.com'
  },
]