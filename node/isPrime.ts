function isPrime(num: number): boolean {
  if (num === 1) return false
  if (num === 2) return true
  const endIndex = Math.sqrt(num)
  for (let i = 2; i <= endIndex; i++) {
    if (num % i === 0) return false
  }
  return true
}

for (let k = 1; k < 20; k++) {
  console.log(`${k} is Prime? : ${isPrime(k)}`)
}
