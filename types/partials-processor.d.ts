import type { CompiledData, SourceData, SourceDataMap, TemplateData } from './types';
import { HandlebarsPluginOptions } from './types';
export default class PartialsProcessor {
    handlebarsPluginOptions: HandlebarsPluginOptions;
    constructor(handlebarsPluginOptions: HandlebarsPluginOptions);
    static renamePartial(source: string, partialName: string, newPartialName: string): string;
    static getPartialSource(partialPath: string, currentFilepath: string, genesisFileDirectory: string): string | undefined;
    static ImportScanner: {
        new (): {
            partials: Set<string>;
            helpers: Set<string>;
            PartialStatement(partial: hbs.AST.PartialStatement): void;
            accept(node: hbs.AST.Node): void;
            acceptKey(node: hbs.AST.Node, name: string): void;
            acceptArray(arr: hbs.AST.Expression[]): void;
            Program(program: hbs.AST.Program): void;
            BlockStatement(block: hbs.AST.BlockStatement): void;
            PartialBlockStatement(partial: hbs.AST.PartialBlockStatement): void;
            DecoratorBlock(decorator: hbs.AST.DecoratorBlock): void;
            Decorator(decorator: hbs.AST.Decorator): void;
            MustacheStatement(mustache: hbs.AST.MustacheStatement): void;
            ContentStatement(content: hbs.AST.ContentStatement): void;
            CommentStatement(comment?: hbs.AST.CommentStatement): void;
            SubExpression(sexpr: hbs.AST.SubExpression): void;
            PathExpression(path: hbs.AST.PathExpression): void;
            StringLiteral(str: hbs.AST.StringLiteral): void;
            NumberLiteral(num: hbs.AST.NumberLiteral): void;
            BooleanLiteral(bool: hbs.AST.BooleanLiteral): void;
            UndefinedLiteral(): void;
            NullLiteral(): void;
            Hash(hash: hbs.AST.Hash): void;
        };
    };
    getCompiledPartial([partial, source]: SourceData): CompiledData;
    getFilesFromSourceMap(directory: string, extname: string, sourceMap: SourceDataMap): string[];
    getSourceMap(templateData: TemplateData, sourceMap?: SourceDataMap): SourceDataMap;
    processPartials(partials: Set<string>, templateData: TemplateData, sourceMap?: SourceDataMap): void;
    processPartial(partialPath: string, templateData: TemplateData, sourceMap?: SourceDataMap): string;
}
