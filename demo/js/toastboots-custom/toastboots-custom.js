/*!
 * toastboots-custom v1.0.0 (https://github.com/rchapon/toastboots-custom)
 * Copyright 2019 Rafael Ricardo Rivas Chapon (rchapon) <ricardochapon@gmail.com>
 * Licensed under MIT (https://github.com/rchapon/toastboots-custom/blob/master/LICENSE)
 */

(function(t){
    t.toast=function(toast){
        var site      = (toast.site != undefined && toast.site != "")?toast.site :"body",
            title     = (toast.title != undefined && toast.title != "" ) ? toast.title :"Notice!",
            tbg       = (toast.titleBg != undefined && toast.titleBg != "" ) ? toast.titleBg.toLowerCase() :"bg-primary",
            ttc       = (toast.titleTc != undefined && toast.titleTc != "" ) ? toast.titleTc.toLowerCase() :"text-white",
            subtitle  = (toast.subtitle != undefined && toast.subtitle != "") ? toast.subtitle :"Now",
            stc       = (toast.subtitleTc != undefined && toast.subtitleTc != "") ? toast.subtitleTc.toLowerCase() :"text-white",
            timestc   = (toast.timesTc != undefined && toast.timesTc != "") ? toast.timesTc.toLowerCase() :"text-light",
            content   = (toast.content != undefined && toast.content != "") ? toast.content :"Hello World, this is a toast",
            cbg       = (toast.contentBg != undefined && toast.contentBg != "") ? toast.contentBg.toLowerCase() :"bg-white",
            ctc       = (toast.contentTc != undefined && toast.contentTc != "") ? toast.contentTc.toLowerCase().toLowerCase() :"text-dark",
            animation = (toast.animation != undefined && toast.animation != "") ? toast.animation.toLowerCase() :"true",
            autohide  = (toast.autohide != undefined && toast.autohide != "") ? toast.autohide.toLowerCase() :"true",
            delay     = (toast.delay != undefined && toast.delay != "") ? toast.delay.toLowerCase() :3000,
            width     = (toast.width != undefined && toast.width != "") ? toast.width.toLowerCase() : "auto",
            type      = (toast.type != undefined && toast.type != "") ? toast.type.toLowerCase() : "",
            posy      = (toast.posy != undefined && toast.posy != "") ? toast.posy.toLowerCase() : 'top:0',
            posx      = (toast.posx != undefined && toast.posx != "") ? toast.posx.toLowerCase() : 'right:0',
            error     = (toast.errors != undefined && toast.errors != "") ? toast.errors.toLowerCase() : "false",
            errors    = (error == "true") ? true : false,
            bg_arr    = ["bg-primary", "bg-warning", "bg-danger", "bg-success", "bg-info", "bg-dark", "bg-white", "bg-light", "bg-secondary", "bg-transparent"],
            text_arr  = ["text-primary", "text-warning", "text-danger", "text-success", "text-info", "text-dark", "text-white", "text-light", "text-secondary", "text-muted", "text-body", "text-black-50", "text-white-50"],
            type_arr  = ["primary", "primary-light", "primary-dark", "dark-primary", "light-primary", "warning", "warning-light", "warning-dark", "dark-warning", "light-warning", "danger", "danger-light", "danger-dark", "dark-danger", "light-danger", "success", "success-light", "success-dark", "dark-success", "light-success", "info", "info-light", "info-dark", "dark-info", "light-info", "dark", "light", "dark-light", "light-dark"],
            anihi_arr = ["true", "false"],
            posy_arr  = ["top", "bottom"],
            posx_arr  = ["left", "right"],
            siteL = (site == 'body')? site : "#"+site,
            posyparts = "",
            posxparts = "";

            if (type) {
                tbg = ttc = stc = timestc = ctc = cbg = "";
            }

            switch (type){
                case "primary":
                    tbg     = "bg-primary";
                    ttc     = stc = "text-light";
                    timestc = ctc ="text-white";
                    cbg     = "bg-primary";
                    break;
                case "primary-light":
                    tbg     = "bg-primary";
                    ttc     = stc = "text-light";
                    timestc = ctc = "text-dark";
                    cbg     = "bg-light";
                    break;
                case "primary-dark":
                    tbg     = "bg-primary";
                    ttc     = stc = "text-light";
                    timestc = "text-dark";
                    ctc     = "text-white"
                    cbg     = "bg-dark";
                    break;
                case "dark-primary":
                    tbg     = "bg-dark";
                    ttc     = stc = "text-light";
                    timestc = "text-primary"
                    ctc     = "text-white";
                    cbg     = "bg-primary";
                    break;
                case "light-primary":
                    tbg     = "bg-light";
                    ttc     = stc = "text-primary";
                    timestc = "text-primary";
                    ctc     = "text-white";
                    cbg     = "bg-primary";
                    break;
                case "warning":
                    tbg     = "bg-warning";
                    ttc     = stc = "text-light";
                    timestc = ctc = "text-white";
                    cbg     = "bg-warning";
                    break;
                case "warning-light":
                    tbg     = "bg-warning";
                    ttc     = stc = "text-light";
                    timestc = ctc = "text-dark";
                    cbg     = "bg-light";
                    break;
                case "warning-dark":
                    tbg     = "bg-warning";
                    ttc     = stc = "text-white";
                    timestc = "text-dark";
                    ctc     = "text-white";
                    cbg     = "bg-dark";
                    break;
                case "dark-warning":
                    tbg     = "bg-dark";
                    ttc     = stc = "text-light";
                    timestc = "text-warning"
                    ctc     = "text-white";
                    cbg     = "bg-warning";
                    break;
                case "light-warning":
                    tbg     = "bg-light";
                    ttc     = stc = "text-warning";
                    timestc = "text-warning";
                    ctc     = "text-white";
                    cbg     = "bg-warning";
                    break;
                case "danger":
                    tbg     = "bg-danger";
                    ttc     = stc = "text-light";
                    timestc = ctc = "text-white";
                    cbg     = "bg-danger";
                    break;
                case "danger-light":
                    tbg     = "bg-danger";
                    ttc     = stc = "text-light";
                    timestc = ctc = "text-dark";
                    cbg     = "bg-light";
                    break;
                case "danger-dark":
                    tbg     = "bg-danger";
                    ttc     = stc = "text-white";
                    timestc = "text-dark";
                    ctc     = "text-white";
                    cbg     = "bg-dark";
                    break;
                case "dark-danger":
                    tbg     = "bg-dark";
                    ttc     = stc = "text-light";
                    timestc = "text-danger";
                    ctc     ="text-white";
                    cbg     = "bg-danger";
                    break;
                case "light-danger":
                    tbg     = "bg-light";
                    ttc     = stc = "text-danger";
                    timestc = "text-danger";
                    ctc     = "text-white";
                    cbg     = "bg-danger";
                    break;
                case "success":
                    tbg     = "bg-success";
                    ttc     = stc = "text-light";
                    timestc = ctc = "text-white";
                    cbg     = "bg-success";
                    break;
                case "success-light":
                    tbg     = "bg-success";
                    ttc     = stc = "text-light";
                    timestc = ctc = "text-dark";
                    cbg     = "bg-light";
                    break;
                case "success-dark":
                    tbg     = "bg-success";
                    ttc     = stc = "text-white";
                    timestc = "text-dark";
                    ctc     = "text-white";
                    cbg     = "bg-dark";
                    break;
                case "dark-success":
                    tbg     = "bg-dark";
                    ttc     = stc = "text-light";
                    timestc = "text-success";
                    ctc     = "text-white";
                    cbg     = "bg-success";
                    break;
                case "light-success":
                    tbg     = "bg-light";
                    ttc     = stc = "text-success";
                    timestc = "text-success";
                    ctc     = "text-white";
                    cbg     = "bg-success";
                    break;
                case "info":
                    tbg     = "bg-info";
                    ttc     = stc = "text-light";
                    timestc = ctc = "text-white";
                    cbg     = "bg-info";
                    break;
                case "info-light":
                    tbg     = "bg-info";
                    ttc     = stc = "text-light";
                    timestc = ctc = "text-dark";
                    cbg     = "bg-light";
                    break;
                case "info-dark":
                    tbg     = "bg-info";
                    ttc     = stc = "text-white";
                    timestc = "text-dark";
                    ctc     = "text-white";
                    cbg     = "bg-dark";
                    break;
                case "dark-info":
                    tbg     = "bg-dark";
                    ttc     = stc = "text-light";
                    timestc = "text-info";
                    ctc     = "text-white";
                    cbg     = "bg-info";
                    break;
                case "light-info":
                    tbg     = "bg-light";
                    ttc     = stc = "text-info";
                    timestc = "text-info";
                    ctc     = "text-white";
                    cbg     = "bg-info";
                    break;
                case "dark":
                    tbg     = "bg-dark";
                    ttc     = stc = "text-light";
                    timestc = ctc = "text-white";
                    cbg     = "bg-dark";
                    break;
                case "dark-light":
                    tbg     = "bg-dark";
                    ttc     = stc = "text-light";
                    timestc = "text-light";
                    ctc     = "text-dark";
                    cbg     = "bg-light";
                    break;
                case "light-dark":
                    tbg     = "bg-light";
                    ttc     = stc = "text-dark";
                    timestc = "text-dark";
                    ctc     = "text-white";
                    cbg     = "bg-dark";
                    break;
                case "light":
                    tbg     = "bg-light";
                    ttc     = stc = "text-dark";
                    timestc = ctc ="text-dark";
                    cbg     = "bg-light";
                    break;
                default :
                    break;
            }
            var siteFlag      = true,
                tbgFlag       = true,
                ttcFlag       = true,
                stcFlag       = true,
                timestcflag   = true,
                ctcFlag       = true,
                cbgFlag       = true,
                animationFlag = true,
                autohideFlag  = true,
                delayFlag     = false,
                widthpxFlag   = true,
                widthFlag     = false,
                typeFlag      = true,
                posyFlag      = true,
                posydotsFlag  = true,
                posxFlag      = true,
                posxdotsFlag  = true,
                errorhandler  = [];
            siteFlag = $(site).length;
            if (!siteFlag) {
                errorhandler.push(1);
            }
            if (!type) {
                tbgFlag = bg_arr.includes(tbg);
                if (!tbgFlag) {
                    errorhandler.push(2);
                }
                ttcFlag = text_arr.includes(ttc);
                if (!ttcFlag) {
                    errorhandler.push(3);
                }
                stcFlag = text_arr.includes(stc);
                if (!stcFlag) {
                    errorhandler.push(4);
                }
                timestcFlag = text_arr.includes(timestc);
                if (!timestcFlag) {
                    errorhandler.push(5);
                }
                ctcFlag = text_arr.includes(ctc);
                if (!ctcFlag) {
                    errorhandler.push(6);
                }
                cbgFlag = bg_arr.includes(cbg);
                if (!cbgFlag) {
                    errorhandler.push(7);
                }
            }
            animationFlag = anihi_arr.includes(animation);
            if (!animationFlag) {
                errorhandler.push(8);
            }
            autohideFlag = anihi_arr.includes(autohide);
            if (!autohideFlag) {
                errorhandler.push(9);
            }
            delayFlag = isNaN(Number(delay));
            if (delayFlag) {
                errorhandler.push(10);
            }
            widthpxFlag = width.includes("px");
            if (widthpxFlag) {
                widthparts = width.split("px");
                widthFlag = isNaN(Number(widthparts[0]));
                if (widthFlag) {
                    errorhandler.push(11);
                }
            } else if (width != "auto") {
                widthFlag = isNaN(Number(width));
                if (widthFlag) {
                    errorhandler.push(11);
                } else {
                    width = width+"px";
                }
            }
            if (type) {
                typeFlag = type_arr.includes(type);
                if (!typeFlag) {
                    errorhandler.push(12);
                }
            }
            posydotsFlag = posy.includes(":");
            if (posydotsFlag) {
                posyparts = posy.split(':');
                posyFlag = posy_arr.includes(posyparts[0]);
                if (!posyFlag) {
                    errorhandler.push(13);
                }
            } else {
                errorhandler.push(13);
            }
            posxdotsFlag = posx.includes(":");
            if (posxdotsFlag) {
                posxparts = posx.split(':');
                posxFlag = posx_arr.includes(posxparts[0]);
                if (!posxFlag) {
                    errorhandler.push(14);
                }
            } else {
                errorhandler.push(14);
            }

            if (errors) {
                if (errorhandler.length > 0){
                    console.log ('%c toastboots-custom '+head+' ' , headerlog);
                    for (var i = 0; i < errorhandler.length; i++) {
                        id = errorhandler[i];
                        printMessage(id, msgs);
                    }
                }
            }

        t(siteL).find("#toast-container-"+site).length||
            (t(siteL).prepend('<div id="toast-container-'+site+'" aria-live="polite" aria-atomic="true"></div>'),t("#toast-container-"+site).append('<div id="toast-wrapper-'+site+'" style="position: absolute; z-index: 19999;"></div>'));

        toast='<div class="toast" role="alert" aria-live="assertive" aria-atomic="true" data-animation="'+animation+'" data-autohide="'+autohide+'" data-delay="'+delay+'" style="width:'+width+';" >'+('<div class="toast-header '+tbg+" "+ttc+'">')+('<strong class="mr-auto">'+title+"</strong>");toast+='<small class="'+stc+'">'+subtitle+"</small>";toast+='<button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">';
        toast+='<span aria-hidden="true" class="'+timestc+'">&times;</span>';
        toast+="</button>";
        toast+="</div>";
        ""!==content&&(toast+='<div class="toast-body '+cbg+" "+ctc+'">',toast+=content,toast+="</div>");
        toast+="</div>";
        if (posydotsFlag){
            if (posyparts[0] == 'bottom') {
                t("#toast-wrapper-"+site).css("top", "");
            } else {
                t("#toast-wrapper-"+site).css("bottom", "");
            }
        }
        if (posxdotsFlag){
            if (posxparts[0] == 'left') {
                t("#toast-wrapper-"+site).css("right", "");
            } else {
                t("#toast-wrapper-"+site).css("left", "");
            }
        }
        if (posydotsFlag && posxdotsFlag && posyFlag && posxFlag ) {
            t("#toast-wrapper-"+site).css(posyparts[0], posyparts[1]+"px");
            t("#toast-wrapper-"+site).css(posxparts[0], posxparts[1]+"px");
            t("#toast-wrapper-"+site).append(toast);
            t("#toast-wrapper-"+site+" .toast:last").toast("show")
        }
    }
})(jQuery);