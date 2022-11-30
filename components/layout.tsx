import Footer from "./footer";
import Navbar from "./navbar";
import styles from '../styles/Home.module.scss'



type Props = {
  children: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div>
      <Navbar/>
      <div className={styles.main}>
        {children}
      </div>
      
      <Footer/>
    </div>
  );
};

export default Layout;