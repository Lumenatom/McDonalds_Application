import styled from "styled-components";
import { COLOR, FONTS } from "../../assets/CONSTANTS";
import { motion } from "framer-motion";

export const WrapperModalBasket = styled(motion.div)`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: absolute;
  right: 0;
  //background: rgba(255, 255, 255, 1);
  
  background: ${COLOR.lightGray};
  overflow: scroll;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);


`;
export const EmptyBasket = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  h2{
    font-family: ${FONTS.rubik};
    font-weight: ${FONTS.weight300};
  }
  
  svg{
    width: 100px;
    height: 100px;
    fill: ${COLOR.gray};
  }

`;
export const TotalPrice = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 10px;
  gap: 20px;
  margin-left: 5px;

  p {
    font-family: ${FONTS.rubik};
    color: ${COLOR.gray};
    font-size: ${FONTS.size24};
    font-weight: ${FONTS.weight400};
  }

  span {
    font-family: ${FONTS.rubik};
    color: ${COLOR.green};
    font-size: ${FONTS.size32};
    font-weight: ${FONTS.weight600};
  }

`;
export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  width: 600px;
  padding: 20px 20px 50px 20px;
  overflow: scroll;

  ::-webkit-scrollbar {
    display: none;
  }

  .item {
    background: ${COLOR.white};
    color: ${COLOR.white};
    padding: 20px;
    border-radius: 10px;
    font-family: ${FONTS.rubik};
    color: ${COLOR.gray};
    border: 0.5px solid ${COLOR.gray};
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    button {
      background: none;
      border: none;
      position: absolute;
      top: 0;
      right: 0;
      background: ${COLOR.lightGray};
      padding: 5px;
      border-radius: 0 9px 0 10px;

      svg {
        fill: ${COLOR.gray};
        width: 30px;
        height: 25px;
      }
    }

    .description {
      display: flex;
      align-items: center;
      justify-content: space-between;

      h2 {
        font-size: ${FONTS.size24};
        font-weight: ${FONTS.weight400};
        margin-top: 50px;

      }

      img {
        max-width: 30%;
      }
    }


    .price {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 20px;

      .itemTotal {
        display: flex;
        flex-direction: column;
        background: ${COLOR.lightGray};
        padding: 5px 10px;
        color: ${COLOR.gray};
        border-radius: 10px;
        justify-content: center;
        align-items: center;
        gap: 10px;

        p {
          font-size: ${FONTS.size16};
          font-weight: ${FONTS.weight300};
          padding: 0;
          background: none;
          margin: 0;
        }
      }

      p {
        font-size: ${FONTS.size16};
        font-weight: ${FONTS.weight300};
        display: flex;
        align-items: center;
        background: ${COLOR.lightGray};
        padding: 5px 10px;
        color: ${COLOR.gray};
        border-radius: 10px;
        margin-bottom: 0;


        span {
          font-size: ${FONTS.size20};
          margin-left: 10px;
          font-weight: ${FONTS.weight500};
        }

        .finalPrice {
          color: ${COLOR.green};
        }

      }
    }
  }

  .order {
    width: 100%;
    margin: 0 0 50px 0;
    font-family: ${FONTS.rubik};
    color: ${COLOR.white};
    font-size: ${FONTS.size16};
    font-weight: ${FONTS.weight400};
    background: ${COLOR.green};
    border: none;
    padding: 20px 45px;
    border-radius: 50px;
    cursor: pointer;
  }
`;