import CodeBlock from '@theme/CodeBlock';
import FeatureBlock from '@site/src/components/FeatureBlock';

export default function DescriptionListAlignment() {
  return (
    <FeatureBlock>
      <FeatureBlock.Body>
        <dl className="flex flex-wrap">
          <dt className="w-1/4 font-bold">Description lists</dt>
          <dd className="w-3/4">A description list is perfect for defining terms.</dd>

          <dt className="w-1/4 font-bold">Euismod</dt>
          <dd className="w-3/4">
            <p>Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit.</p>
            <p>Donec id elit non mi porta gravida at eget metus.</p>
          </dd>
        </dl>
      </FeatureBlock.Body>
      <FeatureBlock.Footer>
        <CodeBlock
          className="!mb-0"
          language="markup"
          title=""
          showLineNumbers
        >
{`<dl className="flex flex-wrap">
  <dt className="w-1/4 font-bold">Description lists</dt>
  <dd className="w-3/4">A description list is perfect for defining terms.</dd>
  <dt className="w-1/4 font-bold">Euismod</dt>
  <dd className="w-3/4">
    <p>Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit.</p>
    <p>Donec id elit non mi porta gravida at eget metus.</p>
  </dd>
</dl>
`}
        </CodeBlock>
      </FeatureBlock.Footer>
    </FeatureBlock>
  );
}
