import Image from "next/image";
import "./home.css";
import "./homeMobile.css";
import { FaFacebookSquare, FaInstagram, FaWhatsapp, FaShippingFast, FaPlaneDeparture, FaRegCheckCircle, FaBoxOpen, FaBoxes, FaHandshake, FaStoreAlt, FaTruck, FaShip, FaWarehouse, FaArrowCircleUp } from "react-icons/fa";
import { SingleMenuItem } from "@/Components/NavBar/NavBar";
import { SingleProduct, SingleProductType, SingleService, SingleServiceType, SocialMediaMenu } from "@/Components/NavBar/SingleComponents/SingleComponent";
import Footer from "@/Components/Footer/Footer";
import Link from "next/link";

export const menuInfo = [
  {
    icon: "",
    menuText: "Home",
    link: "/"
  },
  {
    icon: "",
    menuText: "About Us",
    link: "#aboutUS"
  },
  {
    icon: "",
    menuText: "Products",
    link: "#product"
  },
  {
    icon: "",
    menuText: "Services",
    link: "#service"
  },
  {
    icon: "",
    menuText: "Contact Us",
    link: "#contact"
  },
]
export default function Home() {

  const products = [
    {
      productName: "Automobile spare parts",
      link: "/autoMobile",
      bg: "automobile.jpg"
    },
    {
      productName: "Building Materials",
      link: "/building",
      bg: "building.jpg"
    },
    {
      productName: "Food Products ",
      link: "/food",
      bg: "food.jpg"
    },
    {
      productName: "Marine products",
      link: "/marine",
      bg: "marine.jpg"
    },
    {
      productName: "Hospitality Items",
      link: "/hospitality",
      bg: "hospitality.jpg"
    },
  ]
  const services = [
    {
      image: "/flight1.jpg",
      service: "Flight",
      icon: <FaPlaneDeparture />,
      description: "Swift and efficient shipment via air transportation, ensuring quick delivery of goods to destinations worldwide with speed and reliability."
    },
    {
      image: "/roadtransport.jpg",
      service: "ROAD TRANSPORT",
      icon: <FaTruck />,
      description: "Reliable and efficient shipment via road transportation, offering seamless delivery of goods to local and regional destinations with flexibility and timeliness."
    },
    {
      image: "ship.jpg",
      service: "Shipping",
      icon: <FaShip />,
      description: "Cost-effective and reliable shipment via sea transport, providing efficient delivery of goods to global destinations with a focus on affordability and bulk cargo handling."
    },
    {
      image: "warehouse.jpg",
      service: "WAREHOUSE",
      icon: <FaWarehouse />,
      description: "Strategically located warehouse in Jebel Ali, offering secure storage and distribution solutions, seamlessly connecting businesses to regional and global markets."
    },
  ]
  return <>
    <section className="homeBg" id="top">
      <div className="menuContainer">
        <div className="menuBar">
          {menuInfo.map((menu, key) => {
            return <SingleMenuItem key={key} icon={menu.icon} link={menu.link} menuText={menu.menuText} />
          })}
        </div>
       <SocialMediaMenu/>
      </div>
      {/* menu end */}
      <div className="bannerOverlay">
        <div className="welcome"><FaShippingFast /> Welcome to Insource Global</div>
        <div className="tagline">We make the
          <span>World Smaller </span> </div>
        <div className="companyDescription"><q>Powering Global Trade. We connect businesses worldwide, offering streamlined import and export solutions. Trust us to simplify complexities and drive success in the international marketplace.</q>
        </div>
        <div className="bannerButtonSection">
          <a href="#aboutUS" className="btnLearnMore">   <div className="">Learn More</div></a>
          <a href="#service" className="btnServices">   <div className="">Our Services</div></a>
          {/* <a href="#service">   <div className="btnServices">Our Services</div></a> */}
        </div>
        <div className="bannerGoals">
          <div className="service">
            <div className="client">
              <div className="clientCount">1200+</div>
              <div className="clientsDescription">Client Satisfaction
              </div>
            </div>
            <div className="shipping">
              <div className="shippingCount">250000+</div>
              <div className="clientsDescription">Completed Deliveries
              </div>
            </div>

          </div>
          <div className="countries">
            <div className="country">
              <div className="flag">
                <Image src="/flag.png" alt="india" width="40" height="40" />
              </div>
              <div className="countryName">India</div>
            </div>
            <div className="country">
              <div className="flag">
                <Image src="/seychelles.png" alt="india" width="40" height="40" />
              </div>
              <div className="countryName">Seychells</div>
            </div>
            <div className="country">
              <div className="flag">
                <Image src="/maldives.png" alt="india" width="40" height="40" />
              </div>
              <div className="countryName">Maldives</div>
            </div>
          </div>
        </div>
      </div>

    </section>
    <section className="aboutUsContainer" id="aboutUS">
      <div className="aboutUsImage">
        <div className="flightImage"></div>
      </div>
      <div className="aboutUsTextContainer">
        <div className="aboutUsText"><FaPlaneDeparture color="#e10800" /> About &nbsp;<span> Us</span></div>
        <div className="aboutUsHead">Bridging Borders, Empowering Business</div>
        <div className="aboutUsDescription">"Our import and export company specializes in facilitating seamless trade between India, Seychelles, and Maldives. With a strong focus on customer satisfaction, we provide comprehensive logistics solutions tailored to meet the unique requirements of each country. Our team of experts ensures efficient and secure transportation of goods, managing all aspects of the import/export process. From customs clearance to warehousing and distribution, we offer end-to-end services to streamline international trade. Leveraging our extensive network and industry knowledge, we strive to deliver exceptional value to our clients by ensuring timely delivery, competitive pricing, and hassle-free transactions."</div>

        <div className="features">
          <div className="col1">
            <div className="feature"><FaRegCheckCircle className="red" />Fast delivary</div>
            <div className="feature"><FaRegCheckCircle className="red" />Wholesale</div>
            <div className="feature"><FaRegCheckCircle className="red" />Reatail</div>
            <div className="feature"><FaRegCheckCircle className="red" />Affordable Pricing</div>
          </div>
          <div className="col1">
            <div className="feature"><FaRegCheckCircle className="red" />International business</div>
            <div className="feature"><FaRegCheckCircle className="red" />Secure and Safe</div>
            <div className="feature"><FaRegCheckCircle className="red" />Customer Support</div>
          </div>
        </div>
      </div>
    </section>
    <section className="productContainer" id="product">
      <div className="sectionHead">
        <FaBoxes color="#e10800" /> Our &nbsp;<span>Products</span>
      </div>
      <div className="sectionMainHead">Complete Import and Export Solutions</div>
      <div className="productDescription">Experience a world of possibilities with our import and exporting company. We offer a diverse range of products to meet your needs. From top-notch automobile spare parts and reliable building materials to delicious food stuff and fresh marine products, we have it all. Enhance your hospitality offerings with our exceptional items, ideal for hotels and resorts. Our comprehensive solutions ensure smooth logistics management, cost-effectiveness, and compliance with international trade regulations. With our expertise and dedication to customer satisfaction, we empower your business to thrive in the global market. Partner with us for efficient and reliable import and export services that open doors to success.
      </div>
      <div className="productList">
        {products.map((product: SingleProductType, index) => {
          return <SingleProduct productName={product.productName} link={product.link} bg={product.bg} key={index} />
        })}
      </div>
    </section>
    <section className="contactUsBanner">
      <div className="sectionMainHead">Get in Touch</div>
      <div className="contactUsDetails">Contact us today to explore global import and export opportunities in India, Seychelles, and Maldives. Our expert team is ready to assist you with comprehensive solutions for your business needs. Whether you require automobile spare parts, building materials, food stuff, or marine products, we have the expertise to streamline your supply chain and ensure seamless logistics management. We value open communication and are committed to providing personalized assistance. Reach out to us through our website to start a conversation and unlock the vast potential of international trade in these countries.</div>
    <a href="#contact" className="contactUsBtn">  <div >Contact Us</div></a>
    </section>

    <section className="ourServicesContainer" id="service">
      <div className="sectionHead">
        <FaHandshake color="#e10800" />Our&nbsp;<span>Services</span>
      </div>
      <div className="serviceDetails">
        <div className="serviceTextSection">
          <div className="sectionMainHead">We provide the best logistics service for you.
          </div>
          <div className="subHead"><FaShippingFast className="subHeadIcon" />Logistics </div>
          <div className="importExportServices">Welcome to our import and export services, where we connect businesses to a world of opportunities. With our expertise in global trade, we streamline the import and export process, ensuring a smooth and efficient experience for our clients. Whether you're looking to expand your product range through imports or reach new markets through exports, we have you covered. Our dedicated team handles all aspects, from sourcing high-quality products to managing customs procedures and logistics. With a strong network and deep industry knowledge, we navigate complexities, negotiate competitive rates, and ensure compliance with regulations. Trust us to be your reliable partner in international trade, delivering exceptional import and export services tailored to your specific needs.
            <div className="features">
              <div className="col1">
                <div className="feature"><FaRegCheckCircle className="red" />Efficient Supply Chain Management</div>
                <div className="feature"><FaRegCheckCircle className="red" />Customized Solutions</div>
                <div className="feature"><FaRegCheckCircle className="red" />Global Reach</div>
                <div className="feature"><FaRegCheckCircle className="red" />Real-Time Tracking</div>
                <div className="feature"><FaRegCheckCircle className="red" />Industry Expertise</div>

              </div>
              <div className="col1">
                <div className="feature"><FaRegCheckCircle className="red" />Cost Optimization</div>
                <div className="feature"><FaRegCheckCircle className="red" />Risk Management</div>
                <div className="feature"><FaRegCheckCircle className="red" />Responsive Customer Support</div>
                <div className="feature"><FaRegCheckCircle className="red" />Sustainability</div>
                <div className="feature"><FaRegCheckCircle className="red" />Continuous Improvement</div>
              </div>
            </div>
            <section className="procurementSection">
              <div className="subHead"><FaStoreAlt className="subHeadIcon" />procurement </div>
              Our procurement services offer strategic sourcing, cost reduction, supplier management, and risk mitigation. We streamline your procurement process, secure favorable contracts, and provide transparent reporting. With expertise in market intelligence and continuous improvement, we deliver value and optimize your procurement operations.
              <div className="features">
                <div className="col1">
                  <div className="feature"><FaRegCheckCircle className="red" />Strategic Sourcing</div>
                  <div className="feature"><FaRegCheckCircle className="red" />Supplier Management</div>
                  <div className="feature"><FaRegCheckCircle className="red" />Cost Reduction</div>
                  <div className="feature"><FaRegCheckCircle className="red" />Streamlined Procurement Process</div>
                  <div className="feature"><FaRegCheckCircle className="red" />Market Intelligence</div>

                </div>
                <div className="col1">
                  <div className="feature"><FaRegCheckCircle className="red" />Risk Mitigation</div>
                  <div className="feature"><FaRegCheckCircle className="red" />Supplier Diversity</div>
                  <div className="feature"><FaRegCheckCircle className="red" />Contract Negotiation</div>
                  <div className="feature"><FaRegCheckCircle className="red" />Transparency and Reporting</div>
                  <div className="feature"><FaRegCheckCircle className="red" />Continuous Improvement</div>
                </div>
              </div>

            </section>

          </div>
        </div>
        <div className="serviceImageSection">
          <div className="flightImage flightImageLeft"></div>
        </div>
      </div>
    </section>
    <section className="topServices">
      {services.map((service: SingleServiceType,key) => {
        return <SingleService key={key} icon={service.icon} service={service.service} image={service.image} description={service.description} />
        // return <SingleService image, service, icon, description />
      })}
    </section>
    <section className="contactUs" id="contact">
      <div className="contactUsLeft">
        <div className="map">
       
        </div>
        <div className="sectionHead">
          <FaHandshake color="#e10800" /> Contact&nbsp;<span>Us</span>
        </div>
        <div className="sectionMainHead gap">Get In Touch</div>
    
      <div className="address">
       <div className="conatctUsSubHead">Address</div> 
        <div className="contactUsValues">
          <div>{process.env.REACT_APP_ADDRESS}</div>

        </div>
      </div>
      <hr className="line"></hr>
      <div className="callUs">
       <div className="conatctUsSubHead">Call US</div> 
        <div className="contactUsValues">
        <div>{process.env.REACT_APP_MOBILE}</div>
        </div>
      </div>
      <hr className="line"></hr>
      <div className="mail">
       <div className="conatctUsSubHead">Email</div> 
        <div className="contactUsValues">
        <div>{process.env.REACT_APP_EMAIL}</div>
        </div>
      </div>
      <hr className="line"></hr>
      <div className="followUs">
       <div className="conatctUsSubHead followUsHead">FOLLOW US</div> 
        <div className="contactUsValues">
          <div><SocialMediaMenu/></div>
        </div>
      </div>

      
      </div>
      <div className="contactUsRight">
      <iframe src={process.env.REACT_APP_MAP} width="100%" height="100%" style={{border:'0'}} allowFullScreen={false} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </section>
    {/* <a className="scrollToTop"  href="#top" onClick={()=>{window.scrollTo(0, 0);}}>
      <FaArrowCircleUp /> 
    </a> */}
    {/* <Footer /> */}
  </>;
}

