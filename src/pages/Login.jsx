import { Link } from "react-router-dom";
import styled from "styled-components";
import {Iphone} from "../responsive";

const Container = styled.div`
width: 100vw;
height: 100vh;
background: linear-gradient(
    rgba(255, 255, 255, 0.5),
    rgba(255, 255, 255, 0.5)
    ),
    url("https://th.bing.com/th/id/R.431ab357b3e0c83a8fb3a305272cc027?rik=jguAowT3NX9VFg&riu=http%3a%2f%2fwww.pulseuniform.com%2fstylepic%2fcolorpic%2fMA-5202PEWLRL.jpg&ehk=cz9EIFECPUD%2bLuzY%2b76RkLVQUPujnJNRVJZit3bhlro%3d&risl=&pid=ImgRaw&r=0")
    center;
background-size: cover;
display: flex;
align-items: center;
justify-content: center;
`;

const Wrapper = styled.div`
width: 25%;
padding: 20px;
background-color: white;
${Iphone({ width: "75%" })}
`;

const Title = styled.h1`
font-size: 24px;
font-weight: 300;
`;

const Form = styled.form`
display: flex;
flex-direction: column;
`;

const Input = styled.input`
flex: 1;
min-width: 40%;
margin: 10px 0;
padding: 10px;
`;

const Button = styled.button`
width: 40%;
border: none;
padding: 15px 20px;
background-color: teal;
color: white;
cursor: pointer;
margin-bottom: 10px;
`;

const Pass = styled(Link)`
margin: 5px 0px;
font-size: 12px;
text-decoration: underline;
cursor: pointer;
`;

const Create = styled(Link)`
margin: 5px 0px;
font-size: 12px;
text-decoration: underline;
cursor: pointer;
`;

const Login = () => {
return (
    <Container>

    <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
        <Input placeholder="username" />
        <Input placeholder="password" />
        <Button>LOGIN</Button>
        <Pass>DO NOT YOU REMEMBER THE PASSWORD?</Pass>
        <Create>CREATE A NEW ACCOUNT</Create>
        </Form>
    </Wrapper>
    </Container>
    
);
};

export default Login;