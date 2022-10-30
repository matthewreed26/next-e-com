export interface IProduct {
  id: string;
  name: string;
  price: number;
  url: string;
  description: string;
}

interface IProductProps {
  product: IProduct;
}

const Product = (props: IProductProps) => {
  return (
    <div>
      <h2>{props.product.name}</h2>
      <div>{props.product.description}</div>
      <div className="product__price-button-container">
        <div>${props.product.price.toFixed(2)}</div>
        <button
          className={`snipcart-add-item`}
          data-item-id={props.product.id}
          data-item-name={props.product.name}
          data-item-price={props.product.price}
          data-item-url={props.product.url}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default Product;
