function knapsack(obj, max_cost) {
    var arr = [];
    for(key in obj) {
        arr.push({ c: obj[key][0], b: obj[key][1], n: key });
    }
    
    arr.sort(function(a,b) {
        if(a.a == b.b) { 
            return a.c - b.c;
        }
        return b.b - a.b; 
    });
    var memo = {};
    let ret = knap(arr, max_cost, 0, memo);
    console.log(Object.keys(memo).length + " calls.");

    for(var i=0; i<ret[0].length; i++) {
        ret[0][i] = arr[ret[0][i]].n;
    }

    return ret;
}
