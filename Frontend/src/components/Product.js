import "./Product.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToWishList } from "../redux/actions/wishlistActions";
import { withRouter } from "react-router-dom";

const Product = ({ imageUrl, brand, price, name, productId, history }) => {
  const dispatch = useDispatch();

  const addToWishListHandler = () => {
    dispatch(addToWishList(productId));
    history.push(`/wishItems`);
  };

  return (
    <Link className="product m-3" as={Link} to={`/product/${productId}`}>
      <div className="text-end row">
        <div data-testId="wishlist">
          <Link
            className="bg-white wishlisticon"
            onClick={addToWishListHandler}
          >
            <i className="bi bi-heart"></i>
          </Link>
          <img src={imageUrl} alt={name} width={100} />
        </div>
      </div>
      <div className="product_info text-center row">
        <p className="fw-bold text-dark info_brand">{brand}</p>
        <Link
          to={`/product/${productId}`}
          className="info_name text-decoration-none text-dark"
        >
          {name.substring(0, 32)}...
        </Link>
        <p className="info__price fw-bold m-2">{price} Points</p>
      </div>
    </Link>
  );
};

export default withRouter(Product);
