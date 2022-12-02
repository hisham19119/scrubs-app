import styled from "styled-components";
import { Iphone } from "../responsive";

const Container = styled.div`
width: 100vw;
height: 100vh;
background: linear-gradient(
    rgba(255, 255, 255, 0.5),
    rgba(255, 255, 255, 0.5)
    ),
    url("https://th.bing.com/th/id/R.ac38d4baa63d6ecb013f290040753a8b?rik=gaamQPaslmQACA&riu=http%3a%2f%2fwww.pulseuniform.com%2fstylepic%2fcolorpic%2fMA-5212WINLRL.jpg&ehk=IU9luG8WeKhNRmsg0PG5Ad%2bZS61FWkScSGfzogECxIQ%3d&risl=&pid=ImgRaw&r=0")
    center;
background-size: cover;
display: flex;
align-items: center;
justify-content: center;
`;

const Wrapper = styled.div`
width: 40%;
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
flex-wrap: wrap;
`;

const Input = styled.input`
flex: 1;
min-width: 40%;
margin: 20px 10px 0px 0px;
padding: 10px;
`;

const Agreement = styled.span`
font-size: 12px;
margin: 20px 0px;
`;

const Button = styled.button`
width: 40%;
border: none;
padding: 15px 20px;
background-color: teal;
color: white;
cursor: pointer;
`;

const Register = () => {
return (
    <Container>
    <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
        <Input placeholder="name" />
        <Input placeholder="last name" />
        <Input placeholder="username" />
        <Input placeholder="email" />
        <Input placeholder="password" />
        <Input placeholder="confirm password" />
        <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
        </Agreement>
        <Button>CREATE</Button>
        </Form>
    </Wrapper>
    </Container>
);
};

export default Register;