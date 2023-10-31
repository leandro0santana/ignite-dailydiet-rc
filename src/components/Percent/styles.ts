import { ArrowUpRight } from 'phosphor-react-native'
import { TouchableOpacity } from 'react-native'
import styled, { css } from 'styled-components/native'

export type ButtonTypeStyleProps = 'success' | 'fail'

type Props = {
  type: ButtonTypeStyleProps
}

export const Container = styled(TouchableOpacity)<Props>`
  width: 100%;
  min-height: 125px;
  max-height: 125px;

  flex: 1;
  justify-content: center;
  align-items: center;

  background-color: ${({ theme, type }) =>
    type === 'success' ? theme.COLORS.GREEN_100 : theme.COLORS.RED_100};
  border-radius: 8px;
  padding: 16px 20px;
`

export const Icon = styled(ArrowUpRight).attrs<Props>(({ theme, type }) => ({
  color: type === 'success' ? theme.COLORS.GREEN_700 : theme.COLORS.RED_700,
  size: 24,
  weight: 'bold',
}))`
  position: absolute;
  right: 8px;
  top: 8px;
`

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_700};
    font-size: ${theme.FONT_SIZE.XL3}px;
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
