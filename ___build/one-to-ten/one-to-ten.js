function oneToTen() {
  let num = 1;
  let timer = setInterval(() => {
    console.log(num);
    num++;
    if(num == 11) clearInterval(timer);
  }, 1000);

}

oneToTen();
