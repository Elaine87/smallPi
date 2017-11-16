const complain = {
    code: 0,
    errMsg:'success',
    result:{
        data:{
            "complainResult": "客服已收到，将尽快给您处理",
            "complainContent": "未乘车产生费用",
            "complainStatus": 1,
            "complianNoticeTab": [
                {
                    "noticeTitile": "我的费用问题",
                    "noticeTabs": [
                        "未乘车产生费用",
                        "绕路多产生费用",
                        "提前计费",
                        "未及时结束计费"
                    ]
                },
                {
                    "noticeTitile": "对司机服务不满意",
                    "noticeTabs": [
                        "司机迟到",
                        "车辆信息不符",
                        "司机与照片不符",
                        "骚扰乘客",
                        "危险驾驶"
                    ]
                }
            ]
        }
    }
}

module.exports = {
    complain
};