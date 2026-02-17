const CURRENCIES = [
  {
    code: 'BHD',
    name: 'Bahraini Dinar',
    id: 5,
    version: 0,
  },
  {
    code: 'EUR',
    name: 'Euro',
    id: 1,
    version: 0,
  },
  {
    code: 'JPY',
    name: 'Japanese Yen',
    id: 4,
    version: 0,
  },
  {
    code: 'GBP',
    name: 'Pound Sterling',
    id: 3,
    version: 0,
  },
  {
    code: 'USD',
    name: 'US Dollar',
    id: 2,
    version: 0,
  },
];

const CUSTOMERS = [
  {
    fullName: 'Miss Amara Mbaye',
    id: 41,
  },
  {
    fullName: 'Miss Ansh Kaya',
    id: 29,
  },
  {
    fullName: 'Miss Charee Jacques',
    id: 14,
  },
  {
    fullName: 'Miss Disney Leonard',
    id: 11,
  },
  {
    fullName: 'Miss Georgina Zalewski',
    id: 23,
  },
  {
    fullName: 'Miss Giovanni Leone',
    id: 35,
  },
  {
    fullName: 'Miss Lucille Gilbert',
    id: 8,
  },
  {
    fullName: 'Miss Marjorie Marshall',
    id: 3,
  },
  {
    fullName: 'Miss Rivka Booth',
    id: 5,
  },
  {
    fullName: 'Miss Sakura Kobayashi',
    id: 39,
  },
];

export async function fetchCustomers(text: string) {
  const records = CUSTOMERS;
  // dummy promise
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, 300);
  });

  return text
    ? records.filter((r) => r.fullName.toLowerCase().includes(text.toLowerCase()))
    : records;
}

export async function fetchCurrencies(text: string) {
  const records = CURRENCIES;
  // dummy promise
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, 300);
  });

  return text ? records.filter((r) => r.name.toLowerCase().includes(text.toLowerCase())) : records;
}
