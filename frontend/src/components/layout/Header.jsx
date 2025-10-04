import logo from "@/assets/icons/site_logo.png";
import styles from "@/components/layout/Header.module.css";
import { Button } from "@chakra-ui/react"

function Header(){
    return (
        <div className={styles.header}>
            <div className={styles.siteLogo}>
                <img className={styles.siteLogo} src={logo}/>
                <h1>Who's Got it Cheapest?</h1>
            </div>
            <div>
                <Button size="md" variant="solid" colorPalette="white" className={styles.signUpButton}>Login</Button> 
                <Button size="md" variant="solid" colorPalette="yellow" className={styles.signUpButton}>Sign up</Button>
            </div>
        </div>
    )
}

export default Header;