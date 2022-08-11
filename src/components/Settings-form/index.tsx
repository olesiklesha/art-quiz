import React, { useCallback, useContext, useState } from 'react';
import { GlobalActionKind, GlobalContext } from '../../store';
import { useForm } from 'react-hook-form';
import { ISettings } from '../../models';
import { DEFAULT_SETTINGS, DUR_STEP, MAX_DUR, MAX_VOL, MIN_DUR } from '../../constants';
import {
  BtnContainer,
  CustomNumberInput,
  CustomRange,
  DurationFieldContainer,
  FieldsContainer,
  FormBtn,
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
import { playAudio } from '../../utils';

const SettingsForm = () => {
  const [{ settings }, dispatch] = useContext(GlobalContext);
  const { register, handleSubmit, setValue, getValues } = useForm<ISettings>({
    defaultValues: { ...settings },
  });
  const [rangeValue, setRangeValue] = useState(getValues('volume'));
  const [checkboxValue, setCheckboxValue] = useState(getValues('isTimeGame'));

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRangeValue(Number(e.currentTarget.value));
    playAudio(true, Number(e.currentTarget.value));
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
    setRangeValue(volume);

    dispatch({
      type: GlobalActionKind.UPDATE_SETT_STATE,
      payload: {
        duration,
        volume,
        isTimeGame,
      },
    });
  }, [setValue, setRangeValue, dispatch]);

  const mute = useCallback(() => {
    setRangeValue(0);
    setValue('volume', 0);
  }, [setValue]);

  const setMax = useCallback(() => {
    setRangeValue(MAX_VOL);
    setValue('volume', MAX_VOL);
  }, [setValue]);

  const addTime = useCallback(() => {
    const prev = getValues('duration');
    if (prev < MAX_DUR) {
      setValue('duration', prev + DUR_STEP);
    }
  }, [getValues, setValue]);

  const subtractTime = useCallback(() => {
    const prev = getValues('duration');
    if (prev > MIN_DUR) {
      setValue('duration', prev - DUR_STEP);
    }
  }, [getValues, setValue]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FieldsContainer>
        <LabelContainer>
          <Title>Volume</Title>
          <CustomRange
            type="range"
            id="volume"
            {...register('volume')}
            rangeValue={rangeValue}
            onInput={handleVolumeChange}
            min={0}
            max={MAX_VOL}
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
                min: MIN_DUR,
                max: MAX_DUR,
              })}
              id="duration"
            />
            <SetMoreBtn onClick={addTime} />
          </DurationFieldContainer>
        </LabelContainer>
      </FieldsContainer>
      <BtnContainer>
        <FormBtn accent={false} onClick={setDefaultValues}>
          Default
        </FormBtn>
        <FormBtn accent={true} type="submit">
          Save
        </FormBtn>
      </BtnContainer>
    </form>
  );
};

export default SettingsForm;
