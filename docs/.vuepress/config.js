module.exports = {
    title: 'Ryoko UI',
    description: '',
    base: '/ryoko-ui/',
    plugins: ['@vuepress/back-to-top'],
    themeConfig: {
        smoothScroll: true,
        sidebarDepth: 0,
        nav: [
            { text: '主页', link: '/' },
            { text: '文档', link: '/guide/install/' }
        ],
        sidebar: {
            '/guide/': [
                {
                    title: '开始',
                    children: ['install/', 'get-started/']
                },
                'color/',
                {
                    title: '组件',
                    children: ['components/button', 'components/grid', 'components/layout']
                },
            ]
        },
        repo: 'https://github.com/sumucheng/ryoko-ui',
        repoLabel: 'GitHub'
    }
}