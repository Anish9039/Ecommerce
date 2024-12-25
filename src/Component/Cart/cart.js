import React from 'react';
import styled from 'styled-components';
import { useCart } from '../Exploreproduct/Cartcontext'; // Import CartContext to use the cart data
import { useNavigate } from 'react-router-dom';
import Maindetail from '../Billing/Maindetail';



// Main Component
const Cart = () => {
  const { cartItems, setCartItems } = useCart();

  const navigate = useNavigate();


  const proceedToBilling = () => {
    navigate('/maindetail'); // Navigate to Billing Details
  };



  // Handler to update the quantity of a cart item
  const handleQuantityChange = (e, id) => {
    const newQuantity = parseInt(e.target.value);

    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  // Calculate the subtotal based on the cart items
  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => total + item.netRate * item.quantity, 0);
  };


  
// Styled components
const Container = styled.div`
display: flex;
flex-direction: column;
padding: 20px;
gap: 40px;
width: 100%;
max-width: 1170px;
margin: 0 auto;
`;

const Table = styled.table`
width: 100%;
border-collapse: collapse;
box-shadow: 0px 1px 13px rgba(0, 0, 0, 0.05);
`;

const TableHeader = styled.th`
padding: 15px;
text-align: left;
border-bottom: 1px solid #ddd;
font-weight: 600;
font-size: 16px;
font-family: 'Poppins', sans-serif;
`;

const TableRow = styled.tr`
border-bottom: 1px solid #ddd;
`;

const TableCell = styled.td`
padding: 15px;
vertical-align: middle;
font-family: 'Poppins', sans-serif;
font-size: 16px;
`;

const ProductImage = styled.img`
width: 60px;
height: 60px;
object-fit: cover;
`;

const QuantitySelect = styled.select`
padding: 5px;
border: 1px solid #ccc;
border-radius: 4px;
`;

const ButtonSection = styled.div`
display: flex;
justify-content: space-between;
gap: 10px;
`;

const Button = styled.button`
padding: 10px 20px;
border: 1px solid #ccc;
border-radius: 4px;
background-color: white;
cursor: pointer;
font-family: 'Poppins', sans-serif;
font-size: 16px;

&:hover {
  background-color: #f9f9f9;
}
`;

const UpdateButton = styled(Button)`
background-color: #f05454;
color: white;
border: none;

&:hover {
  background-color: #d94444;
}
`;

const CouponSection = styled.div`
display: flex;
gap: 10px;
align-items: center;
`;

const CouponInput = styled.input`
padding: 10px;
border: 1px solid #ccc;
border-radius: 4px;
font-family: 'Poppins', sans-serif;
`;

const ApplyButton = styled(Button)`
background-color: #f05454;
color: white;
border: none;

&:hover {
  background-color: #d94444;
}
`;

const CartTotalSection = styled.div`
display: flex;
flex-direction: column;
padding: 20px;
border: 1px solid #ccc;
border-radius: 4px;
background-color: #f9f9f9;
font-family: 'Poppins', sans-serif;
width: 300px;
`;

const TotalRow = styled.div`
display: flex;
justify-content: space-between;
padding: 5px 0;
font-size: 16px;
`;

const CheckoutButton = styled(UpdateButton)`
padding: 10px;
text-align: center;
width: 100%;
`;

  return (
    <Container>
      <Table>
        <thead>
          <tr>
            <TableHeader>Product</TableHeader>
            <TableHeader>Price</TableHeader>
            <TableHeader>Quantity</TableHeader>
            <TableHeader>Subtotal</TableHeader>
          </tr>
        </thead>
        <tbody>
          {cartItems.length === 0 ? (
            <TableRow>
              <TableCell colSpan="4">Your cart is empty.</TableCell>
            </TableRow>
          ) : (
            cartItems.map((item, index) => (
              <TableRow key={item.id}>
                <TableCell> 
                  <ProductImage src={item.image} alt={item.name} />
                </TableCell>
                <TableCell>${item.netRate}</TableCell>
                <TableCell>
                  <QuantitySelect
                    value={item.quantity}
                    onChange={(e) => handleQuantityChange(e, item.id)}  // Attach handler here
                  >
                    {[...Array(10).keys()].map(num => (
                      <option key={num + 1} value={num + 1}>
                        {num + 1}
                      </option>
                    ))} 
                  </QuantitySelect>
                </TableCell>
                <TableCell>${item.netRate * item.quantity}</TableCell>
              </TableRow>
            ))
          )}
        </tbody>
      </Table>

      <ButtonSection>
        <Button>Return To Shop</Button>
        <UpdateButton>Update Cart</UpdateButton>
      </ButtonSection>

      <CouponSection>
        <CouponInput type="text" placeholder="Coupon Code" />
        <ApplyButton>Apply Coupon</ApplyButton>
      </CouponSection>

      <CartTotalSection>
        <TotalRow>
          <span>Subtotal:</span>
          <span>${calculateSubtotal()}</span>
        </TotalRow>
        <TotalRow>
          <span>Shipping:</span>
          <span>Free</span>
        </TotalRow>
        <TotalRow>
          <strong>Total:</strong>
          <strong>${calculateSubtotal()}</strong>
        </TotalRow>
         <CheckoutButton  onClick={proceedToBilling} >Proceed to Checkout</CheckoutButton>
       

      </CartTotalSection>
    </Container>
  );
};

export default Cart;
