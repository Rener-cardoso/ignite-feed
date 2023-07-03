import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';
import { Avatar } from './Avatar';
import { useState } from 'react';

interface CommentProps {
  content: string;
  removeComment: (comment: string) => void;
}

export function Comment({ content, removeComment }: CommentProps) {
  const [likeCount, setLikeCount] = useState(0)

  function handleRemoveComment() {
    removeComment(content)
  }

  function handleLikeComment() {
    const addLike = likeCount + 1

    setLikeCount(addLike)
  }

  return (
    <div className={styles.comment}>
      <Avatar
       hasBorder={false} 
       src="https://github.com/maykbrito.png" 
      />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Mayk Brito</strong>
              <time title='23 de Junho às 17:09h' dateTime='2023-06-23 17:07:30'>Cerca de 1h atrás</time>
            </div>

            <button onClick={handleRemoveComment} title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}