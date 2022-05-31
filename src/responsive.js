import { css } from "styled-components";

export const laptop = (props) => {
    return css`
    @media only screen and (max-width: 1295px) {
        ${props}
    }
    `;
};