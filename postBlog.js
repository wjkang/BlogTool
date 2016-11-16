/**
 * Created by Administrator on 2016/11/16.
 */
"use strict";
import $ from "jquery";
import cookies from "./getCookies";
import config from "./config";

export default function (content) {
    var data={};
    data.content=content;
    
    let sfCheck=$("#sf");
    let cnblogCheck=$("#cnblog");
    if(sfCheck.prop("checked")){
        console.log("sf checked");
        let sfCookie=cookies.getSFCookie();
    }
    if(cnblogCheck.prop("checked")){
        console.log("cnblog checked");
        let cnblogCookie=cookies.getCNBlogCookie();
    }
     
}