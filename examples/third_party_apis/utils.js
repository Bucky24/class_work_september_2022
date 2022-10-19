// from https://stackoverflow.com/a/1714899
const serialize = function(obj) {
    var str = [];
    for (var p in obj) {
        if (obj.hasOwnProperty(p)) {
            str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
        }
    }
    return str.join("&");
}

function getMovie(movie) {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': rapidAPIToken,
            'X-RapidAPI-Host': 'movie-database-alternative.p.rapidapi.com'
        }
    };

    const params = {
        s: movie,
        r: 'json',
        page: 1,
    };

    const paramsString = serialize(params);

    return fetch('https://movie-database-alternative.p.rapidapi.com/?' + paramsString, options)
        .then(response => response.json())
        .catch(err => console.error(err));
}