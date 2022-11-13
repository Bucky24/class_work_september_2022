class MyErrorClass extends Error {

}

try {
    throw new Error("some thing");
} catch (error) {
    if (error instanceof MyErrorClass) {

    }
} 