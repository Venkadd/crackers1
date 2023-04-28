import React,{useState} from "react";
import Helmet from "../components/Helmet/Helmet"
import CommonSection from "../components/UI/common-section/CommonSection";
import { Container, Row, Col } from "reactstrap";
import products from "../assets/fake-data/products";
import ProductCard from "../components/UI/product-card/ProductCard"
import "../styles/all-products.css"
import "../styles/pagination.css"
import ReactPaginate from "react-paginate";
const AllProducts = () => {

    const [searchTerm, setSearchTerm] = useState("")
    const [pageNumber, setPageNumber] = useState(0);

    const searchedProduct=products.filter((item) => {
        if (searchTerm.value === "") return item;
        if (item.title.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()))
        
            return item
    })


    const productPerPage = 8;
  const visitedPage = pageNumber * productPerPage;
  const displayPage = searchedProduct.slice(
    visitedPage,
    visitedPage + productPerPage
  );

  const pageCount = Math.ceil(searchedProduct.length / productPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };


    
    return (
        <Helmet title="All-Products">
            <CommonSection title="All-products" />
            <section>
                <Container>
                    <Row>
                        <Col lg="6" md="6" sm="6">
                            <div className="search__widget d-flex align-items-center justify-content-between w-50">
                                <input type="text" placeholder="search"value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)}/>
                                <span><i className="ri-search-line"></i></span>
                            </div>
                        </Col>
                        <Col lg="6" md="6" sm="6" className="mb-5">
                        </Col>
                        
                        
                        {displayPage
                            .map((item) => (
                                <Col lg="3" md="4" sm="6" xs="6" key={item.id} className="mb-4">
                                    <ProductCard item={item} />
                                </Col>
                                
                            ))
                        }


<div>
              <ReactPaginate
                pageCount={pageCount}
                onPageChange={changePage}
                previousLabel={"Prev"}
                nextLabel={"Next"}
                containerClassName=" paginationBttns "
              />
                        </div>
                        

                    </Row>
                </Container>
            </section>
        </Helmet>
    )
};
export default AllProducts