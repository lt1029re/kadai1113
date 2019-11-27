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
try{
    const str1='{"a":123,'
    JSON.parse(str1)
}catch (arror){
    console.error(error)
    //JSONとして有効でないため
}
console.log(JSON.stringify(str2))
try{
    const str2='{"a":123,'
    JSON.parse(str2)
}catch (arror){
    console.error(error)
    //abc という文字列は正しい　JSONではないから　正しくは"abc"
}
console.log(JSON.stringify(str3))
try{
    const str3='{"a":123,'
    JSON.parse(str3)
}catch (arror){
    console.error(error)
    //JSONとして有効でないため
}
console.log(JSON.stringify(str4))
try{
    const str4='{"a":123,'
    JSON.parse(str4)
}catch (arror){
    console.error(error)
    //JSONとして有効でないため
}
console.log(JSON.stringify(str5))
try{
    const str5='{"a":123,'
    JSON.parse(str5)
}catch (arror){
    console.error(error)
    //JSONとして有効でないため
}
console.log(JSON.stringify(str6))
try{
    const str6='{"a":123,'
    JSON.parse(str6)
}catch (arror){
    console.error(error)
    //JSONとして有効でないため
}
