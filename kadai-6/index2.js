const str1 ="abc"
const str2 = "'abc'"
const str3 = '"abc"'
const str4 ='{"a": undefined}'
const str5 ='{"a":123}'
const str6 = '{a: 123}'


//JSONとして有効でないため
//abc という文字列は正しい　JSONではないから
// 正しくは　"abc"

console.log(JSON.stringify(str1))
console.log(JSON.stringify(str2))
