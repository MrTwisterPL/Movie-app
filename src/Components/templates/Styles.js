import styled from "styled-components";

export const Container = styled.div`
display:flex;
flex-wrap:wrap;`

export const Header = styled.div`
display:flex;
margin:10px 0 0 10px;
padding:10px;
position: fixed;
z-index: 10;
flex-direction: column;
width: 20%;
height: 100vh;
background: rgba( 255, 255, 255, 0.15 );
box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
backdrop-filter: blur( 8.5px );
-webkit-backdrop-filter: blur( 8.5px );
border-radius: 10px;
border: 1px solid rgba( 255, 255, 255, 0.18 );
`

export const User = styled.div`
max-height: 20%;
display: flex;
align-items: center;
gap:10px;
color:white;
border-bottom: 2px solid white;
margin-bottom: 20px;
& img {
    margin:20px;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    object-fit: cover;
    border:1px solid white;
    box-shadow: 1px 2px 2px white;
}
`

export const ButtonContainer = styled.div`
width: 100%;
display: flex;
flex-direction:column;
gap:20px;
& button {

}
`