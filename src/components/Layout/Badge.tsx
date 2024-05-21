import styles from "./badge.module.css";

interface BgProps {
  color: "g1" | "b1" | "gr1" | "bp" | "gs" | "r1";
}

export default function Badge(props: BgProps) {
  const { color } = props;
  return (
    <div className={styles[`${color}_badge`]}>
      <p className="b4_medium">스몰챗가능</p>
    </div>
  );
}

