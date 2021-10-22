import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { read } from '../../modules/genealogy';
import Timeline from '../../components/genealogy/Timeline';

const sortTimeline = (elements) => {
  const result = elements.sort((a, b) => b.date - a.date);
  return result;
};

function GenealogyContainer() {
  const dispatch = useDispatch();
  const { user, list, error } = useSelector(({ user, genealogy }) => ({
    user: user.user,
    list: genealogy.list,
    error: genealogy.error,
  }));

  useEffect(() => {
    dispatch(read());
  }, [dispatch]);

  const getData = () => {
    if (!list) {
      return null;
    }

    return sortTimeline(list);
  };

  return <Timeline data={getData()} user={user} error={error} />;
}

export default GenealogyContainer;
