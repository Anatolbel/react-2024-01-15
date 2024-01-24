import Header from '../header/component';
import Footer from '../footer/component';
import styles from "./styles.module.scss";
import { Fragment } from 'react';

const Layout = ({ children }) => {
  return (
    <Fragment>
      <Header />
      {children}
      <Footer isHighlighted />
    </Fragment>
  );
}

export default Layout;
