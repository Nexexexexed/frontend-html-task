import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../../assets/logo.png";
import PropTypes from "prop-types";
import styled from "styled-components";

const routes = [
  { title: "Home", icon: "fas-solid fa-house", path: "/" },
  { title: "Sales", icon: "chart-line", path: "/sales" },
  { title: "Costs", icon: "chart-column", path: "/costs" },
  { title: "Payments", icon: "wallet", path: "/payments" },
  { title: "Finances", icon: "chart-pie", path: "/finances" },
  { title: "Messages", icon: "envelope", path: "/messages" },
];

const bottomRoutes = [
  { title: "Settings", icon: "sliders", path: "/settings" },
  { title: "Support", icon: "phone-volume", path: "/support" },
];

const themes = {
  light: {
    sidebarBackground: `var(--color-sidebar-background-light-default)`,
    sidebarHover: `var(--color-sidebar-background-light-hover)`,
    sidebarActive: `var(--color-sidebar-background-light-active)`,
    textDefault: `var(--color-text-light-default)`,
    textHover: `var(--color-text-light-hover)`,
    textActive: `var(--color-text-light-active)`,
    logoColor: `var(--color-text-logo-light-default)`,
    buttonBackground: `var(--color-button-background-light-default)`,
    buttonHover: `var(--color-button-background-light-active)`,
  },
  dark: {
    sidebarBackground: "#202127",
    sidebarHover: "#2d2e34",
    sidebarActive: "#393a3f",
    textDefault: "#f0f2ff",
    textHover: "#f0f2ff",
    textActive: "#f0f2ff",
    logoColor: "#3b82f6",
    buttonBackground: "#202127",
    buttonHover: "#4b5966",
  },
};

const SidebarContainer = styled.div`
  background-color: ${({ theme }) => theme.sidebarBackground};
  color: ${({ theme }) => theme.textDefault};
  display: flex;
  flex-direction: column;
  border-radius: 0.75rem;
  width: ${({ $isOpened }) => ($isOpened ? "15rem" : "5rem")};
  position: relative;
  transition: all 0.3s ease;
  height: 95vh;
`;

const LogoBlock = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem;
  min-height: 2.5rem;
  transition: all 0.3s ease;

  img {
    width: 2rem;
    height: 2rem;
    object-fit: contain;
    transition: all 0.3s ease;
    flex-shrink: 0;
    margin: ${({ $isOpened }) => ($isOpened ? "none" : "auto")};
  }

  span {
    font-size: 1.1em;
    font-weight: 600;
    color: ${({ theme }) => theme.logoColor};
    margin-left: 0.5rem;
    white-space: nowrap;
    display: ${({ $isOpened }) => ($isOpened ? "inline" : "none")};
    opacity: ${({ $isOpened }) => ($isOpened ? 1 : 0)};
    width: ${({ $isOpened }) => ($isOpened ? "auto" : "0")};
    height: ${({ $isOpened }) => ($isOpened ? "auto" : "0")};
    transition: opacity 0.3s ease;
    overflow: hidden;
  }
`;

const ToggleButton = styled.div`
  position: absolute;
  left: ${({ $isOpened }) => ($isOpened ? "93%" : "110%")};
  background-color: ${({ theme }) => theme.buttonBackground};
  border-radius: 1rem;
  width: 1.5rem;
  height: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 1.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 10;

  &:hover {
    background-color: ${({ theme }) => theme.buttonHover};
  }
`;

const Menu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${({ $isOpened }) => ($isOpened ? "flex-start" : "center")};
  padding: 0 0.5rem;
  transition: all 0.3s ease;
  flex-grow: 1;
`;

const MenuItem = styled.div`
  display: flex;
  align-items: center;
  padding: ${({ $isOpened }) => ($isOpened ? "0.75rem" : "0.5rem 0")};
  margin: 0.25rem 0;
  cursor: pointer;
  border-radius: 0.85rem;
  width: ${({ $isOpened }) => ($isOpened ? "calc(100% - 1.5rem)" : "60%")};
  transition: all 0.3s ease;
  justify-content: ${({ $isOpened }) => ($isOpened ? "flex-start" : "center")};
  background-color: ${({ $active, theme }) =>
    $active ? theme.sidebarActive : "transparent"};
  color: ${({ $active, theme }) =>
    $active ? theme.textActive : theme.textDefault};

  svg {
    margin-right: ${({ $isOpened }) => ($isOpened ? "0.75rem" : "0")};
    width: ${({ $isOpened }) => ($isOpened ? "1rem" : "1.5rem")};
    height: auto;
    transition: margin-right 0.3s ease;
    flex-shrink: 0;
  }

  span {
    display: ${({ $isOpened }) => ($isOpened ? "inline" : "none")};
    opacity: ${({ $isOpened }) => ($isOpened ? 1 : 0)};
    width: ${({ $isOpened }) => ($isOpened ? "auto" : "0")};
    height: ${({ $isOpened }) => ($isOpened ? "auto" : "0")};
    overflow: hidden;
    transition: opacity 0.3s ease;
  }

  &:hover {
    background-color: ${({ theme, $active }) =>
      $active ? theme.sidebarActive : theme.sidebarHover};
    color: ${({ theme }) => theme.textHover};
  }
`;

const FooterMenu = styled(Menu)``;

const Sidebar = (props) => {
  const { color } = props;
  const [isOpened, setIsOpened] = useState(false);
  const [activePath, setActivePath] = useState("");

  const goToRoute = (path) => {
    setActivePath(path);
    console.log(`going to "${path}"`);
  };

  const toggleSidebar = () => {
    setIsOpened((v) => !v);
  };

  return (
    <SidebarContainer $isOpened={isOpened} theme={themes[color]}>
      <LogoBlock $isOpened={isOpened} theme={themes[color]}>
        <img src={logo} alt="TensorFlow logo" />
        <span>TensorFlow</span>
      </LogoBlock>

      <ToggleButton
        $isOpened={isOpened}
        onClick={toggleSidebar}
        theme={themes[color]}
      >
        <FontAwesomeIcon icon={isOpened ? "angle-left" : "angle-right"} />
      </ToggleButton>

      <Menu $isOpened={isOpened}>
        {routes.map((route) => (
          <MenuItem
            key={route.title}
            onClick={() => goToRoute(route.path)}
            $isOpened={isOpened}
            $active={activePath === route.path}
            theme={themes[color]}
          >
            <FontAwesomeIcon icon={route.icon} />
            <span>{route.title}</span>
          </MenuItem>
        ))}
      </Menu>

      <FooterMenu $isOpened={isOpened}>
        {bottomRoutes.map((route) => (
          <MenuItem
            key={route.title}
            onClick={() => goToRoute(route.path)}
            $isOpened={isOpened}
            $active={activePath === route.path}
            theme={themes[color]}
          >
            <FontAwesomeIcon icon={route.icon} />
            <span>{route.title}</span>
          </MenuItem>
        ))}
      </FooterMenu>
    </SidebarContainer>
  );
};

Sidebar.propTypes = {
  color: PropTypes.string,
};

export default Sidebar;
