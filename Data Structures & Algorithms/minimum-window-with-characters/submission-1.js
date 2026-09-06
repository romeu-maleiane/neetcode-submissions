class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        if(t === '') return ''
        let countT = {}
        let res = [-1, -1]
        let resLength = Infinity

        for(let i = 0; i < t.length; i++){
            countT[t[i]] = (countT[t[i]] || 0) + 1
        }
        let need = Object.keys(countT).length

        let l = 0
        let window = {}
        let have = 0
        for(let r = 0; r < s.length; r++){
            let c = s[r]
            window[c] = (window[c] || 0) + 1

            if(countT[c] && window[c] == countT[c]){
                have++
            }

            while(have === need){
                if((r - l) + 1 < resLength){ 
                    res = [l,r]
                    resLength = (r - l) + 1
                }

                window[s[l]] -= 1
                if(countT[s[l]] && window[s[l]] < countT[s[l]]){
                    have--
                }
                l++
            }
        }

        return resLength === Infinity ? '' : s.slice(res[0], res[1] + 1)
    }
}
