export default async (req, res) => {
  try {
    const { limit } = req.query;
    const response = await fetch(
      'https://coronavirus-19-api.herokuapp.com/countries'
    );

    const countries = await response.json();

    const sortedCountries = countries.sort(
      (a, b) => b.todayCases - a.todayCases
    );

    return res.status(200).json(sortedCountries.splice(1, limit));
  } catch (error) {
    return res.status(500).json({ error: 'Something went wrong', status: 500 });
  }
};
