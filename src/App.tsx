import styles from './App.module.css';
import { PostsFeature } from './features/posts/components';

const App = () => {
  return (
    <div className={styles.container}>
      <header>
        <h1 className={styles.heading}>Posts App</h1>
      </header>
      <main>
        <PostsFeature />
      </main>
    </div>
  );
};

export default App;
