import React from 'react';

import styles from './CommentsList.module.css';
import { Comment } from '../../types';

type CommentsListProps = {
  comments: Comment[];
};

const CommentsList: React.FC<CommentsListProps> = ({ comments }) => {
  return (
    <div>
      {comments.length > 0 ? (
        comments.map((comment: Comment) => (
          <div className={styles.comment} key={comment.id}>
            <div
              style={{
                backgroundColor: comment.color,
              }}
              className={styles.commentAvatar}
            />
            <span>{comment.text}</span>
          </div>
        ))
      ) : (
        <div className={styles.placeholder}>
          There is no comments in selected post. Add a new comment using the
          form above.
        </div>
      )}
    </div>
  );
};

export default CommentsList;
