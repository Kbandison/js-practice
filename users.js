const users = [
  {
    gender: "male",
    name: {
      title: "Mr",
      first: "Karl",
      last: "Johnson",
    },
    location: {
      street: {
        number: 6057,
        name: "Avondale Ave",
      },
      city: "New York",
      state: "New York",
      country: "United States",
      postcode: 12564,
      coordinates: {
        latitude: "88.9222",
        longitude: "-82.9558",
      },
      timezone: {
        offset: "+3:00",
        description: "Baghdad, Riyadh, Moscow, St. Petersburg",
      },
    },
    email: "karl.johnson@example.com",
    dob: {
      date: "1966-12-17T05:32:24.120Z",
      age: 56,
    },
    registered: {
      date: "2014-12-02T18:39:42.988Z",
      age: 8,
    },
    phone: "(268) 420-4900",
    cell: "(576) 843-3163",
    id: {
      name: "SSN",
      value: "557-48-8854",
    },
    picture: {
      large: "https://randomuser.me/api/portraits/men/6.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/6.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/6.jpg",
    },
    nat: "US",
  },
  {
    gender: "male",
    name: {
      title: "Mr",
      first: "Jezdimir",
      last: "Popović",
    },
    location: {
      street: {
        number: 7130,
        name: "Valačka",
      },
      city: "Odžaci",
      state: "Peć",
      country: "Serbia",
      postcode: 21728,
      coordinates: {
        latitude: "-87.2603",
        longitude: "-154.9263",
      },
      timezone: {
        offset: "-9:00",
        description: "Alaska",
      },
    },
    email: "jezdimir.popovic@example.com",
    dob: {
      date: "2000-07-15T23:45:38.345Z",
      age: 22,
    },
    registered: {
      date: "2013-01-18T15:22:26.904Z",
      age: 10,
    },
    phone: "032-7069-676",
    cell: "063-1277-871",
    id: {
      name: "SID",
      value: "458558716",
    },
    picture: {
      large: "https://randomuser.me/api/portraits/men/64.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/64.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/64.jpg",
    },
    nat: "RS",
  },
  {
    gender: "female",
    name: {
      title: "Mrs",
      first: "Elli",
      last: "Hatala",
    },
    location: {
      street: {
        number: 8457,
        name: "Reijolankatu",
      },
      city: "Orimattila",
      state: "Lapland",
      country: "Finland",
      postcode: 69472,
      coordinates: {
        latitude: "-47.0755",
        longitude: "-24.7668",
      },
      timezone: {
        offset: "+9:30",
        description: "Adelaide, Darwin",
      },
    },
    email: "elli.hatala@example.com",
    dob: {
      date: "1983-04-18T14:52:22.234Z",
      age: 39,
    },
    registered: {
      date: "2013-12-08T10:12:11.785Z",
      age: 9,
    },
    phone: "02-671-618",
    cell: "041-263-28-51",
    id: {
      name: "HETU",
      value: "NaNNA222undefined",
    },
    picture: {
      large: "https://randomuser.me/api/portraits/women/55.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/55.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/55.jpg",
    },
    nat: "FI",
  },
  {
    gender: "female",
    name: {
      title: "Ms",
      first: "Deniz",
      last: "Topçuoğlu",
    },
    location: {
      street: {
        number: 2875,
        name: "Fatih Sultan Mehmet Cd",
      },
      city: "Osmaniye",
      state: "Şanlıurfa",
      country: "Turkey",
      postcode: 91427,
      coordinates: {
        latitude: "4.5291",
        longitude: "7.5204",
      },
      timezone: {
        offset: "+3:30",
        description: "Tehran",
      },
    },
    email: "deniz.topcuoglu@example.com",
    dob: {
      date: "1995-09-23T08:54:14.748Z",
      age: 27,
    },
    registered: {
      date: "2011-03-17T17:37:19.098Z",
      age: 11,
    },
    phone: "(503)-309-7129",
    cell: "(660)-562-8541",
    id: {
      name: "",
      value: null,
    },
    picture: {
      large: "https://randomuser.me/api/portraits/women/64.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/64.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/64.jpg",
    },
    nat: "TR",
  },
  {
    gender: "female",
    name: {
      title: "Madame",
      first: "Margot",
      last: "Roche",
    },
    location: {
      street: {
        number: 2365,
        name: "Rue Denfert-Rochereau",
      },
      city: "Vevey",
      state: "Uri",
      country: "Switzerland",
      postcode: 1981,
      coordinates: {
        latitude: "30.4387",
        longitude: "83.8155",
      },
      timezone: {
        offset: "+3:00",
        description: "Baghdad, Riyadh, Moscow, St. Petersburg",
      },
    },
    email: "margot.roche@example.com",
    dob: {
      date: "1961-04-01T12:00:48.101Z",
      age: 61,
    },
    registered: {
      date: "2016-03-11T18:29:37.345Z",
      age: 6,
    },
    phone: "077 338 74 92",
    cell: "075 120 06 64",
    id: {
      name: "AVS",
      value: "756.9773.9478.30",
    },
    picture: {
      large: "https://randomuser.me/api/portraits/women/21.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/21.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/21.jpg",
    },
    nat: "CH",
  },
  {
    gender: "female",
    name: {
      title: "Mrs",
      first: "Potishana",
      last: "Buryak",
    },
    location: {
      street: {
        number: 972,
        name: "Zabolotivska",
      },
      city: "Krasnoperekopsk",
      state: "Odeska",
      country: "Ukraine",
      postcode: 28507,
      coordinates: {
        latitude: "35.6181",
        longitude: "-75.4410",
      },
      timezone: {
        offset: "-3:30",
        description: "Newfoundland",
      },
    },
    email: "potishana.buryak@example.com",
    dob: {
      date: "2000-07-22T04:01:26.273Z",
      age: 22,
    },
    registered: {
      date: "2021-05-22T02:47:52.755Z",
      age: 1,
    },
    phone: "(099) Z20-4626",
    cell: "(067) Q63-7725",
    id: {
      name: "",
      value: null,
    },
    picture: {
      large: "https://randomuser.me/api/portraits/women/88.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/88.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/88.jpg",
    },
    nat: "UA",
  },
  {
    gender: "male",
    name: {
      title: "Mr",
      first: "Çetin",
      last: "Çağıran",
    },
    location: {
      street: {
        number: 7245,
        name: "Fatih Sultan Mehmet Cd",
      },
      city: "Bursa",
      state: "Kırıkkale",
      country: "Turkey",
      postcode: 54010,
      coordinates: {
        latitude: "69.3921",
        longitude: "121.3114",
      },
      timezone: {
        offset: "+11:00",
        description: "Magadan, Solomon Islands, New Caledonia",
      },
    },
    email: "cetin.cagiran@example.com",
    dob: {
      date: "1981-02-16T21:04:29.312Z",
      age: 41,
    },
    registered: {
      date: "2008-02-14T18:38:09.246Z",
      age: 14,
    },
    phone: "(864)-898-1563",
    cell: "(249)-500-4649",
    id: {
      name: "",
      value: null,
    },
    picture: {
      large: "https://randomuser.me/api/portraits/men/69.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/69.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/69.jpg",
    },
    nat: "TR",
  },
  {
    gender: "male",
    name: {
      title: "Mr",
      first: "Peter",
      last: "Thompson",
    },
    location: {
      street: {
        number: 3257,
        name: "W 6th St",
      },
      city: "Corona",
      state: "Ohio",
      country: "United States",
      postcode: 82286,
      coordinates: {
        latitude: "-70.1876",
        longitude: "-110.0614",
      },
      timezone: {
        offset: "+2:00",
        description: "Kaliningrad, South Africa",
      },
    },
    email: "peter.thompson@example.com",
    dob: {
      date: "1963-03-27T23:03:56.698Z",
      age: 59,
    },
    registered: {
      date: "2004-01-01T05:09:33.377Z",
      age: 19,
    },
    phone: "(694) 809-0080",
    cell: "(910) 451-1658",
    id: {
      name: "SSN",
      value: "173-60-0652",
    },
    picture: {
      large: "https://randomuser.me/api/portraits/men/25.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/25.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/25.jpg",
    },
    nat: "US",
  },
  {
    gender: "female",
    name: {
      title: "Ms",
      first: "Caitlin",
      last: "Garrett",
    },
    location: {
      street: {
        number: 9145,
        name: "O'Connell Street",
      },
      city: "Thurles",
      state: "Cavan",
      country: "Ireland",
      postcode: 46902,
      coordinates: {
        latitude: "54.2514",
        longitude: "75.9456",
      },
      timezone: {
        offset: "-12:00",
        description: "Eniwetok, Kwajalein",
      },
    },
    email: "caitlin.garrett@example.com",
    dob: {
      date: "1968-10-26T22:04:27.039Z",
      age: 54,
    },
    registered: {
      date: "2016-05-16T15:43:27.729Z",
      age: 6,
    },
    phone: "061-580-2963",
    cell: "081-970-6552",
    id: {
      name: "PPS",
      value: "0594407T",
    },
    picture: {
      large: "https://randomuser.me/api/portraits/women/60.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/60.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/60.jpg",
    },
    nat: "IE",
  },

  {
    gender: "female",
    name: {
      title: "Ms",
      first: "Radomira",
      last: "Manuylenko",
    },
    location: {
      street: {
        number: 802,
        name: "Oleksandra Matrosova",
      },
      city: "Kozyatin",
      state: "Odeska",
      country: "Ukraine",
      postcode: 50555,
      coordinates: {
        latitude: "52.3412",
        longitude: "-111.4492",
      },
      timezone: {
        offset: "+7:00",
        description: "Bangkok, Hanoi, Jakarta",
      },
    },
    email: "radomira.manuylenko@example.com",
    dob: {
      date: "1962-06-18T05:47:52.548Z",
      age: 60,
    },
    registered: {
      date: "2014-05-04T10:39:45.406Z",
      age: 8,
    },
    phone: "(067) R85-9471",
    cell: "(099) H45-5329",
    id: {
      name: "",
      value: null,
    },
    picture: {
      large: "https://randomuser.me/api/portraits/women/29.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/29.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/29.jpg",
    },
    nat: "UA",
  },
];

