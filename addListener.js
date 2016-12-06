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
    addBlogCheckListener()
    function addPublishListener(){
        let publishBtn=$("#publish-button");
        if(publishBtn.length>0){
            $(".main").on("click","#publish-button",function(){
                let content=$(".mousetrap[name=note_content]").val();
                let title="";
                if(content){
                    postBlog(title,content).then(data=>console.log(data));
                }
            });
        }
    }
    function addBlogCheckListener(){
       $(".main").on("change",".blog",function(){
          var _this=$(this);
          var allcheck=$(".blog:checked");
          if(allcheck.length>0){
              $("#controlPanel").show();
          }else{
              $("#controlPanel").hide();
          }
          if(_this.prop("checked")){
              console.log(_this.val());
              $("."+_this.val()).show();
          }else{
              $("."+_this.val()).hide();
          }
       });
    }

}