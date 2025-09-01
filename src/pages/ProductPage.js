import { useParams, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import GlobalStyle from "../styles/GlobalStyle";
import Logo from "../assets/Logo.svg";
import Search from "../assets/search.svg";
import Wishlist from "../assets/wishlist.svg";
import Account from "../assets/account.svg";
import Cart from "../assets/cart.svg";
import Leftarrow from "../assets/left-arrow-bold.svg";
import BG1 from "../assets/bg-1.jpg";
import BG2 from "../assets/bg-2.jpg";
import BG3 from "../assets/bg-3.jpg";
import BG4 from "../assets/bg-4.jpg";
import BG5 from "../assets/bg-5.jpg";
import Rightarrow from "../assets/right-arrow-bold.svg";
import SmallRightArrow from "../assets/arrow-right.svg";
import SmallLeftArrow from "../assets/arrow-left.svg";
import Img1 from "../assets/img-1.jpg";
import Img2 from "../assets/img-2.jpg";
import Img3 from "../assets/img-3.jpg";
import Img4 from "../assets/img-4.jpg";
import Rectangle from "../assets/Rectangle 21.svg";
import Img5 from "../assets/img-5.jpg";
import Img6 from "../assets/img-6.jpg";
import Img7 from "../assets/img-7.jpg";
import Img8 from "../assets/img-8.jpg";
import Img9 from "../assets/img-9.jpg";
import Img10 from "../assets/img-10.jpg";
import Rectangle22 from "../assets/Rectangle 22.jpg";
import Img11 from "../assets/img-11.jpg";
import Img12 from "../assets/img-12.jpg";
import Img13 from "../assets/img-13.jpg";
import Img14 from "../assets/img-14.jpg";
import Img15 from "../assets/img-15.jpg";
import Img16 from "../assets/img-16.jpg";
import Img17 from "../assets/img-17.jpg";
import Img18 from "../assets/img-18.jpg";
import Img19 from "../assets/img-19.jpg";
import Img20 from "../assets/img-20.jpg";
import Img21 from "../assets/img-12.jpg";
import Img22 from "../assets/img-22.jpg";
import Img23 from "../assets/img-23.jpg";
import Img24 from "../assets/img-24.jpg";
import Img25 from "../assets/img-25.jpg";
import Img26 from "../assets/img-26.jpg";
import Arrow from "../assets/Arrow 3.svg";
import Nike from "../assets/nike.jpg";
import HM from "../assets/H&M.jpg";
import Levis from "../assets/levis.jpg";
import USPA from "../assets/USPA.jpg";
import Puma from "../assets/puma.jpg";
import Span1 from "../assets/span-1.svg";
import Span2 from "../assets/span-2.svg";
import Span3 from "../assets/span-3.svg";
import Star from "../assets/star.svg";
import StarO from "../assets/star_outline.svg";
import StarHalf from "../assets/star_half.svg";
import Instagram from "../assets/instagram.svg";
import Facebook from "../assets/facebook.svg";
import Twitter from "../assets/twitter.svg";
import Linkedin from "../assets/linkedin.svg";
import PlayStore from "../assets/playstore.svg";
import Phone from "../assets/phone.svg";
import ArrowDown from "../assets/arrow-down.svg";
import Thumbnail1 from "../assets/Thumbnail-1.jpg";
import Thumbnail2 from "../assets/Thumbnail-2.jpg";
import RightArrowLight from "../assets/right-arrow-light.svg";
import Message from "../assets/message.svg";
import ArrowRight from "../assets/arrow-right.svg";
import Cart1 from "../assets/cart-1.svg";
import Credit from "../assets/credit card.svg";
import Return from "../assets/Free-Shipping&Returns.svg";
import Truck from "../assets/truck.svg";
import Size from "../assets/Size&Fit.svg";
import Rectangle13 from "../assets/Rectangle 13.png";


function ProductPage() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
        .then((res) => res.json())
        .then((data) => setProduct(data))
        .catch((err) => console.error("Error fetching product:", err));
    }, [id]);

    if (!product) return <h2>Loading...</h2>;

    return (
        <>
            <Header>
                <h1>
                    <a href="#">
                        <img src={Logo} alt="Logo" />
                    </a>
                </h1>
                <nav>
                    <ul>
                        <li><a href="#">Shop</a></li>
                        <li><a href="#">Men</a></li>
                        <li><a href="#">Women</a></li>
                        <li><a href="#">Combos</a></li>
                        <li><a href="#">Joggers</a></li>
                    </ul>
                </nav>
                <Form>
                    <img src={Search} alt="Search" />
                    <input type="text" placeholder="Search" />
                </Form>
                <HeaderIcons>
                    <div>
                        <img src={Wishlist} alt="Wishlist" />
                    </div>
                    <div>
                        <img src={Account} alt="Account" />
                    </div>
                    <div>
                        <img src={Cart} alt="Cart" />
                    </div>
                </HeaderIcons>
            </Header>
            <Product>
                    <ProductFlex>
                        <ProductLeft>
                            <ProductLeftThumbnail>
                                <ProductLeftThumbnailImg>
                                    <img src={Thumbnail1} />
                                    <img src={product.image} />
                                    <img src={Thumbnail2} />
                                </ProductLeftThumbnailImg>
                                <ProductLeftThumbnailIcon>
                                    <img src={ArrowDown} />
                                    <img src={ArrowDown} />
                                </ProductLeftThumbnailIcon>
                            </ProductLeftThumbnail>
                            <ProductLeftImg>
                                <img src={product.image} />
                            </ProductLeftImg>
                        </ProductLeft>
                        <ProductRight>
                            <ProductRightTitle>
                                <h5>Shop</h5>
                                <img src={RightArrowLight} />
                                <h5>{product.category}</h5>
                                <img src={RightArrowLight} />
                                <h5>Top</h5>
                            </ProductRightTitle>
                            <h1>{product.title}</h1>
                            <ProductRightDetails>
                                <ProductRightDetailsStar>
                                    <img src={Star} />
                                    <img src={Star} />
                                    <img src={Star} />
                                    <img src={Star} />
                                    <img src={Star} />
                                </ProductRightDetailsStar>
                                <h6>{product.rating.rate}</h6>
                                <ProductRightDetailsComment>
                                    <img src={Message} />
                                    <h6>{product.rating.count} comment</h6>
                                </ProductRightDetailsComment>
                            </ProductRightDetails>
                            <ProductRightSize>
                                <h5>Select Size</h5>
                                <h6>Size Guide</h6>
                                <img src={ArrowRight} />
                            </ProductRightSize>
                            <ProductRightSizeBoxes>
                                <ProductRightSizeBox>
                                    <h5>XS</h5>
                                </ProductRightSizeBox>
                                <ProductRightSizeBox>
                                    <h5>S</h5>
                                </ProductRightSizeBox>
                                <ProductRightSizeBox>
                                    <h5>M</h5>
                                </ProductRightSizeBox>
                                <ProductRightSizeBox>
                                    <h5>L</h5>
                                </ProductRightSizeBox>
                                <ProductRightSizeBox>
                                    <h5>XL</h5>
                                </ProductRightSizeBox>
                            </ProductRightSizeBoxes>
                            <h5>Colours Available</h5>
                            <ProductRightColors>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                            </ProductRightColors>
                            <ProductRightButtons>
                                <ProductRightButtonsCart>
                                    <img src={Cart1} />
                                    <h6>Add to cart</h6>
                                </ProductRightButtonsCart>
                                <button>${product.price}</button>
                            </ProductRightButtons>
                            <hr />
                            <ProductRightGrid>
                                <ProductRightGridBox>
                                    <img src={Credit} />
                                    <h5>Secure Payment</h5>
                                </ProductRightGridBox>
                                <ProductRightGridBox>
                                    <img src={Size} />
                                    <h5>Size & Fit</h5>
                                </ProductRightGridBox>
                                <ProductRightGridBox>
                                    <img src={Truck} />
                                    <h5>Free shipping</h5>
                                </ProductRightGridBox>
                                <ProductRightGridBox>
                                    <img src={Return} />
                                    <h5>Free Shipping & Returns</h5>
                                </ProductRightGridBox>
                            </ProductRightGrid>
                        </ProductRight>
                    </ProductFlex>
            </Product>
            <Description>
                <Wrapper>
                    <DescriptionTitle><img src={Rectangle} /><h1>Product Description</h1></DescriptionTitle>
                    <DescriptionFlex>
                        <DescriptionLeft>
                            <Tabs>
                                <Tab><h5>Description</h5></Tab>
                                <Tab>
                                    <h5>Comments</h5> <Badge style={{ background: '#8A33FD' }}><h6>7</h6></Badge>
                                </Tab>
                                <Tab>
                                    <h5>Question & Answer</h5> <Badge style={{ background: '#3d4242' }}><h6>4</h6></Badge>
                                </Tab>
                            </Tabs>
                            <hr />
                            <p>{product.description}</p>
                        </DescriptionLeft>
                        <DescriptionRight>
                            <DescriptionRightGrid>
                                <DescriptionRightGridBox>
                                    <h6>Fabric</h6>
                                    <h5>{product.category}</h5>
                                </DescriptionRightGridBox>
                                <DescriptionRightGridBox>
                                    <h6>Pattern</h6>
                                    <h5>Printed</h5>
                                </DescriptionRightGridBox>
                                <DescriptionRightGridBox>
                                    <h6>Fit</h6>
                                    <h5>Regular-fit</h5>
                                </DescriptionRightGridBox>
                                <DescriptionRightGridBox>
                                    <h6>Neck</h6>
                                    <h5>Round Neck</h5>
                                </DescriptionRightGridBox>
                                <DescriptionRightGridBox>
                                    <h6>Sleeve</h6>
                                    <h5>Half-sleeves</h5>
                                </DescriptionRightGridBox>
                                <DescriptionRightGridBox>
                                    <h6>Style</h6>
                                    <h5>Casual Wear</h5>
                                </DescriptionRightGridBox>
                            </DescriptionRightGrid>
                        </DescriptionRight>
                    </DescriptionFlex>
                </Wrapper>
            </Description>
            <Light>
                <Wrapper>
                    <LightTitle><img src={Rectangle} /><h1>Similar Products</h1></LightTitle>
                    <LightProduct>
                        <LightProductBox>
                            <img src={Img20} />
                            <LightProductBoxIcon><img src={Wishlist} alt="" /></LightProductBoxIcon>
                            <LightProductBoxFlex>
                                <LightProductBoxFlexLeft>
                                    <h5>White T-Shirt</h5>
                                    <h6>Priya’s  Brand</h6>
                                </LightProductBoxFlexLeft>
                                <button>$13.00</button>
                            </LightProductBoxFlex>
                        </LightProductBox>
                        <LightProductBox>
                            <img src={Img22} />
                            <LightProductBoxIcon><img src={Wishlist} alt="" /></LightProductBoxIcon>
                            <LightProductBoxFlex>
                                <LightProductBoxFlexLeft>
                                    <h5>Dark Green Sweatshirt</h5>
                                    <h6>Roboto’s  Brand</h6>
                                </LightProductBoxFlexLeft>
                                <button>$127.00</button>
                            </LightProductBoxFlex>
                        </LightProductBox>
                        <LightProductBox>
                            <img src={Img23} />
                            <LightProductBoxIcon><img src={Wishlist} alt="" /></LightProductBoxIcon>
                            <LightProductBoxFlex>
                                <LightProductBoxFlexLeft>
                                    <h5>Levender Sweatshirt ....</h5>
                                    <h6>Jhanvi’s  Brand</h6>
                                </LightProductBoxFlexLeft>
                                <button>$133.00</button>
                            </LightProductBoxFlex>
                        </LightProductBox>
                        <LightProductBox>
                            <img src={Img24} />
                            <LightProductBoxIcon><img src={Wishlist} alt="" /></LightProductBoxIcon>
                            <LightProductBoxFlex>
                                <LightProductBoxFlexLeft>
                                    <h5>Urban jacket with white</h5>
                                    <h6>Sagar’s  Brand</h6>
                                </LightProductBoxFlexLeft>
                                <button>$79.00</button>
                            </LightProductBoxFlex>
                        </LightProductBox>
                    </LightProduct>
                </Wrapper>
            </Light>
            <Footer>
                <Wrapper>
                    <FooterFlex>
                        <FooterFlexBox>
                            <h3>Need Help</h3>
                            <ul>
                                <li><a href="#">Contact Us</a></li>
                                <li><a href="#">Track Order</a></li>
                                <li><a href="#">Returns & Refunds</a></li>
                                <li><a href="#">FAQ's</a></li>
                                <li><a href="#">Career</a></li>
                            </ul>
                        </FooterFlexBox>
                        <FooterFlexBox>
                            <h3>Company</h3>
                            <ul>
                                <li><a href="#">About Us</a></li>
                                <li><a href="#">euphoria Blog</a></li>
                                <li><a href="#">euphoriastan</a></li>
                                <li><a href="#">Collaboration</a></li>
                                <li><a href="#">Media</a></li>
                            </ul>
                        </FooterFlexBox>
                        <FooterFlexBox>
                            <h3>More Info</h3>
                            <ul>
                                <li><a href="#">Term and Conditions</a></li>
                                <li><a href="#">Privacy Policy</a></li>
                                <li><a href="#">Shipping Policy</a></li>
                                <li><a href="#">Sitemap</a></li>
                            </ul>
                        </FooterFlexBox>
                        <FooterFlexBox>
                            <h3>Location</h3>
                            <ul>
                                <li><a href="#">support@euphoria.in</a></li>
                                <li><a href="#">Eklingpura Chouraha, Ahmedabad Main Road</a></li>
                                <li><a href="#">(NH 8- Near Mahadev Hotel) Udaipur, India- 313002</a></li>
                            </ul>
                        </FooterFlexBox>
                    </FooterFlex>
                    <FooterBottom>
                        <FooterBottomMedia>
                            <FooterBottomMediaLeft>
                                <a href="#"><img src={Facebook} alt=""/></a>
                                <a href="#"><img src={Instagram} alt=""/></a>
                                <a href="#"><img src={Twitter} alt=""/></a>
                                <a href="#"><img src={Linkedin} alt=""/></a>
                            </FooterBottomMediaLeft>
                            <FooterBottomMediaRight>
                                <h3>Download The App</h3>
                                <FooterBottomMediaRightApp>
                                    <a href="#">
                                    <FooterBottomMediaRightAppPlay>
                                        <img src={PlayStore} alt=""/>
                                        <FooterBottomMediaRightAppPlayText>
                                            <h6>android app on</h6>
                                            <h5>Google Play</h5>
                                        </FooterBottomMediaRightAppPlayText>
                                    </FooterBottomMediaRightAppPlay>
                                    </a>
                                    <a href="#">
                                    <FooterBottomMediaRightAppStore>
                                        <img src={Phone} alt=""/>
                                        <FooterBottomMediaRightAppstoreText>
                                            <h6>Available on the</h6>
                                            <h5>App Store</h5>
                                        </FooterBottomMediaRightAppstoreText>
                                    </FooterBottomMediaRightAppStore>
                                    </a>
                                </FooterBottomMediaRightApp>
                            </FooterBottomMediaRight>
                        </FooterBottomMedia>
                        <FooterBottomCategories>
                            <FooterBottomCategoriesHeading>
                                <h3>Popular Categories</h3>
                                <img src={ArrowDown} alt=""/>
                            </FooterBottomCategoriesHeading>
                            <h5>Copyright © 2023 Euphoria Folks Pvt Ltd. All rights reserved.</h5>
                        </FooterBottomCategories>
                    </FooterBottom>
                </Wrapper>
            </Footer>
        </>
    );
}

