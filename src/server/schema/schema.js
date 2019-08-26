const graphql = require('graphql');
const TodoListModel = require('../models/todo-list-scheme');
const CategoriesListModel = require('../models/categories-list-scheme');

const {
  GraphQLObjectType, GraphQLString, GraphQLBoolean, GraphQLSchema,
  GraphQLID, GraphQLList, GraphQLNonNull, GraphQLInt,
} = graphql;

const CategoryType = new GraphQLObjectType({
  name: 'Category',
  fields: () => ({
    id: { type: GraphQLID },
    text: { type: new GraphQLNonNull(GraphQLString) },
    taskList: {
      type: new GraphQLList(TodoItemType), /* eslint no-use-before-define:0 */
      resolve(parent) {
        return TodoListModel.find({ categoryId: parent.id });
      },
    },
  }),
});

const TodoItemType = new GraphQLObjectType({
  name: 'TodoItem',
  fields: () => ({
    id: { type: GraphQLID },
    title: { type: new GraphQLNonNull(GraphQLString) },
    category: {
      type: CategoryType,
      resolve(parent) {
        return CategoriesListModel.findById(parent.categoryId);
      },
    },
    description: { type: new GraphQLNonNull(GraphQLString) },
    expirationDate: { type: new GraphQLNonNull(GraphQLString) },
    isDone: { type: new GraphQLNonNull(GraphQLBoolean) },
  }),
});

const Query = new GraphQLObjectType({
  name: 'Query',
  fields: {
    todoItem: {
      type: TodoItemType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return TodoListModel.findById(args.id);
      },
    },
    category: {
      type: CategoryType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return CategoriesListModel.findById(args.id);
      },
    },
    todoList: {
      type: new GraphQLList(TodoItemType),
      resolve() {
        return TodoListModel.find({});
      },
    },
    todoItemsCount: {
      type: GraphQLInt,
      resolve() {
        return TodoListModel.countDocuments();
      },
    },
    categoriesList: {
      type: new GraphQLList(CategoryType),
      resolve() {
        return CategoriesListModel.find({});
      },
    },
  },
});

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addTodoItem: {
      type: TodoItemType,
      args: {
        title: { type: new GraphQLNonNull(GraphQLString) },
        categoryId: { type: GraphQLID },
        description: { type: new GraphQLNonNull(GraphQLString) },
        expirationDate: { type: new GraphQLNonNull(GraphQLString) },
        isDone: { type: new GraphQLNonNull(GraphQLBoolean) },
      },
      resolve(parent, args) {
        const todoListItem = new TodoListModel({
          title: args.title,
          categoryId: args.categoryId,
          description: args.description,
          expirationDate: args.expirationDate,
          isDone: args.isDone,
        });
        return todoListItem.save();
      },
    },
    addCategory: {
      type: CategoryType,
      args: {
        text: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve(parent, args) {
        const category = new CategoriesListModel({
          text: args.text,
        });
        return category.save();
      },
    },
    deleteTodoItem: {
      type: TodoItemType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return TodoListModel.findByIdAndRemove(args.id);
      },
    },
    deleteCategory: {
      type: CategoryType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return CategoriesListModel.findByIdAndRemove(args.id);
      },
    },
    updateTodoItem: {
      type: TodoItemType,
      args: {
        id: { type: GraphQLID },
        title: { type: new GraphQLNonNull(GraphQLString) },
        categoryId: { type: GraphQLID },
        description: { type: new GraphQLNonNull(GraphQLString) },
        expirationDate: { type: new GraphQLNonNull(GraphQLString) },
        isDone: { type: new GraphQLNonNull(GraphQLBoolean) },
      },
      resolve(parent, args) {
        return TodoListModel.findByIdAndUpdate(
          args.id,
          {
            $set: {
              title: args.title,
              categoryId: args.categoryId,
              description: args.description,
              expirationDate: args.expirationDate,
              isDone: args.isDone,
            },
          },
          { new: true },
        );
      },
    },
    updateCategory: {
      type: CategoryType,
      args: {
        id: { type: GraphQLID },
        text: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve(parent, args) {
        return CategoriesListModel.findByIdAndUpdate(
          args.id,
          { $set: { text: args.text } },
          { new: true },
        );
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: Query,
  mutation: Mutation,
});
