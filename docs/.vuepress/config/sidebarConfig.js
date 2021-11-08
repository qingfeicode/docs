module.exports = { //通过对象的形式生成侧边栏
  // "/":[
  //   ""
  // ]                //此时路径越短的导航放在越下面，不然所有的都会匹配到那个路径
  "/css/": [
    'aaa',
    'bbb',
    'ccc'
  ],
  "/js/": [
    'aa',
    'bb',
    'cc'
  ],
  "/": [
    "",
    "about",
    "about2"
  ]
}
// sidebar: 'auto'    //自动生成侧边栏
    // sidebar: [         //数组形式生成侧边栏
    //   '',
    //   'about',
    //   'about2'
    // ]
    // sidebar: [
    //   '',
    //   'about',
    //   {                     //数组嵌套对象
    //     title: '这里是CSS哦',   // 必要的
    //     path: '/css/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
    //     collapsable: false, // 可选的, 默认值是 true,
    //     sidebarDepth: 1,    // 可选的, 默认值是 1
    //     children: [
    //       '/css/aaa',
    //       '/css/bbb',
    //       '/css/ccc'
    //     ]
    //   },
    // ]