import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    ParseIntPipe,
    Patch,
    Post
} from '@nestjs/common';
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
    getCarById(@Param('id', ParseIntPipe) id: number) {
        const car = this.carsService.findOneById(id);
        return car;
    }

    @Post()
    createCar(@Body() body: any) {
        return body;
    }

    @Patch(':id')
    updateCar(
        @Param(':id', ParseIntPipe) id: number,
        @Body() body: any
    ) {
        return body;
    }

    @Delete(':id')
    deleteCar(@Param('id', ParseIntPipe) id: number) {
        const car = this.carsService.findOneById(id);
        return {
            method: 'DELETE',
            id,
        };
    }
}
