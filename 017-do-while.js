let username;

do {
    username = window.prompt(`Enter username:`);
} while (username == `` || username == null)

console.log(`Hello, ${username}`)

