import styled from 'styled-components';

const NextButton = styled.button`
  animation-name: drift, fade-in;
  animation-duration: 5s, 150ms;
  animation-iteration-count: infinite, 1;
  animation-timing-function: linear;

  height: 48px;
  border-radius: 5px;
  border: 2px solid #e5e5e5;
  background-image: url("./src/topography.svg");
  background-color: white;
  width: 10%;
  font-size: 1em;
  font-family: "Menlo", monospace;
  margin-top: 16px;
  box-shadow: 2px 2px 7px rgba(0, 0, 0, 0.05);
  transition: transform 200ms;
  appearance: none;

  &:hover {
    transform: scale(1.02);
  }

  &:active {
    transform: scale(0.98);
  }

  &:focus {
    color: Green;
    border-color: Green;
  }
`


export default NextButton;