/*******FILTER BY GENDER**********/

function filterByGender(gender) {
  let filteredUsers = users.filter((user) => {
    return user.gender === gender ? true : false;
  });

  return filteredUsers;
}

// console.log(filterByGender("male"));

/****************************************************/

/*******FILTER BY AGE************/

function filterByAge(age) {
  let filteredAges = users.filter((user) => {
    return user.dob.age > age ? true : false;
  });

  return filteredAges;
}

// console.log(filterByAge(50));

/***************************************************/

//ADD FULL NAME
function addFullName() {
  let mappedUsers = users.map((user) => {
    let fullName = `${user.name.title}. ${user.name.first} ${user.name.last}`;
    let mappedUser = { ...user, fullName: fullName };
    return mappedUser;
  });
  return mappedUsers;
}

// console.log(addFullName());

/***************************************************/

/*********ADD FULL ADDRESS*********/

// Add the fullAddress field to the location object containing a string of the street, city, state, country and postcode to every user in the users list

function addFullAddress() {
  let mappedAddresses = users.map((user) => {
    let fullAddress = `${user.location.street.number} ${user.location.street.name}, ${user.location.city}, ${user.location.state}, ${user.location.postcode}, ${user.location.country}`;

    let mappedAddress = { ...user, fullAddress: fullAddress };
    return mappedAddress;
  });
  return mappedAddresses;
}

