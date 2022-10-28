process.argv.forEach(function (val, index, array) {
  console.log(index + ': ' + val);
});

let verbose = false

if (process.argv.length < 3) {
    console.log("Enter a password")
} else if (process.argv[3] === "-v") {
    console.log("Entering verbose mode...")
    verbose = true
}

let chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"

function brute() {
    let password = process.argv[2]
    let guess = ""
    let i = 0
    while (guess !== password) {
        guess = ""
        let index = i
        while (index > 0) {
            guess = chars[index % chars.length] + guess
            index = Math.floor(index / chars.length) - 1
        }
        if (verbose) {
            console.log(guess)
        }
        i++
    }
    return guess
}

let start = Date.now()
console.log("Password found: " + brute())
console.log("Time taken: " + (Date.now() - start) + "ms")
