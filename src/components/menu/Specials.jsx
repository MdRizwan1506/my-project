import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { specialsListItems } from './constent'

const Container = styled.div`
    color: #fff;
    background: #0c0b09;
    padding: 0px 50px  80px 50px;
    @media (max-width: 500px) {
        padding: 0px 20px;
    }
`;


const Title = styled.div`
    color: #cda45e;
    padding-top: 50px;
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


const Heading = styled.div`
    font-weight: 600;
    font-size: 30px;
    font-family: "Open Sans", sans-serif;
    text-transform: capitalize;
    padding-bottom: 50px;
    @media (max-width: 1000px) {
       font-size: 28px;
    }
`;

const SpecilaContent = styled.div`
    display: flex;
    @media (max-width: 1000px) {
        flex-direction: column;
    }
`;

const SpecialList = styled.div`
    min-width: 25%;
    max-height: 240px;
    border-right: 2px solid #cda45e;
    .special-list {
        font-size: 16px;
        padding: 15px 15px;
        text-transform: capitalize;
        font-family: "Open Sans", sans-serif;
        :hover {
            color: #cda45e;
            cursor: pointer; 
        }
    }
    .selectted-list-item {
        :hover {
            color: black;
        }
        background-color: #cda45e;
    }
    @media (max-width: 1000px) {
        width: 100%;
        border-right: none;
        margin-bottom: 50px;
    }
`;

const SelectedData = styled.div``;

const Name = styled.div`
    font-size: 26px;
    font-weight: 600;
    margin-bottom: 20px;
`;

const Data = styled.div`
    display: flex;
    @media (max-width: 1000px) {
        flex-direction: column-reverse;
    }
`;

const Text = styled.div`
    font-size: 16px;
    line-height: 26px;
    margin-bottom: 20px;
`;

const Description = styled.div`
    font-size: 16px;
    line-height: 26px;
    margin-bottom: 20px;
`;

const Info = styled.div`
    padding: 0px 30px;
    @media (max-width: 1000px) {
        padding: unset;
        padding-top: 40px;
    }
`;

const Image = styled.div`
    text-align: center;
    img { 
        max-width: 250px;
        border-radius: 50%;
        @media (max-width: 1000px) {
            height: unset;
            max-width: 100%;
            border-radius: unset;
        }
        @media (max-width: 500px) {
            max-width: 250px;
            align-items: center;       
        }
    }
`;

const Specials = () => {
    const [selectedItem, setSelectedItem] = useState('special_modi')
    const [selectedData, setSelectedData] = useState([])

    const selectListItem = e => setSelectedItem(e.target.id)

    useEffect(() => {
        const tempArray = specialsListItems.filter(data => (data.id === selectedItem) ? data : '')
        setSelectedData(tempArray)
    }, [selectedItem])

    return (
        <Container>
            <Title>SPECIALS</Title>
            <Heading>Check Our Specials</Heading>
            <SpecilaContent>
                <SpecialList onClick={(e) => selectListItem(e)}>
                    <div id="special_modi" className={`special-list ${selectedItem === 'special_modi' ? 'selectted-list-item' : null}`}>Modi sit est</div>
                    <div id="special_nostrum" className={`special-list ${selectedItem === 'special_nostrum' ? 'selectted-list-item' : null}`}>Nostrum qui quasi</div>
                    <div id="special_iusto" className={`special-list ${selectedItem === 'special_iusto' ? 'selectted-list-item' : null}`}>Iusto ut expedita aut</div>
                    <div id="special_pariatur" className={`special-list ${selectedItem === 'special_pariatur' ? 'selectted-list-item' : null}`}>Pariatur explicabo vel</div>
                    <div id="special_unde" className={`special-list ${selectedItem === 'special_unde' ? 'selectted-list-item' : null}`}>Unde praesentium sed</div>
                </SpecialList>
                <SelectedData>
                    {!!selectedData && selectedData.map((data, index) => {
                        return (
                            <Data key={index}>
                                <Info>
                                    <Name>{data.name}</Name>
                                    <Text>{data.text}</Text>
                                    <Description>{data.description}</Description>
                                </Info>
                                <Image>
                                    <img src={data.img} alt="error" />
                                </Image>
                            </Data>
                        )
                    })}
                </SelectedData>
            </SpecilaContent>
        </Container>
    )
}

export default Specials