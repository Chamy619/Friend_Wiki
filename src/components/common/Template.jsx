import styled from 'styled-components';
import Menu from './Menu';

const TemplateBlock = styled.div`
  width: 100%;
  height: calc(100vh - 3rem);
  display: flex;
  flex-direction: row;
`;

function Template({ children }) {
  return (
    <TemplateBlock>
      <Menu />
      {children}
    </TemplateBlock>
  );
}

export default Template;
