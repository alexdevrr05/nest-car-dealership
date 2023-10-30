import { Injectable, NotFoundException } from '@nestjs/common';

import { Car } from './interfaces/car.interface';
import { v4 as uuid } from 'uuid';
import { CreateCarDto, UpdateCarDto } from './dto/';

@Injectable()
export class CarsService {
  private cars: Car[] = [
    { id: uuid(), brand: 'KIA', model: 'Sorento' },
    { id: uuid(), brand: 'Toyota', model: 'Camry' },
    { id: uuid(), brand: 'Ford', model: 'Mustang' },
    { id: uuid(), brand: 'Honda', model: 'Civic' },
    { id: uuid(), brand: 'Chevrolet', model: 'Silverado' },
    { id: uuid(), brand: 'Volkswagen', model: 'Jetta' },
    { id: uuid(), brand: 'BMW', model: 'X5' },
    { id: uuid(), brand: 'Mercedes-Benz', model: 'C-Class' },
    { id: uuid(), brand: 'Audi', model: 'A4' },
    { id: uuid(), brand: 'Nissan', model: 'Altima' },
  ];

  findAll() {
    return this.cars;
  }

  findOneById(id: string) {
    const car = this.cars.find((car) => car.id === id);

    if (!car) throw new NotFoundException(`Car with id '${id}' not found`);

    return car;
  }

  create(createCarDto: CreateCarDto) {
    const car: Car = {
      id: uuid(),
      ...createCarDto,
    };
    this.cars.push(car);

    return car;
  }

  update(id: string, updateCarDto: UpdateCarDto) {
    let carDb = this.findOneById(id);
    this.cars = this.cars.map((car) => {
      if (car.id === id) {
        carDb = { ...carDb, ...updateCarDto, id };
        return carDb;
      }
      return car;
    });

    return carDb; // updated car
  }

  delete(id: string) {
    this.findOneById(id);
    this.cars = this.cars.filter((car) => car.id !== id);
  }
}
