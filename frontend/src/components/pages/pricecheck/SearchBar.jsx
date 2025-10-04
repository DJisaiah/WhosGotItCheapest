import { Input } from "@chakra-ui/react";
import { Heading, IconButton } from "@chakra-ui/react";
import { LuSearch } from "react-icons/lu";
import styles from "@/components/pages/pricecheck/SearchBar.module.css";

function SearchBar () {
    return (
        <div className={styles.searchBar}>
            <Heading size="6xl">Find the Cheapest Price</Heading>
            <div className={styles.barAndButton}>
                <Input placeholder="Search for a product (e.g. milk, bread, instant noodles)"/>
                <IconButton colorPalette="yellow" aria-label="Search Prices!">
                    <LuSearch/>
                </IconButton>
            </div>
        </div>
    );
}

export default SearchBar;