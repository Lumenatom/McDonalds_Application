import styled from "styled-components";
import {ANIMATION, COLOR, DefaultText, DefaultTitle} from "../../assets/CONSTANTS";

export const WrapperMenu = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 50px;
`;
export const MenuTitle = styled(DefaultTitle)`
    margin: 0;
`;
export const WrapperCategories = styled.div`
  display: flex;
  flex-wrap: wrap;
  row-gap: 0px;
  column-gap: 35px;
  margin:15px 0 100px;
`;
export const CategoryName = styled(DefaultText)<{ selected: boolean }>`
  white-space: nowrap;
  padding: 0 2px 5px;
  color: ${({selected}) => selected ? COLOR.red : COLOR.gray};
  border-bottom: ${({selected}) => selected ? `1px solid ${COLOR.red}` : `1px solid ${COLOR.gray}`};
  cursor: pointer;
  transition: ${ANIMATION.transition};
  
  // &:hover{
  //   scale: ${ANIMATION.scale};
  // }
  &:active{
    scale: ${ANIMATION.scaleClick};
  }

`;
export const WrapperItems = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 25px;
  justify-content: space-between;
`;
export const WrapperItem = styled.div`
  width: 30%;
  height: 300px;
  border-radius: 10px;
  background: #F5F5F5;
  padding: 10px;
`;
