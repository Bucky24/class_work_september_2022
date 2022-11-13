const people = [
    {
        name: 'bob',
        age: 42
    },
    {
        name: 'tom',
        age: 15
    },
    {
        name: 'jenny',
        age: 24,
    }
]

const count = people.reduce((counter, person) => {
    if (person.age < 30) {
        return counter;
    }

    return counter + 1;
}, 0);

console.log(count);