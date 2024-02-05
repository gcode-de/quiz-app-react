import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faBookmark,
  faCirclePlus,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <footer className="footer">
      <menu>
        <ul>
          <a href="./index.html" aria-label="home">
            <li>
              <FontAwesomeIcon icon={faHouse} />
            </li>
          </a>
          <a href="./favs.html" aria-label="Favourites">
            <li>
              <FontAwesomeIcon icon={faBookmark} />
            </li>
          </a>
          <a href="./form.html" aria-label="Add Question">
            <li>
              <FontAwesomeIcon icon={faCirclePlus} />
            </li>
          </a>
          <a href="./profile.html" aria-label="Profile">
            <li>
              <FontAwesomeIcon icon={faUser} />
            </li>
          </a>
        </ul>
      </menu>
    </footer>
  );
}
