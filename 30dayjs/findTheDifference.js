var s = "abcd";
var t = "aabcde";

var findTheDifference = (s, t) => {
    s = Array.from(s);
    t = Array.from(t);
    let result = (s.filter(x => !t.includes(x)).concat(t.filter(x => !s.includes(x))));
    return result.toString();
}
console.log(findTheDifference(s, t));
