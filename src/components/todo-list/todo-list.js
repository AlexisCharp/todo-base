import { TodoAction } from '@/components/todo-action/todo-action';
import { TodoElement } from '@/components/todo-element/todo-element';
import classes from './todo-list.module.css';

export const TodoList = () => {
  return (
    <div className={classes['todo-list']}>
      <h2>Todo List</h2>
      <TodoAction />
      <TodoElement />
    </div>
  );
};
