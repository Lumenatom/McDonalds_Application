import styled from "styled-components";
import {ANIMATION, COLOR, DefaultText, DefaultTitle} from "../../assets/CONSTANTS";

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
  margin:15px 0 50px;
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
  &:active{
    scale: ${ANIMATION.scaleClick};
    
  }
  
  img{
    max-width: 70px;
  }
`;
export const CategoryName = styled(DefaultText)<{ selected: boolean }>`
  white-space: nowrap;
  padding: 0 2px 5px;
  color: ${({selected}) => selected ? COLOR.red : COLOR.gray};
  border-bottom: ${({selected}) => selected ? `1px solid ${COLOR.red}` : `1px solid ${COLOR.gray}`};


`;
export const WrapperItems = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;
export const WrapperItem = styled.div`
  width: 17%;
  height: 240px;
  border-radius: 10px;
  background: ${COLOR.white};
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2), 0 4px 6px rgba(0, 0, 0, 0.2);
  text-align: center;

  img {
    max-width: 100px;
  }

  p {
    padding: 0;
    margin: 0;
  }
`;
