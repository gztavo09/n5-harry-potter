import styled from "styled-components";

const ListImage = styled.img`
    transition: all 1s;
    filter: grayscale(1);
    max-width: 300px;
    cursor: pointer;
    &:hover {
        filter: grayscale(0);
    }
`

export default ListImage;