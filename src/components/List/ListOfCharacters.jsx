import React, { useState, useEffect } from "react";

import ListContainer from "../../styles/List/List__Container";
import ListItem from "../../styles/List/List__Item";
import ListImage from "../../styles/List/List__Image";
import ListSpan from "../../styles/List/List__Span";

const URL = 'http://hp-api.herokuapp.com/api/characters/staff';
const DEFAULT_IMAGE = 'https://www.astucesmobiles.com/wp-content/uploads/2022/03/harry-potter-nawpic.webp.webp'

const ListOfCharacters = () => {
    const [characters, setCharacters] = useState([]);

    const getList = async () => {
        let response = await fetch(URL)
        response = await response.json()
        console.log('response.results', response)
        setCharacters(response)
    }

    useEffect(() => {
        getList()
      }, [])

    return (
        <ListContainer>
        {
            characters ?
            characters.map(x => {
            return (
                <ListItem key={x.name}>
                    <ListImage src={x.image || DEFAULT_IMAGE} alt="" />
                    <p>
                        { x.name } - 
                        <ListSpan>{x.species}</ListSpan>
                    </p>
                </ListItem>
            )
            }) :
            'No hay personajes'
        }
        </ListContainer>
    )
}

export default ListOfCharacters;