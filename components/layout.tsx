import Footer from "./footer";
import Navbar from "./navbar";
import styles from '../styles/Home.module.scss'
import { motion } from "framer-motion";



type Props = {
  children: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className={styles.main}>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          {children}
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;