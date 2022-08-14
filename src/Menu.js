import React from "react";
import Trash from './delete.png'

const Menu = ({ items, setMenu }) => {

  return (
    <div className="section-center">
      {items.map((item) => {
        const { id, title, img, desc, price } = item;
        const deleteMenu = () => {
          setMenu(items.filter(el => el.id !== item.id))
        }
        return (
          <article key={id} className="menu-item">
            <img src={img} alt={title} className="photo" />
            <div className="item-info">
              <header>
                <h4>{title}</h4>
                <h4 className="price">${price}</h4>
              </header>
              <p className="item-text">{desc}</p>
              <div className="delete" onClick={deleteMenu}> <img src={Trash} alt="" width={"24px"} /></div>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Menu;
