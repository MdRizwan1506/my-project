import React, { useEffect } from 'react'
import styled from 'styled-components'
import About_Side_Image from '../../assets/img/about.jpg'
import About_Side_bg from '../../assets/img/about-bg.jpg'

const Containt = styled.div`
    display: flex;
    padding: 150px 50px 50px 50px;
    flex-direction: row;
    // background-image: url(${About_Side_bg});
    @media (max-width: 900px) {
        padding: unset;
        padding-top: 20px;
        flex-direction: column-reverse;
    }
    @media (max-width: 400px) {
        padding-top: 100px;
        flex-direction: column-reverse;
    }
`;


const Title = styled.div`
    color: #cda45e;
    padding-bottom: 30px;
    text-transform: uppercase;
    ::after {
        content: "";
        height: 1px;
        width: 120px;
        margin: 4px 10px;
        display: inline-block;
        background-color: #cda45e;
    }
`;

const Information = styled.div`
    width: 50%;
    margin: 0px 10px;
    ul{
        padding-left: 18px;
        line-height: 25px;
    }
    @media (max-width: 900px) {
        width: 96%;
        padding: 40px 20px;
        margin: 10px 20px;
    }
    @media (max-width: 500px) {
        width: unset;
        margin: 10px 0px;
    }
`;

const Heading = styled.div`
    font-weight: 600;
    font-size: 30px;
    font-family: "Playfair Display", serif;
    text-transform: capitalize;
    padding-bottom: 20px;
`;

const Text = styled.div`
    line-height: 25px;
`;

const Image = styled.div`
    width: 50%;
    img {
        width: 100%;
        min-height: 100%;
    }
    @media (max-width: 900px) {
        width: 100%;
    }
    @media (max-width: 500px) {
        img{
            height: unset;
        }
    }
`;


const Contant = () => {

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }, []);

    return (
        <Containt>
            <Information>
                <Title>About</Title>
                <Heading>
                    Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.
               </Heading>
                <Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
               </Text>
                <ul>
                    <li> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                    <li> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                    <li> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</li>
                </ul>
                <Text>
                    Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                    </Text>
            </Information>
            <Image>
                <img src={About_Side_Image} alt="my-about" />
            </Image>
        </Containt>
    )
}

export default Contant