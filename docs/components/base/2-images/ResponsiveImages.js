import CodeBlock from '@theme/CodeBlock';
import FeatureBlock from '@site/src/components/FeatureBlock';

export default function ResponsiveImages() {
  return (
    <FeatureBlock>
      <FeatureBlock.Body>
        <img
          src="https://picsum.photos/640/480"
          className="max-w-full h-auto"
          alt="..."
        />
      </FeatureBlock.Body>
      <FeatureBlock.Subsection>
        <table className="table table-sm table-borderless mb-0">
          <tbody>
            <tr>
              <th className="whitespace-nowrap" scope="row">.img-fluid</th>
              <th className="text-gray" scope="row">=</th>
              <td className="w-full"><code className="text-pink">max-w-full h-auto</code></td>
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
{`<img src="..." class="max-w-full h-auto" alt="..." />
`}
        </CodeBlock>
      </FeatureBlock.Footer>
    </FeatureBlock>
  );
}
