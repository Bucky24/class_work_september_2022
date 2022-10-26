const url = "https://something.com/api/v1/blah?ingredient=<ingredient>";

function callToGetThing(ingredient) {
    var fullUrl = url.replace("<ingredient>", ingredient);

    console.log(fullUrl);
}

callToGetThing("chips");
callToGetThing("cheese");