import Image from 'next/image';
import deleteIcon from '../../../public/delete.svg';
import { TodoAction } from '@/components/todo-action/todo-action';
import { TodoElement } from '@/components/todo-element/todo-element';
import { Button } from '@/components/button/button';

export const TodoList = () => {
  return (
    <div>
      <h2>Todo List</h2>
      <TodoAction />
      <TodoElement />
    </div>
  );
};
