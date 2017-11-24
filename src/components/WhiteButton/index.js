import styled from 'styled-components'

const WhiteButton = styled.button`
  font-size: 2em;
  padding: 15px 30px;
  margin: 50px auto;
  text-transform: uppercase;
  background-color: transparent;
  color: ${props => props.theme.white};
  border: 2px solid ${props => props.theme.white};
  border-radius: 50%;
  cursor: pointer;
  outline: none;
`

export const EmptySpace = styled.div`
  padding: 15px 30px;
  height: 70px;
  margin: 50px auto;
  background-color: transparent;
  color: transparent;
  cursor: none;
  border: none;
  outline: none;
`

export default WhiteButton
