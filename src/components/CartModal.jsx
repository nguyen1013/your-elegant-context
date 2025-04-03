import { forwardRef } from 'react';
import { createPortal } from 'react-dom';
import Cart from './Cart';

const CartModal = ({ ref, title, actions }) => {

  return createPortal(
    <dialog ref={ref} id="modal" >
      <h2>{title}</h2>
      <Cart />
      <form method="dialog" id="modal-actions">
        {actions}
      </form>
    </dialog>,
    document.getElementById('modal')
  );
};

export default CartModal;
