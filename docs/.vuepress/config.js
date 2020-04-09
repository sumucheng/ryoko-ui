module.exports = {
    title: 'Ryoko UI',
    description: '',
    themeConfig: {
        nav: [
            { text: '主页', link: '/' },
            { text: '文档', link: '/guide/' },
        ],
        sidebar: [
            {
                title: '指南',
                children: ['/install/', '/get-started/']
            },
            {
                title: '组件',
                children: ['/components/button']
            },
        ]
    }
}