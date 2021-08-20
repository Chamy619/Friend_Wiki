import { useState } from 'react';
import styled from 'styled-components';
import palette from '../../lib/style/palette';
import { AiOutlineMenu } from 'react-icons/ai';

import MenuItem from './MenuItem';

const MenuBlock = styled.div`
  width: 200px;
  height: 100%;
  background: ${palette.blue[0]};
  display: flex;
  flex-direction: column;
`;

const HiddenMenuBlock = styled.div`
  position: absolute;
  top: 3rem;
  left: 0;
`;

const MenuButton = styled(AiOutlineMenu)`
  cursor: pointer;
  margin: 0.5rem;
  &:hover {
    background: ${palette.red[0]};
  }
`;

function Menu() {
  const [menuVisible, setMenuVisible] = useState(false);
  const onClick = () => {
    setMenuVisible(!menuVisible);
  };
  if (!menuVisible) {
    return (
      <HiddenMenuBlock>
        <MenuButton onClick={onClick} />
      </HiddenMenuBlock>
    );
  }
  return (
    <MenuBlock>
      <MenuButton onClick={onClick} />
      <MenuItem />
      <MenuItem />
    </MenuBlock>
  );
}

export default Menu;
