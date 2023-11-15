import CodeBlock from '@theme/CodeBlock';
import FeatureBlock from '@site/src/components/FeatureBlock';

export default function Blockquotes() {
  return (
    <FeatureBlock>
      <FeatureBlock.Body>
        <blockquote className="text-xl">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
        </blockquote>
      </FeatureBlock.Body>
      <FeatureBlock.Body>
        <figure>
          <blockquote className="text-xl">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
          </blockquote>
          <figcaption className="text-sm text-gray-500">
            Someone famous in <cite title="Source Title">Source Title</cite>
          </figcaption>
        </figure>
      </FeatureBlock.Body>
      <FeatureBlock.Body>
        <figure className="text-right">
          <blockquote className="text-xl">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
          </blockquote>
          <figcaption className="text-sm text-gray-500">
            Someone famous in <cite title="Source Title">Source Title</cite>
          </figcaption>
        </figure>
      </FeatureBlock.Body>
      <FeatureBlock.Footer>
        <CodeBlock
          className="!mb-0"
          language="markup"
          title=""
          showLineNumbers
        >
{`<blockquote className="text-xl">
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
</blockquote>
<figure>
  <blockquote className="text-xl">
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
  </blockquote>
  <figcaption className="text-sm text-gray-500">
    Someone famous in <cite title="Source Title">Source Title</cite>
  </figcaption>
</figure>
`}
        </CodeBlock>
      </FeatureBlock.Footer>
    </FeatureBlock>
  );
}
