import Modal from "@/components/Modal";

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a";

const fetchdrink = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Falid to fetch drinks");
  }
  const data = await response.json();
  const drinks = data.drinks || [];
  const imgArray = drinks.map((drink, index) => ({
    imgLabel: drink.strGlass,
    imgPath: drink.strDrinkThumb,
    id: `my_modal_${index}`,
  }));
  return imgArray;
};

const DrinksPage = async () => {
  const images = await fetchdrink();
  return (
    <div>
      <h1 className="text-7xl my-10">drinks page</h1>
      <div className="grid grid-cols-4 gap-4">
        {images.map((img) => (
          <Modal
            key={img.id}
            label={img.imgLabel}
            img={img.imgPath}
            id={img.id}
          />
        ))}
      </div>
    </div>
  );
};

export default DrinksPage;
