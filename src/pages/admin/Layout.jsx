import Header from "../../components/Header"
import Footer from "../../components/Footer"
import Sidebar from "../../components/Sidebar"

 const Layout = ({children}) => {
  return (
    <>
    <div id="wrapper">
        <Sidebar /> 
    <div id="content-wrapper" className="d-flex flex-column">
         <div id="content">
         <Header />

{/* main content render  */}
         {children }


        </div>
        <Footer />

      </div>
    </div>
    </>
  )
}

export default Layout