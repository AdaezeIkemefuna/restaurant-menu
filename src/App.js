import React, { useState, useEffect } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";
import logo from "./mealLogo.svg";
import AddMenu from "./AddMenu";

const App = () => {
  const allCategories = ["all", ...new Set(items.map((item) => item.category))];
  const [menuItems, setMenuItems] = useState(items);
  const [activeCategory, setActiveCategory] = useState("");
  const [categories] = useState(allCategories);

  useEffect(() => {
    localStorage.setItem("menuItems", JSON.stringify(items))
  }, [menuItems])


  // adding menu
  const [title, setTitle] = useState('')
  const [descr, setDescr] = useState('')
  const [priceOfMeal, setPrice] = useState('')
  const [cate, setCate] = useState('')
  const [url, setImage] = useState('')

  const addItems = () => {
    if (title) {
      setMenuItems([
        ...menuItems, { id: Math.random() * 6, title: title, desc: descr, category: cate, img: url, price: priceOfMeal }
      ])
      setTitle('')
      setDescr('')
      setCate('')
      setPrice('')
      setImage('')
    }


  }

  const filterItems = (category) => {
    setActiveCategory(category);
    if (category === "all") {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };
  return (
    <main>
      <section className="menu section">
        <div className="title">
          <img src={logo} alt="logo" className="logo" />
          <h2>Menu List</h2>
          <div className="underline"></div>
        </div>
        <Categories
          categories={categories}
          activeCategory={activeCategory}
          filterItems={filterItems}
        />
        <Menu items={menuItems} setMenu={setMenuItems} />

        < AddMenu handleSubmit={addItems} title={title} setTitle={setTitle} price={priceOfMeal} setPrice={setPrice} descr={descr} setDescr={setDescr} url={url} setImage={setImage} cate={cate} setCate={setCate} />
      </section>
    </main>
  );
};

export default App;
