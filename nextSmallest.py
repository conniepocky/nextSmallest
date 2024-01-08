def next_smaller(num):
    arr = list(map(int, str(num)))

    print(num)

    combinations = []

    def heapPermutation(a, size):
        if size == 1:
            combinations.append("".join(map(str, a)))
    
        for i in range(size):
            heapPermutation(a, size-1)
  
            if size & 1:
                a[0], a[size-1] = a[size-1], a[0]
            else:
                a[i], a[size-1] = a[size-1], a[i]

    heapPermutation(arr, len(arr))

    print(combinations)

    ans = list(map(int, combinations))
    ans.sort(reverse=True)
    ans.remove(num)

    def isSmaller(a):
        if a < num:
            return True
        else:
            return False
        
    ans = list(filter(isSmaller, ans))

    return ans[0] if (ans) else -1

print(next_smaller(907))