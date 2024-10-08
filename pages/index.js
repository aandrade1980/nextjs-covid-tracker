import Head from 'next/head';
import { useState } from 'react';
import {
  Input,
  Spinner,
  Table,
  Tbody,
  Td,
  Text,
  Thead,
  Th,
  Tr,
  InputGroup,
  InputRightElement
} from '@chakra-ui/react';
import { CloseIcon } from '@chakra-ui/icons';

import { useCountry, useMostCasesCountries } from '@/utils/helpers';

import CountriesTable from 'src/components/CountriesTable';

import styles from '@/styles/Home.module.css';

export default function Home() {
  const [countryName, setCountryName] = useState('');

  const { countries, error } = useMostCasesCountries();
  const { country, isLoading } = useCountry(countryName);

  return (
    <div className={styles.container}>
      <Head>
        <title>Covid Tracker</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to Covid Tracker!</h1>

        <p className={styles.description}>
          Top 10 countries with the most cases today
        </p>

        <div className={styles.grid}>
          <div className={styles.card}>
            {error ? (
              <div style={{ color: 'red' }}>
                Error getting countries: {error}
              </div>
            ) : (
              <CountriesTable countries={countries} />
            )}
          </div>
        </div>

        <footer className={styles.footer}>
          <form>
            <Text fontSize="xl">Results by country</Text>
            <InputGroup>
              <Input
                placeholder="USA"
                type="text"
                name="country"
                id="country"
                value={countryName}
                onChange={evt => setCountryName(evt.target.value)}
              />
              <InputRightElement
                children={
                  countryName && <CloseIcon color="gray.500" w={3} h={3} />
                }
                style={{ cursor: 'pointer' }}
                onClick={() => setCountryName('')}
              />
            </InputGroup>
          </form>
          {isLoading ? (
            <div
              style={{ width: 600, display: 'flex', justifyContent: 'center' }}
            >
              <Spinner
                thickness="4px"
                speed="0.65s"
                emptyColor="gray.200"
                color="blue.500"
                size="lg"
              />
            </div>
          ) : (
            <div style={{ opacity: country ? 1 : 0, marginLeft: 25 }}>
              <Table>
                <Thead>
                  <Tr>
                    <Th isNumeric>Active</Th>
                    <Th isNumeric>Cases</Th>
                    <Th isNumeric>Deaths</Th>
                    <Th isNumeric>Cases Per Million</Th>
                    <Th isNumeric>Today Cases</Th>
                    <Th isNumeric>Today Deaths</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td isNumeric>{country?.active}</Td>
                    <Td isNumeric>{country?.cases}</Td>
                    <Td isNumeric>{country?.deaths}</Td>
                    <Td isNumeric>{country?.casesPerOneMillion}</Td>
                    <Td isNumeric>{country?.todayCases}</Td>
                    <Td isNumeric>{country?.todayDeaths}</Td>
                  </Tr>
                </Tbody>
              </Table>
            </div>
          )}
        </footer>
      </main>
    </div>
  );
}
