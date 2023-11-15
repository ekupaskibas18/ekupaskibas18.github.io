import CodeBlock from '@theme/CodeBlock';
import FeatureBlock from '@site/src/components/FeatureBlock';

export default function Overview() {
  return (
    <FeatureBlock>
      <FeatureBlock.Body>
        <button type="button" className="btn text-white bg-blue btn-lg hover:bg-blue-700 focus:bg-blue-700 waves-effect waves-light mr-2">
          Blue
        </button>
        <button type="button" className="btn text-white bg-red btn-lg hover:bg-red-700 focus:bg-red-700 waves-effect waves-light mr-2">
          Red
        </button>
        <button type="button" className="btn btn-lg waves-effect">
          Wave large button
        </button>
      </FeatureBlock.Body>
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
