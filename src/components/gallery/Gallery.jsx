import React, { useEffect } from 'react'
import styled from 'styled-components'
import { galleryImage } from './constant';

const Container = styled.div`
    padding: 70px 50px 0px 50px;
    color: #fff;
    background: #0c0b09;
    @media (max-width: 550px) {
        padding: 70px 20px;
    }
`;

const Title = styled.div`
    color: #cda45e;
    padding-top: 50px;
    padding-bottom: 20px;
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

const Heading = styled.div`
    font-size: 36px;
    font-weight: 700;
    padding: 20px 0px;
    line-height: 56px;
    span {
        color: #cda45e;
    }
    font-family: "Poppins", sans-serif;
`;

const GalleryData = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

const Image = styled.img`
    width: 30%;
    padding: 20px 19px;
    @media (max-width: 1200px) {
        width: 45%;
    }
    @media (max-width: 880px) {
        width: 100%;
    }
`;

const Gallery = () => {
    
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }, []);

    return (
        <Container>
            <Title>GALLERY</Title>
            <Heading>Some photos from Our Restaurant</Heading>
            <GalleryData>
                {!!galleryImage && galleryImage.map(obj => <Image src={obj.img} alt="gallery_imphotos" />)}
            </GalleryData>
        </Container>
    )
}

export default Gallery
