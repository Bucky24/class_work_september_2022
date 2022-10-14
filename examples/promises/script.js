// use webRequest to call apis, it takes the api, then a callback that provides the result
// our apis are:
// best_singer
// albums/{{ singer name }}
// song_list/{{ album name }}
/*
webRequest("best_singer", function(singerName) {
    webRequest("albums/" + singerName, function(albums) {
        webRequest("song_list/" + albums[0], function(songs) {
            webRequest("lyrics/" + songs[0], function(lyrics) {
                // i can render html
            });
        });
    });
});
*//*
function webRequestPromise(api) {
    var promise = new Promise((resolve) => {
        webRequest(api, resolve);
    });

    return promise;
}


var promise = webRequestPromise("best_singer");
console.log(promise);

promise.then(function(singerName) {
    console.log(singerName);
});*/
/*.then(function(singerName) {
    return webRequestPromise("albums/" + singerName);
}).then(function(albums) {
    return webRequestPromise("song_list/" + albums[0]);
}).then(function(songs) {
    console.log(songs);
})*/

var promise = new Promise((resolve) => {
    setTimeout(() => {
        resolve(1);
    }, 500);
});

var newNumb;
var newNumbSet = false;

promise.then(function(numb) {
    return numb + 1;
}).then(function(numb) {
    return numb + 1;
}).then(function(numb) {
    return numb + 1;
}).then(function(numb) {
    return numb + 1;
}).then(function(numb) {
    return numb + 1;
}).then(function(numb) {
    //console.log(numb);
    setNewNumb(numb);
});

function setNewNumb(number) {
    newNumb = number;
    newNumbSet = true;
}

function handleButtonClick2() {
    if (!newNumbSet) {
        return;
    }
}

if (name == "Bob") {
    promise.then()
}

/*
promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("the web hates what you did");
    }, 500);
});

promise.then(function(data) {
    console.log(data);
}).catch(function(err) {
    console.error(err);
});
*/