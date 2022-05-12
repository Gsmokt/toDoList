import styled, {createGlobalStyle} from 'styled-components';

export const AppWrapper = styled.div`
    width: 100%;
    height: 100vh;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 35% 60%;
`
export const ListLeft = styled.div`

    grid-column: 1/2;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 10% 90%;
    .title {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 20px;
    }
    .taskList {
        padding: 5px;
        display: flex;
        flex-direction: column;
        overflow-y: scroll;
        &::-webkit-scrollbar {
        width: 15px;
    }
    &::-webkit-scrollbar-track {
        background-color: #e4e4e4;
        border-radius: 100px;
    }
    &::-webkit-scrollbar-thumb {
        border-radius: 100px;
        border: 5px solid transparent;
        background-clip: content-box;
        background-color: #8070d4;
    } 
    }
    
    /* &::-webkit-scrollbar{
        display: none;
    } */
    /* -ms-overflow-style: none;  IE and Edge */
  /* scrollbar-width: none;  Firefox */
`
export const ListRight = styled.div`
    grid-column: 2/3;

    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 10% 90%;
    .title {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 20px;
    }
    .taskList {
        padding: 5px;
        display: flex;
        flex-direction: column;
        overflow-y: scroll;
        &::-webkit-scrollbar {
        width: 15px;
    }
    &::-webkit-scrollbar-track {
        background-color: #e4e4e4;
        border-radius: 100px;
    }
    &::-webkit-scrollbar-thumb {
        border-radius: 100px;
        border: 5px solid transparent;
        background-clip: content-box;
        background-color: #8070d4;
    } 
    }
    
    /* &::-webkit-scrollbar{
        display: none;
    } */
    /* -ms-overflow-style: none;  IE and Edge */
  /* scrollbar-width: none;  Firefox */
`


export const Interface = styled.div`
    grid-area: 1/1/2/4;
    display:grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    .submitBtn {
        display: flex;
        justify-content: center;
        align-items: center;
    };
    .appBar {
        display: flex;
        align-items: center;
        justify-content: center;
        div {
            margin-right: 20px;
        }
    }
` 

export const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Montserrat', sans-serif;
    }
`


/* 
    padding: 0 10px;
    width: 100%;
    display: flex;
    flex-direction: column;
    /* grid-column: 2/3; */
    /* overflow-y: scroll;
    &::-webkit-scrollbar {
        width: 15px;
    }
    &::-webkit-scrollbar-track {
        background-color: #e4e4e4;
        border-radius: 100px;
    }
    &::-webkit-scrollbar-thumb {
        border-radius: 100px;
        border: 5px solid transparent;
        background-clip: content-box;
        background-color: #8070d4;
    } */ 
