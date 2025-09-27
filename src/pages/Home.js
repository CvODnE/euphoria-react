import React, { useEffect, useState } from "react";
import styled from "styled-components";
import GlobalStyle from "../styles/GlobalStyle";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
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
import Logout from "../assets/logout.png";


function Home() {
    const [showLogin, setShowLogin] = useState(false);
    const [loggedIn, setLoggedIn] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    // Check token on mount
    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) setLoggedIn(true);
    }, []);

    // Login function
    const handleLogin = async () => {
        try {
        const res = await fetch("https://fakestoreapi.com/auth/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
            username: username,
            password: password,
            }),
        });

        const data = await res.json();
        if (data.token) {
            localStorage.setItem("token", data.token);
            setLoggedIn(true);
            setShowLogin(false);
            setUsername("");
            setPassword("");
        } else {
            alert("Invalid credentials");
        }
        } catch (err) {
        console.error(err);
        alert("Login failed");
        }
    };

    // Logout function
    const handleLogout = () => {
        localStorage.removeItem("token");
        setLoggedIn(false);
    };
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((data) => setProducts(data))
        .catch((err) => console.error("Error fetching products:", err));
    }, []);
  
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
                    <div onClick={() => (loggedIn ? handleLogout() : setShowLogin(true))}>
                        <img src={loggedIn ? Logout : Account} alt="Account" />
                    </div>
                    <div>
                        <img src={Cart} alt="Cart" />
                    </div>
                </HeaderIcons>
            </Header>
            {showLogin && (
                <LoginPopup>
                <div className="popup">
                    <h3>Login</h3>
                    <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    />
                    <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    />
                    <button onClick={handleLogin}>Login</button>
                    <button onClick={() => setShowLogin(false)}>Cancel</button>
                </div>
                </LoginPopup>
            )}
            <Spotlight>
                <Top>
                    <LeftArrowDiv>
                        <img src={Leftarrow} alt="Left Arrow" />
                    </LeftArrowDiv>
                    <ContentBox>
                        <h5>T-Shirt / Tops</h5>
                        <h1>Summer <br /> Value Pack</h1>
                        <h4>cool / colorful / comfy</h4>
                        <button>Shop Now</button>
                    </ContentBox>
                    <RightArrowDiv>
                        <img src={Rightarrow} alt="Right Arrow" />
                    </RightArrowDiv>
                </Top>
                <Bottom></Bottom>       
            </Spotlight>
            <Deals>
                <Flex>
                    <Left>
                        <h6>Low Price</h6>
                        <h2>High Coziness</h2>
                        <h3>UPTO 50% OFF</h3>
                        <a><h6>Explore Items</h6></a>
                    </Left>
                    <Right>
                        <h6>Beyoung Presents</h6>
                        <h2>Breezy Summer<br />Style</h2>
                        <h3>UPTO 50% OFF</h3>
                        <a><h6>Explore Items</h6></a>
                    </Right>
                </Flex>
            </Deals>
            <Arrival>
                <Wrapper>
                    <ArrivalTitle><img src={Rectangle} /><h1>New Arrival</h1></ArrivalTitle>
                    <ArrivalFlex>
                        <img src={SmallLeftArrow} alt="Left Arrow" />
                        <ArrivalFlexBox>
                            <img src={Img1} alt="Knitted Joggers" />
                            <h3>Knitted Joggers</h3>
                        </ArrivalFlexBox>
                        <ArrivalFlexBox>
                            <img src={Img3} alt="Full Sleeve" />
                            <h3>Full Sleeve</h3>
                        </ArrivalFlexBox>
                        <ArrivalFlexBox>
                            <img src={Img4} alt="Active T-Shirts" />
                            <h3>Active T-Shirts</h3>
                        </ArrivalFlexBox>
                        <ArrivalFlexBox>
                            <img src={Img2} alt="Urban Shirts" />
                            <h3>Urban Shirts</h3>
                        </ArrivalFlexBox>
                        <img src={SmallRightArrow} alt="Right Arrow" />
                    </ArrivalFlex>
                </Wrapper>
            </Arrival>
            <Service>
                <Wrapper>
                    <ServiceFlex>
                        <ServiceContent>
                            <h1>WE MADE YOUR EVERYDAY<br />FASHION BETTER!</h1>
                            <h4>In our journey to improve everyday fashion,<br />euphoria presents EVERYDAY wear range -<br />Comfortable & Affordable fashion 24/7</h4>
                            <button>Shop Now</button>
                        </ServiceContent>
                        <BG>
                        </BG>
                    </ServiceFlex>
                </Wrapper>
            </Service>
            <Category>
                <Wrapper>
                    <CategoryTitle><img src={Rectangle} /><h1>Categories For Men</h1></CategoryTitle>
                    <CategoryGrid>
                        {products.map((item) => (
                            <Link key={item.id} to={`/product/${item.id}`} style={{ textDecoration: "none", color: "inherit" }}>
                                <CategoryGridBox key={item.id}>
                                    <img src={item.image} style={{ objectFit: "cover", height: "100%", width: "100%" }} />
                                    <CategoryGridBoxFlex>
                                        <CategoryGridBoxFlexRight>
                                            <h5>{item.title}</h5>
                                            <h6><a>Explore Now!</a></h6>
                                        </CategoryGridBoxFlexRight>
                                        <a><img src={Arrow} /></a>
                                    </CategoryGridBoxFlex>
                                </CategoryGridBox>
                            </Link>
                        ))}
                    </CategoryGrid>
                </Wrapper>
            </Category>
            <Categories>
                <Wrapper>
                    <CategoriesTitle><img src={Rectangle} /><h1>Categories For Women</h1></CategoriesTitle>
                    <CategoriesGrid>
                        <CategoriesGridBox>
                            <img src={Img12} />
                            <CategoriesGridBoxFlex>
                                <CategoriesGridBoxFlexRight>
                                    <h5>Hoodies & Sweetshirt</h5>
                                    <h6><a href="#">Explore Now!</a></h6>
                                </CategoriesGridBoxFlexRight>
                                <a href="#"><img src={Arrow} alt=""/></a>
                            </CategoriesGridBoxFlex>
                        </CategoriesGridBox>
                        <CategoriesGridBox>
                            <img src={Img13} />
                            <CategoriesGridBoxFlex>
                                <CategoriesGridBoxFlexRight>
                                    <h5>Coats & Parkas</h5>
                                    <h6><a href="#">Explore Now!</a></h6>
                                </CategoriesGridBoxFlexRight>
                                <a href="#"><img src={Arrow} alt=""/></a>
                            </CategoriesGridBoxFlex>
                        </CategoriesGridBox>
                        <CategoriesGridBox>
                            <img src={Img14} />
                            <CategoriesGridBoxFlex>
                                <CategoriesGridBoxFlexRight>
                                    <h5>Tees & T-Shirt</h5>
                                    <h6><a href="#">Explore Now!</a></h6>
                                </CategoriesGridBoxFlexRight>
                                <a href="#"><img src={Arrow} alt=""/></a>
                            </CategoriesGridBoxFlex>
                        </CategoriesGridBox>
                        <CategoriesGridBox>
                            <img src={Img15} />
                            <CategoriesGridBoxFlex>
                                <CategoriesGridBoxFlexRight>
                                    <h5>Boxers</h5>
                                    <h6><a href="#">Explore Now!</a></h6>
                                </CategoriesGridBoxFlexRight>
                                <a href="#"><img src={Arrow} alt=""/></a>
                            </CategoriesGridBoxFlex>
                        </CategoriesGridBox>
                    </CategoriesGrid>
                </Wrapper>
            </Categories>
            <Brand>
                <Wrapper>
                    <BrandBox>
                        <h1>Top Brands Deal</h1>
                        <h5>Up To <b>60%</b> off on brands</h5>
                        <BrandBoxFlex>
                            <img src={Nike} alt=""/>
                            <img src={HM} alt=""/>
                            <img src={Levis} alt=""/>
                            <img src={USPA} alt=""/>
                            <img src={Puma} alt=""/>
                        </BrandBoxFlex>
                    </BrandBox>
                </Wrapper>
            </Brand>
            <Light>
                <Wrapper>
                    <LightTitle><img src={Rectangle} /><h1>In The Limelight</h1></LightTitle>
                    <LightProduct>
                        <LightProductBox>
                            <img src={Img16} />
                            <LightProductBoxIcon><img src={Wishlist} alt="" /></LightProductBoxIcon>
                            <LightProductBoxFlex>
                                <LightProductBoxFlexLeft>
                                    <h5>Black Sweatshirt with ....</h5>
                                    <h6>Jhanvi’s  Brand</h6>
                                </LightProductBoxFlexLeft>
                                <button>$123.00</button>
                            </LightProductBoxFlex>
                        </LightProductBox>
                        <LightProductBox>
                            <img src={Img17} />
                            <LightProductBoxIcon><img src={Wishlist} alt="" /></LightProductBoxIcon>
                            <LightProductBoxFlex>
                                <LightProductBoxFlexLeft>
                                    <h5>line Pattern Black H...</h5>
                                    <h6>AS’s  Brand</h6>
                                </LightProductBoxFlexLeft>
                                <button>$37.00</button>
                            </LightProductBoxFlex>
                        </LightProductBox>
                        <LightProductBox>
                            <img src={Img18} />
                            <LightProductBoxIcon><img src={Wishlist} alt="" /></LightProductBoxIcon>
                            <LightProductBoxFlex>
                                <LightProductBoxFlexLeft>
                                    <h5>Black Shorts</h5>
                                    <h6>MM’s  Brand</h6>
                                </LightProductBoxFlexLeft>
                                <button>$37.00</button>
                            </LightProductBoxFlex>
                        </LightProductBox>
                        <LightProductBox>
                            <img src={Img19} />
                            <LightProductBoxIcon><img src={Wishlist} alt="" /></LightProductBoxIcon>
                            <LightProductBoxFlex>
                                <LightProductBoxFlexLeft>
                                    <h5>Levender Hoodie with ....</h5>
                                    <h6>Nike’s  Brand</h6>
                                </LightProductBoxFlexLeft>
                                <button>$119.00</button>
                            </LightProductBoxFlex>
                        </LightProductBox>
                    </LightProduct>
                </Wrapper>
            </Light>
            <Feed>
                <Wrapper>
                    <FeedTitle><img src={Rectangle} /><h1>Feedback</h1></FeedTitle>
                    <FeedFlex>
                        <FeedFlexBox>
                            <FeedFlexBoxImg>
                                <img src={Span1} />
                                <FeedFlexBoxImgStar>
                                    <img src={Star} />
                                    <img src={Star} />
                                    <img src={Star} />
                                    <img src={StarHalf} />
                                    <img src={StarO} />
                                </FeedFlexBoxImgStar>
                            </FeedFlexBoxImg>
                            <h2>Floyd Miles</h2>
                            <h5>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</h5>
                        </FeedFlexBox>
                        <FeedFlexBox>
                            <FeedFlexBoxImg>
                                <img src={Span2} />
                                <FeedFlexBoxImgStar>
                                    <img src={Star} />
                                    <img src={Star} />
                                    <img src={Star} />
                                    <img src={Star} />
                                    <img src={StarO} />
                                </FeedFlexBoxImgStar>
                            </FeedFlexBoxImg>
                            <h2>Ronald Richards</h2>
                            <h5>ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</h5>
                        </FeedFlexBox>
                        <FeedFlexBox>
                            <FeedFlexBoxImg>
                                <img src={Span3} />
                                <FeedFlexBoxImgStar>
                                    <img src={Star} />
                                    <img src={Star} />
                                    <img src={Star} />
                                    <img src={StarHalf} />
                                    <img src={StarO} />
                                </FeedFlexBoxImgStar>
                            </FeedFlexBoxImg>
                            <h2>Savannah Nguyen</h2>
                            <h5>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</h5>
                        </FeedFlexBox>
                    </FeedFlex>
                    <FeedDots><span></span><span></span><span></span></FeedDots>
                </Wrapper>
            </Feed>
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
    width: 90%;
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
const LoginPopup = styled.div`
    position: fixed;
    top: 0; left: 0;
    width: 100%; height: 100%;
    background: rgba(0,0,0,0.5);
    display: flex;
    justify-content: center;
    align-items: center;

    .popup {
        background: white;
        padding: 20px;
        border-radius: 10px;
        width: 300px;
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    input {
        padding: 8px;
        border: 1px solid #ddd;
        border-radius: 6px;
    }

    button {
        padding: 8px;
        border: none;
        background: black;
        color: white;
        border-radius: 6px;
        cursor: pointer;
    }

    button:last-child {
        background: gray;
    }
`;
const Spotlight = styled.section `
    background-image: url(${BG1});
    background-size: cover;
    background-position: center;
    height: 716px;
    width: 100%;
`;
const Top = styled.div `
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 85%;
`;
const Bottom = styled.div `
`;
const LeftArrowDiv = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
    width: 7%;
    &:hover {
        img {
            transition: all 1s;
            transform: scale(1.5);
        }
    }
