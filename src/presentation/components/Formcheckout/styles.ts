import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

`

export const ErrorContainer = styled.div`
  height: 25px;

  span {
    font-size: 0.8rem;
    color: red;
  }

`

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

`
export const RowForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

export const ButtonSubmit = styled.button`

  -webkit-font-smoothing: antialiased;
  font-style: normal;
  -webkit-tap-highlight-color: transparent;
  box-sizing: border-box;
  background: transparent;
  outline: 0;
  text-decoration: none;
  vertical-align: middle;
  cursor: pointer;
  background-image: none;
  white-space: nowrap;
  padding: 6px 12px;
  user-select: none;
  height: 48px;
  border-radius: 4px !important;
  line-height: 2;
  text-align: center;
  color: #222;
  display: block;
  font-weight: bold;
  font-size: 16px;
  background-color: #ffd700;
  transition: background-image 500ms ease;
  border: none;
  width: 152px;
  margin: 0 auto 10px;
  min-width: 44%;

`