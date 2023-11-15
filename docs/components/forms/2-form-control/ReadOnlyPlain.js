import CodeBlock from '@theme/CodeBlock';
import FeatureBlock from '@site/src/components/FeatureBlock';

export default function Experimental() {
  return (
    <FeatureBlock>
      <FeatureBlock.Body>
        <div className="mb-3 flex flex-wrap">
          <label for="staticEmail" className="w-2/12">Email</label>
          <div className="flex-1">
            <input
              type="text"
              className="block w-full py-2 px-0 leading-tight bg-transparent border-transparent"
              id="staticEmail"
              value="email@example.com"
              readOnly
            />
          </div>
        </div>
        <div className="mb-3 flex flex-wrap">
          <label for="inputPassword" className="w-2/12">Password</label>
          <div className="flex-1">
            <input type="password" className="form-control" id="inputPassword" />
          </div>
        </div>
      </FeatureBlock.Body>
      <FeatureBlock.Subsection>
        <table className="table table-sm table-borderless">
          <tbody>
            <tr>
              <th className="whitespace-nowrap" scope="row"><s>.form-control-plaintext</s></th>
              <th className="text-gray" scope="row">=</th>
              <td className="w-full">
                <code className="text-pink">block w-full py-2 px-0 leading-tight bg-transparent border-transparent</code>
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
{`<input type="text" class="block w-full py-2 px-0 leading-tight bg-transparent border-transparent" value="email@example.com" readonly />
`}
        </CodeBlock>
      </FeatureBlock.Footer>
    </FeatureBlock>
  );
}