`;
const RightArrowDiv = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
    width: 7%;
    &:hover {
        img {
            transition: all 1s;
            transform: scale(1.5);
        }
    }
`;
const ContentBox = styled.div `
    width: 86%;
    padding-left: 100px;
    h5 {
        font-family: 'Causten';
        font-weight: 500;
        font-size: 32px;
        color: #fff;
        margin-bottom: 39px;
    }
    h1 {
        font-family: 'CoreSans';
        font-weight: 800;
        font-size: 78px;
        color: #fff;
        margin-bottom: 33px;
        margin-top: 0px;
    }
    h4 {
        font-family: 'Causten';
        font-weight: 500;
        font-size: 32px;
        color: #fff;
        margin-bottom: 39px;
    }
    button {
        font-family: 'Causten';
        font-weight: 700;
        font-size: 24px;
        background: #fff;
        padding: 16px 72px;
        border: none;
        color: #3C4242;
        border-radius: 9px;
        cursor: pointer;
        transition: all 0.3s;
        &:hover {
            background: #3C4242;
            color: #fff;
        }
    }
`
const Deals = styled.section `
    width: 100%;
    height: 90vh;
`;
const Flex = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
    height: 90vh;
    font-family: 'CoreSans';
`;
const Left = styled.div `
    width: 605px;
    height: 356px;
    background: url(${BG2});
    background-repeat: no-repeat;
    background-size: 1200px;
    background-position-x: -145px;
    border-radius: 12px;
    box-shadow: 2px 2px 10px 0px #00000066;
    margin-right: 30px;
    h6 {
        margin-left: 30px;
        color: #fff;
        margin-top: 67px;
        font-size: 18px;
        font-weight: 900;
    }
    h2 {
        margin-left: 30px;
        color: #fff;
        margin-top: -13px;
        font-size: 34px;
        font-weight: 900;
    }
    h3 {
        font-size: 16px;
        color: #fff;
        margin-top: -13px;
        margin-left: 30px;
        font-weight: 600;
        margin-bottom: 51px;
        font-family: 'Causten';
    }
    a {
        text-decoration: none;
        h6 {
            display: inline;
            border-bottom: 1px solid #fff;
            font-weight: 900;
            font-size: 21px;
            letter-spacing: 1px;
        }
    }
