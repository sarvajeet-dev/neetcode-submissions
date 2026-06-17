class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let leftProduct = new Array(nums.length)
        let rightProduct = new Array(nums.length);
        let ans = new Array(nums.length)
        leftProduct[0] = 1
        rightProduct[nums.length-1] = 1;

        for(let i = 1 ; i < nums.length ; i++){
            leftProduct[i] = leftProduct[i-1] * nums[i-1] 
        }

        for(let i = nums.length-2 ; i >= 0 ;i--){
            rightProduct[i] = rightProduct[i+1] * nums[i+1]
        
        }
        for(let i = 0 ; i < nums.length ; i++){
            ans[i] = leftProduct[i] * rightProduct[i]
        }
        return ans
    }

}
