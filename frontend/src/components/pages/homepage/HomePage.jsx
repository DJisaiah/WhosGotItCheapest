import styles from "@/components/pages/homepage/HomePage.module.css";

import { Button } from "@chakra-ui/react";

import FeatureCards from "./FeatureCards";

// images
import thefullpricecheck from "@/assets/homepage/thefullpricecheck.jpg";
import studentbudgetmeals from "@/assets/homepage/studentbudgetmeals.jpeg";
import beyondgroceries from "@/assets/homepage/beyondgroceries.jpeg";
import nutritionalgapanalysis from "@/assets/homepage/nutritionalgapanalysis.jpg";
import datadrivendeals from "@/assets/homepage/datadrivendeals.jpeg";
import knowwhatyoureordering from "@/assets/homepage/knowwhatyoureordering.jpg";
import image1 from "@/assets/homepage/budgetissafe.jpg";


function HomePage(){
    return (
        <div className={styles.bodyContainer}>
            <div className={styles.leftPanel}>
                <h1><p className={styles.Highlight}>Awe.</p>Your Budget is Safe 🤙</h1>
                <p>The Smart Student's Grocery Planning Tool</p>
                <Button colorPalette="yellow" variant="solid">Try it!</Button>
            </div>
            <div className={styles.rightPanel}>
                <img src={image1} alt="Money Saving Image"/>
            </div>
            <div className={styles.FeatureCards}>
                <FeatureCards
                    title="The Full Price Check"
                    desc="Stop guessing. We compare prices across all major SA retailers and local Spaza shops to ensure you always find the lowest price."
                    alt="Store fronts"
                    src={thefullpricecheck}
                    button="Check Prices! (mvp)"
                    url="/PriceCheck"
                />
                <FeatureCards
                    title="Student Budget Meals"
                    desc="Access authentic, cheap meal plans and grocery baskets tailored to your budget, sourced from South African parents, students, and chefs."
                    alt="Happy Students"
                    src={studentbudgetmeals}
                    button="Find Meals! (coming soon)"
                />                
                <FeatureCards
                    title="Beyond Groceries"
                    desc="Find discount codes for online services and compare prices on all your favorites, including Fast Food delivery options like UberEats & Mr. D"
                    alt="Fast Food Places"
                    src={beyondgroceries}
                    button="Explore (coming soon)"
                />                
                <FeatureCards
                    title="Nutritional Gap Analysis"
                    desc="Eat Smarter, Not Just Cheaper: Upload your chosen grocery basket and instantly see any gaps in micronutrients and macronutrients to ensure you stay healthy while saving."
                    alt="Strong people"
                    src={nutritionalgapanalysis}
                    button="Analyse your Basket (coming soon)"
                />                                
                <FeatureCards
                    title="Data-Driven Deals"
                    desc='See historical price trends for products so you know if that "special" is actually a good deal, helping you shop smarter over time.'
                    alt="Data graphs"
                    src={datadrivendeals}
                    button="See Data (coming soon)"
                />                                
                <FeatureCards
                    title="Know What You're Ordering"
                    desc="Pair your price comparisons with real-world photos and size checks from so you never get surprised by a tiny portion again."
                    alt="Food size comparison"
                    src={knowwhatyoureordering}
                    button="Explore (coming soon)"
                />                
            </div>
        </div>
    )
}

export default HomePage;