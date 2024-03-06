export async function useSearch() {
  try {
    const res = await fetch(
      "https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata"
    );
    if (!res.ok) {
      throw new Error("No wecipes found :(");
    }
    return await res.json();
  } catch (err) {
    console.err("No wecipes found :(" + err);
  }
}

export async function fetchRecipe() {
  try {
    const res = await fetch(
      "https://www.themealdb.com/api/json/v1/1/random.php"
    );
    if (!res.ok) {
      throw new Error("No wecipes :(");
    }
    await res.json();
    const recipe = respData.meals[0];
    return console.log(recipe);

  } catch (err) {
    console.error("No wecipes :(", err);
  }
}
