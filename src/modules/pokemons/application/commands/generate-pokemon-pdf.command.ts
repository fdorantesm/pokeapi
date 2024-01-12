import { InjectService } from '@/core/domain/decorators/inject-service.decorator';
import { PdfService } from '@/core/domain/interfaces/pdf.service.contract';
import { GeneratePokemonPdfCommand } from '@/modules/pokemons/domain/commands/generate-pokemon-pdf.command';
import { TemplateService } from '@/modules/shared/domain/contracts/template.service.contract';
import { contrastColor } from '@/utils/contrast-color';
import { kebabToTitle } from '@/utils/kebab-to-title';
import { pokemonTypeColor } from '@/utils/pokemon-type-color';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import * as capitalize from 'lodash/capitalize';
import { dirname, join } from 'path';

@CommandHandler(GeneratePokemonPdfCommand)
export class GeneratePdfCommandHandler implements ICommandHandler<GeneratePokemonPdfCommand> {
  constructor(
    @InjectService('TemplateService')
    private readonly templateService: TemplateService,
    @InjectService('PdfService')
    private readonly pdfService: PdfService,
  ) {}

  public async execute(command: GeneratePokemonPdfCommand): Promise<any> {
    const templatePath = dirname(__filename.replace(/dist/, ''));
    const template = join(templatePath, 'static/pdf/pokemon.pug');
    const backgroundColor = pokemonTypeColor(command.pokemon.types[0].type.name);
    const textColor = contrastColor(backgroundColor);
    const html = this.templateService.render(template, {
      pokemon: {
        ...command.pokemon,
        textColor,
        backgroundColor,
        name: capitalize(command.pokemon.name),
        types: command.pokemon.types.map((i) => ({
          type: {
            name: kebabToTitle(i.type.name),
          },
        })),
        stats: command.pokemon.stats.map((i) => ({
          baseStat: i.baseStat,
          effort: i.effort,
          stat: {
            name: kebabToTitle(i.stat.name.replace(/special/g, 's.')).toUpperCase(),
          },
        })),
      },
      context: command.context,
    });

    return this.pdfService.render(html, {
      format: 'A6',
    });
  }
}
