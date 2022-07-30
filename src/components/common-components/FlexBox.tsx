import styled from "styled-components";

export interface IFlexBox {
    justifyContent?: TFlexBoxjustifyContentTypes;
    flexDirection?: TFlexBoxFlexDirectionTypes
    alignItems?: TFlexBoxAlignItemsTypes
    marginBottom?: number
    padding?: number
    border?: string
    width?: number
    height?: number
    marginAuto?: boolean
    columnGap?: number
    position?: TPositionTypes
    mediaFlexDirection?: TFlexBoxFlexDirectionTypes
    mediaRowGap?: number
}

type TFlexBoxjustifyContentTypes =
    | "start"
    | "center"
    | "space-between"
    | "space-around"
    | "space-evenly"
    | "end";

type TFlexBoxFlexDirectionTypes =
    | "row"
    | "column"

type TFlexBoxAlignItemsTypes =
    | "centre"
    | "baseline"

type TPositionTypes =
    | "relative"
    | "absolute"
    | "fixed "

export const FlexBox = styled.div<IFlexBox>`
  display: flex;
  align-items: ${props => props.alignItems || 'center'};
  justify-content: ${p => p.justifyContent || 'center'};
  flex-direction: ${p => p.flexDirection || 'row'};
  margin: ${props => props.marginAuto ? '0 auto' : 0};
  margin-bottom: ${p => p.marginBottom || 0}px;
  padding: ${props => props.padding}px;
  border-bottom: ${props => props.border};
  border-top: ${props => props.border};
  max-width: ${props => props.width}px;
  width: 100%;
  height: ${props => props.height}px;
  column-gap: ${props => props.columnGap}px;
  position: ${props => props.position || 'static'};
  @media ${props => props.theme.media.tablet} {
    flex-direction: ${p => p.mediaFlexDirection};
    row-gap: ${props => props.mediaRowGap}px;
  }
  @media ${props => props.theme.media.phone} {
    flex-direction: ${p => p.mediaFlexDirection};
    row-gap: ${props => props.mediaRowGap}px;
  }
`