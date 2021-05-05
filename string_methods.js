// 20 string methods in JS

var str1 = "My name is Limon.HelloWorld"
var str2 = "I am a Textile Engineering Student.I am a frontend developer.I also a Backend developer"
var str3 = str1.concat(str2)

// charAt()  ==> Specify the index of character
console.log(str1.charAt(3))
console.log("\n")


// charCodeAt() ==> Specify the unicode of the index of character
console.log(str1.charCodeAt(3))
console.log("\n")


// concat()  ==> join two strings
console.log(str1.concat(str2))
console.log("\n")



// endsWith()  ==> checks the last string or character. It gives true or false
console.log(str1.endsWith('Limon'))
console.log("\n")


// fromCharCode()  ==> convert unicode values to charactera
console.log(String.fromCharCode(110))
console.log("\n")



// includes() ==> checks a character or string is includes in sentence
console.log(str2.includes("Textile"))
console.log("\n")


// indexOf()  ==> checks the characters index from the first character
console.log(str3.indexOf('end'))
console.log("\n")


// lastIndexOf() ==> checks the characters index from the last character
console.log(str3.lastIndexOf("end"))
console.log("\n")


// match()  ==> checks a word is how many times availabe in the strings
console.log(str3.match(/Limon/g))
console.log('\n')


// repeat() ==> repeat the whole string.
console.log(str1.repeat(2))
console.log("\n")


// replace() ==> replace a word by another word in string
console.log(str3.replace(/end/g,"END"))
console.log("\n")


// search() ==> search the index of word in string
console.log(str1.search("My"))
console.log("\n")


// slice() ==> takes start and end index values to collect a specific item in a string
console.log(str1.slice(11,16))
console.log("\n")


// split()
console.log(str1.slice(16).split("."))
console.log("\n")


// substr()
console.log(str1.substr(3,8))
console.log("\n")


// subString()
console.log(str1.substring(3,7))
console.log("\n")


//tolowerCase()
console.log(str1.toLowerCase())
console.log("\n")


// toupperCase()
console.log(str1.toUpperCase())
console.log("\n")


// trim --> it removes all the white or blank spaces from the strings
var str4 = "                Hello World"
console.log(str4)
console.log(str4.trim())