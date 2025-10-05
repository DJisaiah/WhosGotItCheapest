import { Badge, Box, Button, Card, HStack, Image } from "@chakra-ui/react";
import styles from "@/components/pages/pricecheck/ProductCarousel.module.css";
import { useState, useEffect } from "react";

const ProductCard = ({image, productName}) => (
  <Card.Root flexDirection="row" overflow="hidden" minW="25vw">
    <Image
      objectFit="cover"
      maxW="200px"
      src={image}
      alt={productName}
    />
    <Box>
      <Card.Body>
        <Card.Title mb="2">{productName}</Card.Title>
      </Card.Body>
    </Box>
  </Card.Root>
)
const PriceCard = ({storeName, price, linkto}) => (
  <Card.Root flexDirection="row" overflow="hidden" minW="20vw">
    <Box>
      <Card.Body>
        <Card.Title mb="2">{storeName}</Card.Title>
        <Card.Description>
          R{price}
        </Card.Description>
      </Card.Body>
      <Card.Footer>
        <Button href={linkto}>Buy</Button>
      </Card.Footer>
    </Box>
  </Card.Root>
)


function ProductCarousel() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/api/products.json")
    .then(response => {
      if (!response.ok) {
        throw new Error("bad response");
      }
      return response.json();
    })
    .then(data => {
      setProducts(data)
    })
    .catch(error=>console.error("Error fetching data", error))
  }, [])

    return (
        <div className={styles.ProductCarousel}>
          {
            products.map((product) => (
              <div className={styles.ProductCarousel}>
                <ProductCard productName={product.productName} image={product.image}/>
                <PriceCard storeName={product.prices[0].store} price={product.prices[0].price} linkto={product.prices[0].price} className={styles.card}/>
                <PriceCard storeName={product.prices[1].store} price={product.prices[1].price} linkto={product.prices[1].price} className={styles.card}/>
                <PriceCard storeName={product.prices[2].store} price={product.prices[2].price} linkto={product.prices[2].price} className={styles.card}/>
              </div>
            ))
          }
        </div>
    )
}

export default ProductCarousel;