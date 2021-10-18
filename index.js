console.log("aaaa");
// function randomDate(start, end) {
//   return new Date(
//     start.getTime() + Math.random() * (end.getTime() - start.getTime())
//   );
// }

// let data = randomDate(new Date(2012, 0, 1), new Date(2020, 1, 2));
// console.log(data);

function randomDate(start, end) {
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
}

console.log(randomDate(new Date(2012, 0, 1), new Date()));
