import React from 'react';
import styled from "styled-components";

interface ILabel {
    children: React.ReactNode
    nameForInput: string
}

export const Label = styled.label<ILabel>``

export default Label;