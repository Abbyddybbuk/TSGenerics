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

const mergedObj = merge(
  {
    name: "Abhijeet",
    profession: "Software Engineer",
    hobbies: ["Documentaries", "Gaming", "Driving"],
  },
  { carType: "SUV" }
);
console.log(mergedObj.profession);

const mergedObj2 = merge(
  { surname: "Kulshreshtha", city: "Gwalior", address: ["G1", "G2", "G3"] },
  { color: "Wheatish" }
);
console.log(mergedObj2.surname);

function merge2<T extends Object, U extends Object>(objA: T, objB: U) {
  // Here T can only be an object and so do U also you can T extends string|number
  return Object.assign(objA, objB);
}

const mergedObj3 = merge(
  {
    name: "Abhijeet",
    profession: "Software Engineer",
    hobbies: ["Documentaries", "Gaming", "Driving"],
  },
  { carType: "SUV" }
);
console.log(mergedObj.profession);

const mergedObj4 = merge(
  { surname: "Kulshreshtha", city: "Gwalior", address: ["G1", "G2", "G3"] },
  { color: "Wheatish" }
);
console.log(mergedObj2.surname);

interface Lengthy {
  length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let descriptionText = "Got No Value";
  if (element.length === 1) {
    descriptionText = "Got 1 Element";
  } else if (element.length > 1) {
    descriptionText = "Got " + element.length + " elements.";
  }

  return [element, descriptionText];
}

console.log(countAndDescribe(["Yahoo"]));
// console.log(countAndDescribe(10));This is not possible because number does not have length property

function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  //It means U has to be key of T
  return "Value: " + obj[key];
}

extractAndConvert({ name: "Abhijeet" }, "name"); // if you do not pass name as 2nd parameter then you will get an error as 2nd parameter has toe be property of object passed
// in first param
