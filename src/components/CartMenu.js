import React from 'react'
import { Box, Button, Divider, IconButton, Typography } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import styled from "@emotion/styled";
import {
  decreaseCount,
  increaseCount,
  removeFromCart,
  setIsCartOpen,
} from ".././state";
import { useNavigate } from "react-router-dom";


const FlexBox = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CartMenu = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart.cart);
    const isCartOpen = useSelector((state) => state.cart.isCartOpen);
    const totalPrice = cart.reduce((total, item) => {
      return  total + item.count * item.price
       
    }, 0);
    
    return (
      <Box
        display={isCartOpen ? "block" : "none"}
        backgroundColor="rgba(0, 0, 0, 0.4)"
        position="fixed"
        zIndex={100}
        width="100%"
        height="100%"
        left="0"
        top="0"
        overflow="auto"
      >
        <Box
          position="fixed"
          right="0"
          bottom="0"
          width="max(400px, 30%)"
          height="100%"
          backgroundColor="white"
        >
          <Box padding="30px" overflow="auto" height="100%">
            {/* HEADER */}
            <FlexBox mb="15px">
              <Typography variant="h3">SEPETTEKİ ÜRÜNLER ({cart.length})</Typography>
              <IconButton onClick={() => dispatch(setIsCartOpen({}))}>
                <CloseIcon />
              </IconButton>
            </FlexBox>
  
            {/* CART LIST */}
            <Box>
              {cart.map((item) => (
                <Box key={item.id}>
                  <FlexBox p="15px 0">
                    <Box flex="1 1 40%">
                      <img
                        alt={item?.title}
                        width="123px"
                        height="164px"
                        src={`${item?.img}`}
                      />
                    </Box>
                    <Box flex="1 1 60%">
                      <FlexBox mb="5px">
                        <Typography fontWeight="bold">
                          {item?.title}
                        </Typography>
                        <IconButton
                          onClick={() =>
                            dispatch(removeFromCart({ id: item.id }))
                          }
                        >
                          <CloseIcon />
                        </IconButton>
                      </FlexBox>
                      <Typography>{item.title}</Typography>
                      <FlexBox m="15px 0">
                        <Box
                          display="flex"
                          alignItems="center"
                          border="1px solid black"
                          
                        >
                          <IconButton
                            onClick={() =>dispatch(decreaseCount({ id: item.id }))
                            } 
                          >
                            <RemoveIcon />
                          </IconButton>
                          <Typography>{item.count}</Typography>
                          <IconButton
                            onClick={() =>
                              dispatch(increaseCount({ id: item.id }))
                            }
                          >
                            <AddIcon />
                          </IconButton>
                        </Box>
                        <Typography fontWeight="bold">
                          ${item.price}
                        </Typography>
                      </FlexBox>
                    </Box>
                  </FlexBox>
                  <Divider />
                </Box>
              ))}
            </Box>
  
            {/* ACTIONS */}
            <Box m="20px 0">
              <FlexBox m="20px 0">
                <Typography fontWeight="bold">TOPLAM ÜCRET</Typography>
                <Typography fontWeight="bold">${(totalPrice).toFixed(2)}</Typography>
              </FlexBox>
              <Button
                sx={{
                  backgroundColor: "black",
                  color: "white",
                  borderRadius: 0,
                  minWidth: "100%",
                  padding: "20px 40px",
                  m: "20px 0",
                }}
                onClick={() => {
                  navigate("/");
                  dispatch(setIsCartOpen({}));
                }}
              >
                ONLİNE ÖDEME
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    );
  };
  
  export default CartMenu;