import CodeBlock from '@theme/CodeBlock';
import FeatureBlock from '@site/src/components/FeatureBlock';

export default function Overview() {
  return (
    <FeatureBlock>
      <FeatureBlock.Body>
        <div className="text-center">
          <div className="dropdown">
            <button type="button" className="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown button <i className="fas fa-caret-down ml-2"></i>
            </button>
            <div className="dropdown-menu p-4 text-gray-700" style={{ maxWidth: '200px' }}>
              <p>
                Some example text that's free-flowing within the dropdown menu.
              </p>
              <p className="mb-0">
                And this is more example text.
              </p>
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
{`<div class="dropdown btn-group">
  <button type="button" class="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
    Dropdown <i class="fas fa-caret-down ml-2"></i>
  </button>
  <div class="dropdown-menu p-4 text-gray-700" style="max-width: 200px">
    <p>
      Some example text that's free-flowing within the dropdown menu.
    </p>
    <p class="mb-0">
      And this is more example text.
    </p>
  </div>
</div>
`}
        </CodeBlock>
      </FeatureBlock.Footer>
    </FeatureBlock>
  );
}
