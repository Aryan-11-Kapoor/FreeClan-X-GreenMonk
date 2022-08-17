import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import {useSelector,useDispatch} from "react-redux";
import {Link} from 'react-router-dom';
import {logout} from "../redux/userSlice";
import {useNavigate} from "react-router-dom";
const Container = styled.div`
  height: 60px;
  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
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
  ${mobile({ width: "50px" })}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: "24px" })}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;
const navbar_magic=styled.div`
height: 60px;
position: relative;
background:var(--heaven);
${mobile({ height: "50px" })};
'&::after':{
  content:'';
  display:block;
  width:100%;
  height:69px;
  background-image:url(../icons/shadow.svg);
  background-repeat: no-repeat;
  background-position: center;
  position: absolute;
  bottom:-22px;
  z-index:-1;
  }
  '&::after'
  
`;

const Navbar = () => {
  const quantity = useSelector(state=>state.cart.quantity)
  const dispatch= useDispatch();
  const navigate = useNavigate();
  const handlelogout=(e)=>{
    e.preventDefault();
    dispatch(logout());

    navigate("/login")
  }
  const handleregister=(e)=>
  {
    navigate("/register");
  }
  const handlelogin=(e)=>
  {
    navigate("/login");
  }
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search" />
            <Search style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>LAMA.</Logo>
        </Center>
        <Right>
          <MenuItem onClick={handlelogout}>Logout</MenuItem>
          
          <MenuItem onClick={handleregister}>REGISTER</MenuItem>
          
          <MenuItem onClick={handlelogin}>SIGN IN</MenuItem>
          <Link to="/cart">
          <MenuItem>
            <Badge badgeContent={quantity} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </MenuItem></Link>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
