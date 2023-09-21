import { useState } from 'react';
import { useDispatch } from 'react-redux';

import styles from './AddPostForm.module.css';
import { addPost } from '../../reducers/postsSlice';
import { Button, Input } from 'src/ui';

const AddPostForm = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState('');

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (name) {
      dispatch(addPost(name));
      setName('');
    }
  };

  const onChangeInput = (event: React.FormEvent<HTMLInputElement>) => {
    const element = event.currentTarget as HTMLInputElement;
    const value = element.value;
    setName(value);
  };

  return (
    <form onSubmit={onSubmit}>
      <Input
        className={styles.input}
        required
        value={name}
        onChange={(event) => onChangeInput(event)}
      />
      <Button type='submit'>Add new post</Button>
    </form>
  );
};

export default AddPostForm;
