/*write a function that capitalizes the first letter of every word in a given string*/

function capitalizeFirst(string) {
    var words = string.split(" ");

    for (var i=0;i<words.length;i++) {
        var word = words[i];
        var firstCharacter = word[0];
        firstCharacter = firstCharacter.toUpperCase();
        word = firstCharacter + word.substring(1);
        words[i] = word;
    }

    return words.join(" ");
}

console.log(capitalizeFirst("Now is the time for all good men to come to the aid of their people"));