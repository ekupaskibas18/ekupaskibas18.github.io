import React from 'react';
import CodeBlock from '@theme/CodeBlock';
import FeatureBlock from '@site/src/components/FeatureBlock';

export default function Overview() {
  return (
    <FeatureBlock>
      <FeatureBlock.Body>
        <div className="flex justify-end">
          <div className="btn-group">
            <button type="button" className="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
              Right-aligned menu button <i className="fas fa-caret-down ml-2"></i>
            </button>
            <div className="dropdown-menu dropdown-menu-end">
              <div className="w-80">test</div>
              <h6 className="text-gray-600 py-2 px-4 text-sm whitespace-nowrap">Dropdown header</h6>
              <a className="dropdown-item" href="#">Action</a>
              <a className="dropdown-item" href="#">Another action</a>
              <hr className="my-2" />
              <a className="dropdown-item" href="#">Separated link</a>
            </div>
          </div>
        </div>
      </FeatureBlock.Body>
      <FeatureBlock.Subsection>
        <table className="table table-sm table-borderless">
          <tbody>
            <tr>
              <th className="whitespace-nowrap" scope="row">
                <div><s>.dropdown-menu-right</s></div>
              </th>
              <th className="text-gray" scope="row">=</th>
              <td className="w-full">
                <code className="text-pink">right-0 left-auto</code>
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
{`<div class="dropdown btn-group">
  <button type="button" class="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
    Right-aligned menu button <i class="fas fa-caret-down ml-2"></i>
  </button>
  <div class="dropdown-menu right-0 left-auto">
    ...
  </div>
</div>
`}
        </CodeBlock>
      </FeatureBlock.Footer>
    </FeatureBlock>
  );
}
