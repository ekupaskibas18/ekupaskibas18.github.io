import CodeBlock from '@theme/CodeBlock';
import FeatureBlock from '@site/src/components/FeatureBlock';

export default function Headings() {
  return (
    <FeatureBlock>
      <FeatureBlock.Body>
        <h1 className="text-4xl font-medium leading-tight">h1. Tailwind heading</h1>
        <h2 className="text-3xl font-medium leading-tight">h2. Tailwind heading</h2>
        <h3 className="text-2xl font-medium leading-tight">h3. Tailwind heading</h3>
        <h4 className="text-xl font-medium leading-tight">h4. Tailwind heading</h4>
        <h5 className="text-lg font-medium leading-tight">h5. Tailwind heading</h5>
        <h6 className="text-base font-medium leading-tight">h6. Tailwind heading</h6>
      </FeatureBlock.Body>
      <FeatureBlock.Subsection>
        <table className="table table-sm table-borderless mb-0">
          <tbody>
            <tr>
              <th className="whitespace-nowrap" scope="row">.h1</th>
              <th className="text-gray" scope="row">=</th>
              <td className="w-full"><code className="text-pink">text-4xl font-medium</code></td>
            </tr>
            <tr>
              <th className="whitespace-nowrap" scope="row">.h2</th>
              <th className="text-gray" scope="row">=</th>
              <td className="w-full"><code className="text-pink">text-3xl font-medium</code></td>
            </tr>
            <tr>
              <th className="whitespace-nowrap" scope="row">.h3</th>
              <th className="text-gray" scope="row">=</th>
              <td className="w-full"><code className="text-pink">text-2xl font-medium</code></td>
            </tr>
            <tr>
              <th className="whitespace-nowrap" scope="row">.h4</th>
              <th className="text-gray" scope="row">=</th>
              <td className="w-full"><code className="text-pink">text-xl font-medium</code></td>
            </tr>
            <tr>
              <th className="whitespace-nowrap" scope="row">.h5</th>
              <th className="text-gray" scope="row">=</th>
              <td className="w-full"><code className="text-pink">text-lg font-medium</code></td>
            </tr>
            <tr>
              <th className="whitespace-nowrap" scope="row">.h6</th>
              <th className="text-gray" scope="row">=</th>
              <td className="w-full"><code className="text-pink">text-base font-medium</code></td>
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
{`<h1 className="text-4xl font-medium leading-tight">h1. Tailwind heading</h1>
<h2 className="text-3xl font-medium leading-tight">h2. Tailwind heading</h2>
<h3 className="text-2xl font-medium leading-tight">h3. Tailwind heading</h3>
<h4 className="text-xl font-medium leading-tight">h4. Tailwind heading</h4>
<h5 className="text-lg font-medium leading-tight">h5. Tailwind heading</h5>
<h6 className="text-base font-medium leading-tight">h6. Tailwind heading</h6>
`}
        </CodeBlock>
      </FeatureBlock.Footer>
    </FeatureBlock>
  );
}
