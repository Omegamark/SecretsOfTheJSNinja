function multiMax(first, ...remainingNumbers) {
    var sorted = remainingNumbers.sort(function(a, b) {
        return b - a;
    });
    return first * sorted[0];
}

assert(multiMax(3,1,2,3) == 9, "3 * 3=9 (first arg, by largest.)");