import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    ParseUUIDPipe,
    Patch,
    Post,
} from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto } from './dto/create-dar.dto';

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
    getCarById(@Param('id', ParseUUIDPipe) id: string) {
        const car = this.carsService.findOneById(id);
        return car;
    }

    @Post()
    createCar(@Body() createCarDto: CreateCarDto) {
        return this.carsService.createCar(createCarDto);
    }

    @Patch(':id')
    updateCar(
        @Param(':id', ParseUUIDPipe) id: string,
        @Body() body: any
    ) {
        return body;
    }

    @Delete(':id')
    deleteCar(@Param('id', ParseUUIDPipe) id: string) {
        const car = this.carsService.findOneById(id);
        return {
            method: 'DELETE',
            id,
        };
    }
}