`;
const Right = styled.div `
    width: 605px;
    height: 356px;
    background: url(${BG3});
    background-repeat: no-repeat;
    background-size: 845px;
    background-position-y: -21px;
    border-radius: 12px;
    box-shadow: 2px 2px 10px 0px #00000066;
    h6 {
        margin-left: 30px;
        color: #fff;
        margin-top: 67px;
        font-size: 18px;
        font-weight: 900;    
    }
    h2 {
        margin-left: 30px;
        color: #fff;
        margin-top: -13px;
        font-size: 34px;
        font-weight: 900;   
    }
    h3 {
        font-size: 16px;
        color: #fff;
        margin-top: -13px;
        margin-left: 30px;
        font-weight: 600;
        margin-bottom: 51px;
        font-family: 'Causten';
    }
    a {
        text-decoration: none;
        h6 {
            display: inline;
            border-bottom: 1px solid #fff;
            font-weight: 900;
            font-size: 21px;
            letter-spacing: 1px;
        }
    }
`;
const Arrival = styled.section `
    width: 100%;
    height: 90vh;
    margin-top: 0px;
`;
const ArrivalTitle = styled.div `
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
const ArrivalFlex = styled.div `
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
const ArrivalFlexBox = styled.div `
`;
const Service = styled.section `
    width: 100%;
    height: 90vh;
    margin-top: -126px;
