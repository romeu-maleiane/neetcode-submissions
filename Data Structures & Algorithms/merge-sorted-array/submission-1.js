class Solution {
    /**
     * @param {number[]} nums1
     * @param {number} m
     * @param {number[]} nums2
     * @param {number} n
     * @return {void} Do not return anything, modify nums1 in-place instead.
     */
    merge(nums1, m, nums2, n) {
        let d = 0
        for(let i = 0; i < nums1.length; i++){
            if(nums1[i] == 0 && d !== n){
                nums1[i] = nums2[d++]
            }
        }

        nums1.sort((a, b) => a - b)
    }
}
