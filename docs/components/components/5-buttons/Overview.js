import React from 'react';
import CodeBlock from '@theme/CodeBlock';
import FeatureBlock from '@site/src/components/FeatureBlock';

export default function Overview() {
  return (
    <FeatureBlock>
      <FeatureBlock.Body>
        <button className="btn mr-3" type="button" >Default</button>
        <a className="btn mr-3" href="#" role="button">Link</a>
        <button className="btn mr-3" type="submit">Submit Button</button>
        <input className="btn mr-3" type="button" value="Input" />
        <input className="btn mr-3" type="submit" value="Submit" />
        <input className="btn mr-3" type="reset" value="Reset" />
      </FeatureBlock.Body>
      <FeatureBlock.Subsection>
        <table className="table table-sm table-borderless">
          <tbody>
            <tr>
              <th className="whitespace-nowrap" scope="row">.btn</th>
              <th className="text-gray" scope="row">=</th>
              <td className="w-full">
                <code className="text-pink">inline-block text-center py-2 px-4 rounded leading-normal align-middle select-none bg-gray-50 border border-transparent text-gray-800 focus:outline-none focus:ring focus:ring-opacity-50</code>
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
{`<button class="btn mr-3" type="button" >Default</button>
<a class="btn mr-3" href="#" role="button">Link</a>
<button class="btn mr-3" type="submit">Submit Button</button>
<input class="btn mr-3" type="button" value="Input" />
<input class="btn mr-3" type="submit" value="Submit" />
<input class="btn mr-3" type="reset" value="Reset" />
`}
        </CodeBlock>
      </FeatureBlock.Footer>
    </FeatureBlock>
  );
}
