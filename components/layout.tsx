

type Props = {
  children: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div>
      <nav>nav</nav>
      {children}
      <footer>footer</footer>
    </div>
  );
};

export default Layout;