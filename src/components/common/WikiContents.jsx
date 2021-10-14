import styled from 'styled-components';
import MenuContainer from '../../containers/common/MenuContainer';

const WikiContentsBlock = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
`;

function WikiContents({ children }) {
  return (
    <WikiContentsBlock>
      <MenuContainer />
      {children}
    </WikiContentsBlock>
  );
}

export default WikiContents;
