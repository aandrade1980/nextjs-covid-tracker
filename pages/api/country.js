export default async (req, res) => {
  try {
    const { name } = req.query;
    const response = await fetch(
      'https://coronavirus-19-api.herokuapp.com/countries'
    );

    const countries = await response.json();

    const country = countries.filter(
      country => country.country.toLowerCase() === name.toLowerCase()
    );

    return res.status(200).json(country && country[0]);
  } catch (error) {
    console.error('Error getting country: ', error);
    return res.status(500).json({ error: 'Something went wrong' });
  }
};
