/**
 * Created by Administrator on 2016/11/16.
 */
"use strict";
import $ from "jquery";
import appendTpl from "./appendTpl";
import postBlog from "./postBlog";

export default function (htmlTpl) {
    let newBtn=$("#new-note");
    if(newBtn.length>0){
        $(".middle").on("click","#new-note",function(){
            setTimeout(function(){
                appendTpl(htmlTpl);
            },2000);
        });
    }
    addPublishListener();
    function addPublishListener(){
        let publishBtn=$("#publish-button");
        if(publishBtn.length>0){
            $(".main").on("click","#publish-button",function(){
                let content=$(".mousetrap[name=note_content]").val();
                if(content){
                    console.log(content);
                    postBlog(content);
                }
            });
        }
    }

}