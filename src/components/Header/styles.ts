import styled, { css } from 'styled-components/native'
import { ArrowLeft } from 'phosphor-react-native'

export type HeaderTypeStyleProps = 'default' | 'success' | 'fail'
export type HeaderSizeStyleProps = 'md' | 'lg'

type Props = {
  type: HeaderTypeStyleProps
  sizeHeader?: HeaderSizeStyleProps
}

export const Container = styled.View<Props>`
  width: 100%;

  ${({ sizeHeader }) =>
    sizeHeader === 'md' &&
    css`
      height: 132px;
      flex-direction: row;
      align-items: center;
      justify-content: center;
    `}

  ${({ sizeHeader }) =>
    sizeHeader === 'lg' &&
    css`
      height: 200px;
      justify-content: center;
    `}

  padding: 56px 24px;

  background-color: ${({ theme, type }) =>
    type === 'default'
      ? theme.COLORS.GRAY_300
      : type === 'success'
      ? theme.COLORS.GREEN_100
      : theme.COLORS.RED_100};
`

export const Title = styled.Text<Props>`
  flex: 1;
  ${({ theme, sizeHeader }) => css`
    color: ${theme.COLORS.GRAY_700};
    font-size: ${sizeHeader === 'md'
      ? `${theme.FONT_SIZE.XL}px`
      : `${theme.FONT_SIZE.XL3}px`};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
  text-align: center;
`

export const Subtitle = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_600};
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}
  text-align: center;
`

export const BackButton = styled.TouchableOpacity``

export const BackIcon = styled(ArrowLeft).attrs<Props>(({ theme, type }) => ({
  color:
    type === 'default'
      ? theme.COLORS.GRAY_600
      : type === 'success'
      ? theme.COLORS.GREEN_700
      : theme.COLORS.RED_700,
  size: 24,
  weight: 'bold',
}))``
