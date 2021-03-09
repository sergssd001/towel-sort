// You should implement your task here.

module.exports = function towelSort(matrix) {
    let arr = [];
    if(matrix == undefined || matrix.length == 0) return arr;
    matrix.forEach((item, i) => {
        if(i % 2 == 0 ) arr.push(...item);
        if(i % 2 > 0)  arr.push(...(item.reverse()));
    });
    return arr;
};