`;
const ServiceFlex = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1240px;
    height: 640px;
`;
const ServiceContent = styled.div `
    background-image: url(${BG4});
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: 100%;
    border-radius: 12px 0px 0px 12px;
    h1 {
        margin-top: 183px;
        font-size: 34px;
        color: #fff;
        font-weight: 900;
        font-family: 'CoreSans';
        margin-left: 74px;
    }
    h4 {
        margin-top: 30px;
        font-size: 20px;
        font-weight: 100;
        letter-spacing: 1px;
        color: #fff;
        margin-left: 74px;
        font-family: 'Causten';
    }
    button {
        margin-top: 30px;
        font-size: 18px;
        font-weight: 600;
        color: #000;
        margin-left: 74px;
        font-family: 'Causten';
        background: #fff;
        width: 168px;
        height: 46px;
        border-radius: 9px;
        border: none;
        cursor: pointer;
        &:hover {
            transition: all .03s;
            background: #ddd;
        }
        &:active {
            transition: all 0.3s;
            opacity: 0%;
        }
    }
`;
const BG = styled.div `
    width: 100%;
    height: 100%;
    background: url(${BG5});
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 0px 12px 12px 0px;
`;
const Category = styled.section `
    width: 100%;
    height: 90vh;
    margin-top: 170px;
`;
const CategoryTitle = styled.div `
    display: flex;
    margin-top: -71px;
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
const CategoryGrid = styled.div `
    display: grid;
    grid-template-columns: auto auto auto auto;
    row-gap: 190px;
    column-gap: 45px;
