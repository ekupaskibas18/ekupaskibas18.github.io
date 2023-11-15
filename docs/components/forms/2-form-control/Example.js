import CodeBlock from '@theme/CodeBlock';
import FeatureBlock from '@site/src/components/FeatureBlock';

export default function Example() {
  return (
    <FeatureBlock>
      <FeatureBlock.Body>
        <div className="mb-3">
          <label for="exampleFormControlInput1" className="inline-block mb-2">Email address</label>
          <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
        </div>
        <div className="mb-3">
          <label for="exampleFormControlTextarea1" className="inline-block mb-2">Example textarea</label>
          <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
      </FeatureBlock.Body>
      <FeatureBlock.Subsection>
        <table className="table table-sm table-borderless">
          <tbody>
            <tr>
              <th className="whitespace-nowrap" scope="row">.form-control</th>
              <th className="text-gray" scope="row">=</th>
              <td className="w-full"><code className="text-pink">block w-full py-2 px-3 leading-tight border rounded appearance-none focus:ring focus:ring-opacity-50 focus:outline-none</code></td>
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
{`<input type="text" class="form-control" id="..." placeholder="Placeholder text" />
<textarea class="form-control" id="..."> ... </textarea>
`}
        </CodeBlock>
      </FeatureBlock.Footer>
    </FeatureBlock>
  );
}
