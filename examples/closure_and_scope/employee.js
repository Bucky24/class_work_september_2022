let nextId = 1;

function createEmployee(name) {
    return {
        id: nextId ++,
        name,
    };
}

module.exports = {
    createEmployee,
};