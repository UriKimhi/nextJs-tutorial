import Card from "@/components/Card";
const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const getSingleDrink = async (id) => {
  console.log(id);
  const res = await fetch(`${url}${id}`);
  if (!res.ok) {
    throw new Error("Faild to fetch a drink");
  }
  const data = await res.json();
  const drinks = data.drinks || [];
  console.log(drinks);
  return drinks;
};

const SingleDrinkPage = async ({ params }) => {
  const drink = await getSingleDrink(params.id);
  const drinkDetails = drink[0];
  return <Card drink={drinkDetails} />;
};

export default SingleDrinkPage;
