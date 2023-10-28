import { Injectable, NotFoundException } from '@nestjs/common';
import Car from './interfaces/car.interface';
import { v4 as uuid } from "uuid";
import { CreateCarDto } from './dto/create-dar.dto';

@Injectable()
export class CarsService {
    private cars: Car[] = [
        { id: uuid(), brand: 'Chevrolet', model: 'Aveo' },
        { id: uuid(), brand: 'Toyota', model: 'Corolla' },
        { id: uuid(), brand: 'Ford', model: 'Mustang' },
    ];

    findAll() {
        return this.cars;
    }

    findOneById(id: string) {
        const car = this.cars.find((car) => car.id === id)
        if (!car) throw new NotFoundException(`Car with '${id}' not found`);

        return car;
    }

    createCar(createCarDto: CreateCarDto) {
        // newCar.id = uuid();

        const newCar: Car = {
            id: uuid(),
            ...createCarDto,
        }

        this.cars.push(newCar);
        return newCar;
    }
}
