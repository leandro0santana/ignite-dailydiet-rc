import { SafeAreaView } from 'react-native-safe-area-context'
import styled, { css } from 'styled-components/native'

export type FeedbackTypeStyleProps = 'success' | 'fail'

type Props = {
  type: FeedbackTypeStyleProps
}

export const Container = styled(SafeAreaView)`
  flex: 1;

  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.GRAY_100};
  padding: 32px;
`

export const Title = styled.Text<Props>`
  ${({ theme, type }) => css`
    color: ${type === 'success'
      ? theme.COLORS.GREEN_700
      : theme.COLORS.RED_700};
    font-size: ${theme.FONT_SIZE.XL2}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
  text-align: center;
`

export const FeedbackImage = styled.Image`
  margin-top: 40px;
  margin-bottom: 32px;
`

export const Subtitle = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_700};
    font-size: ${theme.FONT_SIZE.LG}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}
  text-align: center;
`

export const Strong = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`
