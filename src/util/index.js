const getQueryString = function() {
    var queryString = (location.search.length) ? location.search.substring(1) : '';
    var args = {};
    var items = queryString.split('&');
    var item = null,
        name = null,
        value = null;
    if (items) {
        for (var i = 0, len = items.length; i < len; i++) {
            item = items[i].split('=');
            name = decodeURIComponent(item[0]);
            value = decodeURIComponent(item[1]);
            args[name] = value;
        }
    } else {}
    return args;
}

exports = {
    getQueryString
}