`;
const CategoryGridBox = styled.div `
    width: 271px;
    height: 470px;
    margin-bottom: 50px;
`;
const CategoryGridBoxFlex = styled.div `
    display: flex;
    justify-content: space-between;
    align-items: center;
    h5 {
        color: #2a2f2f;
        font-weight: 900;
        font-size: 18px;
        margin-top: 15px;
    }
    h6 {
        color: #7f7f7f;
        font-size: 14px;
        margin-top: -27px;
        font-weight: 400;
        a {
            text-decoration: none;
            color: #7f7f7f;
        }
    }
    img {
        margin-top: -33px;
        &:hover {
            transition: all .1s;
            margin-right: -5px;
            height: max-content;
            width: max-content;
        }
        &:active {
            transition: all 0.1s;
            opacity: 0%;
        }
    }
`;
const CategoryGridBoxFlexRight = styled.div `
`;
const Categories = styled.section `
    width: 100%;
    height: 90vh;
    margin-top: 3000px;
`;
const CategoriesTitle = styled.div `
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
const CategoriesGrid = styled.div `
    display: grid;
    grid-template-columns: auto auto auto auto;
`;
const CategoriesGridBox = styled.div `
    width: 271px;
    height: 470px;
    margin-bottom: 50px;
`;
const CategoriesGridBoxFlex = styled.div `
    display: flex;
    justify-content: space-between;
    align-items: center;
    h5 {
        color: #2a2f2f;
        font-weight: 900;
        font-size: 18px;
        margin-top: 15px;
    }
    h6 {
        color: #7f7f7f;
        font-size: 14px;
        margin-top: -27px;
        font-weight: 400;
        a {
            text-decoration: none;
            color: #7f7f7f;
        }
    }
    img {
        margin-top: -33px;
        &:hover {
            transition: all .1s;
            margin-right: -5px;
            height: max-content;
            width: max-content;
        }
        &:active {
            transition: all 0.1s;
            opacity: 0%;
        }
    }
`;
const CategoriesGridBoxFlexRight = styled.div `
`;
const Brand = styled.div `
    width: 100%;
    height: 60vh;
    margin-top: -10px;
`;
const BrandBox = styled.div `
    background: #3c4242;
    border: 1.07px solid #323232;
    width: 1233px;
    height: 358px;
    border-radius: 12px;
    h1 {
        color: #fff;
        font-family: 'CoreSans';
        font-size: 50px;
        font-weight: 900;
        text-align: center;
    }
    h5 {
        color: #fff;
        font-family: 'Causten';
        font-size: 22px;
        font-weight: 100;
        text-align: center;
        b {
            color: #fbd103;
            font-weight: 700;
        }
    }
`;
const BrandBoxFlex = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
    img {
        width: 158px;
        height: 66px;
        margin-right: 27px;
        padding: 11px;
        background: #fff;
        border-radius: 12px;
    }
`;
const Light = styled.section `
    width: 100%;
    height: 90vh;
    margin-top: -10px;
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
`;
const Feed = styled.section `
    width: 100%;
    height: 90vh;
    margin-top: -10px;
`;
const FeedTitle = styled.div `
    display: flex;
    margin-top: 3px;
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
const FeedFlex = styled.div `
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
`;
const FeedFlexBox = styled.div `
    background: #fff;
    border: 2px solid #bebcbd;
    width: 397px;
    height: 232px;
    border-radius: 10px;
    padding: 23.19px;
    h2 {
        color: #3c4242;
        font-size: 22px;
    }
    h5 {
        font-size: 14px;
        font-weight: 400;
        color: #807d7e;
        margin-bottom: 0px;
    }
`;
const FeedFlexBoxImg = styled.div `
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
`;
const FeedFlexBoxImgStar = styled.div `
`;
const FeedDots = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 27px;
    span {
        width: 9px;
        height: 9px;
        border-radius: 50%;
        background: #bebcbd;
        margin-right: 7px;
        &:first-child {
            background: #3c4242;
        }
    }
`;
const Footer = styled.section `
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

export default Home;