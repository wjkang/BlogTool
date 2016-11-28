/**
 * Created by Administrator on 2016/11/16.
 */
"use strict";
import $ from "jquery";
export default function (htmlTpl,controlTpl) {
    let toolbar=$(".toolbar");
    if(toolbar.length>0){
        toolbar.find(".pull-right:last").after(htmlTpl);
        let control=$("#controlPanel");
        if(control){
            $("body").append(controlTpl);
        }
    }
}

