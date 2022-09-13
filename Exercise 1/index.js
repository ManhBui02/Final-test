function check() {
  let a = document.getElementById("a").value;
  let b = document.getElementById("b").value;
  a = Number(a);
  b = Number(b);
  const result = [];
  for (let i = a; i <= b; i++) {
    if (checkPrime(i)) {
      result.push(i);
    }
  }
  alert(result);
}
function checkPrime(n) {
  if (n < 2) return false;
  if (n === 2) return true;
  for (i = 2; i < n; i++) {
    if (n % i == 0) return false;
  }
  return true;
}
