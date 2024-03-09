import Image from 'next/image';
import { Button } from '@/components/button/button';
import classes from './todo-element.module.css';
import deleteIcon from '../../../public/delete.svg';

export const TodoElement = ({ id, name, deleteTodo }) => {
  return (
    <div className={classes['todo-element']}>
      <label className={classes['todo-element__form']}>
        <input
          type="checkbox"
          className={classes['todo-element__input']}
        ></input>
        {name}
      </label>
      <Button onClick={() => deleteTodo(id)}>
        <Image src={deleteIcon} alt="Delete the element" />
      </Button>
    </div>
  );
};
