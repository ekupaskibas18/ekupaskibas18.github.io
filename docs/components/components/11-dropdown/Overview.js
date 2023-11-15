import CodeBlock from '@theme/CodeBlock';
import FeatureBlock from '@site/src/components/FeatureBlock';

export default function Overview() {
  return (
    <FeatureBlock>
      <FeatureBlock.Body>
        <div className="text-center">
          <div className="dropdown">
            <button type="button" className="btn" data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown button <i className="fas fa-caret-down ml-2"></i>
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
      <FeatureBlock.Subsection>
        <table className="table table-sm table-borderless">
          <tbody>
            <tr>
              <th className="whitespace-nowrap" scope="row">
                <div>.dropdown</div>
                <div>.dropleft</div>
                <div>.dropright</div>
                <div>.dropup</div>
              </th>
              <th className="text-gray" scope="row">=</th>
              <td className="w-full">
                <code className="text-pink">relative</code>
              </td>
            </tr>
            <tr>
              <th className="whitespace-nowrap" scope="row">
                <div>.dropdown-menu</div>
              </th>
              <th className="text-gray" scope="row">=</th>
              <td className="w-full">
                <code className="text-pink">absolute top-full left-0 z-1000 hidden py-2 mt-1 text-left list-none bg-white border border-black border-opacity-25 rounded</code>
              </td>
            </tr>
            <tr>
              <th className="whitespace-nowrap" scope="row">
                <div>.dropdown-menu.show</div>
              </th>
              <th className="text-gray" scope="row">=</th>
              <td className="w-full">
                <code className="text-pink">block</code>
              </td>
            </tr>
            <tr>
              <th className="whitespace-nowrap" scope="row">
                <div><s>.dropdown-toggle</s></div>
              </th>
              <th className="text-gray" scope="row">=</th>
              <td className="w-full">
                <code className="text-pink">whitespace-nowrap</code>
              </td>
            </tr>
            <tr>
              <th className="whitespace-nowrap" scope="row">
                <div><s>.dropdown-item</s></div>
              </th>
              <th className="text-gray" scope="row">=</th>
              <td className="w-full">
                <code className="text-pink">block w-full py-1 px-4 clear-both no-underline whitespace-nowrap bg-transparent border-0</code>
              </td>
            </tr>
            <tr>
              <th className="whitespace-nowrap" scope="row">
                <div><s>.dropdown-header</s></div>
              </th>
              <th className="text-gray" scope="row">=</th>
              <td className="w-full">
                <code className="text-pink">text-gray-600 py-2 px-4 text-sm whitespace-nowrap</code>
              </td>
            </tr>
            <tr>
              <th className="whitespace-nowrap" scope="row">
                <div><s>.dropdown-divider</s></div>
              </th>
              <th className="text-gray" scope="row">=</th>
              <td className="w-full">
                <code className="text-pink">my-2</code>
              </td>
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
{`<div class="dropdown">
  <button type="button" class="btn" data-bs-toggle="dropdown" aria-expanded="false">
    Dropdown button <i class="fas fa-caret-down ml-2"></i>
  </button>
  <div class="dropdown-menu">
    <h6 class="text-gray-600 py-2 px-4 text-sm whitespace-nowrap">Dropdown header</h6>
    <a class="dropdown-item" href="#">Action</a>
    <a class="dropdown-item" href="#">Another action</a>
    <hr class="my-2" />
    <a class="dropdown-item" href="#">Separated link</a>
  </div>
</div>
`}
        </CodeBlock>
      </FeatureBlock.Footer>
    </FeatureBlock>
  );
}
