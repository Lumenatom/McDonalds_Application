import styled from "styled-components";
import {COLOR} from "../../assets/CONSTANTS";
import {motion} from "framer-motion";

export const WrapperModalBasket = styled(motion.div)`
  width: 100%;
  height: calc(100vh - 70px);
  display: flex;
  justify-content: center;
  position: absolute;
  background: rgba(0, 0, 0, 0.8);
  //background: white;
  border-top: 1px solid ${COLOR.gray};
  overflow: scroll;

`;
export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  width: 600px;
  padding: 20px;
  
  .item{
    background: white;
  }
`;