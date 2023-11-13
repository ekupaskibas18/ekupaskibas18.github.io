import React, { useEffect } from 'react';
import CodeBlock from '@theme/CodeBlock';
import FeatureBlock from '@site/src/components/FeatureBlock';

export default function Overview() {
  useEffect(() => {
    // var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    // var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    //   return new bootstrap.Tooltip(tooltipTriggerEl)
    // })

    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));

    return () => {
      // Do proper cleanup on unmount
      tooltipList.forEach(element => {
        element.dispose();
      });
    };
  }, []);

  return (
    <FeatureBlock>
      <FeatureBlock.Body>
        <button type="button" className="btn mr-2" data-bs-toggle="tooltip" data-bs-placement="top" title="Tooltip on top">
          Tooltip on top
        </button>
        <button type="button" className="btn mr-2"  data-bs-toggle="tooltip" data-bs-placement="right" title="Tooltip on right">
          Tooltip on right
        </button>
        <button type="button" className="btn mr-2" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Tooltip on bottom">
          Tooltip on bottom
        </button>
        <button type="button" className="btn mr-2" data-bs-toggle="tooltip" data-bs-placement="left" title="Tooltip on left">
          Tooltip on left
        </button>
        <button type="button" className="btn mr-2" data-bs-toggle="tooltip" data-bs-html="true" title="<em>Tooltip</em> <u>with</u> <b>HTML</b>">
          Tooltip with HTML
        </button>
      </FeatureBlock.Body>
      <FeatureBlock.Subsection>
        <table className="table table-sm table-borderless">
          <tbody>
            <tr>
              <th className="whitespace-nowrap" scope="row">.tooltip</th>
              <th className="text-gray" scope="row">=</th>
              <td className="w-full">
                <code className="text-pink">absolute z-1070 block m-0 break-words opacity-0 text-sm</code>
              </td>
            </tr>
            <tr>
              <th className="whitespace-nowrap" scope="row">.tooltip.show</th>
              <th className="text-gray" scope="row">=</th>
              <td className="w-full">
                <code className="text-pink">opacity-90</code>
              </td>
            </tr>
            <tr>
              <th className="whitespace-nowrap" scope="row">.tooltip-inner</th>
              <th className="text-gray" scope="row">=</th>
              <td className="w-full">
                <code className="text-pink">text-center bg-black text-white rounded max-w-sm py-1 px-2</code>
              </td>
            </tr>
          </tbody>
        </table>
      </FeatureBlock.Subsection>
      <FeatureBlock.Footer>
        <CodeBlock
          className="!mb-0"
          language="markup"
          title=""
          showLineNumbers
        >
{`<button type="button" class="btn mr-2" data-bs-toggle="tooltip" data-bs-placement="top" title="Tooltip on top">
  Tooltip on top
</button>

<button type="button" class="btn mr-2"  data-bs-toggle="tooltip" data-bs-placement="right" title="Tooltip on right">
  Tooltip on right
</button>

<button type="button" class="btn mr-2" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Tooltip on bottom">
  Tooltip on bottom
</button>

<button type="button" class="btn mr-2" data-bs-toggle="tooltip" data-bs-placement="left" title="Tooltip on left">
  Tooltip on left
</button>

<button type="button" class="btn mr-2" data-bs-toggle="tooltip" data-bs-html="true" title="<em>Tooltip</em> <u>with</u> <b>HTML</b>">
  Tooltip with HTML
</button>
`}
        </CodeBlock>
      </FeatureBlock.Footer>
    </FeatureBlock>
  );
}
