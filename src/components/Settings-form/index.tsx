import React, { useCallback, useContext, useState } from 'react';
import { GlobalActionKind, GlobalContext } from '../../store';
import { useForm } from 'react-hook-form';
import { ISettings } from '../../models';
import { DEFAULT_SETTINGS } from '../../constants';
import { CustomRange, LabelContainer, Title, VolumeBtnContainer } from './styles';
import { BtnMute, BtnVolume } from '../../styles';

const SettingsForm = () => {
  const [{ settings }, dispatch] = useContext(GlobalContext);
  const { register, handleSubmit, setValue, getValues } = useForm<ISettings>({
    defaultValues: { ...settings },
  });
  const [rangeValue, setRangeValue] = useState(getValues('volume'));

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRangeValue(Number(e.currentTarget.value));
  };

  const onSubmit = (formState: ISettings) => {
    dispatch({
      type: GlobalActionKind.UPDATE_SETT_STATE,
      payload: formState,
    });
  };

  const setDefaultValues = useCallback(() => {
    const { isTimeGame, volume, duration } = DEFAULT_SETTINGS;
    setValue('isTimeGame', isTimeGame);
    setValue('duration', duration);
    setValue('volume', volume);
  }, [setValue]);

  const mute = useCallback(() => {
    setRangeValue(0);
    setValue('volume', 0);
  }, [setValue]);

  const setMax = useCallback(() => {
    setRangeValue(100);
    setValue('volume', 100);
  }, [setValue]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <LabelContainer htmlFor="volume">
        <Title>Volume</Title>
        <CustomRange
          type="range"
          id="volume"
          {...register('volume')}
          rangeValue={rangeValue}
          onInput={handleChange}
          min={0}
          max={100}
        />
        <VolumeBtnContainer>
          <BtnMute onClick={mute} />
          <BtnVolume onClick={setMax} />
        </VolumeBtnContainer>
      </LabelContainer>
      <LabelContainer htmlFor="time">
        <Title>Time game</Title>
        <input type="checkbox" id="time" />
      </LabelContainer>
      <LabelContainer htmlFor="duration">
        <Title>Time to answer</Title>
        <input type="number" min={10} max={60} {...register('duration')} id="duration" />
      </LabelContainer>
      <div>
        <button onClick={setDefaultValues}>default</button>
        <button type="submit">save</button>
      </div>
    </form>
  );
};

export default SettingsForm;
