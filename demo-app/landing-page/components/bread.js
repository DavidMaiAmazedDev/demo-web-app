import { useState } from 'react';
import styles from "./bread.module.css";
export default function Bread({ linkName, clickedLink }) {
    const [linkNameDisplay, setLinkName] = useState('home');
    const reCheckLinkName = () => {
        if(linkName === '/') {
            return 'Home'.toUpperCase()
        }  else {
            return linkName.slice(1).toUpperCase();
        }
    }
    const handleClickedName = (name) => {
        setLinkName(name);
    };
  return (
    <div className={styles.container}>
        <span>{reCheckLinkName()}</span> &nbsp;
        {linkName === '/' && 
            <span>//// {clickedLink}</span> 
        }
            
    </div>
  );
}