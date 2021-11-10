import styled from "styled-components"
import Announcement from "./components/Announcement";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

const Container = styled.div`

`;

const Wrapper = styled.div`
    padding: 20px;
`;

const Title = styled.h1`
    font-weight: 300;
    text-align: center;   
`;
const Top =styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
`;
const TopButton =styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    border: ${(props) => props.type === "filled" && "none"};
    background-color: ${(props) =>props.type === "filled" ? "black" : "transparent"};
    color: ${(props) => props.type === "filled" && "white"};
`;
const TopTexts = styled.div`
  
`;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;
const Bottom =styled.div`
    display: flex;
    justify-content: space-between;
`;

const Info =styled.div`
    flex: 3;
`;

const Summary=styled.div`
    flex: 1;
    border: 0.5px solid lightgray;
    border-radius: 10px;
    padding: 20px;
    height: 50vh;
`;
const Product = styled.div``;
const ProductDetail = styled.div`

`;
const PriceDetail = styled.div``;
const Image = styled.img``;
const Details= styled.div``;
const ProductID= styled.div``;
const ProductName= styled.div``;
const ProductColor= styled.div``;
const ProductSize= styled.div``;
function Cart() {
    return (
       <Container>
           <Navbar/>
           <Announcement/>
           <Wrapper>
               <Title>YOUR CART</Title>
               <Top>
                   <TopButton>CONTINUE SHOPPING</TopButton>
                        <TopTexts>
                            <TopText>Shopping Bag(2)</TopText>
                            <TopText>Your Wishlist (0)</TopText>
                        </TopTexts>
                    <TopButton type="filled">CHECKOUT NOW</TopButton>
               </Top>
               <Bottom>
                   <Info>
                       <Product>
                           <ProductDetail>
                                <Image src="https://images.beautifulhalo.com/images/392x588/202012/N/cool-mens-hoodie-forest-eagle-son-goku-rainbow-cat-feather-arrow-jacket-chinese-letter-pattern-drawstring-slim-fitted-long-sleeve-hoodie_1606916318139.jpg" />
                                <Details>
                                    <ProductName><b>Product:</b>Cool Mens Hoodie Forest </ProductName>
                                    <ProductID><b>ID:</b>1687 </ProductID>
                                    <ProductColor/>
                                    <ProductSize><b>Size:</b>S </ProductSize>
                                </Details>
                           </ProductDetail>
                           <PriceDetail>
                               
                           </PriceDetail>
                       </Product>
                   </Info>
                   <Summary>Summary</Summary>
               </Bottom>
           </Wrapper>
           <Footer/>
       </Container>
    )
}

export default Cart
