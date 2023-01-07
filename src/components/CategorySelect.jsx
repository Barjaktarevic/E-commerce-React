import React from 'react'
import { RxDoubleArrowLeft } from 'react-icons/rx';

export default function CategorySelect({children, onClick, classes, arrowClasses}) {
  return (
    <div className={'relative group hover:cursor-pointer text-center rounded-md ' + classes}>
        <RxDoubleArrowLeft className={'absolute -left-8 top-1  group-hover:rotate-180 transition duration-200 ' + arrowClasses }/>
        <p onClick={onClick}>{children}</p>
    </div>
  )
}
