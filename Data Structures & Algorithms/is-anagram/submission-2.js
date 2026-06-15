class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length) return false
        let sMap = new Map();
        let tMap = new Map();

        for(let i = 0 ; i < s.length ; i++){
            sMap.set(s[i] , (sMap.get(s[i]) || 0) + 1)
        }

        for(let i = 0 ; i < t.length ; i++){
            tMap.set(t[i] , (tMap.get(t[i]) || 0) + 1)
        }
        console.log(tMap , sMap)
        
        for(let i = 0 ; i < t.length ; i++){
            if(!sMap.has(t[i])){
                return false
            }
            else if(sMap.get(t[i]) !== tMap.get(t[i]) ) return false
            

            
        }

        return true
    }
}
