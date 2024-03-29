import React, { useEffect, useState } from "react";
import Modal from "../Modal/Modal";
import CartItem from "./CartItem";
import OrderSuccess from "../OrderSuccess";
const Cart = ({ cart, items, onhandleEvent }) => {
  const [modal, setModal] = useState(false);
  const [handleOrder, setHandleOrder] = useState(false);
  const handleModal = () => {
    setModal((previousValue) => !previousValue);
  };
  const handleOrderModal = () => {
    setModal(false);
    setHandleOrder(false);
  };

  return (
    <div>
      <button onClick={handleModal}>
        <span data-items={cart}>Cart</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-shopping-cart-plus"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="white"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <circle cx="6" cy="19" r="2" />
          <circle cx="17" cy="19" r="2" />
          <path d="M17 17h-11v-14h-2" />
          <path d="M6 5l6.005 .429m7.138 6.573l-.143 .998h-13" />
          <path d="M15 6h6m-3 -3v6" />
        </svg>
      </button>
      {modal && (
        <Modal onClose={handleModal}>
          <div className="checkout-modal">
            <h2>Checkout Modal</h2>
            <div className="checkout-modal_list">
              {cart > 0 ? (
                items.map((item, index) => {
                  return (
                    <CartItem
                      data={item}
                      key={items.id}
                      onEmitDecreaseItem={(id) => onhandleEvent(id, -1)}
                      onEmitIncreaseItem={(id) => onhandleEvent(id, 1)}
                    />
                  );
                })
              ) : (
                <div className="empty-cart">
                  Please add something in your cart
                </div>
              )}
            </div>
            {cart > 0 && (
              <div className="checkout-modal_footer">
                <div className="totalAmount">
                  <h4>Total Amount:</h4>
                  <h4>
                    {items.reduce((accumulator, currentItem) => {
                      const subtotal =
                        currentItem.quantity * currentItem.discountedPrice;

                      return accumulator + subtotal;
                    }, 0)}
                    <span>INR</span>
                  </h4>
                </div>
                <button
                  onClick={() => {
                    setHandleOrder(!handleOrder);
                    setModal(false);
                  }}
                >
                  Order Now
                </button>
              </div>
            )}
          </div>
        </Modal>
      )}
      {handleOrder && (
        <>
          <OrderSuccess onClose={handleOrderModal} />
        </>
      )}
    </div>
  );
};

export default Cart;
