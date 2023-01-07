import { Injectable } from '@nestjs/common';

@Injectable()
export class CarsService {
    private cars = [
        { id: 1, brand: 'Chevrolet', model: 'Aveo' },
        { id: 2, brand: 'Toyota', model: 'Corolla' },
        { id: 3, brand: 'Ford', model: 'Mustang' },
    ];

    findAll() {
        return this.cars;
    }

    findOneById(id: number) {
        const car = this.cars.find((car) => car.id === id)
        const msg = `Car with id ${id} not exists`;
        if (!car) return { msg };

        return car;
    }
}
