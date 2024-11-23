import React from 'react'
import './coffee_shop.css'
const Menu = () => {
  return (
    <section className="menu-section" id="menu">
    <h2 className="section-title">Our Menu</h2>
    <div className="section-content">
    <ul className="menu-list">
    <li className="menu-item">
    <img src="https://www.pngkey.com/png/full/259-2596779_cooldrinks-png.png" alt="Hot Beverages" className="menu-image" />
    <div className="menu-details">
    <h3 className="name">Hot Beverages</h3>
    <p className="text">Wide range of Steaming hot coffee to make you fresh and light.</p>
    </div>
    </li>
    <li className="menu-item">
    <img src="https://png.pngtree.com/png-clipart/20230415/original/pngtree-summer-ice-drink-colorful-cool-png-image_9058286.png" alt="Cold Beverages" className="menu-image" />
    <div className="menu-details">
    <h3 className="name">Cold Beverages</h3>
    <p className="text">Creamy and frothy cold coffee to make you cool.</p>
    </div>
    </li>
    <li className="menu-item">
    <img src="https://png.pngtree.com/png-clipart/20230421/original/pngtree-freshly-squeezed-juice-png-image_9071529.png" alt="Refreshment" className="menu-image" />
    <div className="menu-details">
    <h3 className="name">Refreshment</h3>
    <p className="text">Fruit and icy refreshing drink to make feel refresh.</p>
    </div>
    </li>
    <li className="menu-item">
    <img src="https://www.freeiconspng.com/uploads/fast-food-banner-png-0.png" alt="Special Combos" className="menu-image" />
    <div className="menu-details">
    <h3 className="name">Special Combos</h3>
    <p className="text">Your favorite eating and drinking combations.</p>
    </div>
    </li>
    <li className="menu-item">
    <img src="https://www.pngplay.com/wp-content/uploads/13/Dessert-Download-Free-PNG.png" alt="Dessert" className="menu-image" />
    <div className="menu-details">
    <h3 className="name">Dessert</h3>
    <p className="text">Satiate your palate and take you on a culinary treat.</p>
    </div>
    </li>
    <li className="menu-item">
    <img src="https://static.vecteezy.com/system/resources/previews/025/064/792/non_2x/fast-food-meal-with-ai-generated-free-png.png" alt="burger & French Fries" className="menu-image" />
    <div className="menu-details">
    <h3 className="name">Burger & French Fries</h3>
    <p className="text">Quick bites to satisfy your small size hunger.</p>
    </div>
    </li>
    </ul>
    </div>
    </section>
  )
}

export default Menu