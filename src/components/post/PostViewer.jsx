import styled from 'styled-components';
import palette from '../../lib/style/palette';

const PostViewerBlock = styled.div`
  margin-top: 4rem;
`;

const PostHead = styled.div`
  border-bottom: 1px solid ${palette.gray[2]};
  padding-bottom: 3rem;
  margin-bottom: 3rem;
  h1 {
    font-size: 3rem;
    line-height: 1.5;
    margin: 0;
  }
`;

const Owner = styled.div`
  margin-top: 1rem;
  span {
    color: ${palette.gray[8]};
    font-weight: bold;
    font-size: 1.25rem;
  }
`;

const SubInfo = styled.div`
  margin-top: 1rem;
  color: ${palette.gray[6]};

  span {
    font-style: italic;
  }

  span + span:before {
    color: ${palette.gray[5]};
    padding-left: 0.25rem;
    padding-right: 0.25rem;
    content: '\\B7';
  }
`;

const PostContent = styled.div`
  font-size: 1.3125rem;
  color: ${palette.gray[8]};
`;

function PostViewer({ post, error, loading, actionButtons }) {
  if (loading) {
    return (
      <PostViewerBlock>
        <h1>로딩중...</h1>
      </PostViewerBlock>
    );
  }

  if (!post || error) {
    return (
      <PostViewerBlock>
        <h1>글을 골라주세요.</h1>
      </PostViewerBlock>
    );
  }

  return (
    <PostViewerBlock>
      <PostHead>
        <h1>{post.title}</h1>
        <Owner>
          <span>{post.owner}</span>
        </Owner>
        <SubInfo>
          <span>
            <b>{post.user.username}</b>
          </span>
          <span>{new Date(post.publishedDate).toLocaleString()} 작성</span>
        </SubInfo>
      </PostHead>
      {actionButtons}
      <PostContent dangerouslySetInnerHTML={{ __html: post.body }} />
    </PostViewerBlock>
  );
}

export default PostViewer;
