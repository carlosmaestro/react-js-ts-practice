import styles from './Post.module.css'

export function Post() {

  // console.log(props);
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img className={styles.avatar} src="https://github.com/carlosmaestro.png" />
          <div className={styles.authorInfo}>
            <strong>Michelangelo</strong>
            <span>Developer</span>
          </div>
        </div>

        <time title='4 de Janeiro às 19:46' dateTime='2024-02-04 19:46:00'>Publicado há 1h</time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
        <p>👉 <a href="#"> jane.design/doctorcare</a></p>
        <p><a href="#"> #novoprojeto #nlw #rocketseat</a></p>
      </div>
    </article>
  );
}
