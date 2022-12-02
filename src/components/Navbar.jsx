import { Link } from 'react-router-dom';
import Badge from '@mui/material/Badge';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import React from "react";
import styled from "styled-components";
import { Iphone,mobile } from "../responsive";

const Container = styled.div`
  height: 60px;
  ${Iphone({ height: "50px" })}
  ${mobile({ height: "60px" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${Iphone({ padding: "10px 0px" })}
  
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  ${mobile({ display:"none" })}
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${Iphone({ display: "none" })}
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
  
  ${Iphone({ width: "50px" })}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled(Link)`
  font-size: 28px ; 
  text-decoration: none;
  color: black;
  font-weight: bold;
  ${Iphone({ fontSize: "24px" })}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${Iphone({ flex: 2, justifyContent: "center" })}
`;


const MenuItem = styled(Link)`
  font-size: 14px;
  cursor: pointer;
  color:black;
  text-decoration: none;
  margin-left: 25px;
  ${Iphone({ fontSize: "12px", marginLeft: "10px" })}
`;




const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search" />
            <SearchOutlinedIcon style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo to="/">SCRUBS</Logo>
        </Center>
        <Right>
          <MenuItem to="/register" >
            REGISTER
          </MenuItem>
          <MenuItem to="/login">SIGN IN</MenuItem>
          <MenuItem to="/cart">
            <Badge badgeContent={2} color="primary">
              <ShoppingCartOutlinedIcon />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;



