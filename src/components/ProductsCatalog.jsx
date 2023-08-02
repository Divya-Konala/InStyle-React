import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Grid,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Loader from "./loader";

const ProductsCatalog = () => {
  const navigate = useNavigate();
  const products = useSelector((state) => state.products.products);
  const loading = useSelector((state)=>state.products.loading);
  const redirectToProductPage=(prod)=>{
    const prodCode = prod.defaultArticle.code;
    navigate(`/product/${prodCode}`); 
  }

  if(loading){
    return <Loader/>
  }

  return (
    <div className="ProductsCatalog">
      <Grid
        templateColumns={["repeat(1, 1fr)", "repeat(2,1fr)", "repeat(3,1fr)", "repeat(4,1fr)"]}
        gap={6}
        className="products"
      >
        {products.map((product) => {
          return (
            <Card maxW="2xs" key={product.defaultArticle.code}>
              <CardBody onClick={()=>redirectToProductPage(product)}>
                <Image
                  src={product.images[0].url}
                  alt="product_image"
                  borderRadius="lg"
                />
                <Stack mt="6" spacing="3">
                  <Heading size="md">{product.defaultArticle.name}</Heading>
                  <Text>
                    Elegant floor-length bridesmaid dress, designed to impress
                    with a flattering fit and timeless style.
                  </Text>
                  <Text fontSize="xl">{product.price.formattedValue}</Text>
                </Stack>
              </CardBody>
              <Divider />
              <CardFooter>
                <ButtonGroup spacing="2">
                  <Button
                    sx={{
                      backgroundColor: "black",
                      color: "white",
                      "&:hover": {
                        backgroundColor: "whiteAplpha",
                        color: "black",
                      },
                    }}
                    variant="solid"
                  >
                    Buy now
                  </Button>
                  <Button
                    sx={{ "&:hover": { backgroundColor: "blackAlpha" } }}
                    variant="ghost"
                  >
                    Add to cart
                  </Button>
                </ButtonGroup>
              </CardFooter>
            </Card>
          );
        })}
      </Grid>
    </div>
  );
};

export default ProductsCatalog;
