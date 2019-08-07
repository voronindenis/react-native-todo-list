// @flow
import uuidv4 from 'uuid/v4';

export const TODO_LIST_MOCK = [
  {
    key: uuidv4(),
    title: 'Create UI for Todo List App',
    category: 'important',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`,
    expirationDate: '10-11-2019 12:00',
    isDone: true,
  },
  {
    key: uuidv4(),
    title: 'Create server for Todo List App',
    category: 'important',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`,
    expirationDate: '10-11-2019 12:00',
    isDone: false,
  },
  {
    key: uuidv4(),
    title: 'Create data base for Todo List App',
    category: 'important',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`,
    expirationDate: '10-11-2019 12:00',
    isDone: false,
  },
];
