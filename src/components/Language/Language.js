import React from 'react';
import './language.scss';
import { language } from '../../data/megaMenuDatas';

const Language = () => {
  return (
    <div className="language__container">
      {language.map((region) => (
        <div key={region.id}>
          <h3 style={{ color: '#3d3d3d' }}>{region.header}</h3>
          <ul>
            {region.title.map((country, index) => (
              <div
                className={`language__insideContainer ${
                  country === 'United States' ? 'active' : ''
                }`}
              >
                <li className="language__country" key={index}>
                  <strong>{country}</strong>{' '}
                </li>
                <li className="language__lang">{region.item[index]}</li>
              </div>
            ))}
            {region.header1 && (
              <div>
                <h3 style={{ color: '#3d3d3d' }}>{region.header1}</h3>
                <ul>
                  {region.title1.map((country1, index) => (
                    <div className="language__insideContainer">
                      <li className="language__country" key={index}>
                        <strong>{country1}</strong>{' '}
                      </li>
                      <li className="language__lang">{region.item1[index]}</li>
                    </div>
                  ))}
                </ul>
              </div>
            )}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Language;
