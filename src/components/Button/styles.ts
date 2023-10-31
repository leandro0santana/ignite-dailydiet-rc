import { TouchableOpacity } from 'react-native'
import styled, { css } from 'styled-components/native'
import { MaterialIcons } from '@expo/vector-icons'

export type ButtonTypeStyleProps = 'primary' | 'secondary'
export type ButtonWidthStyleProps = 'lg' | 'md'

type Props = {
  type: ButtonTypeStyleProps
  sizeWidth?: ButtonWidthStyleProps
}

export const Container = styled(TouchableOpacity)<Props>`
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: ${({ sizeWidth }) => (sizeWidth === 'lg' ? '100%' : '60%')};
  min-height: 60px;
  max-height: 60px;

  ${({ theme, type }) =>
    type === 'primary' &&
    css`
      background-color: ${theme.COLORS.GRAY_600};
    `}

  ${({ theme, type }) =>
    type === 'secondary' &&
    css`
      background-color: ${theme.COLORS.WHITE};
      border: 1px solid ${theme.COLORS.GRAY_700};
    `}

  border-radius: 8px;
  margin-bottom: 8px;
`

export const Title = styled.Text<Props>`
  ${({ theme, type }) => css`
    color: ${type === 'primary' ? theme.COLORS.WHITE : theme.COLORS.GRAY_700};
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`

export const Icon = styled(MaterialIcons).attrs<Props>(({ theme, type }) => ({
  color: type === 'primary' ? theme.COLORS.WHITE : theme.COLORS.GRAY_600,
  size: 24,
}))`
  margin-right: 8px;
`
