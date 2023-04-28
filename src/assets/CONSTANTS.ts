import styled from "styled-components";

export const COLOR = {
    white: '#ffffff',
    gray: '#333333',
    lightGray: '#F6F6F6',
    red: '#F03536',
    yellow: '#FFCC00',
    green: '#32CD32',
}

export const ANIMATION = {
    scale: '1.2',
    scaleClick: '0.8',
    transition: 'all ease 0.3s'
}
export const FONTS = {
    rubik: 'Rubik',
    weight300:300,
    weight400:400,
    weight500:500,
    weight600:600,
    weight700:700,
    size14:'14px',
    size16:'16px',
    size20:'20px',
    size24:'24px',
    size32:'32px',

}

export const DefaultTitle = styled.h2`
  font-family: ${FONTS.rubik};
  font-size: ${FONTS.size32};
  font-weight: ${FONTS.weight500};
  color: ${COLOR.gray};
`;
export const DefaultText = styled.p`
  font-family: ${FONTS.rubik};
  font-size: ${FONTS.size16};
  color: ${COLOR.gray};
  font-weight: ${FONTS.weight300};
`;
