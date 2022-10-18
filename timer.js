const args = process.argv.slice(2);
const timer = function() {
  for (let i = 0; i < args.length; i++) {
    setTimeout(() => {
      process.stdout.write("\u0007");
      console.log("beep");
    }, args[i] * 1000);
  }
};
timer();
