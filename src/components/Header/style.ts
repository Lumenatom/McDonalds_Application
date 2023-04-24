import styled from "styled-components";
import {ANIMATION, COLOR, FONTS} from "../../assets/CONSTANTS";

type Props = {
    bannerImage: string
}
export const WrapperNavbar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  max-width: 1240px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  background: ${COLOR.white};

  svg {
    fill: ${COLOR.gray};
    width: 25px;
    height: 25px;
    cursor: pointer;
    transition: ${ANIMATION.transition};

    &:hover {
      scale: ${ANIMATION.scale};
    }
  }
`;
export const NavbarSearch = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 30px;

  img {
    width: 50px;
  }
  
  input{
    width: 300px;
    height: 30px;
    border: none;
    border-bottom: 1px solid ${COLOR.gray};
    font-family: ${FONTS.rubik};
    font-size: ${FONTS.size16};
    color: ${COLOR.gray};
    font-weight: ${FONTS.weight400};
    
    &:focus{
      outline: none;
    }
  }
`;
export const WrapperBannerNews = styled.div`
  background: #F5F5F5;

`;
export const ActiveBanner = styled.div<Props>`
  width: 100vw;
  height: 600px;
  background-image: url(${({bannerImage}) => bannerImage});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100vw;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  transition: ${ANIMATION.transition};


  svg {
    margin-bottom: 25px;
    cursor: pointer;
    fill: ${COLOR.gray};
    width: 30px;
    height: 30px;
    transition: ${ANIMATION.transition};
    color: ${COLOR.gray};
    


    &:hover{
      scale: ${ANIMATION.scale};
    }
    &:active{
      scale: ${ANIMATION.scaleClick};
    }

   
  }
`;