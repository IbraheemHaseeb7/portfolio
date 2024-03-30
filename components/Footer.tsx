import styles from "./footer.module.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import EmailIcon from "@mui/icons-material/Email";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TwitterIcon from "@mui/icons-material/Twitter";
import { useDispatch } from "react-redux";
import { setIcon } from "@/state/slices/footerSlice";
import React from "react";

export default function Footer() {
  const icons = [
    { icon: <GitHubIcon />, link: "https://github.com/IbraheemHaseeb7", id: 1 },
    { icon: <FacebookIcon />, link: "https://facebook.com", id: 2 },
    { icon: <EmailIcon />, link: "mailto:ibraheemhaseeb7@gmail.com", id: 3 },
    { icon: <WhatsAppIcon />, link: "https://wa.me/923334574770", id: 4 },
    { icon: <TwitterIcon />, link: "https://twitter.com", id: 5 },
  ];

  const dispatch = useDispatch();

  function hovering(e: any) {
    e.preventDefault();

    dispatch(setIcon(e.target?.outerHTML));
  }

  return (
    <footer className="w-full h-20 flex justify-center items-center fixed bottom-0 left-0 z-20">
      <div className={`${styles.inner} text-pinky flex gap-5`}>
        {icons.map(({ icon, link, id }) => {
          return (
            <a
              target="_blank"
              onMouseEnter={hovering}
              href={link}
              key={id}
              data-icon={icon}
            >
              {icon}
            </a>
          );
        })}
      </div>
    </footer>
  );
}
