import React from 'react';
import './megaMenu.scss';
import {
  vehicles,
  charging,
  energy,
  discover,
  shop,
} from '../../data/megaMenuDatas';

const MegaMenu = ({ openedMenuItem }) => {
  return (
    <div className="megamenu">
      {openedMenuItem === 'shop' && (
        <ul className="shop">
          {shop.map((item) => (
            <li>
              <img src={`/images/${item.img}`} alt={item.title} />
              <h4>{item.title}</h4>
            </li>
          ))}
        </ul>
      )}

      {openedMenuItem === 'discover' && (
        <div className="discover">
          {discover.map((item) => (
            <ul>
              <h3>{item.header}</h3>
              {item.items.map((item) => (
                <li className="discoverItem" key={item.id}>
                  {item}
                </li>
              ))}
            </ul>
          ))}
        </div>
      )}

      {openedMenuItem === 'charging' && (
        <>
          {charging.map((vehicle) => (
            <>
              <div className="megaMenu__leftInside">
                <img src={`/images/${vehicle.img}`} alt={vehicle.title} />
                <h4>{vehicle.title}</h4>
                <div className="details">
                  <small>{vehicle.details1}</small>
                  <small>{vehicle.details2}</small>
                </div>
              </div>
            </>
          ))}
          <div className="megaMenu__rightInside">
            <ul>
              <li>Help Me Charge</li>
              <li>Charging Calculator</li>
              <li>Charging With NACS</li>
              <li>Supercharger Voting</li>
              <li>Host a Supercharger</li>
              <li>Commercial Charging</li>
              <li>Host Wall Connectors</li>
            </ul>
          </div>
        </>
      )}

      {openedMenuItem === 'energy' && (
        <>
          {energy.map((vehicle) => (
            <>
              <div className="megaMenu__leftInside">
                <img src={`/images/${vehicle.img}`} alt={vehicle.title} />
                <h4>{vehicle.title}</h4>
                <div className="details">
                  <small>{vehicle.details1}</small>
                  <small>{vehicle.details2}</small>
                </div>
              </div>
            </>
          ))}
          <div className="megaMenu__rightInside">
            <ul>
              <li>Help Me Charge</li>
              <li>Charging Calculator</li>
              <li>Charging With NACS</li>
              <li>Supercharger Voting</li>
              <li>Host a Supercharger</li>
              <li>Commercial Charging</li>
              <li>Host Wall Connectors</li>
            </ul>
          </div>
        </>
      )}

      {openedMenuItem === 'vehicles' && (
        <>
          <div className="deneme">
            {vehicles.map((vehicle) => (
              <div className="megaMenu__leftInside">
                <img src={`/images/${vehicle.img}`} alt={vehicle.title} />
                <h4>{vehicle.title}</h4>
                <div className="details">
                  <small>{vehicle.details1}</small>
                  <small>{vehicle.details2}</small>
                </div>
              </div>
            ))}
          </div>

          <div className="megaMenu__rightInside">
            <ul>
              <li>Inventory</li>
              <li>Used Cars</li>
              <li>Demo Drive</li>
              <li>Trade-in</li>
              <li>Compare</li>
              <li>Help Me Charge</li>
              <li>Fleet</li>
              <li>Semi</li>
              <li>Roadster</li>
            </ul>
          </div>
        </>
      )}
    </div>
  );
};

export default MegaMenu;
