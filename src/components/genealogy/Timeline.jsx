import styled from 'styled-components';
import { VerticalTimeline } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import TimelineElement from './TimelineElement';
import { Redirect } from 'react-router-dom';

const TimelineBlock = styled.div`
  .block-vertical-timeline {
    overflow: hidden;
    margin: 0 1rem;
  }
`;

function Timeline({ data, user }) {
  if (!user) {
    return <Redirect to={{ pathname: 'login', state: { from: '/genealogy' } }} />;
  }

  return (
    <TimelineBlock>
      <VerticalTimeline className="block-vertical-timeline">
        {data &&
          data.map((data, index) => (
            <TimelineElement
              key={index}
              name={data.name}
              date={data.date}
              description={data.description}
              index={index}
            />
          ))}
        <TimelineElement key="fianl" name="마지막" date="" description="마지막" />
      </VerticalTimeline>
    </TimelineBlock>
  );
}

export default Timeline;
