const ap = new APlayer({
    container: document.getElementById('aplayer'),
    autoplay: true,
    listFolded: true,
    listMaxHeight: 100,
    audio: [
        {
            name: '飞鸟和蝉',
            artist: '阿梓',
            url: 'uploads/飞鸟和蝉.mp3'
        },
        {
            name: '不完美小孩',
            artist: '阿梓',
            url: 'uploads/不完美小孩.mp3',
        },
        {
            name: '海海海',
            artist: '阿梓',
            url: 'uploads/海海海.mp3',
        },
        {
            name: '呼吸决定',
            artist: '阿梓',
            url: 'uploads/呼吸决定.mp3',
        },
        {
            name: '化身孤岛的鲸',
            artist: '阿梓',
            url: 'uploads/化身孤岛的鲸.mp3',
        }
    ]
})