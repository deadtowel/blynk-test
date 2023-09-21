import { useState } from 'react';
import { useDispatch } from 'react-redux';

import styles from './AddCommentForm.module.css';
import { addComment } from '../../reducers/postsSlice';
import { Button, Input } from 'src/ui';

type AddCommentFormProps = {
  postId: string | null;
};

const AddCommentForm: React.FC<AddCommentFormProps> = ({ postId }) => {
  const dispatch = useDispatch();

  const [text, setText] = useState<string>('');
  const [color, setColor] = useState<string>('#000000');

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (postId && text && color) {
      dispatch(addComment({ postId, text, color }));
      setText('');
      setColor('#000000');
    }
  };

  const onChangeTextInput = (event: React.FormEvent<HTMLInputElement>) => {
    const element = event.currentTarget as HTMLInputElement;
    const value = element.value;
    setText(value);
  };

  return (
    <form onSubmit={onSubmit} className={styles.form}>
      <input
        type='color'
        value={color}
        className={styles.colorInput}
        onChange={(e) => setColor(e.target.value)}
        required
      />
      <Input
        type='text'
        value={text}
        onChange={(e) => onChangeTextInput(e)}
        required
      />
      <Button type='submit'>Add comment</Button>
    </form>
  );
};

export default AddCommentForm;
