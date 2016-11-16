/**
 * Created by Administrator on 2016/11/15.
 */
"use strict";
import $ from 'jquery';
chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        if (request.query == 1) {
            let tplStr = $("#template").html();
            sendResponse({ htmlTpl: tplStr});
        }
    });