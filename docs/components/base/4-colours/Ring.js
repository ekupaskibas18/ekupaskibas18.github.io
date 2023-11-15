import CodeBlock from '@theme/CodeBlock';
import FeatureBlock from '@site/src/components/FeatureBlock';
import colors from 'tailwindcss/colors';

export default function Background() {
  return (
    <FeatureBlock>
      <FeatureBlock.Body>
        <div className="grid grid-cols-10 gap-5 mb-5">
          <span className="text-center text-sm leading-5 text-gray-500">50</span>
          <span className="text-center text-sm leading-5 text-gray-500">100</span>
          <span className="text-center text-sm leading-5 text-gray-500">200</span>
          <span className="text-center text-sm leading-5 text-gray-500">300</span>
          <span className="text-center text-sm leading-5 text-gray-500">400</span>
          <span className="text-center text-sm leading-5 text-gray-500">500</span>
          <span className="text-center text-sm leading-5 text-gray-500">600</span>
          <span className="text-center text-sm leading-5 text-gray-500">700</span>
          <span className="text-center text-sm leading-5 text-gray-500">800</span>
          <span className="text-center text-sm leading-5 text-gray-500">900</span>
        </div>

        <div className="grid grid-cols-10 gap-5">
          {Object.entries(colors.slate).map(([index, color]) => {
            return (
              <span className="pb-full relative rounded" key={index.toString()}>
                <span className={"absolute inset-0 text-xs p-1 shadow-inner ring-4 " + ['ring-slate-' + index, 'text-black'].join(" ")}>
                  <div>bg-slate-{index}</div>
                  <div>{color}</div>
                </span>
              </span>
            );
          })}

          {Object.entries(colors.gray).map(([index, color]) => {
            return (
              <span className="pb-full relative rounded" key={index.toString()}>
                <span className={"absolute inset-0 text-xs p-1 shadow-inner ring-4 " + ['ring-gray-' + index, 'text-black'].join(" ")}>
                  <div>bg-gray-{index}</div>
                  <div>{color}</div>
                </span>
              </span>
            );
          })}

          {Object.entries(colors.zinc).map(([index, color]) => {
            return (
              <span className="pb-full relative rounded" key={index.toString()}>
                <span className={"absolute inset-0 text-xs p-1 shadow-inner ring-4 " + ['ring-zinc-' + index, 'text-black'].join(" ")}>
                  <div>bg-zinc-{index}</div>
                  <div>{color}</div>
                </span>
              </span>
            );
          })}

          {Object.entries(colors.neutral).map(([index, color]) => {
            return (
              <span className="pb-full relative rounded" key={index.toString()}>
                <span className={"absolute inset-0 text-xs p-1 shadow-inner ring-4 " + ['ring-neutral-' + index, 'text-black'].join(" ")}>
                  <div>bg-neutral-{index}</div>
                  <div>{color}</div>
                </span>
              </span>
            );
          })}

          {Object.entries(colors.stone).map(([index, color]) => {
            return (
              <span className="pb-full relative rounded" key={index.toString()}>
                <span className={"absolute inset-0 text-xs p-1 shadow-inner ring-4 " + ['ring-stone-' + index, 'text-black'].join(" ")}>
                  <div>bg-stone-{index}</div>
                  <div>{color}</div>
                </span>
              </span>
            );
          })}
        </div>
      </FeatureBlock.Body>
      <FeatureBlock.Body>
        <div className="grid grid-cols-10 gap-5 mb-5">
          {Object.entries(colors.red).map(([index, color]) => {
            return (
              <span className="pb-full relative rounded" key={index.toString()}>
                <span className={"absolute inset-0 text-xs p-1 shadow-inner ring-4 " + ['ring-red-' + index, 'text-black'].join(" ")}>
                  <div>bg-red-{index}</div>
                  <div>{color}</div>
                </span>
              </span>
            );
          })}

          {Object.entries(colors.orange).map(([index, color]) => {
            return (
              <span className="pb-full relative rounded" key={index.toString()}>
                <span className={"absolute inset-0 text-xs p-1 shadow-inner ring-4 " + ['ring-orange-' + index, 'text-black'].join(" ")}>
                  <div>bg-orange-{index}</div>
                  <div>{color}</div>
                </span>
              </span>
            );
          })}

          {Object.entries(colors.amber).map(([index, color]) => {
            return (
              <span className="pb-full relative rounded" key={index.toString()}>
                <span className={"absolute inset-0 text-xs p-1 shadow-inner ring-4 " + ['ring-amber-' + index, 'text-black'].join(" ")}>
                  <div>bg-amber-{index}</div>
                  <div>{color}</div>
                </span>
              </span>
            );
          })}

          {Object.entries(colors.yellow).map(([index, color]) => {
            return (
              <span className="pb-full relative rounded" key={index.toString()}>
                <span className={"absolute inset-0 text-xs p-1 shadow-inner ring-4 " + ['ring-yellow-' + index, 'text-black'].join(" ")}>
                  <div>bg-yellow-{index}</div>
                  <div>{color}</div>
                </span>
              </span>
            );
          })}

          {Object.entries(colors.lime).map(([index, color]) => {
            return (
              <span className="pb-full relative rounded" key={index.toString()}>
                <span className={"absolute inset-0 text-xs p-1 shadow-inner ring-4 " + ['ring-lime-' + index, 'text-black'].join(" ")}>
                  <div>bg-lime-{index}</div>
                  <div>{color}</div>
                </span>
              </span>
            );
          })}

          {Object.entries(colors.green).map(([index, color]) => {
            return (
              <span className="pb-full relative rounded" key={index.toString()}>
                <span className={"absolute inset-0 text-xs p-1 shadow-inner ring-4 " + ['ring-green-' + index, 'text-black'].join(" ")}>
                  <div>bg-green-{index}</div>
                  <div>{color}</div>
                </span>
              </span>
            );
          })}

          {Object.entries(colors.emerald).map(([index, color]) => {
            return (
              <span className="pb-full relative rounded" key={index.toString()}>
                <span className={"absolute inset-0 text-xs p-1 shadow-inner ring-4 " + ['ring-emerald-' + index, 'text-black'].join(" ")}>
                  <div>bg-emerald-{index}</div>
                  <div>{color}</div>
                </span>
              </span>
            );
          })}

          {Object.entries(colors.teal).map(([index, color]) => {
            return (
              <span className="pb-full relative rounded" key={index.toString()}>
                <span className={"absolute inset-0 text-xs p-1 shadow-inner ring-4 " + ['ring-teal-' + index, 'text-black'].join(" ")}>
                  <div>bg-teal-{index}</div>
                  <div>{color}</div>
                </span>
              </span>
            );
          })}

          {Object.entries(colors.cyan).map(([index, color]) => {
            return (
              <span className="pb-full relative rounded" key={index.toString()}>
                <span className={"absolute inset-0 text-xs p-1 shadow-inner ring-4 " + ['ring-cyan-' + index, 'text-black'].join(" ")}>
                  <div>bg-cyan-{index}</div>
                  <div>{color}</div>
                </span>
              </span>
            );
          })}

          {Object.entries(colors.sky).map(([index, color]) => {
            return (
              <span className="pb-full relative rounded" key={index.toString()}>
                <span className={"absolute inset-0 text-xs p-1 shadow-inner ring-4 " + ['ring-sky-' + index, 'text-black'].join(" ")}>
                  <div>bg-sky-{index}</div>
                  <div>{color}</div>
                </span>
              </span>
            );
          })}

          {Object.entries(colors.blue).map(([index, color]) => {
            return (
              <span className="pb-full relative rounded" key={index.toString()}>
                <span className={"absolute inset-0 text-xs p-1 shadow-inner ring-4 " + ['ring-blue-' + index, 'text-black'].join(" ")}>
                  <div>bg-blue-{index}</div>
                  <div>{color}</div>
                </span>
              </span>
            );
          })}

          {Object.entries(colors.indigo).map(([index, color]) => {
            return (
              <span className="pb-full relative rounded" key={index.toString()}>
                <span className={"absolute inset-0 text-xs p-1 shadow-inner ring-4 " + ['ring-indigo-' + index, 'text-black'].join(" ")}>
                  <div>bg-indigo-{index}</div>
                  <div>{color}</div>
                </span>
              </span>
            );
          })}

          {Object.entries(colors.violet).map(([index, color]) => {
            return (
              <span className="pb-full relative rounded" key={index.toString()}>
                <span className={"absolute inset-0 text-xs p-1 shadow-inner ring-4 " + ['ring-violet-' + index, 'text-black'].join(" ")}>
                  <div>bg-violet-{index}</div>
                  <div>{color}</div>
                </span>
              </span>
            );
          })}

          {Object.entries(colors.purple).map(([index, color]) => {
            return (
              <span className="pb-full relative rounded" key={index.toString()}>
                <span className={"absolute inset-0 text-xs p-1 shadow-inner ring-4 " + ['ring-purple-' + index, 'text-black'].join(" ")}>
                  <div>bg-purple-{index}</div>
                  <div>{color}</div>
                </span>
              </span>
            );
          })}

          {Object.entries(colors.fuchsia).map(([index, color]) => {
            return (
              <span className="pb-full relative rounded" key={index.toString()}>
                <span className={"absolute inset-0 text-xs p-1 shadow-inner ring-4 " + ['ring-fuchsia-' + index, 'text-black'].join(" ")}>
                  <div>bg-fuchsia-{index}</div>
                  <div>{color}</div>
                </span>
              </span>
            );
          })}

          {Object.entries(colors.pink).map(([index, color]) => {
            return (
              <span className="pb-full relative rounded" key={index.toString()}>
                <span className={"absolute inset-0 text-xs p-1 shadow-inner ring-4 " + ['ring-pink-' + index, 'text-black'].join(" ")}>
                  <div>bg-pink-{index}</div>
                  <div>{color}</div>
                </span>
              </span>
            );
          })}

          {Object.entries(colors.rose).map(([index, color]) => {
            return (
              <span className="pb-full relative rounded" key={index.toString()}>
                <span className={"absolute inset-0 text-xs p-1 shadow-inner ring-4 " + ['ring-rose-' + index, 'text-black'].join(" ")}>
                  <div>bg-rose-{index}</div>
                  <div>{color}</div>
                </span>
              </span>
            );
          })}
        </div>
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
