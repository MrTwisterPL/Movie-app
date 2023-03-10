import styled from "styled-components";



export const HomePage = styled.div`
border:1px solid black;
margin:10px 0 0 23%;
padding:10px;
min-height: 100vh;
width: 70%;
background: rgba( 255, 255, 255, 0.8 );
box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
backdrop-filter: blur( 8.5px );
-webkit-backdrop-filter: blur( 8.5px );
border-radius: 10px;
border: 1px solid rgba( 255, 255, 255, 0.18 );

`
export const Title = styled.div`
text-align: center;
& h2 {
    font-size: 40px;
    font-weight: 800;
}
& input {
    width: 80%;
    border:none;
    border-radius: 10px;
    height: 30px;
    text-align: center;
}
`
export const Films = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
gap:15px;

`


export const Movie = styled.div`
width: 23%;
display: flex;
flex-direction: column;
max-height: 20%;
border-radius: 10px;
overflow: hidden;
& span {
    text-align: center;
    color:white;
    font-size: 20px;
    margin:10px 0;
    text-shadow:1px 1px 1px black;
}
& img {
    min-height: 400px;
    border-radius:10px;
}
`