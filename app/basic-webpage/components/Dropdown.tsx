"use client"
import { ReactElement, useEffect, useState } from "react"
interface DropdownOption {
  value?: number
  text?: string
}

interface DropdownOptions {
  label?: string
  options: DropdownOption[]
}


export const Dropdown = ({ name, options }: { name?: string, options: DropdownOptions[] }) => {

  const [list, setList] = useState<ReactElement[]>()

  useEffect(() => {
    setList(options.map((option, index) => {
      if (option.label)
        return (
          <optgroup id={option.label?.replace(/[\s]/, "-").toLowerCase() || String(index)} label={option.label}>
            {option.options.map((opt, ind) => {
              return (
                <option id={String(opt.value) || String(ind)} value={opt.value}>
                  {opt.text}
                </option>
              )
            })}
          </optgroup>
        )
      else return (
        <>
          {options.map((option, index) => {
            return (
              <>
                {option.options.map((opt, ind) => {
                  return (
                    <option id={String(opt.value) || String(ind)} value={opt.value}>
                      {opt.text}
                    </option>
                  )
                })}
              </>
            )
          })}
        </>
      )
    }))
  }, [])

  return (
    <div>
      {name && <label>{name}</label>}
      <select className="bg-[#eeeeee] text-xs font-futura font-medium focus:ring-0 border-none">
        {list && list}
      </select>
    </div>
  )
}