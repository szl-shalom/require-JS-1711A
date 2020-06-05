define(function () {
    var index = 0
    return {
        bannerData: [
            { url: "1.jpeg", title: "图变一" },
            { url: "2.jpg", title: "图变二" },
            { url: "3.jpg", title: "图变三" },
            { url: "4.jpeg", title: "图变四" },
            { url: "5.jpg", title: "图变五" }
        ],
        tabData: [{
            name: "水果" + ++index,
            children: [{
                name: "热带" + index,
                children: ["香蕉" + index, "榴莲" + index]
            }, {
                name: "温带" + index,
                children: ["苹果" + index, "梨" + index]
            }, {
                name: "寒带" + index,
                children: ["冻梨" + index, "冻苹果" + index]
            }]
        }, {
            name: "水果" + ++index,
            children: [{
                name: "热带" + index,
                children: ["香蕉" + index, "榴莲" + index]
            }, {
                name: "温带" + index,
                children: ["苹果" + index, "梨" + index]
            }, {
                name: "寒带" + index,
                children: ["冻梨" + index, "冻苹果" + index]
            }]
        }, {
            name: "水果" + ++index,
            children: [{
                name: "热带" + index,
                children: ["香蕉" + index, "榴莲" + index]
            }, {
                name: "温带" + index,
                children: ["苹果" + index, "梨" + index]
            }, {
                name: "寒带" + index,
                children: ["冻梨" + index, "冻苹果" + index]
            }]
        }, {
            name: "水果" + ++index,
            children: [{
                name: "热带" + index,
                children: ["香蕉" + index, "榴莲" + index]
            }, {
                name: "温带" + index,
                children: ["苹果" + index, "梨" + index]
            }, {
                name: "寒带" + index,
                children: ["冻梨" + index, "冻苹果" + index]
            }]
        }]
    }
})