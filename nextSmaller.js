function nextSmaller(n) {
    var numArr = String(n).split("")

    var combinations = []

    function generate(arr, size, n) { //heaps algorithm
        if (size == 1) {
            combinations.push(arr.join(""))
        } else {
            for (var i = 0; i < size; i++) {
                generate(arr, size - 1, n)
                if (size % 2 == 1) {
                    var temp = arr[0]
                    arr[0] = arr[size - 1]
                    arr[size - 1] = temp
                } else {
                    var temp = arr[i]
                    arr[i] = arr[size - 1]
                    arr[size - 1] = temp
                }
            }
        }
        return combinations
    }
    
    var ans = generate(numArr, numArr.length, numArr.length).map(Number).sort((a, b) => b - a).filter(num => num < n)

    if (ans[0] == undefined || String(ans[0]).split("").length != String(n).length) {
         return -1
    }

    return ans[0]
}