const Wrapper = styled.section `
    width: 90%;
    margin: 0 auto;
`;

const Header = styled.header `
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 108px;
    padding: 0px 45px;
    border-bottom: 1px solid #ccc;
    h1 a img {
        width: 91px;
        height: 45px;
    }
    nav ul {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 40px;
        list-style: none;
        padding: 0px;
    }
    nav ul li a {
        text-decoration: none;
        font-family: 'Causten';
        color: #807D7E;
        font-size: 22px;
        &:hover {
            font-weight: 700;
            color: #3C4242;
        }
    }
`;
const Form = styled.div `
    display: flex;
    align-items: center;
    background-color: #F6F6F6;
    padding: 12px 20px;
    border-radius: 9px;
    gap: 12px;
    img {
        width: 20px;
        height: 20px;
    }
    input {
        border: none;
        outline: none;
        background: none;
        font-family: 'Causten';
        color: #807D7E;
        font-size: 19px;
        font-weight: 400;
    }
`;
const HeaderIcons = styled.div `
    display: flex;
    align-items: center;
    gap: 12px;
    div {
        display: flex;
        align-items: center;
        justify-content: center;
        background: #F6F6F6;
        width: 44px;
        height: 44px;
        gap: 12px;
        border-radius: 9px;
        padding: 0px;
        img {
            width: 20px;
            height: 20px;
            padding: 0px;
        }
    }
`;
const Product = styled.section `
    height: 785px;
    width: 100%;
`;
const ProductFlex = styled.div `
    display: flex;
    width: 100%;
`;
const ProductLeft = styled.div `
    width: 50%;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    height: 660px;
    background: #f6f6f6;
    padding-left: 103px;
`;
const ProductLeftThumbnail = styled.div `
    width: 19%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 45px;
    height: 785px;
    padding-right: 30px;
`;
const ProductLeftThumbnailImg = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 23px;
    img {
        width: 69px;
        height: 69px;
        object-fit: cover;
        border-radius: 9px;
        &:nth-child(2) {
            border: 3px solid #fff;
            outline: 2.7px solid #3c4242;
        }
    }
