const graphql = require('graphql');
const TodoList = require('../models/todo-list-scheme');
const CategoriesList = require('../models/categories-list-scheme');

const {
  GraphQLObjectType, GraphQLString, GraphQLBoolean, GraphQLSchema, GraphQLID, GraphQLList,
} = graphql;

const CategoryType = new GraphQLObjectType({
  name: 'Category',
  fields: () => ({
    id: { type: GraphQLID },
    text: { type: GraphQLString },
    taskList: {
      type: new GraphQLList(TodoItemType), /* eslint no-use-before-define:0 */
      resolve(parent) {
        return TodoList.find({ categoryId: parent.id });
      },
    },
  }),
});

const TodoItemType = new GraphQLObjectType({
  name: 'TodoItem',
  fields: () => ({
    id: { type: GraphQLID },
    title: { type: GraphQLString },
    category: {
      type: CategoryType,
      resolve(parent) {
        return CategoriesList.findById(parent.categoryId);
      },
    },
    description: { type: GraphQLString },
    expirationDate: { type: GraphQLString },
    isDone: { type: GraphQLBoolean },
  }),
});

const Query = new GraphQLObjectType({
  name: 'Query',
  fields: {
    todoItem: {
      type: TodoItemType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        console.log(TodoList.findById(args.id), args);
        return TodoList.findById(args.id);
      },
    },
    category: {
      type: CategoryType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return CategoriesList.findById(args.id);
      },
    },
    taskList: {
      type: new GraphQLList(TodoItemType),
      resolve() {
        return TodoList.find({});
      },
    },
    categoriesList: {
      type: new GraphQLList(CategoryType),
      resolve() {
        return CategoriesList.find({});
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: Query,
});
