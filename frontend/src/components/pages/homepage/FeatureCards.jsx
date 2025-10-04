import { Button, Card, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function FeatureCards({title, desc, alt, src, button, url}) {
      return (
    <Card.Root maxW="sm" overflow="hidden">
      <Image
        src={src}
        alt={alt}
      />
      <Card.Body gap="2">
        <Card.Title>{title}</Card.Title>
        <Card.Description>
            {desc}
        </Card.Description>
      </Card.Body>
      <Card.Footer gap="2">
        <Button variant="solid" as={Link} to={url}>{button}</Button>
      </Card.Footer>
    </Card.Root>
  )
}

export default FeatureCards;