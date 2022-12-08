import ArrowLeftOutlinedIcon from '@mui/icons-material/ArrowLeftOutlined';
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';
import { useState } from "react";
import styled from "styled-components";
import { sliderItems } from "../data";
import { Iphone } from "../responsive";
import {mobile } from "../responsive";

import { Link } from 'react-router-dom';

const Container = styled.div`
width: 100%;
height: 100vh;
display: flex;
position: relative;
overflow: hidden;
${Iphone({ display: "block" })}
`;

const Arrow = styled.div`
width: 50px;
height: 50px;
background-color: #fff7f7;
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;
position: absolute;
top: 0;
bottom: 0;
left: ${(props) => props.direction === "left" && "10px"};
right: ${(props) => props.direction === "right" && "10px"};
margin: auto;
cursor: pointer;
opacity: 0.5;
z-index: 2;
`;

const Wrapper = styled.div`
height: 100%;
display: flex;
transition: all 1.5s ease;
transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const Slide = styled.div`
width: 100vw;
height: 100vh;
display: flex;
align-items: center;
background-color: #${(props) => props.bg};
`;

const ImgContainer = styled.div`
height: 100%;
flex: 1;
${Iphone({ width: "100vw" })};
${mobile({ width: "100vw" })}
`;

const Image = styled.img`
height: 80%;
`;

const InfoContainer = styled.div`
flex: 1;
padding: 50px;
${Iphone({ display:"none" })};
${mobile({ display:"none" })}
`;

const Title = styled.h1`
font-size: 70px;
${Iphone({ display:"none" })};
${mobile({ display:"none" })}
`;

const Desc = styled.p`
margin: 50px 0px;
font-size: 20px;
font-weight: 500;
letter-spacing: 3px;
${Iphone({ display:"none" })};
${mobile({ display:"none" , overrflow:"hidden"})}

`;
const Button = styled.button`
padding: 10px;
font-size: 20px;
background-color: transparent;
cursor: pointer;
&:hover {
  transform: scale(1.05);
  letter-spacing: 2px;
}
transition : all 0.5s ease;
${Iphone({ display:"none" })};
${mobile({ display:"none" })}
`;

const Shop = styled(Link)`
font-size: 20px;
text-decoration: none;
color : black;
`

const Slider = () => {
const [slideIndex, setSlideIndex] = useState(0);
const handleClick = (direction) => {
if (direction === "left") {
  setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
} else {
  setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
}
};

return (
<Container>
  <Arrow direction="left" onClick={() => handleClick("left")}>
    <ArrowLeftOutlinedIcon />
  </Arrow>
  <Wrapper slideIndex={slideIndex}>
    {sliderItems.map((item) => (
      <Slide bg={item.bg} key={item.id}>
        <ImgContainer>
          <Image src={item.img} />
        </ImgContainer>
        <InfoContainer>
          <Title>{item.title}</Title>
          <Desc>{item.desc}</Desc>
          <Button >
            <Shop to="/productlist">
            SHOW NOW
            </Shop>
          </Button>
        </InfoContainer>
      </Slide>
    ))}
  </Wrapper>
  <Arrow direction="right" onClick={() => handleClick("right")}>
    <ArrowRightOutlinedIcon />
  </Arrow>
</Container>
);
};

export default Slider;

