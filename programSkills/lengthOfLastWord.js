var lengthOfLastWord = function (s) {
  // console.log(s.trim(),s.trim().length);
  let a = s.trim();
  let j = a.length -1;
  while (j >= 0 && a[j] !== ' ') {
    // console.log(j);
      --j;
  }
  return a.length - 1 - j;
};

console.log(lengthOfLastWord("   fly me   to   the moon  "));
