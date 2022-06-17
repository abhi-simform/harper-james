export interface Clients {
  id: number;
  clientid: string;
  status: string;
  name: string;
  parent: string;
  plan: string;
  startdate: string;
  enddate: string;
  address: string;
  solicitorrate: string;
  legalrate: string;
  invoice: string;
}

export const clients = [
  {
    id: 1,
    clientid: 'AD00000001',
    status: 'Active',
    name: 'Admedo',
    parent: 'Admedo',
    plan: 'Enterprise',
    startdate: '10/05/2021',
    enddate: '09/05/2022',
    address: '96 Neville Street, Inchinnah, UK',
    solicitorrate: '£125',
    legalrate: '£99',
    invoice: '£6500',
  },
  {
    id: 2,
    clientid: 'AL00000002',
    status: 'Inactive',
    name: 'Alvius',
    parent: 'Alvius',
    plan: 'On-Demand',
    startdate: '08/08/2021',
    enddate: '07/08/2022',
    address: '91 Mill Lane, Cornwood, UK',
    solicitorrate: '£175',
    legalrate: '-',
    invoice: '£2500',
  },
  {
    id: 3,
    clientid: 'MA00000003',
    status: 'Suspended',
    name: 'Madelyn Baptista',
    parent: 'Madelyn Baptista',
    plan: 'City',
    startdate: '04/10/2021',
    enddate: '-',
    address: '57 Bouverie Road, Weston Longville, UK',
    solicitorrate: '£250',
    legalrate: '£125',
    invoice: '£9500',
  },
  {
    id: 4,
    clientid: 'AP00000004',
    status: 'Inactive',
    name: 'Applaud',
    parent: 'Applaud',
    plan: 'Enterprise',
    startdate: '06/10/2021',
    enddate: '05/10/2022',
    address: '91 Mill Lane, Cornwood, UK',
    solicitorrate: '£125',
    legalrate: '£99',
    invoice: '£12500',
  },
  {
    id: 5,
    clientid: 'KI00000005',
    status: 'Active',
    name: 'Kianna Septimus',
    parent: 'Rayna Dokidis',
    plan: 'Extended Enterprise',
    startdate: '24/12/2021',
    enddate: '23/12/2022',
    address: '57 Bouverie Road, Weston Longville, UK',
    solicitorrate: '£125',
    legalrate: '£99',
    invoice: '£9500',
  },
];
