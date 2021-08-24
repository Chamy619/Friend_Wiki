import styled from 'styled-components';
import MenuContainer from '../../containers/common/MenuContainer';

const TemplateBlock = styled.div`
  width: 100%;
  height: calc(100vh - 3rem);
  display: flex;
  flex-direction: row;
`;

function Template({ children }) {
  return (
    <TemplateBlock>
      <MenuContainer />
      {children}
    </TemplateBlock>
  );
}

export default Template;
