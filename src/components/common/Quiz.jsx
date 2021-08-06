import styled from 'styled-components';

const QuizBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  label + label {
    margin-top: 0.25rem;
  }
`;

function Quiz() {
  return (
    <QuizBox>
      <p>
        다음 중 팅구리의 스킬이{' '}
        <b>
          <u>아닌</u>
        </b>{' '}
        것은?
      </p>
      <label>
        <input type="radio" name="ting" /> 축지법
      </label>
      <label>
        <input type="radio" name="ting" /> 내로남불
      </label>
      <label>
        <input type="radio" name="ting" /> 선택적 취준
      </label>
      <label>
        <input type="radio" name="ting" /> 여행가는 척 돈 빌리기
      </label>
      <label>
        <input type="radio" name="ting" /> 문자로 런 각 잡기
      </label>
    </QuizBox>
  );
}

export default Quiz;
