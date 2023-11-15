import CodeBlock from '@theme/CodeBlock';
import FeatureBlock from '@site/src/components/FeatureBlock';

export default function Overview() {
  return (
    <FeatureBlock>
      <FeatureBlock.Body>
        <div className="text-center">
          <div className="dropend btn-group">
            <button type="button" className="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
              Dropright <i className="fas fa-caret-right ml-2"></i>
            </button>
            <div className="dropdown-menu">
              <h6 className="text-gray-600 py-2 px-4 text-sm whitespace-nowrap">Dropdown header</h6>
              <a className="dropdown-item" href="#">Action</a>
              <a className="dropdown-item" href="#">Another action</a>
              <hr className="my-2" />
              <a className="dropdown-item" href="#">Separated link</a>
            </div>
          </div>
        </div>
      </FeatureBlock.Body>
      <FeatureBlock.Footer>
        <CodeBlock
          className="!mb-0"
          language="markup"
          title=""
          showLineNumbers
        >
{`<div class="dropup btn-group">
  <button type="button" class="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
    Dropright <i class="fas fa-caret-right ml-2"></i>
  </button>
  <div class="dropdown-menu">
    ...
  </div>
</div>
`}
        </CodeBlock>
      </FeatureBlock.Footer>
    </FeatureBlock>
  );
}
