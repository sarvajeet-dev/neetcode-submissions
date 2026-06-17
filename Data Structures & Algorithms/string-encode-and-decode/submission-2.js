class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let finalStrs = ""
        for (let i = 0; i < strs.length; i++) {
            let length = strs[i].length
            finalStrs = finalStrs + length + "#" + strs[i]
        }
        return finalStrs
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let pointer = 0
        let arr = []
        while(pointer < str.length){

            let j = pointer
            while( str[j] !== "#"){
                j++
            }

            let length = Number(str.slice( pointer , j))
            let word = str.slice(j+1 , j+1+length)


            arr.push(word)
            pointer = j + 1 + length
        }
        return arr
    }
}
