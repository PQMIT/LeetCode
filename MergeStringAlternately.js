var word1 = "abcdg";
var word2 = "pqrst";
var mergeAlternately = function (word1, word2) {
    let result = "";
    let i = 0;
    while (i < word1.length && i < word2.length) {
        result += word1[i] + word2[i];
        i++;
    }
    result += word1.slice(i) + word2.slice(i);
    return result;
};
console.log(mergeAlternately(word1, word2));
