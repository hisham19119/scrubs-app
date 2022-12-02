import styled from "styled-components";
import { Iphone } from "../responsive";
import { Link } from "react-router-dom";
const Image = styled.img`
width: 100%;
height: 100%;
object-fit: cover;
${Iphone({ height: "20vh" })}
transition : all 0.6s ease;
`;

const Container = styled.div`
flex: 1;
margin: 3px;
height: 70vh;
position: relative;

    &:hover ${Image}{
        transform: scale(1.05);
        opacity: 0.5
}
`;



const Info = styled.div`
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`;

const Title = styled.h1`
    color:white;
    margin-bottom: 20px;
`;

const Button = styled.button`
    border:none;
    padding: 10px;
    background-color: white;
    color:gray;
    cursor: pointer;
    font-weight: 600;
    &:hover {
        transform: scale(1.05);
        letter-spacing: 2px;
    }
    transition : all 0.5s ease;
`;

const Shop = styled(Link)`
font-size: 20px;
text-decoration: none;
color:gray;
font-weight: 600;
`

const CategoryItem = ({ item }) => {
return (
    <Container>
    <Image src={item.img} />
    <Info>
        <Title>{item.title}</Title>
        <Button>
            <Shop to="/productlist">
                SHOW NOW
            </Shop>
        </Button>
    </Info>
    </Container>
);
};

export default CategoryItem;