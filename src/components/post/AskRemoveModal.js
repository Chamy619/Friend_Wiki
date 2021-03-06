import AskModal from '../common/AskModal';

function AskRemoveModal({ visible, onConfirm, onCancel }) {
  return (
    <AskModal
      visible={visible}
      title="글 삭제"
      description="정말 삭제하시겠습니까?"
      confirmText="삭제"
      onConfirm={onConfirm}
      onCancel={onCancel}
    />
  );
}

export default AskRemoveModal;
