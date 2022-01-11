import classes from "./card.module.css";
const card = (props) => {
  return (
    <section className={`${props.className} ${classes.card}`}>
      {props.children}
    </section>
  );
};
export default card;
