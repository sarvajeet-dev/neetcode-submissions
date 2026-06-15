class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let map = new Map();
        let ans = []

        for(let i = 0 ; i < strs.length ; i++){
            let sortedVal = strs[i].split('').sort().join('')
            
            if(!map.has(sortedVal)){
                let arr = []
                arr.push(strs[i])
              
                map.set(sortedVal , arr)
            }

            else{
               map.get(sortedVal).push(strs[i])
            }
            
            
        }



        for(let [key , value] of map){
            ans.push(value)
        }
        return ans
    }
}
