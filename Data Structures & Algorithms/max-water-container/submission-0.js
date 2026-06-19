class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let left = 0 ; 
        let right = heights.length - 1; 
        let maxWater = -Infinity
        while(left < right){
            let height = Math.min(heights[left] , heights[right])
            
            
            let width = right - left ;
           

            maxWater = Math.max((height * width) , maxWater)
            
            if(heights[left] < heights[right])
            {
                left++
            }
            else{
                right--
            }

        }

        return maxWater
    }
}
