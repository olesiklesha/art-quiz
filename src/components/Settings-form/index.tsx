import React, { useCallback, useContext, useState } from 'react';
import { GlobalActionKind, GlobalContext } from '../../store';
import { useForm } from 'react-hook-form';
import { ISettings } from '../../models';
import { DEFAULT_SETTINGS } from '../../constants';
import {
  CustomNumberInput,
  CustomRange,
  DurationFieldContainer,
  InputToggle,
  LabelContainer,
  LabelToggle,
  SetMoreBtn,
  SetNumberBtn,
  SwitchToggle,
  Title,
  VolumeBtnContainer,
} from './styles';
import { BtnMute, BtnVolume } from '../../styles';

const SettingsForm = () => {
  const [{ settings }, dispatch] = useContext(GlobalContext);
  const { register, handleSubmit, setValue, getValues } = useForm<ISettings>({
    defaultValues: { ...settings },
  });
  const [rangeValue, setRangeValue] = useState(getValues('volume'));
  const [checkboxValue, setCheckboxValue] = useState(getValues('isTimeGame'));

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRangeValue(Number(e.currentTarget.value));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCheckboxValue(e.currentTarget.checked);
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

  const addTime = useCallback(() => {
    const prev = getValues('duration');
    if (prev < 60) {
      setValue('duration', prev + 5);
    }
  }, [getValues, setValue]);

  const subtractTime = useCallback(() => {
    const prev = getValues('duration');
    if (prev > 20) {
      setValue('duration', prev - 5);
    }
  }, [getValues, setValue]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <LabelContainer>
        <Title>Volume</Title>
        <CustomRange
          type="range"
          id="volume"
          {...register('volume')}
          rangeValue={rangeValue}
          onInput={handleVolumeChange}
          min={0}
          max={100}
        />
        <VolumeBtnContainer>
          <BtnMute onClick={mute} />
          <BtnVolume onClick={setMax} />
        </VolumeBtnContainer>
      </LabelContainer>
      <LabelContainer>
        <Title>Time game</Title>
        <LabelToggle>
          <span>{checkboxValue ? 'On' : 'Off'}</span>
          <InputToggle
            type="checkbox"
            {...register('isTimeGame')}
            onChange={handleCheckboxChange}
          />
          <SwitchToggle />
        </LabelToggle>
      </LabelContainer>
      <LabelContainer>
        <Title>Time to answer</Title>
        <DurationFieldContainer>
          <SetNumberBtn onClick={subtractTime} />
          <CustomNumberInput
            type="number"
            readOnly
            {...register('duration', {
              min: 10,
              max: 60,
            })}
            id="duration"
          />
          <SetMoreBtn onClick={addTime} />
        </DurationFieldContainer>
      </LabelContainer>
      <div>
        <button onClick={setDefaultValues}>default</button>
        <button type="submit">save</button>
      </div>
    </form>
  );
};

export default SettingsForm;
