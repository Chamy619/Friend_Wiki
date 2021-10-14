import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Timeline from '../../components/genealogy/Timeline';

const KINGSDATA = [
  {
    name: '안영민',
    date: 2020,
    description: '용문 꼰대로 나댐왕 등극. 코로나로 인해 대적수가 없었음.',
  },
  {
    name: '방세현',
    date: 2019,
    description: '광역 어그로 및 롤드컵 중국 응원으로 느그들의 원성을 삼',
  },
  {
    name: '오예손',
    date: 2018,
    description: '군대 전역 후 미친듯한 폼으로 요즘 군대가 군대냐의 대표 주자',
  },
  {
    name: '양채훈',
    date: 2017,
    description: '역대급 팅구리의 정치질로 나댐왕 등극. 부정선거로 기록됨',
  },
  {
    name: '',
    date: 2015,
    description: '군대',
  },
  {
    name: '',
    date: 2016,
    description: '군대',
  },
  {
    name: '안영민',
    date: 2014,
    description:
      '이 시기 새벽 3~4 시 까지 카톡은 기본. 섹길동 모드로 동에 번쩍 서에 번쩍! 군대까지 공군으로 입대하면서 나댐의 절정을 찍음',
  },
  {
    name: '안영민',
    date: 2013,
    description:
      '한 달 롤 200시간 넘게 플레이 후 독서실에서 웹툰 정주행을 하며 고3 시기를 보냈지만 이를 모르는 팅구리의 어머님은...',
  },
  {
    name: '성준혁',
    date: 2012,
    description: '사진 합성의 대가. 특히 느깽이의 사진을 대거 합성하여 느깽이를 웃음벨로 전락시킴',
  },
  {
    name: '오예손',
    date: 2011,
    description: '양평 기도 폭격으로 당시 은혜 교회 교인들을 초토화',
  },
  {
    name: '마지막',
    date: '',
    description: '마지막',
  },
];

function GenealogyContainer() {
  const { user } = useSelector(({ user }) => ({ user: user.user }));

  if (!user) {
    return <Redirect to={{ pathname: 'login', state: { from: '/genealogy' } }} />;
  }

  return <Timeline data={KINGSDATA} />;
}

export default GenealogyContainer;
