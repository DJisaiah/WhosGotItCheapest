import styles from "@/components/pages/homepage/HomePage.module.css";
import { Button } from "@chakra-ui/react";
import image1 from "@/assets/homepage/budgetissafe.jpg";

function HomePage(){
    return (
        <div className={styles.bodyContainer}>
            <div className={styles.leftPanel}>
                <h1><em>Awe</em>. Your Budget is Safe 🤙</h1>
                <p>The Smart Student's Grocery Planning Tool</p>
                <Button colorPalette="yellow" variant="solid">Try it!</Button>
            </div>
            <img src={image1} alt="Money Saving Image" className={styles.rightPanel}/>
        </div>
    )
}

export default HomePage;