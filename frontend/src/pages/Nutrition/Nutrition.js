import React, { useState } from 'react';
import './Nutrition.css';

const nutritionData = {
  Monday: {
    veg: {
      breakfast: [
        { food: "Oats with Fruits", calories: 350, protein: "10g", carbs: "50g", fats: "15g", minerals: "Calcium, Iron" },
        { food: "Banana Smoothie", calories: 200, protein: "5g", carbs: "40g", fats: "5g", minerals: "Potassium, Magnesium" }
      ],
      lunch: [
        { food: "Paneer Wrap", calories: 450, protein: "25g", carbs: "45g", fats: "18g", minerals: "Calcium, Iron" },
        { food: "Lentil Soup", calories: 300, protein: "20g", carbs: "35g", fats: "10g", minerals: "Folate, Zinc" }
      ],
      dinner: [
        { food: "Vegetable Stir Fry", calories: 400, protein: "18g", carbs: "45g", fats: "10g", minerals: "Magnesium, Fiber" },
        { food: "Tofu Curry with Rice", calories: 500, protein: "22g", carbs: "50g", fats: "15g", minerals: "Calcium, Phosphorus" }
      ],
      snacks: [
        { food: "Greek Yogurt", calories: 150, protein: "8g", carbs: "15g", fats: "5g", minerals: "Calcium, B12" },
        { food: "Roasted Chickpeas", calories: 180, protein: "10g", carbs: "20g", fats: "6g", minerals: "Iron, Zinc" }
      ]
    },
    nonveg: {
      breakfast: [
        { food: "Scrambled Eggs", calories: 300, protein: "20g", carbs: "10g", fats: "20g", minerals: "Iron, Zinc" },
        { food: "Chicken Sausage Roll", calories: 350, protein: "15g", carbs: "30g", fats: "22g", minerals: "B12, Sodium" }
      ],
      lunch: [
        { food: "Grilled Chicken Salad", calories: 500, protein: "40g", carbs: "20g", fats: "20g", minerals: "Potassium, Magnesium" },
        { food: "Egg Fried Rice", calories: 550, protein: "25g", carbs: "50g", fats: "25g", minerals: "Iron, Selenium" }
      ],
      dinner: [
        { food: "Fish Tikka", calories: 600, protein: "35g", carbs: "30g", fats: "25g", minerals: "Omega-3, Phosphorus" },
        { food: "Chicken Soup", calories: 250, protein: "18g", carbs: "15g", fats: "10g", minerals: "Calcium, Zinc" }
      ],
      snacks: [
        { food: "Boiled Eggs", calories: 140, protein: "12g", carbs: "2g", fats: "10g", minerals: "Iron, B6" },
        { food: "Tuna Salad Cup", calories: 170, protein: "15g", carbs: "5g", fats: "10g", minerals: "Magnesium, Potassium" }
      ]
    }
  },
  // Add similar objects for Tuesday to Sunday...

  Tuesday: {
    veg: {
      breakfast: [
        { food: "Chia Pudding", calories: 300, protein: "12g", carbs: "35g", fats: "15g", minerals: "Magnesium, Calcium" },
        { food: "Green Smoothie", calories: 250, protein: "6g", carbs: "45g", fats: "5g", minerals: "Vitamin C, Potassium" }
      ],
      lunch: [
        { food: "Vegetable Burrito", calories: 550, protein: "20g", carbs: "60g", fats: "18g", minerals: "Iron, Fiber" },
        { food: "Chickpea Salad", calories: 400, protein: "18g", carbs: "50g", fats: "12g", minerals: "Folate, Zinc" }
      ],
      dinner: [
        { food: "Lentil Curry with Rice", calories: 450, protein: "22g", carbs: "60g", fats: "12g", minerals: "Iron, Fiber" },
        { food: "Grilled Veggie Skewers", calories: 350, protein: "15g", carbs: "40g", fats: "10g", minerals: "Vitamin C, Magnesium" }
      ],
      snacks: [
        { food: "Almonds", calories: 170, protein: "5g", carbs: "6g", fats: "15g", minerals: "Magnesium, Vitamin E" },
        { food: "Carrot Sticks with Hummus", calories: 200, protein: "5g", carbs: "20g", fats: "8g", minerals: "Vitamin A, Fiber" }
      ]
    },
    nonveg: {
      breakfast: [
        { food: "Bacon and Eggs", calories: 450, protein: "30g", carbs: "5g", fats: "35g", minerals: "Iron, B12" },
        { food: "Chicken Avocado Toast", calories: 400, protein: "20g", carbs: "30g", fats: "25g", minerals: "Potassium, Omega-3" }
      ],
      lunch: [
        { food: "Beef Burrito", calories: 600, protein: "40g", carbs: "55g", fats: "30g", minerals: "Zinc, Iron" },
        { food: "Chicken Caesar Salad", calories: 550, protein: "40g", carbs: "30g", fats: "35g", minerals: "Calcium, Vitamin K" }
      ],
      dinner: [
        { food: "Grilled Salmon", calories: 500, protein: "40g", carbs: "20g", fats: "30g", minerals: "Omega-3, Phosphorus" },
        { food: "Pork Chops with Potatoes", calories: 600, protein: "45g", carbs: "35g", fats: "40g", minerals: "Iron, Zinc" }
      ],
      snacks: [
        { food: "Beef Jerky", calories: 250, protein: "20g", carbs: "5g", fats: "15g", minerals: "Sodium, Iron" },
        { food: "Egg Muffins", calories: 180, protein: "15g", carbs: "3g", fats: "12g", minerals: "Vitamin D, B12" }
      ]
    }
  },


  Wednesday: {
    veg: {
      breakfast: [
        { food: "Smoothie Bowl", calories: 350, protein: "12g", carbs: "55g", fats: "15g", minerals: "Vitamin C, Fiber" },
        { food: "Avocado Toast", calories: 400, protein: "10g", carbs: "40g", fats: "25g", minerals: "Potassium, Vitamin E" }
      ],
      lunch: [
        { food: "Stuffed Bell Peppers", calories: 500, protein: "20g", carbs: "55g", fats: "15g", minerals: "Iron, Vitamin C" },
        { food: "Tofu Stir Fry", calories: 450, protein: "20g", carbs: "50g", fats: "12g", minerals: "Calcium, Iron" }
      ],
      dinner: [
        { food: "Vegetable Paella", calories: 600, protein: "18g", carbs: "80g", fats: "15g", minerals: "Iron, Fiber" },
        { food: "Zucchini Noodles with Pesto", calories: 350, protein: "10g", carbs: "25g", fats: "20g", minerals: "Magnesium, Vitamin K" }
      ],
      snacks: [
        { food: "Mixed Nuts", calories: 200, protein: "6g", carbs: "10g", fats: "18g", minerals: "Vitamin E, Magnesium" },
        { food: "Hummus with Veggies", calories: 180, protein: "7g", carbs: "15g", fats: "12g", minerals: "Vitamin A, B12" }
      ]
    },
    nonveg: {
      breakfast: [
        { food: "Egg and Bacon Muffin", calories: 450, protein: "25g", carbs: "30g", fats: "30g", minerals: "B12, Iron" },
        { food: "Chicken and Cheese Omelette", calories: 400, protein: "35g", carbs: "10g", fats: "25g", minerals: "Vitamin A, B12" }
      ],
      lunch: [
        { food: "Grilled Chicken Wrap", calories: 550, protein: "40g", carbs: "40g", fats: "25g", minerals: "Iron, Zinc" },
        { food: "Steak Salad", calories: 600, protein: "45g", carbs: "25g", fats: "40g", minerals: "Iron, Phosphorus" }
      ],
      dinner: [
        { food: "Chicken Alfredo", calories: 700, protein: "40g", carbs: "60g", fats: "40g", minerals: "Vitamin B12, Calcium" },
        { food: "Shrimp Stir Fry", calories: 500, protein: "30g", carbs: "30g", fats: "20g", minerals: "Selenium, Zinc" }
      ],
      snacks: [
        { food: "Grilled Chicken Skewers", calories: 250, protein: "20g", carbs: "5g", fats: "15g", minerals: "Iron, Vitamin B6" },
        { food: "Cheese Sticks", calories: 200, protein: "15g", carbs: "5g", fats: "15g", minerals: "Calcium, Vitamin D" }
      ]
    }
  },


  

  // Thursday:
  Thursday: {
    veg: {
      breakfast: [
        { food: "Acai Bowl", calories: 300, protein: "8g", carbs: "55g", fats: "10g", minerals: "Vitamin C, Fiber" },
        { food: "Almond Butter Toast", calories: 350, protein: "10g", carbs: "35g", fats: "20g", minerals: "Vitamin E, Magnesium" }
      ],
      lunch: [
        { food: "Spinach and Ricotta Pasta", calories: 500, protein: "20g", carbs: "60g", fats: "18g", minerals: "Calcium, Iron" },
        { food: "Curry Lentil Soup", calories: 400, protein: "18g", carbs: "45g", fats: "12g", minerals: "Iron, Fiber" }
      ],
      dinner: [
        { food: "Grilled Veggie Skewers", calories: 350, protein: "12g", carbs: "40g", fats: "12g", minerals: "Vitamin C, Potassium" },
        { food: "Chickpea Stew", calories: 400, protein: "15g", carbs: "60g", fats: "12g", minerals: "Folate, Magnesium" }
      ],
      snacks: [
        { food: "Coconut Yogurt", calories: 180, protein: "6g", carbs: "20g", fats: "9g", minerals: "Calcium, B12" },
        { food: "Pita with Hummus", calories: 250, protein: "8g", carbs: "35g", fats: "12g", minerals: "Iron, Vitamin A" }
      ]
    },
    nonveg: {
      breakfast: [
        { food: "Egg and Sausage Scramble", calories: 500, protein: "25g", carbs: "15g", fats: "35g", minerals: "Vitamin D, B12" },
        { food: "Salmon Bagel", calories: 450, protein: "30g", carbs: "35g", fats: "25g", minerals: "Omega-3, Vitamin D" }
      ],
      lunch: [
        { food: "Chicken Caesar Wrap", calories: 550, protein: "35g", carbs: "45g", fats: "25g", minerals: "Calcium, B12" },
        { food: "Steak and Potato Salad", calories: 600, protein: "40g", carbs: "40g", fats: "35g", minerals: "Zinc, Phosphorus" }
      ],
      dinner: [
        { food: "Pasta Primavera with Chicken", calories: 650, protein: "35g", carbs: "60g", fats: "25g", minerals: "Vitamin A, Calcium" },
        { food: "Chicken Wings with Rice", calories: 700, protein: "40g", carbs: "50g", fats: "40g", minerals: "Iron, Potassium" }
      ],
      snacks: [
        { food: "Mozzarella Sticks", calories: 300, protein: "15g", carbs: "25g", fats: "15g", minerals: "Calcium, Vitamin A" },
        { food: "Tuna Salad", calories: 250, protein: "20g", carbs: "10g", fats: "15g", minerals: "Omega-3, Vitamin B12" }
      ]
    }
  },



  // Friday:
  Friday: {
    veg: {
      breakfast: [
        { food: "Chia Pudding", calories: 300, protein: "12g", carbs: "35g", fats: "15g", minerals: "Magnesium, Calcium" },
        { food: "Fruit Salad with Yogurt", calories: 350, protein: "10g", carbs: "50g", fats: "10g", minerals: "Vitamin C, Calcium" }
      ],
      lunch: [
        { food: "Sweet Potato and Black Bean Salad", calories: 500, protein: "15g", carbs: "60g", fats: "15g", minerals: "Iron, Vitamin A" },
        { food: "Quinoa and Veggie Stir Fry", calories: 450, protein: "18g", carbs: "55g", fats: "12g", minerals: "Iron, Magnesium" }
      ],
      dinner: [
        { food: "Vegan Buddha Bowl", calories: 600, protein: "20g", carbs: "70g", fats: "20g", minerals: "Calcium, Iron" },
        { food: "Mushroom Risotto", calories: 500, protein: "15g", carbs: "65g", fats: "18g", minerals: "Vitamin D, Fiber" }
      ],
      snacks: [
        { food: "Roasted Almonds", calories: 200, protein: "5g", carbs: "10g", fats: "18g", minerals: "Vitamin E, Magnesium" },
        { food: "Rice Cakes with Almond Butter", calories: 150, protein: "5g", carbs: "20g", fats: "7g", minerals: "Iron, Magnesium" }
      ]
    },
    nonveg: {
      breakfast: [
        { food: "Bacon and Eggs", calories: 450, protein: "25g", carbs: "10g", fats: "35g", minerals: "Iron, B12" },
        { food: "Chicken Sausage Roll", calories: 350, protein: "15g", carbs: "30g", fats: "22g", minerals: "B12, Sodium" }
      ],
      lunch: [
        { food: "Grilled Chicken Salad", calories: 500, protein: "40g", carbs: "20g", fats: "20g", minerals: "Potassium, Magnesium" },
        { food: "Egg Fried Rice", calories: 550, protein: "25g", carbs: "50g", fats: "25g", minerals: "Iron, Selenium" }
      ],
      dinner: [
        { food: "Fish Tikka", calories: 600, protein: "35g", carbs: "30g", fats: "25g", minerals: "Omega-3, Phosphorus" },
        { food: "Chicken Soup", calories: 250, protein: "18g", carbs: "15g", fats: "10g", minerals: "Calcium, Zinc" }
      ],
      snacks: [
        { food: "Boiled Eggs", calories: 140, protein: "12g", carbs: "2g", fats: "10g", minerals: "Iron, B6" },
        { food: "Tuna Salad Cup", calories: 170, protein: "15g", carbs: "5g", fats: "10g", minerals: "Magnesium, Potassium" }
      ]
    }
  },



  // Saturday:
  Saturday: {
    veg: {
      breakfast: [
        { food: "Chia Pudding", calories: 300, protein: "12g", carbs: "35g", fats: "15g", minerals: "Magnesium, Calcium" },
        { food: "Green Smoothie", calories: 250, protein: "6g", carbs: "45g", fats: "5g", minerals: "Vitamin C, Potassium" }
      ],
      lunch: [
        { food: "Vegetable Burrito", calories: 550, protein: "20g", carbs: "60g", fats: "18g", minerals: "Iron, Fiber" },
        { food: "Chickpea Salad", calories: 400, protein: "18g", carbs: "50g", fats: "12g", minerals: "Folate, Zinc" }
      ],
      dinner: [
        { food: "Lentil Curry with Rice", calories: 450, protein: "22g", carbs: "60g", fats: "12g", minerals: "Iron, Fiber" },
        { food: "Grilled Veggie Skewers", calories: 350, protein: "15g", carbs: "40g", fats: "10g", minerals: "Vitamin C, Magnesium" }
      ],
      snacks: [
        { food: "Almonds", calories: 170, protein: "5g", carbs: "6g", fats: "15g", minerals: "Magnesium, Vitamin E" },
        { food: "Carrot Sticks with Hummus", calories: 200, protein: "5g", carbs: "20g", fats: "8g", minerals: "Vitamin A, Fiber" }
      ]
    },
    nonveg: {
      breakfast: [
        { food: "Bacon and Eggs", calories: 450, protein: "30g", carbs: "5g", fats: "35g", minerals: "Iron, B12" },
        { food: "Chicken Avocado Toast", calories: 400, protein: "20g", carbs: "30g", fats: "25g", minerals: "Potassium, Omega-3" }
      ],
      lunch: [
        { food: "Beef Burrito", calories: 600, protein: "40g", carbs: "55g", fats: "30g", minerals: "Zinc, Iron" },
        { food: "Chicken Caesar Salad", calories: 550, protein: "40g", carbs: "30g", fats: "35g", minerals: "Calcium, Vitamin K" }
      ],
      dinner: [
        { food: "Grilled Salmon", calories: 500, protein: "40g", carbs: "20g", fats: "30g", minerals: "Omega-3, Phosphorus" },
        { food: "Pork Chops with Potatoes", calories: 600, protein: "45g", carbs: "35g", fats: "40g", minerals: "Iron, Zinc" }
      ],
      snacks: [
        { food: "Beef Jerky", calories: 250, protein: "20g", carbs: "5g", fats: "15g", minerals: "Sodium, Iron" },
        { food: "Egg Muffins", calories: 180, protein: "15g", carbs: "3g", fats: "12g", minerals: "Vitamin D, B12" }
      ]
    }
  },



  // Sunday: (Cheat Day)
  Sunday: {
    veg: {
      breakfast: [
        { food: "Pancakes with Syrup", calories: 500, protein: "10g", carbs: "70g", fats: "20g", minerals: "Calcium, Iron" },
        { food: "French Toast", calories: 450, protein: "12g", carbs: "65g", fats: "18g", minerals: "Vitamin A, Iron" }
      ],
      lunch: [
        { food: "Pizza (Veg)", calories: 700, protein: "25g", carbs: "80g", fats: "30g", minerals: "Calcium, Magnesium" },
        { food: "Pasta with Cheese", calories: 650, protein: "18g", carbs: "90g", fats: "22g", minerals: "Iron, Vitamin A" }
      ],
      dinner: [
        { food: "Veggie Burger", calories: 600, protein: "22g", carbs: "50g", fats: "25g", minerals: "Calcium, Vitamin C" },
        { food: "Cheese Nachos", calories: 550, protein: "15g", carbs: "60g", fats: "30g", minerals: "Iron, Vitamin C" }
      ],
      snacks: [
        { food: "Chocolate Cake", calories: 350, protein: "5g", carbs: "50g", fats: "15g", minerals: "Calcium, Iron" },
        { food: "Ice Cream", calories: 200, protein: "4g", carbs: "30g", fats: "10g", minerals: "Calcium" }
      ]
    },
    nonveg: {
      breakfast: [
        { food: "Bacon and Waffles", calories: 600, protein: "20g", carbs: "50g", fats: "35g", minerals: "Iron, B12" },
        { food: "Sausage and Pancakes", calories: 550, protein: "25g", carbs: "45g", fats: "30g", minerals: "B12, Iron" }
      ],
      lunch: [
        { food: "Cheeseburger", calories: 750, protein: "35g", carbs: "60g", fats: "40g", minerals: "Iron, Vitamin C" },
        { food: "Chicken Wings", calories: 500, protein: "30g", carbs: "20g", fats: "30g", minerals: "B12, Zinc" }
      ],
      dinner: [
        { food: "Steak and Fries", calories: 800, protein: "50g", carbs: "60g", fats: "40g", minerals: "Iron, Zinc" },
        { food: "Fried Chicken", calories: 700, protein: "40g", carbs: "50g", fats: "35g", minerals: "Iron, Calcium" }
      ],
      snacks: [
        { food: "Donuts", calories: 300, protein: "4g", carbs: "40g", fats: "15g", minerals: "Iron, Calcium" },
        { food: "Potato Chips", calories: 200, protein: "3g", carbs: "25g", fats: "10g", minerals: "Potassium, Sodium" }
      ]
    }
  }


};

