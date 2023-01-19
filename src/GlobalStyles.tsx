import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

    html,body,h1,h2,h3,h4,h5,h6,div,p,blockquote,pre,code,address,ul,ol,li,menu,nav,section,article,aside,
    dl,dt,dd,table,thead,tbody,tfoot,label,caption,th,td,form,fieldset,legend,hr,input,button,textarea,object,figure,figcaption {
        margin:0;
        padding:0;
        font-family: : 맑은 고딕, malgun gothic, AppleGothicNeoSD, Apple SD 산돌고딕 Neo, Microsoft NeoGothic,  Droid sans, sans-serif;
        font-size: 10px;
        line-height: 1;
        color:#00142F;
        box-sizing: border-box;
        font-weight: $font-regular;
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    html{
        -webkit-touch-callout:none;
        -webkit-user-select:none;
        -webkit-tap-highlight-color:rgba(0,0,0,0);
    }

    input, textarea { 
        -moz-user-select: auto;
        -webkit-user-select: auto;
        -ms-user-select: auto;
        user-select: auto;
    }

    input:focus {
        outline: none;
    }

    button {
        border: none;
        background: none;
        padding: 0;
        cursor: pointer;
    }
`;

export default GlobalStyles;