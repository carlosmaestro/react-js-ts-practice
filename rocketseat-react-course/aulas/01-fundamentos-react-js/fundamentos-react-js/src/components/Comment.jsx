import { ThumbsUp, Trash } from '@phosphor-icons/react/dist/ssr';
import styles from './Comment.module.css'
import { Avatar } from './Avatar';

export function Comment() {
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/carlosmaestro.png" />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Michelangelo</strong>
              <time title='4 de Janeiro às 19:46' dateTime='2024-02-04 19:46:00'>Cerca de 1h atrás</time>
            </div>
            <button title='Deletar comentário'>
              <Trash size={20} />
            </button>
          </header>
          <p>Muito bom Devon, parabéns!! 👏👏</p>
        </div>
        <footer>
          <button>
            <ThumbsUp size={24} />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>);
}
