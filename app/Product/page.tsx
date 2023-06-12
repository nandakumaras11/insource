import React from 'react'
import { menuInfo } from '../page'
import { SingleMenuItem } from '@/Components/NavBar/NavBar'
import { SocialMediaMenu } from '@/Components/NavBar/SingleComponents/SingleComponent'

const Page = () => {
  return (
    <section className="homeBg" id="top">
    <div className="menuContainer">
      <div className="menuBar">
        {menuInfo.map((menu, key) => {
          return <SingleMenuItem key={key} icon={menu.icon} link={menu.link} menuText={menu.menuText} />
        })}
      </div>
     <SocialMediaMenu/>
    </div>

    </section>
  )
}

export default Page