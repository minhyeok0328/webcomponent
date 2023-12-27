// connectedCallback(): 요소가 문서에 추가될 때마다 호출됩니다. 사양에서는 개발자가 가능한 한 생성자보다는 이 콜백에서 맞춤 요소 설정을 구현해야 한다고 권장합니다.
// disconnectedCallback(): 요소가 문서에서 제거될 때마다 호출됩니다.
// adoptedCallback(): 요소가 새 문서로 이동할 때마다 호출됩니다.
// attributeChangedCallback(): 속성이 변경, 추가, 제거 또는 교체될 때 호출됩니다.

import { ComponentType } from '../type';
import { webComponent } from '../dom';

const Component = (componentName: string) => (Target: new (...args: unknown[]) => ComponentType) => {
  webComponent({ componentName, Component: Target });
};

export default Component;
