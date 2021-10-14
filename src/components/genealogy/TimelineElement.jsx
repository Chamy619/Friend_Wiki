import { VerticalTimelineElement } from 'react-vertical-timeline-component';
import palette from '../../lib/style/palette';
import { BiCrown, BiStar } from 'react-icons/bi';

function TimelineElement({ name, date, description, index }) {
  if (!date) {
    return (
      <VerticalTimelineElement
        iconStyle={{ background: 'rgb(16, 204, 82)', color: palette.gray[0] }}
        icon={<BiStar />}
      />
    );
  }
  if (!name) {
    return <VerticalTimelineElement iconStyle={{ display: 'none' }} />;
  }

  if (index === 0) {
    return (
      <VerticalTimelineElement
        contentStyle={{ background: palette.blue[5], color: palette.gray[0] }}
        contentArrowStyle={{ borderRight: `7px solid ${palette.blue[5]}` }}
        date={date}
        iconStyle={{ background: palette.blue[5], color: palette.gray[0] }}
        icon={<BiCrown />}
      >
        <h3>{name}</h3>
        <p>{description}</p>
      </VerticalTimelineElement>
    );
  }

  return (
    <VerticalTimelineElement
      date={date}
      iconStyle={{ background: palette.red[5], color: palette.gray[0] }}
      icon={<BiCrown />}
    >
      <h3>{name}</h3>
      <p>{description}</p>
    </VerticalTimelineElement>
  );
}

export default TimelineElement;
