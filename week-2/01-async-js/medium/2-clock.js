function timer() {
  console.clear();
  const now = new Date();

  const hours24 = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  console.log(`${hours24}:${minutes}:${seconds}`);
}
setInterval(() => {
  timer();
}, 1000);
