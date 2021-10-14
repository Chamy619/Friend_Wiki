import GenealogyContainer from '../containers/genealogy/GenealogyContainer';
import GenealogyTemplate from '../components/genealogy/GenealogyTemplate';
import Template from '../components/common/Template';

function Genealogy() {
  return (
    <Template>
      <GenealogyTemplate
        title={
          <div>
            <h2>금싸라기 도봉국의 역대 왕 계보</h2>
            <h4>도봉국은 직선제로 왕을 선출합니다.</h4>
          </div>
        }
        content={<GenealogyContainer />}
      />
    </Template>
  );
}

export default Genealogy;
