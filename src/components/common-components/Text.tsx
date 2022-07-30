import React from "react";
import styled from "styled-components";

interface IText {
    children: React.ReactNode
    size?: number
    weight?: number
    textAlign?: string
    color?: string
    hover?: string
    marginBottom?: number
    marginTop?: number
    width?: number
    display?: string
}

export const Text = styled.p<IText>`
  text-align: ${props => props.textAlign || 'start'};
  font-size: ${props => props.size}px;
  font-weight: ${props => props.weight};
  color: ${props => props.color || 'black'};
  transition: color .3s linear;
  margin-bottom: ${props => props.marginBottom || 0}px;
  margin-top: ${props => props.marginTop || 0}px;
  width: ${props => props.width}px;
  display: ${props => props.display || 'block'};
  
  &:hover{
    color: ${props => props.hover}
  }
`