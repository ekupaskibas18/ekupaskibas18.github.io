import CodeBlock from '@theme/CodeBlock';

export default function MixedColumnSizes() {
  return (
    <figure className="border-2 rounded">
      <blockquote className="p-4 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap -mx-4">
            <div className="w-3/12 bg-gray-400 p-4 h-12">.w-3/12 = .col-3</div>
            <div className="w-9/12 bg-gray-500 p-4 h-12">.w-9/12 = .col-9</div>
          </div>

          <br />

          <div className="flex flex-wrap -mx-4">
            <div className="w-1/5 bg-gray-500 p-4 h-12">.w-1/5</div>
            <div className="w-3/5 bg-gray-400 p-4 h-12">.w-3/5</div>
            <div className="w-1/5 bg-gray-500 p-4 h-12">.w-1/5</div>
          </div>
        </div>
      </blockquote>
      <figcaption className="bg-gray-300 p-4">
        <div className="relative">
          <CodeBlock
            className="!mb-0"
            language="markup"
            title=""
            showLineNumbers
          >
{`<div class="flex flex-wrap">
  <div class="w-3/12">.col-3</div>
  <div class="w-9/12">.col-9</div>
</div>

<div class="flex flex-wrap">
  <div class="w-1/5">.w-1/5</div>
  <div class="w-3/5">.w-3/5</div>
  <div class="w-1/5">.w-1/5</div>
</div>
`}
          </CodeBlock>
        </div>
      </figcaption>
    </figure>
  );
}
