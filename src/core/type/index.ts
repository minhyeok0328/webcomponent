export type ComponentType = {
    style?: string;
    render: () => string;
    componentDidMount: () => void;
    componentWillUnmount: () => void;
    componentMovePage: () => void;
    componentDidUpdate: () => void;
} & HTMLElement;
