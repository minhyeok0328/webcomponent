export interface ComponentType extends HTMLElement {
    style?: string;
    render: () => string;
    componentDidMount: () => void;
    componentWillUnmount: () => void;
    componentMovePage: () => void;
    componentDidUpdate: () => void;
  }
