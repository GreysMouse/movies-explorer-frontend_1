import './textbox.css';
import './textbox__header.css';
import './textbox__text.css';

function TextBox(props) {
  return (
    <div className="textbox">
      <p className={ "textbox__header " + props.titleClass }>{props.title}</p>
      <p className={ "textbox__text " + props.textClass }>{props.text}</p>
    </div>
  );
}

export default TextBox;
