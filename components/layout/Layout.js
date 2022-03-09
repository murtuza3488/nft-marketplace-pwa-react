import MainNavigation from "./MainNavigation";
function Layout(props) {
  return (
    <>
      <MainNavigation />
      <main>{props.children}</main>
      <footer>
        <p>Powered By Seaflux</p>
      </footer>
    </>
  );
}

export default Layout;
