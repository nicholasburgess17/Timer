const args = process.argv.slice(2);
const timer = function() {
  for (let i = 0; i < args.length; i++) {
    const delay = Number(args[i]);
    if (delay < 0 || isNaN(delay)) {
      continue;
    }
    setTimeout(() => {
      process.stdout.write("\u0007");
      console.log("beep", delay);
    }, delay * 1000);
  }
};
timer();
