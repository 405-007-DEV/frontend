import styles from "./button.module.css";

interface BtnProps {
  className: "default" | "active" | "disabled";
  text: string;
  onClickBtn?: React.MouseEventHandler<HTMLDivElement>;
}

export default function Button(props: BtnProps) {
  const { className, text, onClickBtn} = props;
  return (
    <div className={styles[`${className}`]} onClick={onClickBtn}>
      <p className='b1_bold'>{text}</p>
    </div>
  );
}

