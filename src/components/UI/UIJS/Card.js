import classes from '../../../components/Cart/CartCSS/Cart.module.css';

const Card = (props) => {
  return <div className={classes.card}>{props.children}</div>;
};

export default Card;
