export const ToggleButton = () => {
  return (
    <label className='label'>
      <div className='toggle'>
        <input
          className='toggle-state'
          type='checkbox'
          name='check'
          value='check'
        />
        <div className='indicator'></div>
      </div>
    </label>
  );
};
