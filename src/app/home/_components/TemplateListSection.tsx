import Templates from '@/app/(data)/Templates'
import React from 'react'
import TemplateCard from './TemplateCard'

export interface Template{
    name:string,
    desc:string,
    icon:string,
    category:string,
    slug:string,
    aiPrompt:string,
    form?:FORM[]
}

export interface FORM{
    label:string,
    field:string,
    name:string,
    required?:boolean

}

function TemplateListSection () {
  return (
    <div>
      {Templates.map((item:Template, index:number)=>(
        <TemplateCard name={''} desc={''} icon={''} category={''} slug={''} aiPrompt={''}/>

      ))}
    </div>
  )
}

export default TemplateListSection
