import styled from "styled-components";

export const Image = styled.img.attrs(props => ({
  src: props.src,
  alt: props.alt
}))`
  margin-right: 5px;
`
