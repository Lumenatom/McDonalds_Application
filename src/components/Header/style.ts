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
  z-index: 2;

  background: ${COLOR.lightGray};

  svg {
    fill: ${COLOR.gray};
    width: 30px;
    height: 30px;
    cursor: pointer;
    transition: ${ANIMATION.transition};

    &:active {
      scale: ${ANIMATION.scaleClick};
    }
  }
`;

export const BasketBlock = styled.div`
  position: relative;
  
  span {
    font-family: ${FONTS.rubik};
    background: ${COLOR.red};
    font-size: ${FONTS.size14};
    font-weight: ${FONTS.weight300};
    color: ${COLOR.white};
    border-radius: 50%;
    width: 22px;
    height:22px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: -30%;
    right: -30%;
  }
`;

export const NavbarContent = styled.div`
  max-width: 1240px;

  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;`;
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
    border-radius: 0;
    
    &:focus{
      outline: none;
    }
    
    @media screen and (max-width: 525px){
      width: 150px;

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
  
  @media screen and (max-width: 768px){
    height: 400px;
  }
  


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