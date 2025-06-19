import "./Button.scss";

const Button = ({ text, style }) => {
  return <button className={`Button ${style}`}>{text}</button>;
};

export default Button;
