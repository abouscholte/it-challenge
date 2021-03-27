import styled from "styled-components"

export const FormPageForm = styled.form`
  display: block;
  border: 1px solid ${props => props.theme.grey};
  background: #f6f8fa;
  padding: 20px;
  border-radius: 5px;
  margin: 0 0 30px;
`

export const FormGroup = styled.div`
  margin-bottom: 20px;
`

export const FormLabel = styled.label`
  display: block;
  font-size: 13px;
  font-family: 'Barlow', sans-serif;
  color: #555;
  text-align: left;
  margin-bottom: 5px;
  &.error {
    color: #FF2800;
  }
`

export const FormControl = styled.input`
  display: block;
  width: 100%;
  text-align: left;
  padding: 10px;
  border: 2px solid ${props => props.theme.grey};
  border-radius: 8px;
  -webkit-appearance: none;
  background: white;
  box-sizing: border-box;
  transition: .2s;
  outline: none;
  font-size: 16px;
  font-family: 'Roboto Slab', sans-serif;
  resize: vertical;
  &:hover,
  &:focus {
    border-color: ${props => props.theme.darker_grey};
  }
  &:focus {
    box-shadow: 0 0 0 3px ${props => props.theme.outline};
  }
  &.error {
    border-color: ${props => props.theme.ferrari_red};
  }
`

export const FormTextArea = styled.textarea`
  display: block;
  width: 100%;
  text-align: left;
  padding: 10px;
  border: 2px solid ${props => props.theme.grey};
  border-radius: 8px;
  -webkit-appearance: none;
  background: white;
  box-sizing: border-box;
  transition: .2s;
  outline: none;
  font-size: 16px;
  font-family: 'Roboto Slab', sans-serif;
  resize: vertical;
  &:hover,
  &:focus {
    border-color: ${props => props.theme.darker_grey};
  }
  &:focus {
    box-shadow: 0 0 0 3px ${props => props.theme.outline};
  }
  &.error {
    border-color: ${props => props.theme.ferrari_red};
  }
`

export const FormSelect = styled.select`
  display: block;
  width: 100%;
  text-align: left;
  padding: 10px;
  border: 2px solid ${props => props.theme.grey};
  border-radius: 8px;
  -webkit-appearance: none;
  background: white;
  box-sizing: border-box;
  transition: .2s;
  outline: none;
  font-size: 16px;
  font-family: 'Roboto Slab', sans-serif;
  resize: vertical;
  &:hover,
  &:focus {
    border-color: ${props => props.theme.darker_grey};
  }
  &:focus {
    box-shadow: 0 0 0 3px ${props => props.theme.outline};
  }
  &.error {
    border-color: ${props => props.theme.ferrari_red};
  }
`

export const FormControlError = styled.span`
  color: ${props => props.theme.ferrari_red};
  text-align: left;
  font-size: 13px;
  font-family: 'Barlow', sans-serif;
  margin-top: 5px;
  display: block;
`

export const FormSubmit = styled.input`
  display: block;
  width: 100%;
  background: ${props => props.theme.primary_blue};
  border: 2px solid ${props => props.theme.primary_blue};
  border-radius: 8px;
  padding: 10px;
  text-align: center;
  -webkit-appearance: none;
  transition: .2s;
  color: white;
  outline: none;
  font-family: 'Barlow', sans-serif;
  font-size: 16px;
  cursor: pointer;
  line-height: 1;
  &:hover,
  &:focus {
    background: ${props => props.theme.lighter_blue};
  }
  &:focus {
    box-shadow: 0 0 0 3px ${props => props.theme.outline};
  }
`

export const FormLinks = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-top: 20px;
  a {
    text-decoration: underline;
    &:hover {
      text-decoration: none;
    }
  }
`

export const FormInfo = styled.p`
  padding: 20px;
  box-sizing: border-box;
  margin: 0 0 30px;
  background: white;
  border: 1px solid #eaecef;
  border-radius: 5px;
`