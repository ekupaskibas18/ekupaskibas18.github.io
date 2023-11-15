import CodeBlock from '@theme/CodeBlock';
import FeatureBlock from '@site/src/components/FeatureBlock';

export default function DisplayHeadings() {
  return (
    <FeatureBlock>
      <FeatureBlock.Body>
        <h1 className="text-8xl font-light">Display 1</h1>
        <h1 className="text-7xl font-light">Display 2</h1>
        <h1 className="text-6xl font-light">Display 3</h1>
        <h1 className="text-5xl font-light">Display 4</h1>
        <h1 className="text-4xl font-light">Display 5</h1>
        <h1 className="text-3xl font-light">Display 6</h1>
      </FeatureBlock.Body>
      <FeatureBlock.Subsection>
        <table className="table table-sm table-borderless">
          <tbody>
            <tr>
              <th className="whitespace-nowrap" scope="row">.display-1</th>
              <th className="text-gray" scope="row">=</th>
              <td className="w-full"><code className="text-pink">text-8xl font-light</code></td>
            </tr>
            <tr>
              <th className="whitespace-nowrap" scope="row">.display-2</th>
              <th className="text-gray" scope="row">=</th>
              <td className="w-full"><code className="text-pink">text-7xl font-light</code></td>
            </tr>
            <tr>
              <th className="whitespace-nowrap" scope="row">.display-3</th>
              <th className="text-gray" scope="row">=</th>
              <td className="w-full"><code className="text-pink">text-6xl font-light</code></td>
            </tr>
            <tr>
              <th className="whitespace-nowrap" scope="row">.display-4</th>
              <th className="text-gray" scope="row">=</th>
              <td className="w-full"><code className="text-pink">text-5xl font-light</code></td>
            </tr>
            <tr>
              <th className="whitespace-nowrap" scope="row">.display-5</th>
              <th className="text-gray" scope="row">=</th>
              <td className="w-full"><code className="text-pink">text-4xl font-light</code></td>
            </tr>
            <tr>
              <th className="whitespace-nowrap" scope="row">.display-6</th>
              <th className="text-gray" scope="row">=</th>
              <td className="w-full"><code className="text-pink">text-3xl font-light</code></td>
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
{`<h1 className="text-8xl font-light">Display 1</h1>
<h1 className="text-7xl font-light">Display 2</h1>
<h1 className="text-6xl font-light">Display 3</h1>
<h1 className="text-5xl font-light">Display 4</h1>
<h1 className="text-4xl font-light">Display 5</h1>
<h1 className="text-3xl font-light">Display 6</h1>
`}
        </CodeBlock>
      </FeatureBlock.Footer>
    </FeatureBlock>
  );
}
