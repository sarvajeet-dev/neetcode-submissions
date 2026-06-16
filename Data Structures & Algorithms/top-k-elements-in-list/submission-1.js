class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let map = new Map();
        let ans = [];
        let res = []
        for (let i = 0; i < nums.length; i++) {
            map.set(nums[i], (map.get(nums[i]) || 0) + 1)
        }

        for (let [key, value] of map) {
            ans.push([key, value])
        }

        ans.sort((a, b) => b[1] - a[1])


        
        for (let i = 0; i < k; i++) {
            res.push(ans[i][0])
        }

        return res

        

    }


}
