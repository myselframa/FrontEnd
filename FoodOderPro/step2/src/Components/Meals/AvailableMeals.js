import Card from "../Ui/Card";
import classes from "./AvailableMeals.module.css";
import MealItem from "./MealIteam/MealItem";
const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Dosa",
    description: "Finest fish and veggies",
    price: 60.99,
  },
  {
    id: "m2",
    name: "Biryani",
    description: "A german specialty!",
    price: 100.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 200.99,
  },
  {
    id: "m4",
    name: "Pizza",
    description: "Healthy...and green...",
    price: 250.99,
  },
];
const AvailableMeals = () => {
  const mealList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
