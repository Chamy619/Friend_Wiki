import styled from 'styled-components';
import EditorContainer from '../containers/write/EditorContainer';
import WriteActionButtons from '../components/write/WriteActionButtons';

const WritePageBlock = styled.div`
  padding-left: 3rem;
  padding-right: 3rem;
`;

function WritePage() {
  return (
    <WritePageBlock>
      <EditorContainer />
      <WriteActionButtons />
    </WritePageBlock>
  );
}

export default WritePage;
