class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number[][]}
     */
    merge(intervals) {
        intervals.sort((a, b) => a[0] - b[0])
        let output = [intervals[0]]

        for(let i = 1; i < intervals.length; i++){
            let lastEnd = output[output.length - 1][1]
            if(intervals[i][0] <= lastEnd){
                output[output.length - 1][1] = Math.max(lastEnd, intervals[i][1])
            }
            else{output.push(intervals[i])}
        }

        return output
    }
}
