import styled, { css } from 'styled-components/native'
import { ForkKnife } from 'phosphor-react-native'

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`

export const Message = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_500};
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}

  text-align: center;
`

export const Icon = styled(ForkKnife).attrs(({ theme }) => ({
  color: theme.COLORS.GRAY_500,
  size: 48,
  weight: 'fill',
}))`
  align-self: center;
  margin-bottom: 8px;
`
