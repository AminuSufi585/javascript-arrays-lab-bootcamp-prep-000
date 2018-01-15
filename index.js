const app = "I don't do much."

function destructivelyAppendKitten(name) {
   kittens.push(name);
}

function destructivelyPrependKitten(name) {
   kittens.unshift(name);
}

function destructivelyRemoveLastKitten() {
   kittens.pop();
}

function destructivelyRemoveFirstKitten() {
   kittens.shift();
}

function appendKitten(name) {
   var arr = [...kittens, name];
   return arr;
}

function prependKitten(name) {
   var arr = [name, ...kittens];
   return arr;
}
