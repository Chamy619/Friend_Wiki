import styled from 'styled-components';
import palette from '../../lib/style/palette';
import HeaderContainer from '../../containers/common/HeaderContainer';

const TemplateBlock = styled.div`
  background: ${palette.gray[3]};
  min-height: calc(100vh - 3rem);
`;

function Template({ children }) {
  return (
    <>
      <HeaderContainer />
      <TemplateBlock>{children}</TemplateBlock>
    </>
  );
}

export default Template;
