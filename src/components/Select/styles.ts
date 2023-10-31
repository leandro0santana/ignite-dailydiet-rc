import { TouchableOpacity } from 'react-native'
import styled, { css } from 'styled-components/native'

export type SelectTypeStyleProps = 'success' | 'fail'
export type SelectActiveStyleProps = boolean

type SelectStyleProps = {
  isActive?: boolean
  type: SelectTypeStyleProps
}

export const Container = styled(TouchableOpacity)<SelectStyleProps>`
  flex: 1;
  width: 100%;
  height: 50px;

  flex-direction: row;
  justify-content: center;
  align-items: center;

  ${({ theme, isActive, type }) =>
    isActive &&
    type === 'success' &&
    css`
      border: 1px solid ${theme.COLORS.GREEN_700};

      background-color: ${theme.COLORS.GREEN_100};
    `}

  ${({ theme, isActive, type }) =>
    isActive &&
    type === 'fail' &&
    css`
      border: 1px solid ${theme.COLORS.RED_700};

      background-color: ${theme.COLORS.RED_100};
    `}

  ${({ theme, isActive }) =>
    !isActive &&
    css`
      background-color: ${theme.COLORS.GRAY_200};
    `}


  border-radius: 8px;
  padding: 16px;
`

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_700};
  `}
`

export const Status = styled.View<SelectStyleProps>`
  width: 8px;
  height: 8px;
  border-radius: 100%;
  background-color: ${({ theme, type }) =>
    type === 'success' ? theme.COLORS.GREEN_700 : theme.COLORS.RED_700};
  margin-right: 8px;
`
