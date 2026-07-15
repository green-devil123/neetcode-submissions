class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s: string): number {
        const set = new Set<string>();

        let left = 0;
        let maxLength = 0;

        for (let right = 0; right < s.length; right++) {

            // Shrink window until duplicate is removed
            while (set.has(s[right])) {
                set.delete(s[left]);
                left++;
            }

            // Add current character
            set.add(s[right]);

            // Update answer
            maxLength = Math.max(maxLength, right - left + 1);
        }

        return maxLength;
    }
}
