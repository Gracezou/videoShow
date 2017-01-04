/**
 * Created by zouxiang on 16/9/19.
 */
'use strict';

module.exports = {
    header: {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    },
    api:{
        base: "http://rap.taobao.org/mockjs/7726/",
        creations:"api/creations",
        up: "api/up"
    }
};
