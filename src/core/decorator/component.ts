interface ComponentInterface {
    style?: string;
    render: () => string;
}

export default function Component(name: string) {
  return (Target: new (...args: unknown[]) => ComponentInterface) => {
    const component = new Target();

    if (!component.render) {
      throw new Error('The class declared "@component" must have a render function defined.');
    }

    class CustomComponent extends HTMLElement {
      constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });
        shadow.innerHTML = `
          <style>
            ${component?.style}
          </style>
          ${component.render()}
        `;
      }
    }

    customElements.define(name, CustomComponent);
  };
}
