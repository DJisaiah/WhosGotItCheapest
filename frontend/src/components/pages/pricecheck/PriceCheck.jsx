import SearchBar from "./SearchBar";
import styles from "@/components/pages/pricecheck/PriceCheck.module.css";
import ProductCarousel from "./ProductCarousel";

function PriceCheck() {
    return (
        <div className={styles.pageLayout}>
            <div className={styles.searchCorner}>
                <SearchBar/>
            </div>
            <div className={styles.productListings}>
                <ProductCarousel/>
            </div>
        </div>
    )
}

export default PriceCheck;