import { sortBy } from 'sort-by';
console.log('res');


const customers = [
    {
      id: 0,
      name: 'Bob',
      age: 33,
      contactDetails: {
        email: 'Bob@gmail.com',
      },
    },
    {
      id: 1,
      name: 'Alex',
      age: 45,
      contactDetails: {
        email: 'alex@gmail.com',
      },
    },
    {
      id: 2,
      name: 'Alex',
      age: 20,
      contactDetails: {
        email: 'Alex@gmail.com',
      },
    },
  ];

  console.log(customers.sort(sortBy('name', 'age')));