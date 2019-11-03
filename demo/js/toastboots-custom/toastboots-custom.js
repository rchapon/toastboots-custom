/*!
 * toastboots-custom v1.0.0 (https://github.com/rchapon/toastboots-custom)
 * Copyright 2019 Rafael Ricardo Rivas Chapon (rchapon) <ricardochapon@gmail.com>
 * Licensed under MIT (https://github.com/rchapon/toastboots-custom/blob/master/LICENSE)
 */

(function(t){
    t.toast=function(toast){
        var site      = (toast.site != undefined && toast.site != "")?toast.site:"body",
            title     = (toast.title != undefined && toast.title != "" ) ? toast.title :"Notice!",
            tbg       = (toast.titleBg != undefined && toast.titleBg != "" ) ? toast.titleBg :"bg-primary",
            ttc       = (toast.titleTc != undefined && toast.titleTc != "" ) ? toast.titleTc :"text-white",
            subtitle  = (toast.subtitle != undefined && toast.subtitle != "") ? toast.subtitle :"Now",
            stc       = (toast.subtitleTc != undefined && toast.subtitleTc != "") ? toast.subtitleTc :"text-white",
            timestc   = (toast.timesTc != undefined && toast.timesTc != "") ? toast.timesTc :"text-light",
            content   = (toast.content != undefined && toast.content != "") ? toast.content :"Hello World, this is a toast",
            cbg       = (toast.contentBg != undefined && toast.contentBg != "") ? toast.contentBg :"bg-white",
            ctc       = (toast.contentTc != undefined && toast.contentTc != "") ? toast.contentTc :"text-dark",
            animation = (toast.animation != undefined && toast.animation != "") ? toast.animation :"true",
            autohide  = (toast.autohide != undefined && toast.autohide != "") ? toast.autohide :"true",
            delay     = (toast.delay != undefined && toast.delay != "") ? toast.delay :3000,
            width     = (toast.width != undefined && toast.width != "") ? toast.width : "auto",
            type      = (toast.type != undefined && toast.type != "") ? toast.type : "",
            posy      = (toast.posy != undefined && toast.posy != "") ? toast.posy : 'top:0',
            posx      = (toast.posx != undefined && toast.posx != "") ? toast.posx : 'right:0';

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
        var siteL = (site == 'body')? site : "#"+site,
            posyparts = posy.split(':'),
            posxparts = posx.split(':');
        t(siteL).find("#toast-container-"+site).length||
            (t(siteL).prepend('<div id="toast-container-'+site+'" aria-live="polite" aria-atomic="true"></div>'),t("#toast-container-"+site).append('<div id="toast-wrapper-'+site+'" style="position: absolute; z-index: 19999;"></div>'));

        toast='<div class="toast" role="alert" aria-live="assertive" aria-atomic="true" data-animation="'+animation+'" data-autohide="'+autohide+'" data-delay="'+delay+'" style="width:'+width+';" >'+('<div class="toast-header '+tbg+" "+ttc+'">')+('<strong class="mr-auto">'+title+"</strong>");toast+='<small class="'+stc+'">'+subtitle+"</small>";toast+='<button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">';
        toast+='<span aria-hidden="true" class="'+timestc+'">&times;</span>';
        toast+="</button>";
        toast+="</div>";
        ""!==content&&(toast+='<div class="toast-body '+cbg+" "+ctc+'">',toast+=content,toast+="</div>");
        toast+="</div>";
        if (posyparts[0] == 'bottom') {
            t("#toast-wrapper-"+site).css("top", "");
        } else {
            t("#toast-wrapper-"+site).css("bottom", "");
        }
        if (posxparts[0] == 'left') {
            t("#toast-wrapper-"+site).css("right", "");
        } else {
            t("#toast-wrapper-"+site).css("left", "");
        }
        t("#toast-wrapper-"+site).css(posyparts[0], posyparts[1]+"px");
        t("#toast-wrapper-"+site).css(posxparts[0], posxparts[1]+"px");
        t("#toast-wrapper-"+site).append(toast);
        t("#toast-wrapper-"+site+" .toast:last").toast("show")
    }
})(jQuery);