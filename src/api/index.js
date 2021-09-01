const { REACT_APP_BASE_API } = process.env;

export const fetchQuestions = async (category = "", difficulty = "") => {
  const response = await fetch(
    REACT_APP_BASE_API +
      `${category && `&category=${category}`}${
        difficulty && `&difficulty=${difficulty}`
      }&type=multiple`
  );

  return response.json();
};
