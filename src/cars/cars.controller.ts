import { Controller, Get, Param } from '@nestjs/common';
import { CarsService } from './cars.service';

@Controller('cars')
export class CarsController {

    // Injection of dependencies
    constructor(
        private readonly carsService: CarsService
    ) { }

    @Get()
    getAllCars() {
        return this.carsService.findAll();
    }

    @Get(':id')
    getCarById(@Param('id') id: string) {
        const car = this.carsService.findOneById(+id);
        return car;
    }
}
