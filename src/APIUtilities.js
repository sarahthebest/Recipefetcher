// export async function useSearch() {
//   try {
//     const res = await fetch(
//       "https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata"
//     );
//     if (!res.ok) {
//       throw new Error("No wecipes found :(");
//     }
//     return await res.json();
//   } catch (err) {
//     console.err("No wecipes found :(" + err);
//   }
// }

// export async function randomRecipe() {
//   try {
//     const res = await fetch(
//       "https://www.themealdb.com/api/json/v1/1/random.php"
//     );
//     if (!res.ok) {
//       throw new Error("No wecipes :(");
//     }
//     await res.json();
//     const recipe = res.meals[0];
//     return console.log(recipe);
//   } catch (err) {
//     console.error("No wecipes :(", err);
//   }
// }

// export async function allRecipes() {
//   try {
//     const res = await fetch(
//       "https://www.themealdb.com/api/json/v1/1/search.php?f=a"
//     );
//     if (!res.ok) {
//       throw new Error("No wecipes :(");
//     }
//     await res.json();
//     const recipe = res.meals[0];
//     return console.log(recipe);
//   } catch (err) {
//     console.error("No wecipes :(", err);
//   }
// }
