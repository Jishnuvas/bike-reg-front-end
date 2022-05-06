import { Validators } from '@angular/forms';

export const BIKE_REG_FORM = {
  name: ['', [Validators.required, Validators.minLength(3)]],
  email: ['', [Validators.required, Validators.minLength(3)]],
  password: ['', [Validators.required, Validators.minLength(3)]],
  phone: ['', [Validators.required, Validators.minLength(3)]],
  model: ['', [Validators.required, Validators.minLength(3)]],
  serialNumber: ['', [Validators.required, Validators.minLength(3)]],
  purchasePrice: ['', [Validators.required, Validators.minLength(3)]],
  purchaseDate: ['', [Validators.required, Validators.minLength(3)]],
  contact: ['', []],
};

export const BIKES = {
  models: [
    {
      id: '1101',
      type: 'Pleasure',
    },
    {
      id: '1102',
      type: 'New Glamour',
    },
    {
      id: '1103',
      type: 'Super Splendor',
    },
    {
      id: '1104',
      type: 'Karizma ZMR',
    },
  ],
};
