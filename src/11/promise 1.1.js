const promise1 = fetch("https://google.com/?query=js")
const promise2 = fetch("https://bing.com/?query=js")

//pending
//fulfilled
//reject
promise1
    .then((data1) => {
        console.log(data1.url)
    })
    .catch((err) => {
        console.warn(err)
    })

console.log(promise2) //pending
promise2
    .then((data2) => {
        // console.log(promise2)
        console.log(data2.url)
    })
    .catch((err) => {
        console.warn(err)
    })
    .finally(() => {
        console.log("finish")
    })

console.log("firstFinish")

const otherPromise = Promise.all([promise1, promise2])
const otherPromise2 = Promise.allSettled([promise1, promise2])
otherPromise
    .then((results) => {
        // console.log(results[0].url)
        // console.log(results[1].url)
        console.log(results[0].url + " " + results[1].url)
        console.log("finish all promises")
    })
    .catch(() => {
        console.log("initialization failed. Try later")
    })

otherPromise2
    .then((results) => {
        const res1 = results[0].status === "fulfilled"
            ? results[0].value
            : results[0].reason
        const res2 = results[1].status === "fulfilled"
            ? results[1].value
            : results[1].reason
        console.log(res1 + " " + res2)
    })