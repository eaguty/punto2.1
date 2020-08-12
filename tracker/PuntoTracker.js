//Insert PageView al Arrancar
$(document).ready(function () {
    $.ajax({
        url: "/tracker/gather.ashx",
        //url: "/gather.ashx",
        type: "post",
        headers: { 'url': window.location.href, 'referrer': document.referrer, 'pt': document.title, 'qs': location.search, 'ua': navigator.userAgent}
        //data: "url=" + encodeURIComponent(window.location.href) + "&ua=" + navigator.userAgent + "&pt=" + document.title + "&qs=" + encodeURIComponent(location.search) + "&referrer=" + encodeURIComponent(document.referrer)
    })
    .done(function (data) {
    });
});

window.addEventListener('beforeunload', function (e) {
    $.ajax({
        //url: "/endsess.ashx",
        url: "/tracker/endsess.ashx",
        type: "post",
        //data: "url=" + encodeURIComponent(window.location.href) + "&ua=" + navigator.userAgent + "&pt=" + document.title + "&qs=" + encodeURIComponent(location.search) + "&referrer=" + encodeURIComponent(document.referrer)
    })
    .done(function (data) {
    });
});

function clickTrack(id,url,isModal) {
    $.ajax({
        url: "/iclick.aspx",
        data: "id=" + id
    })
    .done(function (data) {
    });
    if (!isModal) {
        window.location = url;
    }

}



$("*:not(body):not(html):not(form)").click(function (event) {
    //$("*").click(function (event) {

    $(this).addClass("pt-heatmapped");
    if ($(this).hasClass("pt-heatmapped")) {

        var e = window.event;
        var posX = window.pageXOffset + e.clientX;
        var posY = window.pageYOffset + e.clientY;
        var screenX = window.screen.width;
        var screenY = window.screen.height;
        $(this).removeClass("pt-heatmapped");
        var attrid = $(this).attr("id");
        var attrclass = $(this).attr("class");

        $.ajax({
            url: "/Ipageview.aspx",
            data: "op=1&url=" + encodeURIComponent(window.location.href)
             + "&evento=" + e.type + "&posx=" + posX + "&posy=" + posY + "&screenx=" + screenX + "&screeny=" + screenY
             + "&htmlid=" + attrid + "&htmlcssclass=" + attrclass
        })
        .done(function (data) {

        });
    }

});