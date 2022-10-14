const responses = {
    "best_singer": "Taylor Swift",
    "albums/Taylor Swift": ["1989", "Red", "Fearless"],
    "song_list/1989": ["Blank Space", "Shake it Off", "All You Had to Do Was Stay"],
}

function webRequest(api, callback) {
    setTimeout(() => {
        callback(responses[api]);
    }, 1000);
}