import React, { useContext } from 'react';
import { Container } from '../Categories/styles';
import { GlobalContext } from '../../store';
import { CategoryResults } from '../../components';
import { Variant } from '../../constants';

const Results = () => {
  const [{ artists, pictures }] = useContext(GlobalContext);
  const artData = artists.filter((el) => !el.isNew);
  const picData = pictures.filter((el) => !el.isNew);

  return (
    <Container>
      {artData.length || picData.length ? (
        <>
          {artData.length > 0 && <CategoryResults data={artData} category={Variant.ART} />}
          {picData.length > 0 && <CategoryResults data={picData} category={Variant.PIC} />}
        </>
      ) : (
        <p>you did not finish any round</p>
      )}
    </Container>
  );
};

export default Results;
