// * testing sort options
// const months = ['March', 'Jan', 'Feb', 'Dec'];
// months.sort();
// console.log(months);
// output: Array ["Dec", "Feb", "Jan", "March"]

// const array1 = [1, 30, 4, 21, 100000];
// array1.sort((a, b) => b - a);
// console.log(array1);
// output: Array [100000, 30, 21, 4, 1]

// const items = ['réservé', 'premier', 'communiqué', 'café', 'adieu', 'éclair'];
// items.sort((a, b) => a.localeCompare(b));
// console.log(items);
// output: Array ["adieu", "café", "communiqué", "éclair", "premier", "réservé"]

// const objs = [{id: 2}, {id: 5}, {id: 3}, {id: 1}, {id: 4}];
// objs.sort((a, b) => a.id - b.id);
// console.log(objs);
// output: Array [Object { id: 1 }, Object { id: 2 }, Object { id: 3 }, Object { id: 4 }, Object { id: 5 }]

// const sortDesc = (array) => array.sort((a, b) => b - a);

// const sortAsc = (array) => array.sort((a, b) => a - b);


export const sortBy = (event, stateUpdate) => stateUpdate(event.currentTarget.value); 
