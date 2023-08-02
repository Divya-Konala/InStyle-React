import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { fetchDetails } from "../redux/store";
import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";

import "../styles/ProductDetailsPage.css";
import Loading from "../components/Loading";

const ProductDetailPage = () => {
  let params = useParams();
  const prodCode = params.id;
  const dispatch = useDispatch();
  const productDetails = useSelector((state) => state.details.product);
  const loading = useSelector((state) => state.details.loading);
  useEffect(() => {
    dispatch(fetchDetails(prodCode));
  }, [prodCode]);

  if (loading) {
    return <Loading/>
  }

  return (
    <div className="ProductsDetailPage">
      <Card
        direction={{ base: "column", lg: "row", md: "col", sm: "col" }}
        overflow="hidden"
        variant="outline"
      >
        <Stack sx={{ backgroundColor: "#f5f5f5" }}>
          <Image
            sx={{ margin: "auto" }}
            objectFit="cover"
            maxW={{ base: "100%", lg: "350px", md: "300px", sm: "100px" }}
            src={productDetails.articlesList[0].galleryDetails[0].baseUrl}
            alt={productDetails.name}
          />
        </Stack>

        <Stack>
          <CardBody>
            <Heading size="lg">{productDetails.name}</Heading>

            <Text fontSize={{ lg: "xl", md: "md", sm: "sm" }} py="4">
              {productDetails.description}
            </Text>
            <hr />
            <Text
              py="4"
              fontSize={{ lg: "4xl", md: "2xl", sm: "xl" }}
              color={productDetails.color.rgbColor}
            >{`$ ${productDetails.whitePrice.price}`}</Text>
            <hr />
            <Text py="4" fontSize="xl">
              Gallery
            </Text>
            <Box className="galleryImages">
              {productDetails.articlesList[0].galleryDetails.map((prod) => {
                return <Image key={prod.id} src={prod.baseUrl} alt="product" />;
              })}
            </Box>
          </CardBody>

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
        </Stack>
      </Card>
      <Link
        to="/"
        className="backBtn"
      >
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
          Back
        </Button>
      </Link>
    </div>
  );
};

export default ProductDetailPage;
