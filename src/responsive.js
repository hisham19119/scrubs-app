
import { css } from "styled-components";




// export const LgMobile = (props) => {
//     return css`
//         @media only screen and (max-width: 991px) {
//         ${props}
//         }
//     `;
//     };
    
export const Iphone = (props) => {
    return css`
        @media only screen and (max-width: 767px) {
        ${props}
        }
    `;
    };
export const mobile = (props) => {
    return css`
        @media only screen and (max-width: 400px) {
        ${props}
        }
    `;
    };
// export const tablet = (props) => {
//     return css`
//         @media only screen and (max-width: 380px) {
//         ${props}
//         }
//     `;
//     };
// export const big = (props) => {
//     return css`
//         @media only screen and (max-width: 380px) {
//         ${props}
//         }
//     `;
//     };