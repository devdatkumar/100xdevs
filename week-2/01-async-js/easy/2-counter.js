function timer() {
  console.clear();
  console.log(new Date().toLocaleString());
  setTimeout(timer, 1000);
}

timer();
