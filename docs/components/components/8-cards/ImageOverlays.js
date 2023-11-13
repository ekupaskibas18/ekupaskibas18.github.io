import React from 'react';
import CodeBlock from '@theme/CodeBlock';
import FeatureBlock from '@site/src/components/FeatureBlock';

export default function Overview() {
  return (
    <FeatureBlock>
      <FeatureBlock.Body>
        <div className="card bg-dark text-white">
          <img
            src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="
            className="w-full rounded"
            style={{ height: '300px' }}
            alt="..."
          />
          <div className="absolute top-0 left-0 right-0 bottom-0 p-4 rounded">
            <h5 className="mb-2">Card title</h5>
            <p className="mb-2">
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </p>
          </div>
        </div>
      </FeatureBlock.Body>
      <FeatureBlock.Subsection>
        <table className="table table-sm table-borderless">
          <tbody>
            <tr>
              <th className="whitespace-nowrap" scope="row">
                <div><s>.card-img-overlay</s></div>
              </th>
              <th className="text-gray" scope="row">=</th>
              <td className="w-full">
                <code className="text-pink">absolute top-0 left-0 right-0 bottom-0 p-4 rounded</code>
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
