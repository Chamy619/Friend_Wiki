import styled from 'styled-components';
import { VerticalTimeline } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import TimelineElement from './TimelineElement';

const TimelineBlock = styled.div`
  .block-vertical-timeline {
    overflow: hidden;
    margin: 0 1rem;
  }
`;

function Timeline({ data }) {
  return (
    <TimelineBlock>
      <VerticalTimeline className="block-vertical-timeline">
        {data.map((data, index) => (
          <TimelineElement key={index} name={data.name} date={data.date} description={data.description} index={index} />
        ))}
      </VerticalTimeline>
    </TimelineBlock>
  );
}

export default Timeline;
