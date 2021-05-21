import {
  Box,
  Skeleton,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
} from '@chakra-ui/react';
import { v4 as uuidv4 } from 'uuid';

const SkeletonRow = () => (
  <Box as="tr">
    <Td>
      <Skeleton height="10px" />
    </Td>
    <Td>
      <Skeleton height="10px" />
    </Td>
    <Td>
      <Skeleton height="10px" />
    </Td>
    <Td>
      <Skeleton height="10px" />
    </Td>
  </Box>
);

const CountriesTable = ({ countries }) => (
  <Table variant="striped">
    <Thead>
      <Tr>
        <Th>Country</Th>
        <Th isNumeric>Today Cases</Th>
        <Th isNumeric>Today Deaths</Th>
      </Tr>
    </Thead>
    <Tbody>
      {!countries ? (
        <>
          <SkeletonRow />
          <SkeletonRow />
          <SkeletonRow />
          <SkeletonRow />
        </>
      ) : (
        countries.map(country => (
          <Tr key={uuidv4()}>
            <Td>{country.country}</Td>
            <Td isNumeric>{country.todayCases}</Td>
            <Td isNumeric>{country.todayDeaths}</Td>
          </Tr>
        ))
      )}
    </Tbody>
  </Table>
);

export default CountriesTable;