const Nutrition = () => {
  const [selectedDay, setSelectedDay] = useState("Monday");
  const [preference, setPreference] = useState("veg");

  const dayData = nutritionData[selectedDay][preference];

  const renderItems = (meal) => {
    return dayData[meal].map((item, index) => (
      <p key={index}>
        {item.food} | Calories: {item.calories} | Protein: {item.protein} | Carbs: {item.carbs} | Fats: {item.fats} | Minerals: {item.minerals}
      </p>
    ));
  };

  const days = Object.keys(nutritionData);

  return (
    <div className="nutrition-container">
      <h1>Nutrition for the Day</h1>

      <div className="filters">
        <div className="pref">
          <button onClick={() => setPreference("veg")}>🌱 Veg</button>
          <button onClick={() => setPreference("nonveg")}>🍗 Non-Veg</button>
        </div>
       <br></br>
        <div className="days">
          {days.map((day) => (
            <button key={day} onClick={() => setSelectedDay(day)}>{day}</button>
          ))}
        </div>
      </div>

      <div className="meal">
        <h2>🍳 Breakfast</h2>
        {renderItems("breakfast")}
      </div>

      <div className="meal">
        <h2>🥗 Lunch</h2>
        {renderItems("lunch")}
      </div>

      <div className="meal">
        <h2>🍽️ Dinner</h2>
        {renderItems("dinner")}
      </div>

      <div className="meal">
        <h2>🍎 Snacks</h2>
        {renderItems("snacks")}
      </div>
    </div>
  );
};

export default Nutrition;
