import styled from 'styled-components'

const Button = styled.button`
  background: ${({ primary }) => (primary ? '#2d9cdb' : '#FFFFFF')};
  border-radius: 2px;
  border: 1px solid ${({ primary }) => (primary ? '#2d9cdb' : '#E0E0E0')};
  color: ${({ primary }) => (primary ? '#F2F2F2' : '#828282')};
  font-size: 18px;
  font-weight: 300;
  padding: 0.5rem 1rem;
  min-width: 120px;
`

export default Button
