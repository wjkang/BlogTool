/**
 * Created by Administrator on 2016/11/16.
 */
"use strict";
function getCookie(blog) {
    return new Promise((resolve, reject)=> {
        chrome.runtime.sendMessage({query: 2, blog: blog}, function (response) {
            resolve(response.data);
        });
    })
}
var cookies = {
    getSFCookie: async function () {
        return await getCookie("sf");
    },
    getCNBlogCookie: async function () {
        return await getCookie("cnblog");
    }
}
export {cookies};
