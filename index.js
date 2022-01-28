function jsonifyString(str, delim = '.') {
    if (str.trim() === 0) {
        return {};
    }
    const strArr = str.split(delim);
    if (strArr.length === 1) {
        return {[strArr[0]]: null};
    }
    /*
     * the initial approach
     *
    const mapToObject = (o1, o2) => {
        const o1Keys = Object.keys(o1);
        if (o1[o1Keys[0]] != null) {
            mapToObject(o1[o1Keys[0]], o2);
        } else {
            o1[o1Keys[0]] = o2;
        }
    };
    return strArr.map((v, i) => {
        return { [v]: null }
    }).reduce((o1, o2) => {
        mapToObject(o1, o2);
        return o1;
    });
    */

    // a much simpler approach
    const closedString = '{'  + strArr.map((v, i) => {
        return `"${v}"${i + 1 === strArr.length ? ': null' : ''}`
    }).join(':{') + new Array(strArr.length).fill('}').join('');
    return JSON.parse(closedString);
}

module.exports = jsonifyString;
