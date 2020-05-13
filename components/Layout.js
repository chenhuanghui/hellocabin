// components/Layout.js

import Head from "next/head";

import Header from "./Header";
import NavBar from "./NavBar";
import Cohoi from "./sections/Cohoi";
import Diadiem from "./sections/Diadiem";
import Doitac from "./sections/Doitac";
import Giaiphap from "./sections/Giaiphap";
import Hequa from "./sections/Hequa";
import Khachhang from "./sections/Khachhang";
import Lienhe from "./sections/Lienhe";
import Sanpham from "./sections/Sanpham";
import Vande from "./sections/Vande";

// import Swiper from 'swiper';
// import "./Layout.scss";
// import "./index.scss";

// import navButtons from "../config/buttons";

export default class Layout extends React.Component {
  componentDidMount () {
    var swiper = new Swiper('.swiper-scroller', {
      slidesPerView: 'auto',
      spaceBetween: 50,
      freeMode: true,
      grabCursor: true,
      navigation: {
          nextEl: '.slider-arrow-right-1',
          prevEl: '.slider-arrow-left-1',
    },
    scrollbar: {
    el: '.swiper-scrollbar',
    },
    mousewheel: true,
    breakpoints: {
          768: {
            spaceBetween: 20,
          },
          576: {
            spaceBetween: 15,
          }
        }
    });
  } 

  render () {
    return (
      <div className="Layout">
    
      <Head>
        <meta httpEquiv="content-type" content="text/html; charset=utf-8" />
        <meta name="author" content="CABINFOOD" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link href="https://fonts.googleapis.com/css?family=Merriweather:700|Muli:400&display=swap" rel="stylesheet"></link>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossOrigin="anonymous"></link>
        <title>Cabin Food | Making better your kitchen</title>
        
        <link rel="icon" type="image/png" sizes="32x32" href="/static/demos/articles/images/favicon-32x32.png"></link>
        <link rel="icon" type="image/png" sizes="16x16" href="/static/demos/articles/images/favicon-16x16.png"></link>
        
        <script src="/static/js/jquery.js"></script>
	      <script src="/static/js/plugins.js"></script>
        <script src="/static/js/functions.js"></script>
      </Head>

      <div className="stretched">
        <div id="wrapper" className="clearfix">
          <Header />
          <Cohoi />
          <section id="content">
            <div className="content-wrap pb-0 clearfix">
              <Vande />
              <Hequa />
              <Sanpham />
              <Giaiphap />
              <Khachhang />
              <Diadiem />  
              <Doitac />  
              <Lienhe />  
            </div>
          </section>
          
          {/* <div className="Content">{props.children}</div> */}

          <NavBar />
        </div>
      </div>
      
    </div>
    )
  }
}

// const Layout = props => {

//   return (
//     <div className="Layout">
    
//       <Head>
//         <meta http-equiv="content-type" content="text/html; charset=utf-8" />
//         <meta name="author" content="CABINFOOD" />
//         <meta name="viewport" content="width=device-width, initial-scale=1" />
//         <link href="https://fonts.googleapis.com/css?family=Merriweather:700|Muli:400&display=swap" rel="stylesheet"></link>
        
//         <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous"></link>
//         <title>Cabin Food | Making better your kitchen</title>

        
//         <link rel="icon" type="image/png" sizes="32x32" href="/static/demos/articles/images/favicon-32x32.png"></link>
//         <link rel="icon" type="image/png" sizes="16x16" href="/static/demos/articles/images/favicon-16x16.png"></link>
        
//         <script src="/static/js/jquery.js"></script>
// 	      <script src="/static/js/plugins.js"></script>
//         <script src="/static/js/functions.js"></script>
//       </Head>

//       <div className="stretched">
//         <div id="wrapper" className="clearfix">
//           <Header />
//           <Cohoi />
//           <section id="content">
//             <div className="content-wrap pb-0 clearfix">
//               <Vande />
//               <Hequa />
//               <Sanpham />
//               <Giaiphap />
//               <Khachhang />
//               <Diadiem />  
//               <Doitac />  
//               <Lienhe />  
//             </div>
//           </section>
          
//           {/* <div className="Content">{props.children}</div> */}

//           <NavBar />
//         </div>
//       </div>
      
//     </div>
    
//   );
// }

// export default Layout;