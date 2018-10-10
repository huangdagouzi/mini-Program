let serverPath = ''
export function post(url, body) {
    return new Promise((resolve, reject) => {
        wx.request({
            url: serverPath + url,    // 拼接完整的url
            data: body,
            method: 'POST',
            header: {
                'content-type': 'application/json'
            },
            success(res) {
                resolve(res.data)  // 把返回的数据传出去
            },
            fail(ret) {
                reject(ret)   // 把错误信息传出去
            }
        })
    })
}