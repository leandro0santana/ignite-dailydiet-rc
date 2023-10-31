import { TouchableOpacity } from 'react-native'
import styled, { css } from 'styled-components/native'

export type MealStatusTypeStyleProps = 'success' | 'fail'

type Props = {
  type: MealStatusTypeStyleProps
}

export const Container = styled(TouchableOpacity)`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 50px;
  max-height: 50px;

  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_300};
  border-radius: 8px;
  padding: 14px 0;
  margin-bottom: 4px;
`

export const Hour = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_700};
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
  padding: 0 12px;
`

export const Divider = styled.View`
  width: 0px;
  height: 14px;
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_400};
`

export const Title = styled.Text`
  flex: 1;
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_700};
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
  margin: 0 12px;
`

export const Status = styled.View<Props>`
  width: 14px;
  height: 14px;
  border-radius: 100%;
  background-color: ${({ theme, type }) =>
    type === 'success' ? theme.COLORS.GREEN_300 : theme.COLORS.RED_300};
  margin-right: 16px;
`
