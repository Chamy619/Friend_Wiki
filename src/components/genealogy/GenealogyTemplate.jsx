import styled from 'styled-components';
import palette from '../../lib/style/palette';

const GenealogyTemplateBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${palette.gray[3]};
  width: 100%;
`;

const TitleBlock = styled.div`
  padding: 2rem auto;
`;

function GenealogyTemplate({ title, content }) {
  return (
    <GenealogyTemplateBlock>
      <TitleBlock>{title}</TitleBlock>
      {content}
    </GenealogyTemplateBlock>
  );
}

export default GenealogyTemplate;
