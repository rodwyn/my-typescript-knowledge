(() => {
  interface Address {
    id: number;
    zip: string;
    city: string;
  }

  interface Client {
    name: string;
    age?: number;
    address: Address;
    getFullAddress( id:string ):string;
  }

  interface Store {
    id: number;
    name: string;
    address: Address;
  }

  const client:Client = {
    name: 'Rodwyn',
    address: {
      id: 123,
      city: 'GDL',
      zip: 'Z11001'
    },
    getFullAddress( id:string ) {
      return this.address.city
    }
  };

  const store:Store = {
    id: 111,
    name: 'Galerias',
    address: {
      id: 121,
      city: 'GDL',
      zip: '45111'
    }
  }
})();