import * as S from './button.styles'
export default function Button({ children, ...rest }) {
  return (
    <S.Container className='btn' {...rest}>
      {children}
    </S.Container>
  )
}
Button.defaultProps = {
  children: ''
}
