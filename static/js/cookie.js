function setCookie(name, value, days) {

    var d = new Date;

    d.setTime(d.getTime() + 24*60*60*1000*days);

    window.document.cookie = name + "=" + value + ";path=/;expires=" + d.toGMTString();

}

function getCookie(name) {

    var v = window.document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');

    return v ? v[2] : null;

}

function deleteCookie(name) {

    this.setCookie(name, '', -1);

}

