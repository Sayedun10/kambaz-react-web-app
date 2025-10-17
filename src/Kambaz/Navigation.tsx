import { Link, useLocation } from "react-router-dom";
import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";

export default function KambazNavigation() {
  const location = useLocation();
  const links = [
    { label: "Dashboard", path: "/Kambaz/Dashboard", icon: AiOutlineDashboard },
    { label: "Courses", path: "/Kambaz/Courses/1234/Home", icon: LiaBookSolid },
    { label: "Calendar", path: "/Kambaz/Calendar", icon: IoCalendarOutline },
    { label: "Inbox", path: "/Kambaz/Inbox", icon: FaInbox },
    { label: "Labs", path: "/Labs", icon: LiaCogSolid },
  ];

  return (
    <div
      id="wd-kambaz-navigation"
      style={{ width: 120 }}
      className="list-group rounded-0 position-fixed bottom-0 top-0 d-none d-md-block bg-black z-2"
    >
      <a
        className="list-group-item bg-black border-0 text-center"
        target="_blank"
        href="https://www.northeastern.edu/"
        id="wd-neu-link"
      >
        <img src="/images/NEU.png" width="75px" alt="Northeastern" />
      </a>

      <Link
        to="/Kambaz/Account"
        id="wd-account-link"
        className={`list-group-item text-center border-0 
              ${
                location.pathname.includes("Account")
                  ? "bg-white text-danger"
                  : "bg-black text-white"
              }`}
      >
        <FaRegCircleUser
          className={`fs-1 ${
            location.pathname.includes("Account") ? "text-danger" : "text-white"
          }`}
        />
        <br />
        Account
      </Link>

      {links.map((link) => (
        <Link
          key={link.path}
          to={link.path}
          id={`wd-${link.label.toLowerCase()}-link`}
          className={`list-group-item text-center border-0 
                ${
                  location.pathname.includes(link.label)
                    ? "bg-white text-danger"
                    : "bg-black text-white"
                }`}
        >
          {link.icon({
            className: `fs-1 ${
              location.pathname.includes(link.label)
                ? "text-danger"
                : "text-white"
            }`,
          })}
          <br />
          {link.label}
        </Link>
      ))}
    </div>
  );
}
