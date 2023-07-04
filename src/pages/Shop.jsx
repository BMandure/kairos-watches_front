import { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";
import "./Shop.css";
import { Container, Row, Col, Form } from "react-bootstrap";
import BackButton from "../components/BackButton";
import Loader from "../components/Loader";

function Shop() {
  const [render, setRender] = useState(0);

  const [products, setProducts] = useState(null);
  const [brands, setBrands] = useState([]);
  const [brand, setBrand] = useState(null);
  const [lines, setLines] = useState([]);

  const [filterBrand, setFilterBrand] = useState("");
  const [filterLine, setFilterLine] = useState("");
  const [filterColor, setFilterColor] = useState("");
  const [filterGender, setFilterGender] = useState("");

  useEffect(() => {
    const getProducts = async () => {
      const response = await axios({
        method: "GET",
        url: `${
          import.meta.env.VITE_API_DOMAIN
        }/products?filterBrand=${filterBrand}&filterLine=${filterLine}&filterColor=${filterColor}&filterGender=${filterGender}`,
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
  }, [render, filterGender]);

  useEffect(() => {
    if (brand) {
      const getLines = async () => {
        const response = await axios({
          method: "GET",
          url: `${import.meta.env.VITE_API_DOMAIN}/lines?filterBrand=${
            brand.slug
          }`,
        });
        setLines(response.data);
      };
      getLines();
    }
  }, [filterBrand, render]);

  const handleFilterBrand = (event) => {
    setFilterBrand(event.target.value);
    setBrand(brands.filter((brand) => brand._id === event.target.value)[0]);
    setFilterLine("");
    setRender(render + 1);
  };

  const handleFilterLine = (event) => {
    setFilterLine(event.target.value);
    setRender(render + 1);
  };

  const handleFilterGender = (event) => {
    setFilterGender(event.target.value);
    setRender(render + 1);
  };

  return (
    <>
      {" "}
      <Container className="shop-container">
        <Row className="shop-filter-container">
          <Col
            xs={12}
            md={6}
            className="back-style mb-0 mt-auto d-flex align-items-bottom"
          >
            <BackButton link="/" />
          </Col>
          <Col xs={12} md={6} className="filter-shop">
            <div className="filter-container">
              <Form className="filter-form">
                <Row className="row-filter">
                  <Col xs={12} md={filterBrand ? 3 : 4}>
                    <Form.Group>
                      <Form.Select
                        onChange={handleFilterBrand}
                        aria-label="Default select example"
                        className="filter-selector"
                        value={filterBrand}
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
                  </Col>
                  {filterBrand !== "" && (
                    <Col xs={12} md={3}>
                      <Form.Group>
                        <Form.Select
                          onChange={handleFilterLine}
                          aria-label="Default select example"
                          className="filter-selector"
                          value={filterLine}
                        >
                          <option value="" key={0}>
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
                    </Col>
                  )}
                  <Col xs={12} md={filterBrand ? 3 : 4}>
                    <Form.Group>
                      <Form.Select
                        aria-label="Default select example"
                        className="filter-selector"
                      >
                        <option>Color</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                  <Col xs={12} md={filterBrand ? 3 : 4}>
                    <Form.Group>
                      <Form.Select
                        aria-label="Default select example"
                        className="filter-selector"
                        value={filterGender}
                        onChange={handleFilterGender}
                      >
                        <option value="">Gender</option>
                        <option value="Man">Man</option>
                        <option value="Woman">Woman</option>
                        <option value="Unisex">Unisex</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                </Row>
              </Form>
            </div>
          </Col>
        </Row>
        <Row className="shop-row">
          {products ? (
            products.length > 0 ? (
              products.map((product) => (
                <Col
                  key={product._id}
                  xs={{ span: 10, offset: 1 }}
                  md={{ span: 6, offset: 0 }}
                  lg={{ span: 3, offset: 0 }}
                >
                  <ProductCard product={product} />
                </Col>
              ))
            ) : (
              <div className="text-center mt-5">
                <span className="mx-auto text-white fs-5">
                  There are currently no available products
                </span>
              </div>
            )
          ) : (
            <div className="mt-5 w-auto">
              <Loader />
            </div>
          )}
        </Row>
      </Container>
    </>
  );
}

export default Shop;
