'use client';

import { useRef } from 'react';
import { Button } from '@/components/button/button';
import classes from './todo-action.module.css';

export const TodoAction = ({ addTask }) => {
  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (!inputRef.current.value.trim()) return;
    const value = inputRef.current.value.trim();
    addTask(value);
  };

  const inputRef = useRef(null);

  return (
    <div className={classes['todo-action']}>
      <p>Add a new task</p>
      <form onSubmit={onSubmitHandler} className={classes['todo-action__form']}>
        <label htmlFor="todo-action-input">
          <input
            required
            id="todo-action-input"
            type="text"
            placeholder="Write some action"
            ref={inputRef}
          />
          <span className="sr-only">Todo Name</span>
        </label>
        <Button type="submit">Add</Button>
      </form>
    </div>
  );
};
