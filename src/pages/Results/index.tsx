import React, { useContext } from 'react';
import { GlobalContext } from '../../store';
import { CategoryResults } from '../../components';
import { Variant } from '../../constants';
import { Wrapper } from './styles';

const Results = () => {
  const [{ artists, pictures }] = useContext(GlobalContext);
  const artData = artists.filter((el) => !el.isNew);
  const picData = pictures.filter((el) => !el.isNew);

  return (
    <Wrapper>
      {artData.length || picData.length ? (
        <>
          {artData.length > 0 && <CategoryResults data={artData} category={Variant.ART} />}
          {picData.length > 0 && <CategoryResults data={picData} category={Variant.PIC} />}
        </>
      ) : (
        <p>you did not finish any round</p>
      )}
    </Wrapper>
  );
};

export default Results;
