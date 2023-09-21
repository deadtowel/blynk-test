import { useMemo, useState } from 'react';
import { useSelector } from 'react-redux';

import styles from './PostsFeature.module.css';
import { AddPostForm } from '../AddPostForm';
import { PostsList } from '../PostsList';
import { AddCommentForm } from '../AddCommentForm';
import { CommentsList } from '../CommentsList';
import { selectAllPosts } from '../../reducers/postsSlice';
import type { Post } from '../../types';

const PostsFeature = () => {
  const posts = useSelector(selectAllPosts);

  const [activePostId, setActivePostId] = useState<string | null>(null);

  const activePost = useMemo(
    () => posts.find((post: Post) => post.id === activePostId),
    [activePostId, posts],
  );

  const onPostClick = (
    event: React.MouseEvent<HTMLElement>,
    postId: string,
  ) => {
    event.stopPropagation();
    setActivePostId(postId);
  };

  return (
    <section className={styles.container}>
      <div>
        <h2>Posts</h2>
        <AddPostForm />
        <PostsList
          posts={posts}
          activePostId={activePostId}
          onPostClick={onPostClick}
        />
      </div>
      <div>
        <h2>Comments</h2>
        {activePostId ? (
          <div>
            {!!activePost && (
              <>
                <AddCommentForm postId={activePostId} />
                <CommentsList comments={activePost.comments} />
              </>
            )}
          </div>
        ) : (
          <div className={styles.placeholder}>Pick a post to show its comments.</div>
        )}
      </div>
    </section>
  );
};

export default PostsFeature;
