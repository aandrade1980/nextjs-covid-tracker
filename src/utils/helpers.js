import useSWR from 'swr';

const fetcher = url => fetch(url).then(response => response.json());

export const useMostCasesCountries = (limit = 10) => {
  const { data, error } = useSWR(`api/countries?limit=${limit}`, fetcher);

  return { countries: data, error };
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
    isError: error,
  };
};
