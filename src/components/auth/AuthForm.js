import styled from "styled-components";
import { Link } from "../../../node_modules/react-router-dom/index";
import palette from "../../lib/styles/palette";
import Button from "../common/Button";

const AuthFormBlock = styled.div`
  h3 {
    magrin: 0;
    color: ${palette.gray[8]};
    margin-bottom: 1rem;
  }
`;

const StyledInput = styled.input`
  font-size: 1rem;
  border: none;
  border-bottom: 1px solid ${palette.gray[5]};
  padding-bottom: 0.5rem;
  outline: none;
  width: 100%;
  &:focus {
    color: $0c-teal-7;
    border-bottom: 1px solid ${palette.gray[7]};
  }
  & + & {
    margin-top: 1rem;
  }
`;

const Footer = styled.div`
  margin-top: 2rem;
  text-align: right;
  a {
    color: ${palette.gray[6]};
    text-decoration: underline;
    &:hover {
      color: ${palette.gray[9]};
    }
  }
`;

const ButtonWithMarginTop = styled(Button)`
  margin-top: 1rem;
`;

const textMap = {
  login: "Sign In",
  register: "Add Administrator",
};

const ErrorMessage = styled.div`
  color: red;
  text-align: center;
  font-size : 0.7rem;
  margin-top: 1rem;
  font-weight: bold;
`;

const AuthForm = ({ type, form, onChange, onSubmit, error }) => {
  const text = textMap[type];
  return (
    <AuthFormBlock>
      <h3>{text}</h3>
      <form onSubmit={onSubmit}>
        <StyledInput 
          autoComplete="username" 
          name="id" 
          placeholder="ID" 
          onChange={onChange} 
          value={form.id} />

        <StyledInput 
          autoComplete="new-password" 
          name="pw" 
          placeholder="Password" 
          type="password" 
          onChange={onChange} 
          value={form.pw} />

        {type === "register" && (
          <>
          <StyledInput 
            autoComplete="new-password" 
            name="pwConfirm" 
            placeholder="Check Password" 
            type="password" 
            onChange={onChange} 
            value={form.pwConfirm} />
        
        <StyledInput 
          autoComplete="name"
          name="name"
          placeholder="Name"
          onChange={onChange}
          value={form.name} />
          
        <StyledInput 
          autoComplete="email" 
          name="email" 
          placeholder="E-Mail" 
          onChange={onChange} 
          value={form.email} />
        
        <StyledInput 
          autoComplete="tel" 
          name="phone" 
          placeholder="Phone Number" 
          onChange={onChange} 
          value={form.phone} />
          </>)}

          {error && <ErrorMessage>{error}</ErrorMessage>};
          <ButtonWithMarginTop fullWidth>{text}</ButtonWithMarginTop>
      </form>
      <Footer>{type === "login" ? <Link to="/register">Add Administrator</Link> : <Link to="/login">Sign In</Link>}</Footer>
    </AuthFormBlock>
  );
};

export default AuthForm;
