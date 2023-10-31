import { TextInput } from 'react-native'
import styled, { css } from 'styled-components/native'

export type InputTypeStyleProps = 'lg' | 'md'

type Props = {
  type: InputTypeStyleProps
}

export const Container = styled(TextInput)<Props>`
  flex: 1;
  width: 100%;
  min-height: 56px;
  max-height: ${({ type }) => (type === 'md' ? '56px' : '120px')};

  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_700};

    font-size: ${theme.FONT_SIZE.LG}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};

    border: 1px solid ${theme.COLORS.GRAY_300};
  `}

  border-radius: 8px;
  padding: 16px;
  margin-bottom: 24px;
`
