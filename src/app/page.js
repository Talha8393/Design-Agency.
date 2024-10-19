import styles from "./globals.css";
import satoshi from "./fonts/satoshi.css"
import Navbar from './Nav';
import Slider from './Slider';
import HomePage from "./HomePage";
import Benefits from "./Benefits"
import Recent from './Recent';
import Scope from './Scope';
import Pricing from './Pricing';
import Faq from './Faq';
import Footer2 from './Footer2';

export default function Home() {
  return (
    <div className={styles.App} >
       <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
       <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css" integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
       <link rel="stylesheet" href="fonts/satoshi.css"/>
      
    <Navbar />
    <HomePage/>
    <Slider/>
    <Benefits/>
    <Recent/>
    <Scope/>
    <Pricing/>
    <Faq/>
    <Footer2/>
    
  </div>
  );
}
