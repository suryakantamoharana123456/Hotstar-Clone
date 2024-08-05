import React from 'react'
import logo from '../assets/icons8-hotstar-512.png';
import { HiHome, 
         HiMagnifyingGlass, 
         HiStar,
         HiPlayCircle,
         HiTv } from "react-icons/hi2";
import { HiPlus, HiDotsVertical } from "react-icons/hi";         
import HeaderItem from './HeaderItem';



function Header() {
    const menu=[
        {
            name:'Home',
            icon: HiHome
        },{
            name:'Search',
            icon: HiMagnifyingGlass
        },{
            name:'Watch List',
            icon: HiPlus
        },{
            name:'Originals',
            icon: HiStar
        },{
            name:'Movies',
            icon:HiPlayCircle
        },{
            name:'TV Shows',
            icon:HiTv
        }
    ]
  return (    
    <div className='flex items-center justify-between p-5 '>
        <div className='flex gap-8 items-center'>
            <img src={logo} className='w-[70px] p-[10px] md:w-[115px] object-cover'/>
            {menu.map((item)=>(
                <HeaderItem name={item.name} Icon={item.icon}/>
            ))}
        </div>
        <div>
            <img src='https://static.vecteezy.com/system/resources/thumbnails/006/487/917/small_2x/man-avatar-icon-free-vector.jpg'
            className='w-[40px] h-[40px] rounded-full object-cover'/>
        </div>
    </div>
  )
}

export default Header