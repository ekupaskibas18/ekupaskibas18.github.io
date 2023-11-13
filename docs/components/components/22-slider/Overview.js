import React, { useEffect, useRef } from 'react';
import CodeBlock from '@theme/CodeBlock';
import FeatureBlock from '@site/src/components/FeatureBlock';
import noUiSlider from 'nouislider';

export default function Overview() {
  const sliderEl = useRef(null);

  useEffect(() => {
    // var slider = document.getElementById('slider');

    // eslint-disable-next-line no-undef, no-unused-vars
    noUiSlider.create(sliderEl.current, {
      start: [20, 80],
      connect: true,
      range: {
        'min': 0,
        'max': 100
      }
    });

    return () => {
      sliderEl.current.noUiSlider.destroy();
    }
  }, []);

  return (
    <FeatureBlock>
      <FeatureBlock.Body>
        <div id="slider" ref={sliderEl}></div>
      </FeatureBlock.Body>
      <FeatureBlock.Footer>
        <ul className="nav nav-outline">
          <li className="nav-item">
            <a className="nav-link border-blue active" data-bs-toggle="tab" href="#tabBasicHtml">HTML</a>
          </li>
          <li className="nav-item">
            <a className="nav-link border-blue" data-bs-toggle="tab" href="#tabBasicJs">JS</a>
          </li>
        </ul>

        <div className="tab-content" id="tabBasic">
          <div className="tab-pane fade show active" id="tabBasicHtml">
            <CodeBlock
              className="!mb-0"
              language="markup"
              title=""
              showLineNumbers
            >
{`<div id="slider"></div>
`}
            </CodeBlock>
          </div>
          <div className="tab-pane fade" id="tabBasicJs">
            <CodeBlock
              className="!mb-0"
              language="js"
              title=""
              showLineNumbers
            >
{`var slider = document.getElementById('slider');

noUiSlider.create(slider, {
  start: [20, 80],
  connect: true,
  range: {
    'min': 0,
    'max': 100
  }
});
`}
            </CodeBlock>
          </div>
        </div>

      </FeatureBlock.Footer>
    </FeatureBlock>
  );
}
