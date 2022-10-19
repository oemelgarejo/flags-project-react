import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Country from './Country';
import { useSelector, useDispatch } from 'react-redux';

const CountrylistStyled = styled.div`
    display: grid;
    grid-row-gap: 2.3em;
    justify-content: center;
    background: var(--background);
    padding: 4em 2em;
`

function Countrylist() {
    const dispath = useDispatch();
    const countryList = useSelector((state) => state.countryList);

    // const [countryList, setcountryList] = useState([]);
    useEffect(() => {
        fetch('https://restcountries.com/v2/all')
            .then((response) => {
                return response.json();
            })
            .then((list) => {
                dispath({
                    type: 'SET_COUNTRY_LIST',
                    payload: list
                })
                // setcountryList(data)
            })
            .catch(() => {
                console.log('An error ocurred')
            })
    }, [])
    return (
        <CountrylistStyled>
            {
                countryList.map(({name, flag, population, region, capital}) => {
                    return (
                        <Country
                            flag={flag}
                            name={name}
                            population={123456}
                            region={region}
                            capital={capital}
                            key={name}
                        />
                    )
                })
            }

        </CountrylistStyled>
    )
}

export default Countrylist
