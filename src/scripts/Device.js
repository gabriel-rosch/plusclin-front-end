export function verifyMobile() {
    var userAgent = navigator.userAgent.toLowerCase();
    var devices = new Array('nokia', 'iphone', 'blackberry', 'sony', 'lg',
        'htc_tattoo', 'samsung', 'symbian', 'SymbianOS', 'elaine', 'palm',
        'series60', 'windows ce', 'android', 'obigo', 'netfront',
        'openwave', 'mobilexplorer', 'operamini');

    for (var i = 0; i < devices.length; i++) {
        if (userAgent.search(devices[i]) > 0) {
            return true;
        }
    }
    return false;
}

export function className() {
    if (verifyMobile()) {
      return "mobile";
    } else {
       return "web";
    }
}
