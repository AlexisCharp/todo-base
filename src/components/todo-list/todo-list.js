'use client';

import { useState } from 'react';
import { TodoAction } from '@/components/todo-action/todo-action';
import { TodoElement } from '@/components/todo-element/todo-element';
import classes from './todo-list.module.css';

export const TodoList = () => {
  const [todos, setTodos] = useState([]);

  const addTask = (taskName) => {
    const newId = todos.length === 0 ? 1 : todos[todos.length - 1].id + 1;

    setTodos((prev) => [
      ...prev,
      { id: newId, name: taskName, checked: false },
    ]);
  };

  const deleteTask = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  return (
    <div className={classes['todo-list']}>
      <h2>Todo List</h2>
      <TodoAction addTask={addTask} />
      {todos.map((todo) => (
        <TodoElement
          id={todo.id}
          name={todo.name}
          key={todo.id}
          deleteTask={deleteTask}
        />
      ))}
    </div>
  );
};
