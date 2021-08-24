import styled from 'styled-components';
import Editor from '../components/write/Editor';
import WriteActionButtons from '../components/write/WriteActionButtons';

const WritePageBlock = styled.div`
  padding-left: 3rem;
  padding-right: 3rem;
`;

function WritePage() {
  return (
    <WritePageBlock>
      <Editor />
      <WriteActionButtons />
    </WritePageBlock>
  );
}

export default WritePage;
