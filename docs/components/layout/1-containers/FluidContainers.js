import CodeBlock from '@theme/CodeBlock';

export default function FluidContainers() {
  return (
    <figure className="border-2 rounded">
      <blockquote className="p-4 py-8">
        <div className="container bg-gray-200 mx-auto px-4 max-w-none">
          <p>This is equivalent to <code className="font-bold text-pink">.container-fluid</code>.</p>
        </div>
      </blockquote>
      <figcaption className="bg-gray-200 py-2 px-4 text-sm font-bold">
        <table className="table table-sm table-borderless mb-0">
          <tbody>
            <tr>
              <th className="whitespace-nowrap" scope="row">.container-fluid</th>
              <th className="text-gray" scope="row">=</th>
              <td className="w-full"><code className="text-pink">container mx-auto px-4 max-w-none</code></td>
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
{`<div class="container mx-auto px-4 max-w-none">
...
</div>
`}
          </CodeBlock>
        </div>
      </figcaption>
    </figure>
  );
}
