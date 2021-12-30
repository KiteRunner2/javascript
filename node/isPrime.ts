function isPrime(num: number): boolean {
  if (num === 1) return false
  if (num === 2) return true
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false
  }
  return true
}

for (let k = 1; k < 500000; k++) {
  console.log(`${k} is Prime? : ${isPrime(k)}`)
}
