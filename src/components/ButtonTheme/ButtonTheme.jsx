import PropTypes from "prop-types";
import styled from "styled-components";

const ButtonTheme = ({ toggleTheme, theme }) => {
  return (
    <Button onClick={toggleTheme} $theme={theme}>
      {theme === "light" ? "🌙 Тёмная тема" : "☀️ Светлая тема"}
    </Button>
  );
};

ButtonTheme.propTypes = {
  toggleTheme: PropTypes.func.isRequired,
  theme: PropTypes.oneOf(["light", "dark"]).isRequired,
};

const Button = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  padding: 10px 15px;
  border-radius: 20px;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.3s ease;
  z-index: 100;

  /* Светлая тема */
  ${({ $theme }) =>
    $theme === "light" &&
    `
    background-color: var(--color-button-background-light-default);
    color: var(--color-text-light-default);
    border: 1px solid var(--color-text-light-default);
    
    &:hover {
      background-color: var(--color-button-background-light-active);
    }
  `}

  /* Тёмная тема */
  ${({ $theme }) =>
    $theme === "dark" &&
    `
    background-color: var(--color-button-background-dark-default);
    color: var(--color-text-dark-default);
    border: 1px solid var(--color-text-dark-default);
    
    &:hover {
      background-color: var(--color-button-background-dark-active);
    }
  `}
`;

export default ButtonTheme;
