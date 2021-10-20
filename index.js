import fetch from 'node-fetch';

let addUsersCount = process.argv[2];

const apiBase = 'http://localhost:3000';

const Endpoints = {
  users: '/users',
};

class User {
  constructor() {
    this.firstName = randomNumber(fnArr);
    this.lastName = randomNumber(lnArr);
    this.birthDate = randomDate(new Date(2003, 10, 20), new Date(2008, 10, 20)).toJSON().split("T")[0];
  }
}

const fnArr = ['Andrea', 'Emilie', 'Sharon', 'Bujar', 'Florival', 'Laure', 'Olivia', 'Zaide', 'Felix', 'Oswin'];

const lnArr = ['Sørensen', 'Kanestrøm', 'Hart', 'Arnaud', 'Monteiro', 'Giraud', 'Omahony', 'Moraes', 'Singh', 'Schurig']

//---Get random date
function randomDate(start, end) {
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
}

//---Get random number
function randomNumber(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

//---Create and add new user
function createNewUser() {
  const user = new User();
  addUser(user)

}

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

const main = async () => {
  
  for (let i = 0; i < addUsersCount; i++) {
    createNewUser()
    }

  console.log(await getUsers());
};

main().then();