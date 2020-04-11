module.exports = {
    title: 'Ryoko UI',
    description: '',
    base: '/ryoko-ui/',
    themeConfig: {
        nav: [
            { text: '主页', link: '/' },
            { text: '文档', link: '/guide/install/' }
        ],
        sidebar: {
            '/guide/': [
                {
                    title: '指南',
                    children: ['install/', 'get-started/']
                },
                'color/',
                {
                    title: '组件',
                    children: ['components/button']
                },
            ]
        },
        repo: 'https://github.com/sumucheng/ryoko-ui',
        repoLabel: 'GitHub'
    }
}