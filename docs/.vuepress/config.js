module.exports = {
    title: 'Ryoko UI',
    description: '',
    themeConfig: {
        nav: [
            { text: '主页', link: '/' }
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
        ],
        repo: 'https://github.com/sumucheng/ryoko-ui',
        repoLabel: 'GitHub'
    }
}