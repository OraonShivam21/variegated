function func(num) {
  if (num === 10) return 10;

  num++;
  arguments.callee(func(num));
}

func(1);
