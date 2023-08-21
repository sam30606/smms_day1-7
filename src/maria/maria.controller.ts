import {
  Controller,
  Logger,
  Get,
  Post,
  Delete,
  Query,
  Param,
  Body,
} from '@nestjs/common';

import { MariaService } from './maria.service';
import {
  FindOneQuery,
  DeleteQuery,
  UpdateQuery,
  InsertQuery,
  OKFindOne,
  OKFindAll,
  OKDelete,
  OKInsert,
  OKUpdate,
} from './dto';
import { ApiTags, ApiOkResponse, ApiOperation } from '@nestjs/swagger';
@Controller('maria')
export class MariaController {
  logger = new Logger('Maria');
  constructor(private readonly mariaService: MariaService) {}

  @Get('')
  @ApiTags('maria')
  @ApiOperation({ summary: 'FindOne' })
  @ApiOkResponse({ type: OKFindOne })
  async findOne(@Query() findOneQuery: FindOneQuery) {
    this.logger.log('findOne');
    return this.mariaService.findOne(findOneQuery.id);
  }
  @Get('all')
  @ApiTags('maria')
  @ApiOperation({ summary: 'FindAll' })
  @ApiOkResponse({ type: OKFindAll })
  async findAll() {
    this.logger.log('findAll');
    return this.mariaService.findAll();
  }
  @Post('insert')
  @ApiTags('maria')
  @ApiOperation({ summary: 'Insert' })
  @ApiOkResponse({ type: OKInsert })
  async insert(@Query() insertQuery: InsertQuery) {
    this.logger.log('insert');
    return this.mariaService.insert(insertQuery.name, insertQuery.price);
  }
  @Post('update')
  @ApiTags('maria')
  @ApiOperation({ summary: 'Update' })
  @ApiOkResponse({ type: OKUpdate })
  async update(@Query() updateQuery: UpdateQuery) {
    this.logger.log('update');
    return this.mariaService.update(
      updateQuery.id,
      updateQuery.name,
      updateQuery.price,
    );
  }
  @Delete('delete')
  @ApiTags('maria')
  @ApiOperation({ summary: 'Delete' })
  @ApiOkResponse({ type: OKDelete })
  async delete(@Query() deleteQuery: DeleteQuery) {
    this.logger.log('delete');
    return this.mariaService.delete(deleteQuery.id);
  }
}
