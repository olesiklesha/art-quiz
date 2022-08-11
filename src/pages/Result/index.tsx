import React, { useCallback, useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { getCurrentRoundData, getGameResult } from '../../utils';
import { BtnBack } from '../../styles';
import { Wrapper } from '../Results/styles';
import { AnsData, AnsInfo, AnsName, Header, Picture, PictureContainer } from './styles';
import { GlobalContext } from '../../store';

const Result = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [state] = useContext(GlobalContext);

  const goBack = useCallback(() => {
    navigate(-1);
  }, [navigate]);

  const round = pathname.split('/').slice(-1).join('');
  const variant = round.split('-').slice(-1).join('');
  const data = getCurrentRoundData(round, variant);
  const gameResult = getGameResult(state, round, variant);

  return (
    <Wrapper>
      <Header>
        <BtnBack onClick={goBack} isSet={false} />
      </Header>
      <PictureContainer>
        {data.map((el, i) => (
          <Picture src={el.imageNum} isSolved={gameResult[i]} key={el.imageNum}>
            <AnsInfo>
              <AnsName>{el.name}</AnsName>
              <AnsData>
                {el.author}, {el.year}
              </AnsData>
            </AnsInfo>
          </Picture>
        ))}
      </PictureContainer>
    </Wrapper>
  );
};

export default Result;
