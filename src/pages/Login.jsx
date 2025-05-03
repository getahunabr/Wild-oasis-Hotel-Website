import styled from "styled-components";
import LoginForm from "../features/authentication/LoginForm";
import Logo from "../ui/Logo";
import Heading from "../ui/Heading";
const LoginLayout = styled.main`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 1fr; /* full width on mobile */
  padding: 2rem; /* some space on mobile */
  align-content: center;
  justify-content: center;
  gap: 2.4rem;
  background-color: var(--color-grey-50);

  @media (min-width: 768px) {
    grid-template-columns: 48rem; /* fixed width on tablets and up */
    padding: 0;
    gap: 3.2rem;
  }
`;

function Login() {
  return (
    <LoginLayout>
      <Logo />
      <Heading as="h4">Log in to your account</Heading>
      <LoginForm />
    </LoginLayout>
  );
}

export default Login;
