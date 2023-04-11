console.log(window); // Browsers: window wont work if is not running on a browser
console.log(global); // Node: global won't work if is not node
console.log(self); // Webworkers: self won't work if is not a webworker

console.log(globalThis); // globalThis will work on every JS environment
