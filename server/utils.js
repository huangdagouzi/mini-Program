module.exports = {

    // 获取url请求客户端ip
    getCientIP(req) {
        var ip = req.headers['x-forwarded-for'] ||
            req.ip ||
            req.connection.remoteAddress ||
            req.socket.remoteAddress ||
            req.connection.socket.remoteAddress || '';
        if (ip.split(',').length > 0) {
            ip = ip.split(',')[0]
        }
        return ip;
    },

    // 创建响应数据包
    sendResponse(res, code, msg, data) {

        return res.send({ resCode: code, resMsg: msg, resData: data });
    },

    sendSuccessResponse(res, msg, data) {

        return this.sendResponse(res, 1, msg, data);
    },

    sendFailureResponse(res, code, msg) {

        return this.sendResponse(res, code, msg, {});
    },

    isAuthenticated() {
        return function (req, res, next) {
            if (req.isAuthenticated()) {
                return next();
            }
            this.sendFailureResponse(res, 0, '请先登录后尝试');
        }.bind(this);
    }
}
