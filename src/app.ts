// const names: Array<string> = [];// same as string[]
// // names[0].split('');

// const promise: Promise<string> = new Promise((resolve, reject) => {
//   setTimeout(() => {
//      resolve('10');
//   }, 2000);
// });

// promise.then(data => {
//     data.split(' ');
// });

function merge<T, U>(objA: T, objB: U) {
   return Object.assign(objA, objB);
}

const mergedObj = merge({name: 'Abhijeet', profession: 'Software Engineer', hobbies: ['Documentaries', 'Gaming', 'Driving']}, {carType: 'SUV'});
console.log(mergedObj.profession);

const mergedObj2 = merge({surname: 'Kulshreshtha', city: 'Gwalior', address: ['G1', 'G2', 'G3']}, {color: 'Wheatish'});
console.log(mergedObj2.surname);

function merge2<T extends Object, U extends Object>(objA: T, objB: U) {// Here T can only be an object and so do U also you can T extends string|number
    return Object.assign(objA, objB);
}

const mergedObj3 = merge({name: 'Abhijeet', profession: 'Software Engineer', hobbies: ['Documentaries', 'Gaming', 'Driving']}, {carType: 'SUV'});
console.log(mergedObj.profession);

const mergedObj4 = merge({surname: 'Kulshreshtha', city: 'Gwalior', address: ['G1', 'G2', 'G3']}, {color: 'Wheatish'});
console.log(mergedObj2.surname);