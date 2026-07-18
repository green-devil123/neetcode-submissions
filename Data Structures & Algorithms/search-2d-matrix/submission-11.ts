class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix: number[][], target: number): boolean {
        let m=matrix.length, n = matrix[0].length, low = 0, high = m*n-1;
        while(low<=high){
            const mid = Math.floor((low+high)/2); 
            const r = Math.floor(mid/n); 
            const c = mid%n; 
            if(matrix[r][c] === target) return true;
            if(matrix[r][c] > target){
                high = mid-1; 
            }else{
                low  = mid+1; 
            }
        }
        return false;
    }
}
