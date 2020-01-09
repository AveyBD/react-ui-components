import React from 'react';

export const ChevronDoubleLeft = (props) => {
    return (
        <svg style={{ width: (props.size ? props.size : 24)+'px', height: (props.size ? props.size : 24)+'px' }} viewBox="0 0 24 24">
            <path fill={props.color ? props.color : '#4d4d4d'}
                d="M18.41,7.41L17,6L11,12L17,18L18.41,16.59L13.83,12L18.41,7.41M12.41,7.41L11,6L5,12L11,18L12.41,16.59L7.83,12L12.41,7.41Z" />
        </svg>
    )
}

export const ChevronDoubleRight = (props) => {
    return (
        <svg style={{ width: (props.size ? props.size : 24)+'px', height: (props.size ? props.size : 24)+'px' }} viewBox="0 0 24 24">
            <path fill={props.color ? props.color : '#4d4d4d'} d="M5.59,7.41L7,6L13,12L7,18L5.59,16.59L10.17,12L5.59,7.41M11.59,7.41L13,6L19,12L13,18L11.59,16.59L16.17,12L11.59,7.41Z" />
        </svg>
    )
}

export const Delete = (props) => {
    return (
        <svg style={{ width: (props.size ? props.size : 24)+'px', height: (props.size ? props.size : 24)+'px' }} viewBox="0 0 24 24">
            <path fill={props.color ? props.color : '#4d4d4d'} d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z" />
        </svg>
    )
}

export const Edit = (props) => {
    return (
        <svg style={{ width: (props.size ? props.size : 24)+'px', height: (props.size ? props.size : 24)+'px' }} viewBox="0 0 24 24">
            <path fill={props.color ? props.color : '#4d4d4d'} d="M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z" />
        </svg>
    )
}

export const Close = (props) => {
    return (
        <svg style={{ width: (props.size ? props.size : 24)+'px', height: (props.size ? props.size : 24)+'px' }} viewBox="0 0 24 24">
            <path fill={props.color ? props.color : '#4d4d4d'} d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
        </svg>
    )
}

export const Code = (props) => {
    return (
        <svg style={{ width: (props.size ? props.size : 24)+'px', height: (props.size ? props.size : 24)+'px' }} viewBox="0 0 24 24">
            <path fill={props.color ? props.color : '#4d4d4d'} d="M12.89,3L14.85,3.4L11.11,21L9.15,20.6L12.89,3M19.59,12L16,8.41V5.58L22.42,12L16,18.41V15.58L19.59,12M1.58,12L8,5.58V8.41L4.41,12L8,15.58V18.41L1.58,12Z" />
        </svg>
    )
}

export const Github = (props) => {
    return (
        <svg style={{ width: (props.size ? props.size : 24)+'px', height: (props.size ? props.size : 24)+'px' }} viewBox="0 0 24 24">
            <path fill={props.color ? props.color : '#4d4d4d'} 
            d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z" />
        </svg>
    )
}