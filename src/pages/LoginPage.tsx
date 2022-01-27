import React from 'react';
import styled from 'styled-components';
import Footer from '../components/molecules/Footer';
import LoginLogo from '../components/molecules/LoginLogo';
import LoginTemplate from '../components/templates/LoginTemplate';
import { colors } from '../constant/colors';

const LoginPage = () => {
    return (
        <Container>
            <LoginLogo />
            <LoginTemplate />
            <Footer />
        </Container>
    );
};

export default LoginPage;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 100%;
`;