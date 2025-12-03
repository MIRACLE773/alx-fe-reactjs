import { useEffect, useState } from "react";

export default function HomePage() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("/src/data.json")
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-center mb-10">
        Recipe Sharing Platform
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {recipes.map((recipe) => (
          <div
            key={recipe.id}
            className="bg-white rounded-xl shadow-lg p-4 hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-48 object-cover rounded-xl mb-4"
            />
            <h2 className="text-2xl font-semibold">{recipe.title}</h2>
            <p className="text-gray-600 mt-2">{recipe.summary}</p>

            <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
              View Recipe
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
