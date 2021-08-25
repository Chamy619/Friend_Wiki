import styled from 'styled-components';
import EditorContainer from '../containers/write/EditorContainer';
import WriteActionButtonsContainer from '../containers/write/WriteActionButtonsContainer';

const WritePageBlock = styled.div`
  padding-left: 3rem;
  padding-right: 3rem;
`;

function WritePage() {
  return (
    <WritePageBlock>
      <EditorContainer />
      <WriteActionButtonsContainer />
    </WritePageBlock>
  );
}

export default WritePage;
