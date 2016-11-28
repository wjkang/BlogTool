/**
 * Created by Administrator on 2016/11/15.
 */
"use strict";
import $ from 'jquery';
var cookies;
chrome.cookies.getAll({url:"https://segmentfault.com"},function(cookie){
    cookies=cookie;
})
chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        if (request.query == 1) {
            let tplStr = $("#template").html();
            let controlStr=$("#controlPanelTemplate").html();
            sendResponse({ checkTpl: tplStr,controlTpl:controlStr});
        }
        if(request.query==2){
            sendResponse({data:cookies});
        }
    });