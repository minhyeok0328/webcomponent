import { ComponentType } from '../type';

interface Props {
  componentName: string;
  Component: new (...args: unknown[]) => ComponentType;
}

const webComponent = ({ componentName, Component }: Props) => {
  const component = new Component();

  class CustomComponent extends HTMLElement {
    constructor() {
      super();

      const shadow = this.attachShadow({ mode: 'open' });
      shadow.innerHTML = `
        <style>
          ${component?.style}
        </style>
        ${component?.render?.()}
      `;
    }

    get props() {
      return [...this.attributes].reduce((data: Record<string, string>, item: Attr) => {
        data[item.name] = item.value;
        return data;
      }, {});
    }

    connectedCallback() {
      component?.componentDidMount?.call(this);
    }

    disconnectedCallback() {
      component?.componentWillUnmount?.call(this);
    }

    adoptedCallback() {
      component?.componentMovePage?.call(this);
    }

    attributeChangedCallback() {
      component?.componentDidUpdate?.call(this);
    }
  }
  customElements.define(componentName, CustomComponent);
};

export default webComponent;
