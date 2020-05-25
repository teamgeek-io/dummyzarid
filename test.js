function calculateCheckDigit(digitsAsString) {
  const digits = digitsAsString.replace(/\D/g, '').split('').map(d => Number(d))
  const checkSum = digits.reverse().map((d, ix) => {
    if (ix % 2 === 0) {
      d *= 2
      if (d > 9) {
        d -= 9
      }
    }
    return d
  }).reduce((memo, d) => memo += d, 0)
  return checkSum * 9 % 10
}

console.log("12345abc" , calculateCheckDigit("12345abc"))
console.log("1728378274" , calculateCheckDigit("1728378274"))
console.log("872847gcsah2783471" , calculateCheckDigit("872847gcsah2783471"))
console.log("93718237177284" , calculateCheckDigit("93718237177284"))
