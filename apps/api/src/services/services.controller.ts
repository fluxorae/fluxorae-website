import { Controller, Get, Param } from '@nestjs/common';
import { ServicesService } from './services.service';

@Controller('services')
export class ServicesController {
  constructor(private readonly servicesService: ServicesService) {}

  @Get()
  list() {
    return this.servicesService.listServices();
  }

  @Get(':slug')
  find(@Param('slug') slug: string) {
    return this.servicesService.getBySlug(slug);
  }
}
