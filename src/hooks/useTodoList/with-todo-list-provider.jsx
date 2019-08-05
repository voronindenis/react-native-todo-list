// @flow
import * as React from 'react';
import { TodoListProvider } from './todo-list-provider';

const withTodoListProvider = (WrappedComponent: React.ComponentType<*>, props: any) => {
  return (
    <TodoListProvider>
      <WrappedComponent {...props} />
    </TodoListProvider>
  );
};

export function useOriginTodoListProvider(component: React.ComponentType<*>) {
  console.log('func', withTodoListProvider);
  return new Proxy(withTodoListProvider, {
    apply(target, thisArg, args) {
      console.log({
        target,
        thisArg,
        args,
        fullArgs: [component, ...args],
        r: target.apply(thisArg, [component, ...args]),
      });
      return target.apply(thisArg, [component, ...args]);
    }
  });
}
