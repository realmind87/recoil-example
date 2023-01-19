import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    width: 100%;
`
export const Form = styled.form`
    position: relative;
    width: 100%;
    display: flex;
    align-center: center;
`
export const Input = styled.input.attrs(({type: 'text'}))`
    width: 100%;
    border: 1px solid #efefef;
    height: 40px;
    padding:1rem 40px 1rem 1rem;
    font-size: 1.4rem;
`

export const Button = styled.button`
    position: absolute;
    top: 0px;
    right: 0px;
    width: 40px;
    height: 40px;
    border: none;
    font-size: 1.4rem;

`