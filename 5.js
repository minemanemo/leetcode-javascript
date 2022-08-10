/**
 * Given a string s, return the longest palindromic substring in s
 * 
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if (s.length === 0) return '';
    let longest = '';
    for (let i = 0; i < s.length; i++) {
        let odd = findPalindrome(s, i, i);
        let even = findPalindrome(s, i, i + 1);
        longest = odd.length > even.length ? odd : even;
    }
    return longest;
};

var findPalindrome = function(s, i, j) {
    while (i >= 0 && j < s.length && s[i] === s[j]) {
        i--;
        j++;
    }
    return s.slice(i + 1, j);
}