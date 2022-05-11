function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms))
}

async function uppercaseString(s) {
    await sleep(2500)
    return s.toUpperCase()
}

uppercaseString("edward").then(console.log);
