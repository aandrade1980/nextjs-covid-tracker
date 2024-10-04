import useSWR from 'swr';

const fetcher = async url => {
  try {
    const response = await fetch(url);

    return await response.json();
  } catch (error) {
    console.error('Error fetching data: ', error);
  }
};

export const useMostCasesCountries = (limit = 10) => {
  const { data } = useSWR(`api/countries?limit=${limit}`, fetcher);

  return { countries: data, error: data?.error };
};

export const useCountry = countryName => {
  const { data, error } = useSWR(
    countryName && countryName.length >= 3
      ? `api/country?name=${countryName}`
      : null,
    fetcher
  );

  return {
    country: data,
    isLoading: countryName && !error && !data,
    isError: error
  };
};
