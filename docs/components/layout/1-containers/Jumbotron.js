import CodeBlock from '@theme/CodeBlock';

export default function Jumbotron() {
  return (
    <figure className="border-2 rounded">
      <blockquote className="p-4 py-8">
        <div className="bg-gray-200 rounded py-8 px-4">
          <h1 className="text-5xl font-light">Hello, world!</h1>
          <p className="text-xl font-light">
            This is a simple hero unit, a simple jumbotron-style component
            for calling extra attention to featured content or information.
          </p>
          <hr className="my-4" />
          <p className="mb-3">
            It uses utility classes for typography and spacing to space
            content out within the larger container.
          </p>
          <a className="btn btn-lg btn-outline" href="#" role="button">Learn more</a>
        </div>
      </blockquote>
      <figcaption className="bg-gray-200 py-2 px-4 text-sm font-bold">
        <table className="table table-sm table-borderless mb-0">
          <tbody>
            <tr>
              <th className="whitespace-nowrap" scope="row">.jumbotron</th>
              <th className="text-gray" scope="row">=</th>
              <td className="w-full"><code className="text-pink">bg-gray-200 py-8 px-4</code></td>
            </tr>
          </tbody>
        </table>
      </figcaption>
      <figcaption className="bg-gray-300 p-4">
        <div className="relative">
          <CodeBlock
            className="!mb-0"
            language="markup"
            title=""
            showLineNumbers
          >
{`<div class="bg-gray-200 rounded py-8 px-4">
  <h1 class="text-5xl font-light">Hello, world!</h1>
  <p class="text-xl font-light">
    This is a simple hero unit, a simple jumbotron-style component
    for calling extra attention to featured content or information.
  </p>
  <hr class="my-4" />
  <p class="mb-3">
    It uses utility classes for typography and spacing to space
    content out within the larger container.
  </p>
  <a class="btn btn-lg btn-outline" href="#" role="button">Learn more</a>
</div>
`}
          </CodeBlock>
        </div>
      </figcaption>
    </figure>
  );
}
