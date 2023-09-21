import { useDispatch } from 'react-redux';

import styles from './PostsList.module.css';
import { deletePost } from '../../reducers/postsSlice';
import { Post } from '../../types';
import { Button } from 'src/ui';

type PostsListProps = {
  posts: Post[];
  activePostId: string | null;
  onPostClick: (event: React.MouseEvent<HTMLElement>, postId: string) => void;
};

const PostsList: React.FC<PostsListProps> = ({
  posts,
  activePostId,
  onPostClick,
}) => {
  const dispatch = useDispatch();

  return (
    <div>
      {posts.length > 0 ? (
        posts.map((post: Post) => (
          <div
            className={`${styles.post} ${
              post.id === activePostId ? styles.active : ''
            }`}
            key={post.id}
            onClick={(event) => onPostClick(event, post.id)}
          >
            <h3>{post.name}</h3>
            <div className={styles.postBottomContainer}>
              <span>Comments: {post.comments.length}</span>
              <Button
                variant='secondary'
                onClick={() => dispatch(deletePost(post.id))}
              >
                Delete the post
              </Button>
            </div>
          </div>
        ))
      ) : (
        <div className={styles.placeholder}>
          There is no posts yet. Add a new post using the form above.
        </div>
      )}
    </div>
  );
};

export default PostsList;
