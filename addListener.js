/**
 * Created by Administrator on 2016/11/16.
 */
"use strict";
import $ from "jquery";
import appendTpl from './appendTpl';
export default function (htmlTpl) {
    let newBtn=$("#new-note");
    if(newBtn.length>0){
        $(".middle").on("click","#new-note",function(){
            setTimeout(function(){
                appendTpl(htmlTpl);
            },5000);
        });
    }
}