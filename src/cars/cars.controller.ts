import { Controller, Get, Param } from '@nestjs/common';

@Controller('cars')
export class CarsController {
    private cars = ['Chevrolet', 'Toyota', 'Ford'];

    @Get()
    getAllCars() {
        return this.cars;
    }

    @Get(':id')
    getCarById(@Param('id') id: string) {

        const car = this.cars[id];
        const msg = 'There is no car'

        if (!car) return { msg };

        return {
            car,
        };
    }
}
