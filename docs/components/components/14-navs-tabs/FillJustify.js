import React from 'react';
import CodeBlock from '@theme/CodeBlock';
import FeatureBlock from '@site/src/components/FeatureBlock';

export default function Overview() {
  return (
    <FeatureBlock>
      <FeatureBlock.Body>
        <ul className="nav nav-pills">
          <li className="nav-item flex-auto text-center">
            <a className="nav-link active" aria-current="page" href="#">Active</a>
          </li>
          <li className="nav-item dropdown flex-auto text-center">
            <a className="nav-link w-full dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Dropdown</a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">Action</a></li>
              <li><a className="dropdown-item" href="#">Another action</a></li>
              <li><a className="dropdown-item" href="#">Something else here</a></li>
              <li><hr className="my-2" /></li>
              <li><a className="dropdown-item" href="#">Separated link</a></li>
            </ul>
          </li>
          <li className="nav-item flex-auto text-center">
            <a className="nav-link" href="#">Link</a>
          </li>
          <li className="nav-item flex-auto text-center">
            <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">Disabled</a>
          </li>
        </ul>
      </FeatureBlock.Body>
      <FeatureBlock.Subsection>
        <table className="table table-sm table-borderless">
          <tbody>
            <tr>
              <th className="whitespace-nowrap" scope="row">
                <div><s>.nav-fill .nav-item</s></div>
              </th>
              <th className="text-gray" scope="row">=</th>
              <td className="w-full">
                <code className="text-pink">flex-auto text-center</code>
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
{`
`}
        </CodeBlock>
      </FeatureBlock.Footer>
    </FeatureBlock>
  );
}
