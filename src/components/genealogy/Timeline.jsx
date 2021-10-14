import styled from 'styled-components';
import { VerticalTimeline } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import TimelineElement from './TimelineElement';

const TimelineBlock = styled.div``;

function Timeline({ data }) {
  return (
    <TimelineBlock>
      <VerticalTimeline>
        {data.map((data, index) => (
          <TimelineElement key={index} name={data.name} date={data.date} description={data.description} index={index} />
        ))}
      </VerticalTimeline>
    </TimelineBlock>
  );
}

export default Timeline;
