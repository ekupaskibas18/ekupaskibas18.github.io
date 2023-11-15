import CodeBlock from '@theme/CodeBlock';

export default function WrappingColumns() {
  return (
    <figure className="border-2 rounded">
      <blockquote className="p-4 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap -mx-4">
            <div className="w-1/3 bg-gray-400 p-4 mb-4">.w-1/3</div>
            <div className="w-1/3 bg-gray-500 p-4 mb-4 h-24">.w-1/3 .h-24</div>
            <div className="w-1/3 bg-gray-400 p-4 mb-4">.w-1/3</div>
            <div className="w-1/3 bg-gray-500 p-4 mb-4 h-12">.w-1/3</div>
            <div className="w-1/3 bg-gray-400 p-4 mb-4 h-12">.w-1/3</div>
            <div className="w-1/3 bg-gray-500 p-4 mb-4 h-12">.w-1/3</div>
            <div className="w-1/3 bg-gray-500 p-4 mb-4 h-12">.w-1/3</div>
          </div>
        </div>
      </blockquote>
      <figcaption className="bg-gray-200 py-2 px-4 text-sm font-bold">
        <table className="table table-sm table-borderless mb-0">
          <tbody>
            <tr>
              <th className="whitespace-nowrap" scope="row">.row</th>
              <th className="text-gray" scope="row">=</th>
              <td className="w-full"><code className="text-pink">flex flex-wrap</code></td>
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
{`<div class="flex flex-wrap">
  <div class="w-1/3">.w-1/3</div>
  <div class="w-1/3">.w-1/3</div>
  <div class="w-1/3">.w-1/3</div>
  <div class="w-1/3">.w-1/3</div>
  <div class="w-1/3">.w-1/3</div>
  <div class="w-1/3">.w-1/3</div>
  <div class="w-1/3">.w-1/3</div>
  <div class="w-1/3">.w-1/3</div>
</div>
`}
          </CodeBlock>
        </div>
      </figcaption>
    </figure>
  );
}
