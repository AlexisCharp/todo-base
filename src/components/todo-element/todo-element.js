import Image from 'next/image';
import { Button } from '@/components/button/button';
import classes from './todo-element.module.css';
import deleteIcon from '../../../public/delete.svg';

export const TodoElement = ({ id, name, deleteTask }) => {
  return (
    <div className={classes['todo-element']}>
      <label className={classes['todo-element__form']} htmlFor={id}>
        <input
          id={id}
          type="checkbox"
          className={classes['todo-element__input']}
        />
        {name}
      </label>
      <Button onClick={() => deleteTask(id)}>
        <Image src={deleteIcon} alt="Delete the element" />
      </Button>
    </div>
  );
};
