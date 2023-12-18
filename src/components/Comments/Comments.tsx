import React from 'react';
import CommentProps from '../../interfaces/comments';

//styles
import "./Comments.css"

const Comment: React.FC<CommentProps> = ({ id, imgSrc, name, content, likes, date }) => (
  <div className="fb-comments-wrapper">
    <table className="fb-comments-comment">
      <tbody>
        <tr>
          <td rowSpan={3} className="fb-comments-comment-img">
            <img
              loading="lazy"
              id={id}
              width={48}
              height={48}
              alt={`imagem ${id}`}
              src={imgSrc}
            />
          </td>
        </tr>
        <tr>
          <td className="fb-comments-comment-text">
            <p className="fb-comments-comment-name" style={{ color: "#365899", cursor: "pointer" }}>
              <strong>{name} disse:</strong>
            </p>
            <p>{content}</p>
          </td>
        </tr>
        <tr>
          <td className="fb-comments-comment-actions">
            <p>Curtir · Responder · {date} <p className='likes'>{likes}</p> </p>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
);

const ReplyComment: React.FC<CommentProps> = ({ id, imgSrc, name, content, likes, date }) => (
  <div className="fb-comments-reply-wrapper">
    <table className="fb-comments-comment">
      <tbody>
        <tr>
          <td rowSpan={3} className="fb-comments-comment-img">
            <img
              loading="lazy"
              id={id}
              width={48}
              height={48}
              alt={`imagem perfil ${id}`}
              src={imgSrc}
            />
          </td>
        </tr>
        <tr>
          <td className="fb-comments-comment-text">
            <p className="fb-comments-comment-name" style={{ color: "#365899", cursor: "pointer" }}>
              <strong>{name} disse:</strong>
            </p>
            <p>{content}</p>
          </td>
        </tr>
        <tr>
          <td className="fb-comments-comment-actions">
            <p>
              <p>Curtir · Responder · {date} <p className='likes'>{likes}</p> </p>
            </p>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
);

const CommentSection: React.FC = () => (
  <div className="comentarios">
    <div className="fakebook fb-comments">
      <section className="comments">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <h4>Exibindo 10 de 500 comentários</h4>
              <Comment
                id="1"
                imgSrc="src\assets\p1.webp"
                name="Alyssa Fragoso"
                content="Eu amo esse robozinhho hahah"
                likes="59"
                date="3 min"
              />
              <Comment
                id="1"
                imgSrc="src\assets\p2.webp"
                name="Armando Roriz"
                content="já inventaram de tudo agora kkk eu não botava fé mas funciona mesmo"
                likes="63"
                date="7 min"
              />
              <Comment
                id="1"
                imgSrc="src\assets\p3.webp"
                name="Claudio Fagundes"
                content="Graças a Deus encontrei algo que realmente funciona"
                likes="11"
                date="15 min"
              />
              <Comment
                id="1"
                imgSrc="src\assets\p4.webp"
                name="Helder Santos"
                content="Finalmente uma maneira simples de ganhar dinheiro com o celular!"
                likes="62"
                date="37 min"
              />
              <ReplyComment
                id="1"
                imgSrc="src\assets\p5.webp"
                name="Isis Bacelar"
                content="Sim kkkk e sem aquelas baboseiras de marketing multinivel e piramide"
                likes="88"
                date="40 min"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
);

export default CommentSection;