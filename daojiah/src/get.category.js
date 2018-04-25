const mock = require("mockjs")

module.exports = (req,res) => {
    res.set("Access-Control-Allow-Origin","*")
    var text = req.query.clstext
    var result = mock.mock({
        errcode:0,
        msg:"ok",
        "data|8":[
            {
                "guid":"@guid",
                "text":"@cword(2,5)",
                "title":"@cword(2,5)",
                "childrens|5-10":[
                    {
                        "guid":"@guid",
                        "text":"@cword(2,5)",
                        'img|1':[
                            'static/img/56.jpg','static/img/57.jpg','static/img/58.jpg','static/img/59.jpg','static/img/60.jpg',
                            'static/img/61.jpg','static/img/62.jpg','static/img/63.jpg','static/img/64.jpg','static/img/65.jpg',
                            'static/img/66.jpg','static/img/67.jpg','static/img/68.jpg','static/img/69.jpg','static/img/70.jpg',
                        ],
                    }
                ]
            }
        ]
    })
    res.send(result)
}