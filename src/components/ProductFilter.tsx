import React, { ButtonHTMLAttributes, useContext } from 'react';
import Slider from './buttons/Slider';
import FilterContext from '../context/FilterContext';

const ProductFilter = () => {

  const {
    setHeightMin, setHeightMax,
    setDiameterMin, setDiameterMax,
    setStandingPlace, standingPlace,
    setNameFilter, nameFilter
  } = useContext(FilterContext);

  const handleDiameterSliderChange = (min: number, max: number) => {
    setDiameterMin(min);
    setDiameterMax(max);
  };

  const handleHeightChange = (min: number, max: number) => {
    setHeightMin(min);
    setHeightMax(max);
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNameFilter(e.target.value);
  };

  const handleStandingPlace = (place: string) => {
    const updatedStandingPlace = standingPlace.includes(place) ?
      standingPlace.filter(item => item !== place)
      : [...standingPlace, place];
    setStandingPlace(updatedStandingPlace);
  }

  const handleSearchClick = () => {
    setNameFilter(nameFilter);
  };

  return (
    <form className='filter-container'
      name='search'>
      {/* search name */}
      <div className='search-wrapper'>
        <input type="text" placeholder='Search..' id='search'
          onChange={handleNameChange} />

        <button
          onClick={(event) => {
            event.preventDefault();
            handleSearchClick();
          }}
          className='search-button'
          type="button">
          <img src="/icons/icon-search.svg" alt="Confirm search" />
        </button>
      </div>
      <div className='filter-wrapper'>
        {/* height */}
        <Slider
          name={'Height product'}
          min={90}
          max={180}
          initialMinValue={90}
          initialMaxValue={180}
          onChange={handleHeightChange}
        />
        {/* diameter */}
        <Slider
          name={'Diameter pot'}
          min={30}
          max={55}
          initialMinValue={30}
          initialMaxValue={55}
          onChange={handleDiameterSliderChange}
        />
        {/* standing place */}
        <div >
          <p>Standing place</p>
          <div className="switch-button-container">
            {/* sun */}
            <button
              type="button"
              onClick={() => handleStandingPlace('Sun')}
              className={'switch-button'}
              style={{
                border: `1px solid ${standingPlace.includes('Sun') ? 'var(--detail-color)' : 'var(--border-color)'
                  }`,
              }}
            >
              <img
                src='/icons/icon-sun.svg'
                alt="Sun"
                style={{ opacity: standingPlace.includes('Sun') ? 1 : 0.3 }}
              />
              <p>
                Sun
              </p>
            </button>

            {/* partail */}
            <button
              type="button"
              onClick={() => handleStandingPlace('Partial')}
              className={'switch-button'}
              style={{
                border: `1px solid ${standingPlace.includes('Partial') ? 'var(--detail-color)' : 'var(--border-color)'
                  }`,
              }}
            >
              <img
                src='/icons/icon-partial.svg'
                alt="Partial"
                style={{ opacity: standingPlace.includes('Partial') ? 1 : 0.3 }}
              />
              <p>
                Partial
              </p>
            </button>

            {/* shadow */}
            <button
              type="button"
              onClick={() => handleStandingPlace('Shadow')}
              className={'switch-button'}
              style={{
                border: `1px solid ${standingPlace.includes('Shadow') ? 'var(--detail-color)' : 'var(--border-color)'
                  }`,
              }}
            >
              <img
                src='/icons/icon-shadow.svg'
                alt="Shadow"
                style={{ opacity: standingPlace.includes('Shadow') ? 1 : 0.3 }}
              />
              <p>
                Shadow
              </p>
            </button>
          </div>
        </div>
      </div>
    </form>
  )
}

export default ProductFilter