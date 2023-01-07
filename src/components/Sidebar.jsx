import React, { useState, useEffect } from 'react'

// components & styles
import { RxDoubleArrowLeft } from 'react-icons/rx';
import { MdDarkMode } from 'react-icons/md';
import CategorySelect from './CategorySelect';
import { NavLink } from 'react-router-dom';

const categories = ["Electronics", "Household appliances", "Babies", "Toiletries", "Games", "Curtains"]

export default function Sidebar({ toggleActiveCategory, activeCategory }) {

  const handleClick = (e) => {
    const category = e.target.innerHTML
    if (category === categories[0]) toggleActiveCategory(1) 
    if (category === categories[1]) toggleActiveCategory(2)
    if (category === categories[2]) toggleActiveCategory(3)
    if (category === categories[3]) toggleActiveCategory(4)
    if (category === categories[4]) toggleActiveCategory(5)
    if (category === categories[5]) toggleActiveCategory(6)
  }

  return (
    <div className='bg-slate-700 text-slate-200 md:w-80 h-screen border-r-4 border-emerald-200'>
        <div className='m-28 flex flex-col gap-8 text-2xl'>
            <CategorySelect children={"Electronics"} onClick={handleClick} classes={activeCategory === 1 ? " ml-12 bg-slate-600 w-full" : null} arrowClasses={activeCategory === 1 ? "rotate-180" : null}/>
            <CategorySelect children={"Household appliances"} onClick={handleClick} classes={activeCategory === 2 ? " ml-12 bg-slate-600 w-full" : null} arrowClasses={activeCategory === 2 ? "rotate-180" : null}/>
            <CategorySelect children={"Babies"} onClick={handleClick} classes={activeCategory === 3 ? " ml-12 bg-slate-600 w-full" : null} arrowClasses={activeCategory === 3 ? "rotate-180" : null}/>
            <CategorySelect children={"Toiletries"} onClick={handleClick} classes={activeCategory === 4 ? " ml-12 bg-slate-600 w-full" : null} arrowClasses={activeCategory === 4 ? "rotate-180" : null}/>
            <CategorySelect children={"Games"} onClick={handleClick} classes={activeCategory === 5 ? " ml-12 bg-slate-600 w-full" : null} arrowClasses={activeCategory === 5 ? "rotate-180" : null}/>
            <CategorySelect children={"Curtains"} onClick={handleClick} classes={activeCategory === 6 ? " ml-12 bg-slate-600 w-full" : null} arrowClasses={activeCategory === 6 ? "rotate-180" : null}/>
        </div>
    </div>
  )
}