// console.log(addFullAddress());

/***************************************************/

/*********FIND ALL IN COUNTRY*********/

// Filter for all users whose nat equals the provided countryCode

function findAllInCountry(countryCode) {
  let filteredCountries = users.filter((user) =>
    user.nat === countryCode ? true : false
  );

  return filteredCountries;
}

// console.log(findAllInCountry("UA"));

/***************************************************/

/*********GET FULL ADDRESS*********/

// Produce a list of full addresses for all users in the users list

function getFullAddresses() {
  let mappedAddressList = users.map(
    (user) =>
      `${user.location.street.number} ${user.location.street.name}, ${user.location.city}, ${user.location.state}, ${user.location.postcode}, ${user.location.country}`
  );

  return mappedAddressList;
}

// console.log(getFullAddresses());

/***************************************************/

/*********GET ALL PICTURES*********/

// Produce a list containing all pictures from all users. Hint: use the .flat() method to flatten an array of arrays into a single array

function getAllPictures() {
  let mappedPictures = users.map((user) => {
    let mappedObj = {
      Large: user.picture.large,
      Medium: user.picture.medium,
    };

    return mappedObj;
  });
  return mappedPictures;
}

console.log(getAllPictures());

/***************************************************/

/********FIND BY PHONE**********/

// Find a particular user by phone number

function findByPhone(phone) {
  let filteredPhone = users.filter((user) =>
    user.phone === phone || user.cell === phone ? true : false
  );

  return filteredPhone;
}

// console.log(findByPhone("(099) H45-5329"));

/***************************************************/

/**********FIND INDEX BY EMAIL************/

// Find the index of a user by email

function findIndexByEmail(email) {
  let indexedEmail = users.indexOf(users.email);

  return indexedEmail;
}

// console.log(findIndexByEmail());

/***************************************************/

/***********GET ALL THUMBNAILS***********/

// Produce a list of all thumbnail links for all users

function getAllThumbnails() {
  let mappedThumbnails = users.map((user) => user.picture.thumbnail);
  return mappedThumbnails;
}

// console.log(getAllThumbnails());

/***************************************************/

/**********SORT BY DOB***********/
function sortByDob() {}

// console.log(sortByDob());

/***************************************************/
