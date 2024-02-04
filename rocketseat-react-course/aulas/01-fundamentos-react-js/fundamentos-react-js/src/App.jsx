import { Post } from './components/Post';
import { Header } from './components/Header';

import styles from './App.module.css';
import './global.css';
import { Sidebar } from './components/Sidebar';

export function App() {

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Armando"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam quod earum sit. Accusantium ducimus illo fuga inventore error ullam maiores dolores sunt nihil voluptate obcaecati iure eum doloribus, ut labore?" />
          <Post />
          <Post
            author="Luiz"
            content="Accusantium ducimus illo fuga inventore error ullam maiores dolores sunt nihil voluptate obcaecati iure eum doloribus, ut labore?" />
          <Post />
        </main>
      </div>
    </div>
  )
}

