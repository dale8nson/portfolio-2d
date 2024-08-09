'use client'
window.customElements.define('lay-out',
  class Layout extends HTMLElement {
    constructor() {
      super()
    }

    connectedCallback() {
      const shadow = this.attachShadow({ mode: 'open' })
      const wrapper = document.createElement('div')

      const wrapperStyle = document.createElement('style')
      wrapperStyle.innerHTML = `
      div {
        display: flex;
        flex-direction: column;
        min-width: 100vw;
        min-height: 100vh
      }
      `
      if(this.hasChildNodes()) {
        this.childNodes.forEach(node => wrapper.append(node))
      }

      shadow.appendChild(wrapper)

    }

  }
)


customElements.define('dh-page',
  class Page extends HTMLElement {
    constructor() {
      super()
    }

    connectedCallback() {
      const shadow = this.attachShadow({ mode: 'open' })

    }

  }
)

customElements.define('side-menu',
  class SideMenu extends HTMLElement {
    constructor() {
      super()
    }

    connectedCallback() {
      const shadow = this.attachShadow({ mode: 'open' })

    }
  }
)