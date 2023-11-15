import CodeBlock from '@theme/CodeBlock';
import FeatureBlock from '@site/src/components/FeatureBlock';

export default function VariationsLink() {
  return (
    <FeatureBlock>
      <FeatureBlock.Body>
        <button
          type="button"
          className="btn border-transparent bg-transparent underline text-blue hover:text-blue-700 focus:text-blue-700 mr-3"
        >
          Link button
        </button>
      </FeatureBlock.Body>
      <FeatureBlock.Footer>
        <CodeBlock
          className="!mb-0"
          language="markup"
          title=""
          showLineNumbers
        >
{`<button type="button" class="btn border-transparent bg-transparent underline text-blue hover:text-blue-700 focus:text-blue-700">Link button</button>
`}
        </CodeBlock>
      </FeatureBlock.Footer>
    </FeatureBlock>
  );
}
