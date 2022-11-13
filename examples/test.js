function sleep(seconds) {
    return new Promise((resolve, reject) => {
        setTimeout(reject, seconds * 1000);
    });
}

sleep(0.1).then(() => {
    console.log("sleep is over");
    return sleep(0.1);
}).then(() => {
    console.log("sleep two is over");
    return sleep(0.1);
}).then(() => {
    console.log("sleep three is over");
}).catch(() => {
    console.log("project was rejected");
});