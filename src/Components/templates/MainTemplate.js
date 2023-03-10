import React from 'react'
import * as Styled from "./Styles"
import userImage from "../../Images/user-image.jpg"
import Button from '../BasicsComponents/Button'
import {HiTrendingUp,HiOutlineFilm} from "react-icons/hi"
import {AiOutlineStar,AiOutlineFire} from "react-icons/ai"
const MainTemplate = ({children}) => {
  return (
    <Styled.Container>
    <Styled.Header>
        <Styled.User>
            <img src={userImage}/>
            <h3>Jan Kowalski</h3>
        </Styled.User>
        
        <Styled.ButtonContainer>
          <Button page="/popular" text="Popular" icon={<HiTrendingUp/>}/>
          <Button page="/"text="Top rated" icon={<AiOutlineStar/>}/>
          <Button page="/latest" text="Latest" icon={<AiOutlineFire/>}/>
          <Button page="/" text="Upcoming" icon={<HiOutlineFilm/>}/>
        </Styled.ButtonContainer>
       
    </Styled.Header>
    {children}
    </Styled.Container>
  )
}

export default MainTemplate