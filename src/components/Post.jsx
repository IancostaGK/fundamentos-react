import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { useState } from "react";
import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import styles from "./post.module.css";

export function Post({ author, publishedAt, content }) {
  const [comments, setComments] = useState([]);
  const [newCommentText, setNewCommentText] = useState("");

  const publishedDateFormatted = format(
    publishedAt,
    "d 'de' LLLL 'às' HH:mm'h'",
    {
      locale: ptBR,
    }
  );

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

  function handleCrateNewComment(event) {
    event.preventDefault();
    setComments([
      ...comments,
      {
        content: newCommentText,
        likes: 0,
        publishedAt: new Date(),
      },
    ]);
    setNewCommentText("");
  }

  function handleDeleteComment(index) {
    setComments(comments.filter((_, i) => i !== index));
  }

  function handleNewCommentChange(event) {
    setNewCommentText(event.target.value);
  }

  function handleLikePost(index) {
    const updatedComments = comments.map((comment, i) => {
      if (i === index) {
        return {
          ...comment,
          likes: comment.likes + 1,
        };
      }

      return comment;
    });

    setComments(updatedComments);
  }

  const isNewCommentEmpty = !newCommentText.length;

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time
          title={publishedDateFormatted}
          dateTime={publishedAt.toISOString()}
        >
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {content.map(({ type, content }) => {
          if (type === "paragraph") {
            return <p key={content}>{content}</p>;
          } else if (type === "link") {
            return (
              <p key={content}>
                <a href="#">{content}</a>
              </p>
            );
          }
        })}
      </div>

      <form onSubmit={handleCrateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea
          placeholder="Deixe seu comentario"
          value={newCommentText}
          onChange={handleNewCommentChange}
          required
        />
        <footer>
          <button type="submit" disabled={isNewCommentEmpty}>
            Publicar
          </button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map(({ content, likes, publishedAt }, i) => {
          return (
            <Comment
              key={content}
              content={content}
              likes={likes}
              publishedAt={publishedAt}
              handleDeleteComment={() => handleDeleteComment(i)}
              handleLikePost={() => handleLikePost(i)}
            />
          );
        })}
      </div>
    </article>
  );
}
