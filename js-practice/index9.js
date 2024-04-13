var time = 0;
for(var i = 0; i < 10; i++) {
    setInterval(() => {
        if (time == 3) return clearInterval();
        console.log(i);
    }, 1000);
    time++;
}