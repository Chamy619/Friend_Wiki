import { useState } from 'react';
import QuizModal from '../../components/common/QuizModal';
import RegisterError from '../../components/auth/RegisterError';

const items = [
  {
    text: '축지법',
    key: 'gildong',
  },
  {
    text: '내로남불',
    key: 'romance',
  },
  {
    text: '선택적 취준',
    key: 'search',
  },
  {
    text: '여행가는 척 돈 빌리기',
    key: 'fakeTravel',
  },
  {
    text: '문자로 런 각 잡기',
    key: 'textRun',
  },
];

const question = (
  <>
    다음 중 팅구리의 스킬이{' '}
    <b>
      <u>아닌</u>
    </b>{' '}
    것은?
  </>
);

function QuizModalContainer({ visible, onSuccess, closeModal }) {
  const [selected, setSelected] = useState('');
  const [error, setError] = useState(false);

  const onChange = (event) => {
    setSelected(event.target.value);
  };

  const onConfirm = () => {
    if (selected === 'textRun') {
      if (typeof onSuccess === 'function') {
        onSuccess();
      }
      return;
    }

    setError(true);
  };

  if (error) {
    return <RegisterError />;
  }

  return (
    <QuizModal
      visible={visible}
      title="느그인증"
      question={question}
      items={items}
      onChange={onChange}
      onConfirm={onConfirm}
      onCancel={closeModal}
    />
  );
}

export default QuizModalContainer;
