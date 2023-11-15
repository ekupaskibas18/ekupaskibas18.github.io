import CodeBlock from '@theme/CodeBlock';
import FeatureBlock from '@site/src/components/FeatureBlock';

export default function Overview() {
  return (
    <FeatureBlock>
      <FeatureBlock.Body>
        <div className="alert bg-blue-200 mb-4" role="alert">
          <h4 className="mb-2">Well done!</h4>
          <p>
            A simple primary alert with <a href="#" className="underline font-bold">an example link</a>.
            Give it a click if you like.
          </p>
          <hr className="border-current opacity-25 my-2" />
          <p>Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
        </div>
        <div className="alert bg-gray-200 mb-4" role="alert">
          A simple primary alert with <a href="#" className="underline font-bold">an example link</a>. Give it a click if you like.
        </div>
        <div className="alert bg-green-200 mb-4" role="alert">
          A simple primary alert with <a href="#" className="underline font-bold">an example link</a>. Give it a click if you like.
        </div>
        <div className="alert bg-red-200 mb-4" role="alert">
          A simple primary alert with <a href="#" className="underline font-bold">an example link</a>. Give it a click if you like.
        </div>
        <div className="alert bg-orange-200 mb-4" role="alert">
          A simple primary alert with <a href="#" className="underline font-bold">an example link</a>. Give it a click if you like.
        </div>
        <div className="alert bg-teal-200 mb-4" role="alert">
          A simple primary alert with <a href="#" className="underline font-bold">an example link</a>. Give it a click if you like.
        </div>
        <div className="alert bg-light mb-4" role="alert">
          A simple primary alert with <a href="#" className="underline font-bold">an example link</a>. Give it a click if you like.
        </div>
        <div className="alert bg-dark text-light mb-4" role="alert">
          A simple primary alert with <a href="#" className="underline font-bold">an example link</a>. Give it a click if you like.
        </div>

        <div className="alert bg-orange-200 mb-4 fade show" role="alert">
          <strong>Holy guacamole!</strong> You should check in on some of those fields below.
          <button type="button" className="absolute top-0 right-0 py-2 px-4 text-2xl font-bold opacity-50" data-bs-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
      </FeatureBlock.Body>
      <FeatureBlock.Subsection>
        <table className="table table-sm table-borderless">
          <tbody>
            <tr>
              <th className="whitespace-nowrap" scope="row">.alert</th>
              <th className="text-gray" scope="row">=</th>
              <td className="w-full"><code className="text-pink">relative border border-black border-opacity-10 rounded text-black text-opacity-75 p-4</code></td>
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
{`<div class="alert bg-orange-200 mb-4 fade show" role="alert">
  <strong>Holy guacamole!</strong> You should check in on some of those fields below.
  <button type="button" class="absolute top-0 right-0 py-2 px-4 text-2xl font-bold opacity-50" data-bs-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>
</div>
`}
        </CodeBlock>
      </FeatureBlock.Footer>
    </FeatureBlock>
  );
}
