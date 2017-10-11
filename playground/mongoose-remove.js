const { ObjectID } = require('mongodb');

const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
const { User } = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//   console.log('Removed todos', result);
// });
//
// Todo.findOneAndRemove
// Todo.findByIdAndRemove('59dd70c91ff2b96cb515e184').then((todo) => {
//   console.log(todo);
// });

Todo.findOneAndRemove({text: "Something to do"}).then((todo) => {
  console.log(todo);
})