`;
const ProductLeftThumbnailIcon = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    gap: 13px;
    img {
        width: 10px;
        height: 10px;
        padding: 10px;
        background: #3d4242;
        border-radius: 50%;
        &:first-child {
            background: #000;
            filter: invert(100%);
            rotate: 180deg;
        }
    }
`;
const ProductLeftImg = styled.div `
    width: 79%;
    img {
        display: block;
        width: 100%;
        object-fit: cover;
    }
`;
const ProductRight = styled.div `
    width: 35%;
    padding-left: 73px;
    padding-right: 130px;
    height: 785px;
    h1 {
        color: #3C4242;
        font-size: 34px;
        font-weight: 500;
        font-family: 'CoreSans';
        margin-top: 9px;
    }
    h5 {
        color: #3d4242;
        font-size: 18px;
        margin-bottom: 0px;
    }
    hr {
        width: 119%;
        margin-top: 27px;
    } 
`;
const ProductRightTitle = styled.div `
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 15px;
    margin-bottom: 27px;
    margin-top: 27px;
    h5 {
        color: #807D7E;
        font-size: 18px;
        font-weight: 400;
        margin: 0px;
    }
    img {
        margin: 0px;
    }
`;
const ProductRightDetails = styled.div`
    display: flex;
    flex-direction: row;
    gap: 25px;
    margin-top: 27px;
    h6 {
        color: #807D7E;
        font-size: 18px;
        font-weight: 400;
        margin-bottom: 0px;
        margin-top: 0px;
        padding-top: 5px;
    }
`;
const ProductRightDetailsStar = styled.div `
    display: flex;
    align-items: center;
    gap: 10px;
    img {
        width: 22px;
        height: 22px;
    }
`;
const ProductRightDetailsComment = styled.div `
    display: flex;
    align-items: center;
    gap: 15px;
    padding-top: 5px;
    h6 {
        color: #807D7E;
        font-size: 18px;
        font-weight: 500;
        padding: 0px;
    }
`;
const ProductRightSize = styled.div `
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 33px;
    margin-bottom: 0px;
    gap: 20px;
    h5 {
        color: #3d4242;
        font-size: 18px;
        font-weight: 600;
        font-family: 'Causten';
        padding: 0px;
        margin: 0px;
    }
    h6 {
        color: #807D7E;
        font-size: 18px;
        font-weight: 500;
        padding: 0px;
        margin: 0px;
    }
    img {
        width: 15px;
        height: 15px;
        padding-bottom: 5px;
        margin: 0px;
    }
`;
const ProductRightSizeBoxes = styled.div `
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 20px;
    height: auto;
    margin-top: 27px;
`;
const ProductRightSizeBox = styled.div `
    width: 38px;
    height: 38px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1.5px solid #BEBCBD;
    border-radius: 12px;
    color: #3d4242;
    h5 {
        font-size: 14px;
        font-weight: 500;
        font-family: 'Causten';
        margin: 0px;
    }
    &:nth-child(4) {
        background: #3d4242;
        h5 {
            color: #fff;
        }
    }
`;
const ProductRightColors = styled.div `
    display: flex;
    align-items: center;
    gap: 20px;
    margin-top: 27px;
    div {
        width: 22px;
        height: 22px;
        background: #3d4242;
        border-radius: 50%;
        &:first-child {
            border: 2.7px solid #fff;
            outline: 1px solid #3d4242;
        }
        &:nth-child(2) {
            background: #EDD146;
        }
        &:nth-child(3) {
            background: #EB84B0;
        }
        &:last-child {
            background: #9C1F35;
        }
    }
`;
const ProductRightButtons = styled.div `
    display: flex;
    align-items: center;
    gap: 25px;
    margin-top: 33px;
    button {
        border: 1px solid #3C4242;
        border-radius: 9px;
        padding: 12px 40px;
        background: #fff;
        color: #3C4242;
        font-family: 'Causten';
        font-size: 18px;
        font-weight: 700;
    }
`;
const ProductRightButtonsCart = styled.div `
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 12px 40px;
    background: #8A33FD;
    border-radius: 9px;
    margin: 0px;
    img {
        margin: 0px;
    }
    h6 {
        margin: 0px;
        color: #fff;
        font-family: 'Causten';
        font-size: 18px;
    }
`;
const ProductRightGrid = styled.div `
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    row-gap: 27px;
    column-gap: 90px;
    margin-top: 33px;
`;
const ProductRightGridBox = styled.div `
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
    img {
        margin: 0px;
        width: 44px;
        height: 44px;
        background: #f6f6f6;
        border-radius: 50%;
        padding: 10px;
        box-sizing: border-box;
        object-fit: scale-down;
    }
    h5 {
        margin: 0px;
        color: #3d4242;
        white-space: nowrap;
    }
`;
const Description = styled.section `
    width: 100%;
    height: 200px;
    margin-bottom: 100px;
`;
const DescriptionTitle = styled.div `
    display: flex;
    margin-top: -21px;
    margin-bottom: 55px;
    h1 {
        color: #3c4242;
        font-size: 34px;
        font-family: 'CoreSans';
        font-weight: 600;
        margin-left: 21px;
        margin-top: 0px;
        margin-bottom: 0px;
    }
`;
const DescriptionFlex = styled.div `
    display: flex;
`;
const DescriptionLeft = styled.div `
    width: 50%;
    hr {
        width: 43px;
        height: 1px;
        background: #000;
        margin: 0px;
        margin-top: 19px;
        margin-bottom: 27px;
    }
    p {
        font-weight: 400;
        font-size: 16px;
        color: #807D7E;
    }
`;
const Tabs = styled.div `
    display: flex;
    gap: 27px;
`;
const Tab = styled.div `
    font-size: 18px;
    &:first-child {
        font-weight: 500;
        color: #3c4242;
        display: flex;
        align-items: flex-end;
        h5 {
            margin: 0px;
        }
    }
    &:nth-child(2) {
        display: flex;
        align-items: flex-end;
        gap: 5px;
        color: #807D7E;
        font-weight: 400;
        h5 {
            margin: 0px;
        }
    }
    &:last-child {
        display: flex;
        align-items: flex-end;
        gap: 5px;
        color: #807D7E;
        font-weight: 400;
        h5 {
            margin: 0px;
        }
    }
`;
const Badge = styled.span `
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20px;
    height: 20px;
    margin-left: 5px;
    h6 {
        margin: 0px;
        font-weight: 200;
        font-size: 10px;
        color: #fff;
    }
`;
const DescriptionRight = styled.div `
    width: 47%;
    padding-left: 3%;
`;
const DescriptionRightGrid = styled.div `
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0px;
    margin-top: -75px;
    border-radius: 12px;
    background: #F6F6F6;
`;
const DescriptionRightGridBox = styled.div `
    padding: 19px 27px;
    h6 {
        font-size: 16px;
        color: #807D7E;
        font-weight: 400;
        margin: 0px;
        margin-bottom: 19px;
    }
    h5 {
        font-size: 16px;
        color: #3d4242;
        font-weight: 600;
        margin: 0px;
    }
    &:first-child {
        border-bottom: 1.5px solid #CFCDCE;
        border-right: 1.5px solid #CFCDCE;
    }
    &:nth-child(2) {
        border-bottom: 1.5px solid #CFCDCE;
        border-right: 1.5px solid #CFCDCE;
    }
    &:nth-child(3) {
        border-bottom: 1.5px solid #CFCDCE;
    }
    &:nth-child(4) {
        border-right: 1.5px solid #CFCDCE;
    }
    &:nth-child(5) {
        border-right: 1.5px solid #CFCDCE;
    }
`;
const Light = styled.section `
    width: 100%;
    height: 90vh;
    margin-top: -10px;
    margin-bottom: 90px;
`;
const LightTitle = styled.div `
    display: flex;
    margin-top: -21px;
    margin-bottom: 55px;
    h1 {
        color: #3c4242;
        font-size: 34px;
        font-family: 'CoreSans';
        font-weight: 600;
        margin-left: 21px;
        margin-top: 0px;
        margin-bottom: 0px;
    }
`;
const LightProduct = styled.div `
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 45px;
`;
const LightProductBoxIcon = styled.div `
    position: relative;
    bottom: 351px;
    right: -227px;
    padding: 9px;
    background: #fff;
    border-radius: 50%;
    display: inline-flex;
    align-items: center;
    justify-content: center;
`;
const LightProductBox = styled.div `
    h5 {
        color: #2a2f2f;
        font-weight: 900;
        font-size: 18px;
        margin-top: -7px;
    }
    h6 {
        color: #7f7f7f;
        font-size: 14px;
        margin-top: -27px;
        font-weight: 400;
    }
`;
const LightProductBoxFlex = styled.div `
    display: flex;
    justify-content: space-between;
    align-items: center;
    button {
        margin-top: -53px;
        border: none;
        background: #f6f6f6;
        border-radius: 9px;
        font-weight: 900;
        font-size: 14px;
        color: #3c4242;
        padding: 11px;
        margin-right: 33px;
        font-family: 'Causten';
    }
`;
const LightProductBoxFlexLeft = styled.div `
`;const Footer = styled.section `
    width: 100%;
    height: 100vh;
    margin-top: -63px;
    background: #3c4242;
    padding: 50px 0px;
`;
const FooterFlex = styled.div `
    display: flex;
    align-items: flex-start;
    justify-content: center;
    gap: 70px;
`;
const FooterFlexBox = styled.div `
    &:last-child {
        margin-right: 0px;
    }
    h3 {
        color: #f6f6f6;
        font-weight: 700;
        font-size: 27px;
    }
    ul {
        list-style: none;
        padding-left: 0px;
        margin-top: 33px;
        li {
            margin-bottom: 21px;
            a {
                text-decoration: none;
                color: #f6f6f6;
                font-size: 18px;
            }
        }
    }
`;
const FooterBottom = styled.div `
    padding: 0px 30px;
`;
const FooterBottomMedia = styled.div `
    display: flex;
    align-items: flex-end;
    justify-content: center;
    margin-top: -50px;
    padding-bottom: 99px;
    border-bottom: 2px solid #5c5c5c;
`;
const FooterBottomMediaLeft = styled.div `
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-right: 433px;
    margin-left: 60px;
    img {
        margin-right: 13px;
        padding: 11px;
        background: #f6f6f6;
        border-radius: 11px;
        width: 15.02px;
        height: 15.02px;
        &:first-child {
            &:hover {
                filter: invert(100%);
            }
        }
    }
`;
const FooterBottomMediaRight = styled.div `
    margin-right: 90px;
    h3 {
        font-weight: 700;
        font-size: 29px;
        color: #f6f6f6;
        margin-bottom: 21px;
        margin-left: -13px;
    }
`;
const FooterBottomMediaRightApp = styled.div `
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
const FooterBottomMediaRightAppPlay = styled.div `
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #404040;
    margin-right: 27px;
    padding: 9px;
    border-radius: 12px;
    padding-right: 21px;
