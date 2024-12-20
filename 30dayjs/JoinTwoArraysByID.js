/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */

var join = function (arr1, arr2) {
    let inventory = [...arr1, ...arr2];

    const grouped = inventory.reduce((acc, item) => {
        if (!acc[item.id]) {
            acc[item.id] = { ...item };
        } else {
            acc[item.id] = { ...acc[item.id], ...item };
        }
        return acc;
    }, {});
    console.log(grouped);

    // Convert the grouped object into an array
    return Object.values(grouped);
};

const arr1 = [
    { id: 1, x: 2, y: 3 },
    { id: 2, x: 3, y: 6 },
];
const arr2 = [
    { id: 2, x: 10, y: 20 },
    { id: 3, x: 0, y: 0 },
];

console.log(join(arr1, arr2));
