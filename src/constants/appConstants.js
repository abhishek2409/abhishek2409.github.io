export const departureFlightsConst = [{
    id: 1,
    departureCity: {
      code: 'DEL',
      name: 'Delhi'
    },
    arrivalCity: {
      code: 'PAR',
      name: 'Paris'
    },
    ifNonStop:false,
    stops:["LOC1","LOC2"],
    logo:require('../../public/images/logo.jpg'),
    flightNumber: 'Aeroflot SU 4456',
    duration: '2h 10m',
    arrivalTime:1521752100000,
    departureTime:1521752100000,
    fmtArrival: "Fri, 23 Mar",
    fmtArrivalTime: "04:35",
    fmtDeparture: "Fri, 23 Mar",
    fmtDepartureTime: "02:25",
    fmtDateofSearch:"9 Jul",
    departureTml: 'IGI T#3',
    arrivallTml: 'Paris T#1',
    baggageAllowance: {
      adult: 7,
      child: 10,
      units: 'kg'
    },
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    id: 2,
    logo:require('../../public/images/logo.jpg'),
    departureCity: {
      code: 'KOL',
      name: 'Kolkata'
    },
    arrivalCity: {
      code: 'DEL',
      name: 'Delhi'
    },
    fmtDateofSearch:"9 Jul",
    ifNonStop:true,
    flightNumber: 'JetAirways JW 4456',
    duration: '6h 10m',
    fmtArrival: "Fri, 23 Mar",
    arrivalTime:1521752100000,
    departureTime:1521752100000,
    fmtArrivalTime: "06:35",
    fmtDeparture: "Fri, 23 Mar",
    fmtDepartureTime: "02:25",
    departureTml: 'KOL #123',
    arrivallTml: 'DEL #456',
    baggageAllowance: {
      adult: 5,
      child: 7,
      units: 'kg'
    },
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    id: 3,
    logo:require('../../public/images/logo.jpg'),
    departureCity: {
      code: 'DEL',
      name: 'Delhi'
    },
    arrivalCity: {
      code: 'CHD',
      name: 'Chandigarh'
    },
    fmtDateofSearch:"9 Jul",
    ifNonStop:false,
    stops:["LOC1","LOC2"],
    flightNumber: 'Aeroflot SU 4456',
    duration: '2h 10m',
    fmtArrival: "Fri, 23 Mar",
    arrivalTime:1521752100000,
    departureTime:1521752100000,
    fmtArrivalTime: "04:35",
    fmtDeparture: "Fri, 23 Mar",
    fmtDepartureTime: "02:25",
    departureTml: 'IGI T#3',
    arrivallTml: 'Paris T#1',
    baggageAllowance: {
      adult: 7,
      child: 10,
      units: 'kg'
    },
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  }
]
export const returnFlightsConst = [{
    id: 1,
    logo:require('../../public/images/logo.jpg'),
    departureCity: {
      code: 'DEL',
      name: 'Delhi'
    },
    arrivalCity: {
      code: 'PAR',
      name: 'Paris'
    },
    fmtDateofSearch:"9 Jul",
    ifNonStop:false,
    stops:["LOC1","LOC2"],
    flightNumber: 'Aeroflot SU 4456',
    duration: '2h 10m',
    fmtArrival: "Fri, 23 Mar",
    fmtArrivalTime: "04:35",
    arrivalTime:1521752100000,
    departureTime:1521752100000,
    fmtDeparture: "Fri, 23 Mar",
    fmtDepartureTime: "02:25",
    departureTml: 'IGI T#3',
    arrivallTml: 'Paris T#1',
    baggageAllowance: {
      adult: 7,
      child: 10,
      units: 'kg'
    },
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    id: 2,
    logo:require('../../public/images/logo.jpg'),
    departureCity: {
      code: 'KOL',
      name: 'Kolkata'
    },
    arrivalCity: {
      code: 'DEL',
      name: 'Delhi'
    },
    fmtDateofSearch:"9 Jul",
    ifNonStop:true,
    flightNumber: 'JetAirways JW 4456',
    duration: '6h 10m',
    fmtArrival: "Fri, 23 Mar",
    fmtArrivalTime: "06:35",
    arrivalTime:1521752100000,
    departureTime:1521752100000,
    fmtDeparture: "Fri, 23 Mar",
    fmtDepartureTime: "02:25",
    departureTml: 'KOL #123',
    arrivallTml: 'DEL #456',
    baggageAllowance: {
      adult: 5,
      child: 7,
      units: 'kg'
    },
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    id: 3,
    logo:require('../../public/images/logo.jpg'),
    departureCity: {
      code: 'DEL',
      name: 'Delhi'
    },
    ifNonStop:false,
    stops:["LOC1","LOC2"],
    arrivalCity: {
      code: 'CHD',
      name: 'Chandigarh'
    },
    fmtDateofSearch:"9 Jul",
    flightNumber: 'Aeroflot SU 4456',
    duration: '2h 10m',
    fmtArrival: "Fri, 23 Mar",
    fmtArrivalTime: "04:35",
    arrivalTime:1521752100000,
    departureTime:1521752100000,
    fmtDeparture: "Fri, 23 Mar",
    fmtDepartureTime: "02:25",
    departureTml: 'IGI T#3',
    arrivallTml: 'Paris T#1',
    baggageAllowance: {
      adult: 7,
      child: 10,
      units: 'kg'
    },
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  }
]
