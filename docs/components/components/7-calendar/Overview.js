import { useEffect, useRef } from 'react';
import CodeBlock from '@theme/CodeBlock';
import FeatureBlock from '@site/src/components/FeatureBlock';
import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';

export default function Overview() {
  const calendarRef = useRef(null);

  useEffect(() => {
    // const calendarEl = document.getElementById('calendar');

    // eslint-disable-next-line no-undef, no-unused-vars
    const calendar = new Calendar(calendarRef.current, {
      initialView: 'dayGridMonth',
      headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,listWeek'
      },
      plugins: [ dayGridPlugin, timeGridPlugin, listPlugin ],
    });

    calendar.render();

    return () => {
      // Do proper cleanup on unmount
      calendar.destroy();
    };
  }, []);

  return (
    <FeatureBlock>
      <FeatureBlock.Body>
        <div id="calendar" ref={calendarRef}></div>
      </FeatureBlock.Body>
      <FeatureBlock.Subsection>
        <table className="table table-sm table-borderless">
          <tbody>
            <tr>
              <th className="whitespace-nowrap" scope="row">.badge</th>
              <th className="text-gray" scope="row">=</th>
              <td className="w-full">
                <code className="text-pink">inline-block py-1 px-2 text-xs font-bold leading-none text-center whitespace-nowrap align-baseline rounded text-white</code>
              </td>
            </tr>
          </tbody>
        </table>
      </FeatureBlock.Subsection>
      <FeatureBlock.Footer>
        <ul className="nav nav-outline">
          <li className="nav-item">
            <a className="nav-link border-blue active" data-bs-toggle="tab" href="#tabBasicHtml">HTML</a>
          </li>
          <li className="nav-item">
            <a className="nav-link border-blue" data-bs-toggle="tab" href="#tabBasicJs">JS</a>
          </li>
        </ul>

        <div className="tab-content" id="tabBasic">
          <div className="tab-pane fade show active" id="tabBasicHtml">
            <CodeBlock
              className="!mb-0"
              language="markup"
              title=""
              showLineNumbers
            >
{`<div id="calendar"></div>
`}
            </CodeBlock>
          </div>

          <div className="tab-pane fade" id="tabBasicJs">
            <CodeBlock
              className="!mb-0"
              language="js"
              title=""
              showLineNumbers
            >
{`var calendarEl = document.getElementById('calendar');
var calendar = new FullCalendar.Calendar(calendarEl, {
  plugins: [ 'dayGrid' ]
});
calendar.render();
`}
            </CodeBlock>
          </div>
        </div>
      </FeatureBlock.Footer>
    </FeatureBlock>
  );
}
