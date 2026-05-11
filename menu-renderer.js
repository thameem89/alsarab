
const menuData = {
  "menu_categories": [
    {
      "category": "Signature Special",
      "image": "images/menu_burger_1777372388716.png",
      "items": [
        {
          "name": "WAGYU SLIDER (BEEF / CHICKEN)",
          "arabic_name": "لحم بقر / دجاج",
          "price": 32.00,
          "image": "images/feat_wagyu_1777372524447.png"
        },
        {
          "name": "SARAB TENDER CHEETOS",
          "arabic_name": "ساراب تيندر شيتوس",
          "price": "18/23",
          "image": "images/menu_fried_chicken_1777372438970.png"
        },
        {
          "name": "SIGNATURE ZINKER",
          "arabic_name": "زنجر سبنشال",
          "price": 15.00,
          "image": "images/menu_burger_1777372388716.png"
        },
        {
          "name": "DOUBLE MATHAFI BURGER",
          "arabic_name": "برجر ماثافي دبل",
          "price": 20.00,
          "image": "images/menu_burger_1777372388716.png"
        }
      ]
    },
    {
      "category": "Flask Tea",
      "image": "images/menu_karak_1777372473108.png",
      "items": [
        { "name": "KARAK TEA", "arabic_name": "شاي كراك", "price": "3/5" },
        { "name": "BLACK TEA", "arabic_name": "شاي ساده", "price": "3/5" },
        { "name": "NESCAFE", "arabic_name": "نسكافيه", "price": "5/9" },
        { "name": "HORLICKS", "arabic_name": "هورلكس", "price": "5/9" },
        { "name": "MALIKI TEA", "arabic_name": "شاي مليكي", "price": "4/5" }
      ]
    },
    {
      "category": "Fresh Milk",
      "items": [
        { "name": "FRESH MILK TEA", "arabic_name": "شاي حليب طازج", "price": "2/4" },
        { "name": "ZAFRAN", "arabic_name": "زعفران", "price": "3/5" },
        { "name": "GINGER MILK", "arabic_name": "حليب زنجيل", "price": "3/5" },
        { "name": "BOOST", "arabic_name": "بوست", "price": "3/5" }
      ]
    },
    {
      "category": "Burgers",
      "image": "images/menu_burger_1777372388716.png",
      "items": [
        { "name": "MEGA ZINKER SP.", "price": 18.00 },
        { "name": "DOUBLE BURGER CHI./MEAT", "price": "14/17" },
        { "name": "ZINKER BURGER", "price": 12.00 },
        { "name": "THAI STYLE BURGER", "price": 13.00 },
        { "name": "JUMBO PRAWNS", "price": 13.00 }
      ]
    },
    {
      "category": "Poratta Sandwiches",
      "image": "images/menu_wrap_1777372405864.png",
      "items": [
        { "name": "SARAB SP. PORATTA", "price": 11.00 },
        { "name": "ZINKER PORATTA", "price": 10.00 },
        { "name": "OMAN CHIPS", "price": 3.50 },
        { "name": "INSTAGRAM PORATTA", "price": 11.00 }
      ]
    },
    {
      "category": "Sandwiches",
      "items": [
        { "name": "KABAB CHICKEN / MUTTON", "arabic_name": "كباب دجاج / لحم", "price": 6.00 },
        { "name": "CHICKEN LIME", "arabic_name": "دجاج ليمون", "price": 7.00 },
        { "name": "PRAWNS SANDWICH", "arabic_name": "ساندوتش ربيان", "price": 6.00 }
      ]
    },
    {
      "category": "Combo Sandwiches",
      "image": "images/menu_wrap_1777372405864.png",
      "items": [
        { "name": "SUPER MATHAFI COMBO", "price": 16.00 },
        { "name": "ZINKER SUPREME", "price": 12.00 },
        { "name": "PRAWNS SUPREME", "price": 14.00 }
      ]
    },
    {
      "category": "Signature Juices",
      "image": "images/menu_juice_1777372455880.png",
      "items": [
        { "name": "FALAK", "price": "13/17" },
        { "name": "ABOOD", "price": "10/13" },
        { "name": "TENDER COCONUT SHAKE", "price": 13.00 }
      ]
    },
    {
      "category": "Meals",
      "image": "images/feat_family_meal_1777372554145.png",
      "items": [
        { "name": "TREND MEAL", "price": 25.00 },
        { "name": "FAMILY MEAL", "price": 55.00 },
        { "name": "FUNCTION MEAL", "price": 109.00 }
      ]
    }
  ]
};

function renderMenu() {
  const container = document.getElementById('menu-content');
  const navContainer = document.querySelector('.category-nav');
  
  container.innerHTML = '';
  navContainer.innerHTML = '';

  menuData.menu_categories.forEach((cat, index) => {
    const catId = cat.category.toLowerCase().replace(/[^a-z]/g, '-');
    
    // Add to Nav
    const navLink = document.createElement('a');
    navLink.href = `#${catId}`;
    navLink.textContent = cat.category;
    navContainer.appendChild(navLink);

    // Create Section
    const section = document.createElement('section');
    section.className = 'menu-category';
    section.id = catId;
    if (index % 2 !== 0) section.style.background = 'var(--mid)';

    let catImgHtml = cat.image ? `<img src="${cat.image}" class="category-banner active" alt="${cat.category}">` : '';
    
    section.innerHTML = `
      <h2 class="menu-category-title">${cat.category}</h2>
      ${catImgHtml}
      <div class="items-list">
        ${cat.items.map(item => {
          const itemImg = item.image || 'images/media__1777372228694.png';
          return `
            <div class="item-row">
              <img src="${itemImg}" class="item-img" alt="${item.name}">
              <div class="item-info">
                <div class="item-name">${item.name}</div>
                ${item.arabic_name ? `<div class="item-arabic">${item.arabic_name}</div>` : ''}
              </div>
              <div class="item-price">AED ${item.price}</div>
              <button class="btn-add-mini" onclick="addToCart('${item.name}', '${item.price}')">Add +</button>
            </div>
          `;
        }).join('')}
      </div>
    `;
    container.appendChild(section);
  });
}

document.addEventListener('DOMContentLoaded', renderMenu);
