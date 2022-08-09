import React, { useCallback, useContext } from 'react';
import { GlobalActionKind, GlobalContext } from '../../store';
import { useForm } from 'react-hook-form';
import { ISettings } from '../../models';
import { DEFAULT_SETTINGS } from '../../constants';

const SettingsForm = () => {
  const [{ settings }, dispatch] = useContext(GlobalContext);
  const { register, handleSubmit, setValue } = useForm<ISettings>({
    defaultValues: { ...settings },
  });

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

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="volume">
        volume
        <input type="range" id="volume" />
      </label>
      <label htmlFor="time">
        Time game
        <input type="checkbox" id="time" />
      </label>
      <label htmlFor="duration">
        Time to answer
        <input type="number" min={10} max={60} {...register('duration')} id="duration" />
      </label>
      <div>
        <button onClick={setDefaultValues}>default</button>
        <button type="submit">save</button>
      </div>
    </form>
  );
};

export default SettingsForm;
