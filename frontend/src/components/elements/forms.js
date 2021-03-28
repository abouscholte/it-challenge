import styled from "styled-components"
import { Search } from "react-ionicons"

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

export const SearchBar = props => (
  <SearchLabel htmlFor={props.id}>
    <SearchIcon>
      <Search />
    </SearchIcon>
    <FormControl {...props}/>
  </SearchLabel>
)

const SearchLabel = styled.label`
  display: block;
  height: 43px;
  margin-bottom: 20px;

  input {
    margin: 0 0 0 43px;
    max-width: calc(100% - 43px);
    border-radius: 0 8px 8px 0;
    border: 1px solid #ddd;
    border-left-color: transparent;
    &::placeholder {
      transition: color .2s ease-in-out;
    }
    &:hover,
    &:focus {
      border-left-color: transparent;
      &::placeholder {
        color: #333;
      }
    }
  }
`

const SearchIcon = styled.div`
  position: absolute;
  width: 43px;
  height: 43px;
  background: ${props => props.theme.primary_blue};
  border-radius: 8px 0 0 8px;
  svg {
    position: absolute;
    fill: #ddd;
    width: 18px;
    height: 18px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`