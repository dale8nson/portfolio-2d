import type { CustomFlowbiteTheme } from "flowbite-react"

export const mainTheme: CustomFlowbiteTheme = {
  "navbar": {
    "link": {
      "active": {
        "on": "md:text-[#ee0000]"
      }
    }
  },
  "footer": {
    "brand": {
      "span": "text-[#ee0000] text-2xl"
    }
  }
}

export const abletonTheme: CustomFlowbiteTheme = {

  "navbar": {
    "root": {
      "base": "font-['futura'] font-normal flex w-full text-4xl bg-white justify-start pt-4 m-2",
      "inner": {
        "base": "flex justify-between align-center text-4xl spacing-2"
      },
    },
    "brand": {
      "base": "mx-4 h-6"
    },
    "link": {
      "base": "text-xl text-[#ff764d] font-bold hover:text-[#fd5948]",
      "active": {
        "on": "text-[#fd5948]",
        "off": "text-black hover:text-[#fd5948]"
      }
    }
  },
  "footer": {
    root: {
      base: '[&_a]:font-[futura] [&_a]:text-black'
    },
    "groupLink": {
      "link": {
        "href":"",
        base:"font-normal"
        
      }
    },
    "title": {
      base: "!normal-case"
    }
  }
}
