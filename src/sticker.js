const tagName = 'sro-sticker';
const template = document.createElement('template');

template.innerHTML = `
  <style>
    .sticker ::slotted(svg), .sticker ::slotted(img) {
      width: 100%;
      filter: drop-shadow(3px 0px 0px rgba(255, 255, 255, 1))
              drop-shadow(0px 3px 0px rgba(255, 255, 255, 1))
              drop-shadow(0px -3px 0px rgba(255, 255, 255, 1))
              drop-shadow(-3px 0px 0px rgba(255, 255, 255, 1))
              drop-shadow(1px 1px 2px rgba(0, 0, 0, .3))
              drop-shadow(-1px -1px 2px rgba(0, 0, 0, .3));
    }
  </style>
  <div class="sticker">
    <slot></slot>
  </div>
`;

window.ShadyCSS && window.ShadyCSS.prepareTemplate(template, tagName);

class Sticker extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    if (!this.shadowRoot) {
      window.ShadyCSS && window.ShadyCSS.styleElement(this);
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
  }
}

const register = () => customElements.define(tagName, Sticker);
window.WebComponents ? window.WebComponents.waitFor(register) : register();
