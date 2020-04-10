module.exports = {
    title: 'Ryoko UI',
    description: '',
    themeConfig: {
        nav: [
            { text: '主页', link: '/' },
            { text: '文档', link: '/guide/' }
        ],
        sidebar: {
            '/guide/': [
                {
                    title: '指南',
                    children: ['install/', 'get-started/']
                },
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