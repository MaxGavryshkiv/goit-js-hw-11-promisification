const users = [
  { name: 'Mango', active: true },
  { name: 'Poly', active: false },
  { name: 'Ajax', active: true },
  { name: 'Lux', active: false },
];

const toggleUserState = (allUsers, userName) => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(updatedUsers(allUsers, userName));
    }, 0);
  });
  return promise;
};

function updatedUsers(allUsers, userName) {
  return allUsers.map(user =>
    user.name === userName ? { ...user, active: !user.active } : user,
  );
}

const logger = updatedUsers => console.table(updatedUsers);

toggleUserState(users, 'Mango').then(logger);
toggleUserState(users, 'Lux').then(logger);
