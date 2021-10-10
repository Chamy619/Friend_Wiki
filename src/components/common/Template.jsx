import styled from 'styled-components';
import MenuContainer from '../../containers/common/MenuContainer';

const TemplateBlock = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
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
