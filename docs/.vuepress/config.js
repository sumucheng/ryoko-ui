module.exports = {
    title: 'Ryoko UI',
    description: '',
    base: '/ryoko-ui/',
    plugins: ['@vuepress/back-to-top'],
    themeConfig: {
        lastUpdated: 'Last Updated',
        search: false,
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
                    children: [
                        'components/button',
                        'components/grid',
                        'components/layout',
                        'components/toast',
                        'components/tabs',
                        'components/popover',
                        'components/collapse',
                        'components/radio',
                        'components/checkbox',
                        'components/timeline',
                        'components/dialog',
                        'components/tag',
                    ]
                },
            ]
        },
        repo: 'https://github.com/sumucheng/ryoko-ui',
        repoLabel: 'GitHub'
    }
}