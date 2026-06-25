class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    sortColors(nums) {
        const hashColors = {}

        for(let i = 0; i < nums.length; i++){
            hashColors[nums[i]] = 1 + (hashColors[nums[i]] || 0)
        }
        console.log(hashColors)

        let index = 0
        for(let i = 0; i < 3; i++){
            while(hashColors[i]-- > 0){
                nums[index++] = i
            }
        }

        return nums
    }
}
