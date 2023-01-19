import styled from "styled-components";

export const Item = styled.div`
    display: flex;
    align-items: center;
    height: 40px;
    padding: 0 1rem;
`

export const Text = styled.p`
    font-size: 1.6rem;
    margin: 0 1rem;
    text-decoration: ${(props) => props.className === "on" ? "line-through" : "none"}
`

export const CheckBox = styled.input.attrs(({ type: 'checkbox' }))`

`

export const ButtonWrapper = styled.div`
    margin-left: auto;
`

export const Input = styled.input.attrs(({ type: 'text' }))`
    height: 30px;
    margin: 0 1rem;
    padding: 0 1rem;
    font-size: 1.4rem;
    border: ${(props) => props.className === "wran" ? '1px solid red' : '1px solid #efefef' }
    
`

export const Button = styled.button`
    font-size: 1.4rem;
    margin-right: 1rem;
    opacity: ${(props) => props.disabled ? 0.5 : 1};
    pointer-events: ${(props) => props.disabled ? 'none' : null};
`