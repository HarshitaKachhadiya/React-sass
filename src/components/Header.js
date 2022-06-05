import { SearchOutlined, ShoppingBasket } from '@material-ui/icons';
import React from 'react'
import { Link } from 'react-router-dom';
import '../styles/Header.scss';

const Header = () => {
  return (
    <div className='header'>
        <nav>
            <ul className='ul-items'>
                <li className='li-items'>
                    <Link to='/women'>Women</Link>
                    <Link to='/men'>Men</Link>
                    <Link to='/denim'>Denim</Link>
                    <Link to='/shop' className='orange'>The Gift Shop</Link>
                    <Link to='/about'>About</Link>
                </li>
            </ul>
            <div className="logo">
                <h1>Eshopland</h1>
            </div>

            <div className="right">
                <div className="search">
                    <SearchOutlined className='search-icon'/>
                    <button className='sch-btn'>Search</button>
                </div>
                <div className="right-buttons">
                    <button>
                        <Link to='/login'>Log In</Link>
                    </button>
                    <button>
                        <Link to='/sign-up'>Sign Up</Link>
                    </button>
                    <ShoppingBasket className='basket' />
                </div>
            </div>
        </nav>
    </div>
  );
};

export default Header;

// import React from 'react';
// import './Header.scss';
// import logo from '../assets/logo.png';
// import { Col, Container, Row, DropdownToggle, Dropdown, DropdownItem, DropdownMenu} from 'reactstrap';

// const Header = () => {
//   return (
//     <Container fluid>
//         <Row className='mt-2'>
//           <Col lg={2}>
//             <img src={logo} alt="logo" />
//           </Col>
//           <Col lg={3} >
//              <form className="search">
//                   <input className='control' type="text" placeholder='What are you Search?' />
//                   <button>Search</button>
//              </form>
//           </Col>
//           <Col lg={5} className='d-flex justify-content-end'>
//                <div className="customer">
//                  <i className="bi bi-person person"></i>
//                  <div className='busi'>
//                    <h6>CUSTOMER</h6>
//                    <div className='login'>
//                    <a href='#'>Login</a> 
//                    <p>/</p>
//                    <a href='#'>Signup</a>
//                    </div>
//                 </div>
//               </div>
//               <div className="customer">
//                 <i className="bi bi-person person"></i>
//                 <div className='busi'>
//                 <h6>BUSINESS</h6>
//                 <div className='login'>
//                    <a href='#'>Login</a> 
//                    <p>/</p>
//                    <a href='#'>Signup</a>
//                    </div>
//                 </div>
//               </div>
//           </Col>
//           <Col lg={1}>
//           <Dropdown color='success' toggle={function noRefCheck(){}}>
//              <DropdownToggle caret className='dropdown-toggle btn btn-light drop'>
//                 ...
//              </DropdownToggle>
//              <DropdownMenu container="body">
//                 <DropdownItem onClick={function noRefCheck(){}}>
//                    Action 1
//                 </DropdownItem>
//                 <DropdownItem onClick={function noRefCheck(){}}>
//                    Action 2
//                 </DropdownItem>
//                 <DropdownItem onClick={function noRefCheck(){}}>
//                    Action 3
//                 </DropdownItem>
//               </DropdownMenu>
//             </Dropdown>
//           </Col>
//           <Col lg={1}>
//             <div className='cart'>
//               <i className="bi bi-cart cart"></i>
//               <span>99</span>
//             </div>
//           </Col>
//         </Row>
//     </Container>
//   )
// };

// export default Header;

// html {
//     font-size: 16px;
// }

// body {
//     font-size: 1rem;
//     font-family: 'Roboto', sans-serif;
// }

// img {
//     width: 100%;
// }

// .col-lg-3 {
//     padding: 0;

//     .search {
//         position: relative;
//         border: 1px solid #f36f21;
//     }

//     .control {
//         border: none;
//         height: 100%;
//         width: 100%;
//         padding: 9px;
//     }

//     .control::-webkit-input-placeholder {
//         color: #005387;
//         font-weight: bold;
//     }

//     .control:focus {
//         outline: none;
//     }

//     button {
//         position: absolute;
//         border: none;
//         display: grid;
//         place-items: center;
//         cursor: pointer;
//         background: none;
//         color: #005387;
//         font-weight: bolder;
//         top: 0.4rem;
//         right: 0.2rem;
//         border-left: 2px solid #f36f21;
//         align-items: center;
//     }

// }

// .customer {
//     display: flex;
//     margin-right: 2px;

//     .person {
//         color: #005387;
//         // align-items: center;
//         font-size: 1.5rem;
//     }

//     .busi {
//         // white-space: nowrap;
//         padding: 0px 2px;
//         margin: 0;

//         h6 {
//             color: #005387;
//             font-size: 0.8rem;
//             font-weight: 900;
//             margin-bottom: 0.2rem;
//         }

//         .login {
//             display: flex;

//             p {
//                 color: #005387;
//                 font-size: 0.8rem;
//                 font-weight: 900;
//                 padding: 0px 4px;
//             }

//             a {
//                 color: #005387;
//                 font-size: 0.9rem;
//                 font-weight: 900;
//                 text-decoration: none;
//             }
//         }
//     }
// }

// .drop {
//     border-radius: 20rem;
//     padding: 0.4rem 1.5rem;
// }


// .cart {
//     position: relative;
//     height: 100%;
//     width: 100%;

//     i {
//         color: #005387;
//         font-size: 1.8rem;
//     }

//     span {
//         position: absolute;
//         width: 20px;
//         height: 20px;
//         color: #ffffff;
//         background-color: #f36f21;
//         border-radius: 50%;
//         top: 0rem;
//         right: 3.3rem;
//         font-size: 0.8rem;
//         text-align: center;
//     }
// }

// @import 'bootstrap/dist/css/bootstrap.min.css';
// @import '../../node_modules/bootstrap-icons/font/bootstrap-icons.css';
