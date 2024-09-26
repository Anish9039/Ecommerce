import React from 'react';
import styled from 'styled-components';

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
  text-align: center;
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
  gap: 4;
   border: 1px solid black;
  border-radius: 1px;
`;

const CheckoutButton = styled(UpdateButton)`
  padding: 10px;
  text-align: center;
  width: 100%;
  
`;

// Main Component
const Cart = () => {
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
          <TableRow>
            <TableCell><ProductImage src="monitor.png" alt="LCD Monitor" /></TableCell>
            <TableCell>$650</TableCell>
            <TableCell>
              <QuantitySelect>
                <option value="1">01</option>
                <option value="2">02</option>
                <option value="3">03</option>
              </QuantitySelect>
            </TableCell>
            <TableCell>$650</TableCell>
          </TableRow>

          <TableRow>
            <TableCell><ProductImage src="gamepad.png" alt="Gamepad" /></TableCell>
            <TableCell>$550</TableCell>
            <TableCell>
              <QuantitySelect>
                <option value="1">01</option>
                <option value="2">02</option>
                <option value="3">03</option>
              </QuantitySelect>
            </TableCell>
            <TableCell>$1100</TableCell>
          </TableRow>
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

      <CartTotalSection  >
        <TotalRow>
          <span>Subtotal:</span>
          <br></br>
          <span>$1750</span>
        </TotalRow>
        <TotalRow>
          <span>Shipping:</span>
          <span>Free</span>
        </TotalRow>
        <TotalRow>
          <strong>Total:</strong>
          <strong>$1750</strong>
        </TotalRow>
        <CheckoutButton>Proceed to Checkout</CheckoutButton>
      </CartTotalSection>

    </Container>
  );
};

export default Cart;
