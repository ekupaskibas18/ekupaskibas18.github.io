import React from 'react';
import CodeBlock from '@theme/CodeBlock';
import FeatureBlock from '@site/src/components/FeatureBlock';

export default function Overview() {
  return (
    <FeatureBlock>
      <FeatureBlock.Body>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Cras justo odio</li>
          <li className="list-group-item">Dapibus ac facilisis in</li>
          <li className="list-group-item">Morbi leo risus</li>
          <li className="list-group-item">Porta ac consectetur ac</li>
          <li className="list-group-item">Vestibulum at eros</li>
        </ul>
      </FeatureBlock.Body>
      <FeatureBlock.Body>
        <div className="list-group list-group-flush">
          <a href="#" className="list-group-item list-group-item-action active" aria-current="true">
            <div className="d-flex w-100 justify-content-between">
              <h5 className="mb-1">List group item heading</h5>
              <small>3 days ago</small>
            </div>
            <p className="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
            <small>Donec id elit non mi porta.</small>
          </a>
          <a href="#" className="list-group-item list-group-item-action">
            <div className="d-flex w-100 justify-content-between">
              <h5 className="mb-1">List group item heading</h5>
              <small className="text-muted">3 days ago</small>
            </div>
            <p className="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
            <small className="text-muted">Donec id elit non mi porta.</small>
          </a>
          <a href="#" className="list-group-item list-group-item-action">
            <div className="d-flex w-100 justify-content-between">
              <h5 className="mb-1">List group item heading</h5>
              <small className="text-muted">3 days ago</small>
            </div>
            <p className="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
            <small className="text-muted">Donec id elit non mi porta.</small>
          </a>
        </div>
      </FeatureBlock.Body>
      <FeatureBlock.Subsection>
        <table className="table table-sm table-borderless">
          <tbody>
            <tr>
              <th className="whitespace-nowrap" scope="row">.list-group</th>
              <th className="text-gray" scope="row">=</th>
              <td className="w-full">
                <code className="text-pink">flex flex-col pl-0 rounded</code>
              </td>
            </tr>
            <tr>
              <th className="whitespace-nowrap" scope="row">.list-group-item</th>
              <th className="text-gray" scope="row">=</th>
              <td className="w-full">
                <code className="text-pink">relative block py-2 px-4 no-underline bg-white border border-black border-opacity-10</code>
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
