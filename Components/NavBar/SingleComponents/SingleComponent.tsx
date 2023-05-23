import Link from "next/link"
import { FaPlaneDeparture } from "react-icons/fa"

export type SingleProductType = {
    productName: string
    link: string
    bg: string
}
export type SingleServiceType = {
    image?:string,
    service:string,
    icon?:any,
    description:string
}

export const SingleProduct = ({ productName, bg, link }: SingleProductType) => {
    return (
        <div className="product" style={{ 'backgroundImage': `/${bg}` }}>
            <div className="productName" >
                {productName}
            </div>
            <div className="viewMoreBtn">View More</div>
        </div>
    )
}

export const SingleService = ({image="/flight.jpg", service,icon, description}:SingleServiceType) => {
  return (
   <div className="service">
    <div className="serviceImage" style={{'backgroundImage':`url(${image})`}}></div>
    <div className="serviceInfo">
    <div className="serviceIcon">{icon}</div>
    <div className="serviceName tu">{service}</div>
    <div className="serviceDescription">{description}</div>
    </div>
   </div>
  )
}
