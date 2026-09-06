class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
       let s1Freq = {}

       for(let i = 0; i < s1.length; i++){
        s1Freq[s1[i]] = (s1Freq[s1[i]] || 0) + 1
       }

       let freqNeed =  Object.keys(s1Freq).length

       for(let i = 0; i < s2.length; i++){
        let s2Freq = {}
        let freqMatch = 0
        for(let j = i; j < s2.length; j++){
            let c = s2[j]
            s2Freq[c] = (s2Freq[c] || 0) + 1

            if(!s1Freq[c]) break

            if(s2Freq[c] > s1Freq[c]) break

            if(s2Freq[c] === s1Freq[c]) freqMatch++

            if(freqMatch === freqNeed) return true
        }
       }
        
        return false
    }
}
