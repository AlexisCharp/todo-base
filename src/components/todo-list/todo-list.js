'use client';

import { useEffect, useState } from 'react';
import { TodoAction } from '@/components/todo-action/todo-action';
import { TodoElement } from '@/components/todo-element/todo-element';
import { saveToLocalStorage, loadFromLocalStorage } from '@/utils/storage-util';
import classes from './todo-list.module.css';

export const TodoList = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const savedTodos = loadFromLocalStorage('todos') || [];
    setTodos(savedTodos);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      saveToLocalStorage('todos', todos);
    });
  }, [todos]);

  const addTask = (taskName) => {
    const newId = todos.length === 0 ? 1 : todos[todos.length - 1].id + 1;
    const newTodos = [...todos, { id: newId, name: taskName, checked: false }];
    setTodos(newTodos);
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
