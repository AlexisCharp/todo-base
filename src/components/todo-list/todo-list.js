'use client';

import { useState } from 'react';
import { TodoAction } from '@/components/todo-action/todo-action';
import { TodoElement } from '@/components/todo-element/todo-element';
import classes from './todo-list.module.css';
import { saveToLocalStorage } from '@/utils/local-storage-manager';

export const TodoList = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todoName) => {
    setTodos((oldTodos) => [
      ...oldTodos,
      { id: todos.length + 1, name: todoName, checked: false },
    ]);
  };

  const deleteTodo = (id) => {
    const newTodos = todos
      .filter((todo) => todo.id !== id)
      .map((todo, index) => ({ ...todo, id: index + 1 }));
    setTodos(newTodos);
  };

  return (
    <div className={classes['todo-list']}>
      <h2>Todo List</h2>
      <TodoAction addTodo={addTodo} />
      {todos.map(({ id, name }) => {
        return (
          <TodoElement key={id} id={id} name={name} deleteTodo={deleteTodo} />
        );
      })}
    </div>
  );
};
