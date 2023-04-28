import styled from "styled-components";
import {ANIMATION, COLOR, DefaultText, DefaultTitle, FONTS} from "../../assets/CONSTANTS";

export const WrapperMenu = styled.div`
  display: flex;
  flex-direction: column;
  padding: 50px 0;
`;
export const MenuTitle = styled(DefaultTitle)`
  margin: 0;
`;
export const WrapperCategories = styled.div`
  display: flex;
  flex-wrap: wrap;
  row-gap: 0;
  column-gap: 35px;
  margin: 15px 0 50px;

  @media screen and (max-width: 768px) {
    column-gap: 20px;
  }

  @media screen and (max-width: 525px) {
    gap: 0;
    row-gap: 10px;
    align-items: end;
  }
`;
export const MenuCategory = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  transition: ${ANIMATION.transition};

  // &:hover{
    //   scale: ${ANIMATION.scale};
  // }
  &:active {
    scale: ${ANIMATION.scaleClick};

  }

  @media screen and (max-width: 525px) {
    width: 45%;
  }

  img {
    max-width: 70px;
  }
`;
export const CategoryName = styled(DefaultText)<{ selected: boolean }>`
  white-space: nowrap;
  padding: 0 2px 5px;
  color: ${({selected}) => selected ? COLOR.red : COLOR.gray};
  border-bottom: ${({selected}) => selected ? `1px solid ${COLOR.red}` : `1px solid ${COLOR.gray}`};

  @media screen and (max-width: 525px) {
    max-width: 50%;
    text-align: center;
    white-space: normal;
  }
`;
export const WrapperItems = styled.div`
  width: 100%;
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;
export const WrapperItem = styled.div`
  width: 15%;
  height: 290px;
  border-radius: 10px;
  background: ${COLOR.white};
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2), 0 4px 6px rgba(0, 0, 0, 0.2);
  text-align: center;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;

  @media screen and (max-width: 768px) {
    width: 25%
  }

  @media screen and (max-width: 525px) {
    width: 100%
  }

  img {
    max-width: 130px;
  }

`;

export const DescriptionItem = styled(DefaultTitle)`
  font-size: ${FONTS.size16};
  font-weight: ${FONTS.weight400};
`;
export const OptionBlockItem = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  span{
    display: flex;
    align-items: center;
    gap: 10px;
    
    svg{
      cursor: pointer;
      width: 25px;
      height: 25px;

      transition: ${ANIMATION.transition};

      // &:hover{
        //   scale: ${ANIMATION.scale};
      // }
      &:active {
        scale: ${ANIMATION.scaleClick};

      }
    }
    
    p{
      font-size: 16px;
      font-weight: ${FONTS.weight400};
      font-family: ${FONTS.rubik};
      width: 10px;
      color: ${COLOR.gray};
      
    }
  }
`;
export const PriceBlock = styled.div`
  p {
    font-family: ${FONTS.rubik};
    font-weight: ${FONTS.weight500};
    color: ${COLOR.red}
  }
`;
export const Basket = styled.div`
  padding: 5px 6px;
  background: #f5f5f5;
  border-radius: 50%;
  cursor: pointer;

  transition: ${ANIMATION.transition};

  // &:hover{
    //   scale: ${ANIMATION.scale};
  // }
  &:active {
    scale: ${ANIMATION.scaleClick};

  }

  svg {
    width: 25px;
    height: 25px;
  }
`;