import styled from "styled-components";
import { themes } from "../../constants/themes";

interface IButton {
    disabled?: boolean
    borderColor?: string
    backgroundColor?: string
    color?: string
    ptb?: number
    prl?: number
    marginAuto?: boolean
    marginTop?: number
    marginBottom?: number
    marginLeft?: number
    marginRight?: number
    fontSize?: number
    hoverBackground?: string
    activeBackground?: string
    hoverColor?: string
    activeColor?: string
}

export const Button = styled.button<IButton>`
  padding: ${props => props.ptb || 12}px ${props => props.prl || 20}px;
  display: block;
  border: none;
  border: ${props => props.borderColor ? `1px solid ${props.borderColor}` : "none"};
  color: ${props => props.color || themes.colors.white};
  background-color: ${props => props.disabled ? themes.colors.lightGrey : props.backgroundColor || 'transparent'};
  border-radius: 5px;
  cursor: pointer;
  margin: ${props => props.marginAuto ? '0 auto' : 0};
  margin-top: ${props => props.marginTop}px;
  margin-bottom: ${props => props.marginBottom}px;
  margin-left: ${props => props.marginLeft}px;
  margin-right: ${props => props.marginRight}px;
  font-size: ${props => props.fontSize}px;
  transition: all .3s linear;
  &:active {
    border: none;
    background-color: ${props => props.activeBackground};
    color: ${props => props.activeColor};
  }

  &:hover {
    background-color: ${props => !props.disabled ? props.hoverBackground : ''};
    color: ${props => props.hoverColor};
  }
  
  @media ${props => props.theme.media.tablet} {
    padding: 10px 5px;
    font-size: 14px;
  }
  @media ${props => props.theme.media.phone} {
    padding: 8px 5px;
    font-size: 12px;
  }
`

