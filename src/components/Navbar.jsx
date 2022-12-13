import styles from "./Navbar.module.css";

import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { useAuthentication } from "../hooks/useAuthentication";
import { useAuthValue } from "../context/AuthContext"; // buscar valor do contexto

const Navbar = () => {
  const navigate = useNavigate();
  const { user } = useAuthValue();
  const { logout } = useAuthentication();

  const handleLogout = () => {
    logout();
    setTimeout(() => {
      navigate("/Login");
    }, 1);
  };

  return (
    <nav className={styles.navbar}>
      <NavLink to="/" className={styles.brand}>
        Min <span> Blog</span>
      </NavLink>
      <ul className={styles.links_list}>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? styles.active : "")}
            to="/"
          >
            Home
          </NavLink>
        </li>

        {!user && (
          <>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? styles.active : "")}
                to="/Login"
              >
                Entrar
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? styles.active : "")}
                to="/Register"
              >
                Cadastro
              </NavLink>
            </li>
          </>
        )}
        {user && (
          <>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? styles.active : "")}
                to="/Dashboard"
              >
                Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? styles.active : "")}
                to="/posts/create"
              >
                Novo Post
              </NavLink>
            </li>
          </>
        )}
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? styles.active : "")}
            to="/About"
          >
            Sobre
          </NavLink>
        </li>
        {user && (
          <li>
            <button className={styles.btnReset} onClick={handleLogout}>
              Sair
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
};
export default Navbar;
