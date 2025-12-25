import QuantityButton from '../../componet/cardwrapper/quantitybutton/quantitybutton'
import Navbar from '../../componet/navbar/navbar'
import OrderButton from '../../componet/orderButton/orderButton'
import { useCart } from '../../hook/CartContext'
import './cart.css'

const Cart = () => {
  const { cart, removeFromCart } = useCart();

  const totalSum = cart.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);

  return (
    <div className='body'>
      <div className='container containerCart'>
        <Navbar />

        <div className="cardsWrapperInCart">
          {cart.map(item => (
            <div className="productCartWrapper" key={item.id}>
              <div className="cartImg">
                <img src={item.image} alt={item.title} />
                <div className="cartInfo cartForMobile">
                  <h1>{item.title}</h1>
                  <p>weight of: {item.weight}</p>
                  <p>price of: {item.price}</p>
                </div>
              </div>

              <div className="cartInfoBtn">
                <div className="cartInfo cartForDesctop">
                  <h1>{item.title}</h1>
                  <p>weight of: {item.weight}</p>
                  <p>price of: {item.price}</p>
                </div>

                <div className="cartBtn">
                  <button
                    className='btn removeBtn'
                    onClick={() => removeFromCart(item.id)}
                  >
                    remove
                  </button>

                  <QuantityButton product={item} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* TOTAL */}
        <h2>Total: ${totalSum}</h2>

        <OrderButton />
      </div>
    </div>
  );
};

export default Cart;
