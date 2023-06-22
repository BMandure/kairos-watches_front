import { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";
import "./Shop.css";
import { Container, Row, Col, Form } from "react-bootstrap";

function Shop() {
  const [render, setRender] = useState(0);

  const [products, setProducts] = useState([]);
  const [brands, setBrands] = useState([]);
  const [brand, setBrand] = useState(null);
  const [lines, setLines] = useState([]);

  const [filterBrand, setFilterBrand] = useState("");
  const [filterLine, setFilterLine] = useState("");
  const [filterColor, setFilterColor] = useState("");

  useEffect(() => {
    const getProducts = async () => {
      const response = await axios({
        method: "GET",
        url: `${
          import.meta.env.VITE_API_DOMAIN
        }/products?filterBrand=${filterBrand}&filterLine=${filterLine}&filterColor=${filterColor}`,
      });
      setProducts(response.data);
    };

    const getBrands = async () => {
      const response = await axios({
        method: "GET",
        url: `${import.meta.env.VITE_API_DOMAIN}/brands`,
      });
      setBrands(response.data);
    };

    getBrands();
    getProducts();
  }, [render]);

  useEffect(() => {
    setLines("");
    setFilterLine("");
    if (brand) {
      const getLines = async () => {
        const response = await axios({
          method: "GET",
          url: `${import.meta.env.VITE_API_DOMAIN}/${brand.slug}/lines`,
        });
        setLines(response.data);
      };
      getLines();
    }
  }, [filterBrand, render]);

  const handleFilterBrand = (event) => {
    setFilterBrand(event.target.value);
    setBrand(brands.filter((brand) => brand._id === event.target.value)[0]);
    setRender(render + 1);
  };

  const handleFilterLine = (event) => {
    setFilterLine(event.target.value);
    setRender(render + 1);
  };

  return (
    <Container className="shop-container">
      <div className="shop-filter-container">
        <p className="d-block">FILTER BY</p>
        <div className="d-flex gap-5">
          <Form>
            <Form.Group>
              <Form.Select
                onChange={handleFilterBrand}
                aria-label="Default select example"
              >
                <option value="" key={0}>
                  Brand
                </option>
                {brands.map((brand) => (
                  <option key={brand._id} value={brand._id}>
                    {brand.name}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
            {filterBrand !== "" && (
              <Form.Group>
                <Form.Select
                  onChange={handleFilterLine}
                  aria-label="Default select example"
                >
                  <option value="" key={1}>
                    Lines
                  </option>
                  {lines.length > 0 &&
                    lines.map((line) => (
                      <option key={line.id} value={line._id}>
                        {line.name}
                      </option>
                    ))}
                </Form.Select>
              </Form.Group>
            )}

            {/* <Form.Group>
                <Form.Select aria-label="Default select example">
                  <option>Color</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
                      </Form.Group>*/}
          </Form>
        </div>
      </div>
      <Row>
        {products.map((product) => (
          <Col
            key={product._id}
            xs={{ span: 10, offset: 1 }}
            md={{ span: 6, offset: 0 }}
            lg={{ span: 3, offset: 0 }}
          >
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Shop;
