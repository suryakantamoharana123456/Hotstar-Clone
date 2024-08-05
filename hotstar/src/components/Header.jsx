import React, { useState } from 'react'
import logo from '../assets/hotstar.webp';
import { HiHome, 
         HiMagnifyingGlass, 
         HiStar,
         HiPlayCircle,
         HiTv } from "react-icons/hi2";
import { HiPlus, HiDotsVertical } from "react-icons/hi";         
import HeaderItem from './HeaderItem';



function Header() {
    const [toggle, setToggle] = useState(false)
    const menu=[
        {
            name:'Home',
            icon: HiHome
        },{
            name:'Search',
            icon: HiMagnifyingGlass
        },{
            name:'WatchList',
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
    <div className='flex items-center justify-between p-6 '>
        <div className='flex gap-14 items-center'>
            <img src={logo} className='w-[60px]  md:w-[70px] object-cover'/>
            <div className='hidden md:flex gap-8'>
                {menu.map((item)=>(
                    <HeaderItem name={item.name} Icon={item.icon}/>
                ))}
            </div>
            <div className='flex md:hidden gap-5'>
                {menu.map((item,index)=>index<3 && (
                    <HeaderItem name={''} Icon={item.icon}/>
                ))}
            </div>
            <div className='md:hidden' onClick={()=>setToggle(!toggle)}>
                    <HeaderItem name={''} Icon={HiDotsVertical}/>
                    {toggle? <div className='absolute mt-3 bg-black border-[1px] border-gray-700 p-3 px-5 py-4'>
                        {menu.map((item,index)=>index>2 &&(
                            <HeaderItem name={item.name} Icon={item.icon}/>
                        )) }
                    </div>:null}
            </div>
        </div>
        <img src='https://static.vecteezy.com/system/resources/thumbnails/006/487/917/small_2x/man-avatar-icon-free-vector.jpg'
        className='w-[40px] h-[40px] rounded-full object-cover'/>
    </div>
  )
}

export default Header