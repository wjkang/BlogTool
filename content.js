/**
 * Created by Administrator on 2016/11/15.
 */
"use strict";
import $ from 'jquery';
import appendTpl from './appendTpl';
import addListener from './addListener';

$(function(){
    chrome.runtime.sendMessage({ query: 1 }, function (response) {
        let htmlTpl=response.checkTpl;
        let controlTpl=response.controlTpl;
        setTimeout(function(){
            appendTpl(htmlTpl,controlTpl);
            addListener(htmlTpl);
        },2000);

    });
});

