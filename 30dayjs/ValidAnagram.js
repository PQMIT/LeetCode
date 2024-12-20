var isAnagram = (s, t) => {
    if (s.length !== t.length) {
        return false; // Nếu chiều dài khác nhau, không phải anagram
    }
    const s1 = s.split('');
    const t1 = t.split('');
    s1.sort();
    t1.sort();
    const s2 = s1.join('');
    const t2 = t1.join('');
    return s2 === t2; // Trả về true nếu giống nhau, false nếu không
};

console.log(isAnagram('anagram', 'nagaram')); // true
