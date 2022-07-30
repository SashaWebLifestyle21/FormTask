import React from 'react';
import styled from "styled-components";

interface ITextArea {
    onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
    onBlur?: (e: React.FormEvent<HTMLInputElement>) => void
    value?: string
    name?: string
    maxLength?: number
    minLength?: number
}

export const TextArea = styled.textarea<ITextArea>`
  border: 1px solid ${props => props.theme.colors.lightGrey};
  padding: 5px;
  font-size: 18px;
  color: ${props => props.theme.colors.primary};
  border-radius: 5px;
  transition: all .3s linear;
  resize: none;
  max-width: 300px;
  width: 100%;
  height: 250px;
`
