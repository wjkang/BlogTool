/**
 * Created by Administrator on 2016/11/16.
 */
"use strict";
import $ from "jquery";
import {cookies} from "./getCookies";
import config from "./config";

export default async function(title,content) {
    var data={};
    data.content=content;
    data.title=title;
    data.sfTags="";
    data.sfCookies="";
    let sfCheck=$("#sf");
    let cnBlogCheck=$("#cnblog");
    if(sfCheck.prop("checked")){
        console.log("sf checked");
        let sfTagsChecked=$("#controlPanel .sfControl").find("input[name=sftag]:checked");
        $.each(sfTagsChecked,function(){
            if(data.sfTags==""){
                data.sfTags+=$(this).val();
            }else{
                data.sfTags+=","+$(this).val();
            }
        });
        let sfCookies=await cookies.getSFCookie();
        $.each(sfCookies,function(){
           if(data.sfCookies==""){
               data.sfCookies+=this.name+"="+this.value;
           }else{
               data.sfCookies+=";"+this.name+"="+this.value;
           }
        });
    }
    if(cnBlogCheck.prop("checked")){
        console.log("cnblog checked");
        let cnblogCookie=await cookies.getCNBlogCookie();
    }
    console.log(data);
    return await new Promise((resolve, reject)=> {
        $.post(config.proxyUrl,data,function(data){
            resolve(data);
        });
    });

}