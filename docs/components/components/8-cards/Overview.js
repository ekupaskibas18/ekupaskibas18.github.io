import React from 'react';
import CodeBlock from '@theme/CodeBlock';
import FeatureBlock from '@site/src/components/FeatureBlock';

export default function Overview() {
  return (
    <FeatureBlock>
      <FeatureBlock.Body>
        <div className="card max-w-sm">
          <img
            src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="
            className="w-full rounded-t"
            style={{ height: '250px' }}

            alt="..."
            />
          <div className="flex-auto p-4">
            <h5 className="mb-2">Card title</h5>
            <p className="mb-2">
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </p>
            <a href="#" className="btn">Go somewhere</a>
          </div>
        </div>
      </FeatureBlock.Body>
      <FeatureBlock.Subsection>
        <table className="table table-sm table-borderless">
          <tbody>
            <tr>
              <th className="whitespace-nowrap" scope="row">
                <div>.card</div>
              </th>
              <th className="text-gray" scope="row">=</th>
              <td className="w-full">
                <code className="text-pink">relative flex flex-col min-w-0 break-words bg-white border border-black border-opacity-10 rounded</code>
              </td>
            </tr>
            <tr>
              <th className="whitespace-nowrap" scope="row">
                <div>.card-body</div>
              </th>
              <th className="text-gray" scope="row">=</th>
              <td className="w-full">
                <code className="text-pink">flex-auto p-4</code>
              </td>
            </tr>
            <tr>
              <th className="whitespace-nowrap" scope="row">
                <div>.card-header</div>
              </th>
              <th className="text-gray" scope="row">=</th>
              <td className="w-full">
                <code className="text-pink">flex-auto px-4 py-2 border-b border-black border-opacity-05 bg-black bg-opacity-05</code>
              </td>
            </tr>
            <tr>
              <th className="whitespace-nowrap" scope="row">
                <div>.card-footer</div>
              </th>
              <th className="text-gray" scope="row">=</th>
              <td className="w-full">
                <code className="text-pink">p-4 border-t border-black border-opacity-05 bg-black bg-opacity-05</code>
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
{`<div class="card max-w-sm">
  <img
    src="..."
    class="w-full rounded-t"
    alt="..."
  />
  <div class="flex-auto p-4">
    <h5 class="mb-2">Card title</h5>
    <p class="mb-2">
      Some quick example text to build on the card title and make up the bulk of the card's content.
    </p>
    <a href="#" class="btn">Go somewhere</a>
  </div>
</div>
`}
        </CodeBlock>
      </FeatureBlock.Footer>
    </FeatureBlock>
  );
}
