import GenealogyContainer from '../containers/genealogy/GenealogyContainer';
import GenealogyTemplate from '../components/genealogy/GenealogyTemplate';
import Template from '../components/common/Template';
import Title from '../components/genealogy/Title';

function Genealogy() {
  return (
    <Template>
      <GenealogyTemplate title={<Title />} content={<GenealogyContainer />} />
    </Template>
  );
}

export default Genealogy;
