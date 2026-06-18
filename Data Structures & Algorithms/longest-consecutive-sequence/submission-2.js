class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let set = new Set();
        let maxLength = 0
        for(let i = 0 ; i < nums.length ; i++){
            set.add(nums[i])
        }

        for(let val of set){
            let length = 0
            let current = val  
            if(!set.has(val - 1)){
                current = val;
                length++
                while(set.has(current+1)){
                    length++
                    current++
                }

                maxLength = Math.max(maxLength , length)
            }
           
        }

                    return maxLength
        
        
 
    }
}
