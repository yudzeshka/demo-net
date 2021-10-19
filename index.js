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

console.log(randomDate(new Date(2012, 0, 1), new Date()).toJSON().split("T")[0]);



import fetch from 'node-fetch';

const apiBase = 'http://localhost:3000';

const Endpoints = {
  users: '/users',
};

const getUsers = async () => {
  const response = await fetch(`${apiBase}${Endpoints.users}`);
  const users = await response.json();

  return users;
};

const addUser = async (user) => {
  const newUserResponse = await fetch(`${apiBase}${Endpoints.users}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json;charset=utf-8' },
    body: JSON.stringify(user),
  });

  const result = await newUserResponse.json();
  return result;
};
const fnArr = ['Andrea', 'Emilie', 'Sharon', 'Bujar', 'Florival', 'Laure', 'Olivia', 'Zaide', 'Felix', 'Oswin'];
const lnArr = ['Sørensen', 'Kanestrøm', 'Hart', 'Arnaud', 'Monteiro', 'Giraud', 'Omahony', 'Moraes', 'Singh', 'Schurig']
const main = async () => {
  console.log(await getUsers());

  const user = {

    firstName: 'John',
    lastName: 'Doe',
    birthDate: '1995-05-23', // between 13 - 18
  };

  console.log(await addUser(user));
};

main().then();



function randomNumber(arr) {
   return arr[Math.floor(Math.random() * arr.length)];
}

console.log(randomNumber(fnArr));