`;
const FooterBottomMediaRightAppPlayText = styled.div `
    margin-left: 21px;
    h6 {
        margin-top: 0px;
        margin-bottom: 0px;
        font-weight: 100;
        font-size: 10px;
        color: #fff;
    }
    h5 {
        margin-bottom: 0px;
        margin-top: 0px;
        font-weight: 100;
        font-size: 18px;
        color: #fff;
    }
`;
const FooterBottomMediaRightAppStore = styled.div `
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #404040;
    padding: 9px;
    border-radius: 12px;
    padding-right: 21px;
`;
const FooterBottomMediaRightAppstoreText = styled.div `
    margin-left: 21px;
    h6 {
        margin-top: 0px;
        margin-bottom: 0px;
        font-weight: 100;
        font-size: 10px;
        color: #fff;
    }
    h5 {
        margin-bottom: 0px;
        margin-top: 0px;
        font-weight: 100;
        font-size: 18px;
        color: #fff;
    }
`;
const FooterBottomCategories = styled.div `
    h5 {
        font-weight: 600;
        font-size: 18px;
        color: #fff;
        text-align: center;
        margin-top: 39px;
        margin-bottom: -27px;
    }
`;
const FooterBottomCategoriesHeading = styled.div `
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 2px solid #5c5c5c;
    h3 {
        font-weight: 700;
        font-size: 29px;
        color: #f6f6f6;
        margin-left: 81px;
    }
    img {
        margin-right: 27px;
    }
`;

export default ProductPage;