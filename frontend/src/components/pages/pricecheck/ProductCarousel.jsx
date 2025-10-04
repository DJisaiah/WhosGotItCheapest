import { Badge, Box, Button, Card, HStack, Image } from "@chakra-ui/react";
import styles from "@/components/pages/pricecheck/ProductCarousel.module.css";

const ProductCard = ({image, productName}) => (
  <Card.Root flexDirection="row" overflow="hidden" maxW="xl">
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
  <Card.Root flexDirection="row" overflow="hidden" maxW="xl">
    <Box>
      <Card.Body>
        <Card.Title mb="2">{storeName}</Card.Title>
      </Card.Body>
      <Card.Footer>
        <Button href={linkto}>{storeName}</Button>
      </Card.Footer>
    </Box>
  </Card.Root>
)


function ProductCarousel() {
    return (
        <div className={styles.ProductCarousel}>
            <ProductCard/>
            <PriceCard/>
            <PriceCard/>
            <PriceCard/>
        </div>
    )
}

export default ProductCarousel;