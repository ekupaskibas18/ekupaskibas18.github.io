import CodeBlock from '@theme/CodeBlock';
import FeatureBlock from '@site/src/components/FeatureBlock';

export default function Experimental() {
  return (
    <FeatureBlock>
      <FeatureBlock.Body>
        <input
          className="form-control"
          type="text"
          placeholder="Readonly input here..."
          aria-label="readonly input example"
          readOnly
        />
      </FeatureBlock.Body>
      <FeatureBlock.Footer>
        <CodeBlock
          className="!mb-0"
          language="markup"
          title=""
          showLineNumbers
        >
{`<input type="text" class="form-control" placeholder="Readonly input here..." readonly />
`}
        </CodeBlock>
      </FeatureBlock.Footer>
    </FeatureBlock>
  );
}
