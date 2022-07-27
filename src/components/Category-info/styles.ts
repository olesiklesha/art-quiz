import styled from 'styled-components';

interface CustomSpanProps {
  accent: boolean;
}

export const CategoryInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export const CustomSpan = styled.span<CustomSpanProps>`
  color: ${(p) => (p.accent ? '#FFBCA2' : '#fff')};
`;
