const obj1 = {
    foo: 'bar',
    key: 'value',
    key2: 'value2',
};

const foo = "barff";
const { foo: foo2, key, key2 } = obj1;

console.log(foo, foo2);

function doSomething({ foo }) {

}

doSomething(obj1);

const array1 = [1,2,3,4];

const [a, b, ...c] = array1;