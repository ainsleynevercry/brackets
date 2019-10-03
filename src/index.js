module.exports = function check(str, bracketsConfig) {

  let chars = str.split('');
  let stack = [];

  if ((chars.length % 2) !== 0) return false;

  for (let i = 0; i < chars.length; i++) {
    for (let j = 0; j < bracketsConfig.length; j++) {
      if (chars[i] === bracketsConfig[j][1] && stack[stack.length - 1] === bracketsConfig[j][0]) {
        stack.pop(chars[i])
      } else if (chars[i] === bracketsConfig[j][0]) {
        stack.push(chars[i])
      }
    }
  }
  return stack.length === 0;
}