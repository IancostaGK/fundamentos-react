import styles from "./post.module.css";

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src="https://github.com/iancostagk.png"
          />
          <div className={styles.authorInfo}>
            <strong>Ian Santos</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title="15 de Maio as 11:13" dateTime="2024-05-15 11:13">
          Publicado há 1h
        </time>
      </header>

      <div className={styles.content}>
        <p>Fala Galera</p>

        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime,
          earum. Ad aliquid minima fuga dolores, facilis quo quaerat repellat,
          ut quam, animi unde fugit iure deserunt exercitationem? Temporibus,
          unde nisi?
        </p>

        <p>
          <a href="">ian.developer/javascript</a>
        </p>

        <p>
          <a href="">#novoprojeto</a> <a href="">#nlw</a>{" "}
          <a href="">#rocketseat</a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea placeholder="Deixe seu comentario" />
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>
    </article>
  );
}
