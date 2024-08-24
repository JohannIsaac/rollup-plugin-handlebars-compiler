import type { SourceData, CompiledData, Helper } from './types';
import { HandlebarsPluginOptions, TemplateSpecification } from './types';
export default class HandlebarsCompiler {
    handlebarsPluginOptions: HandlebarsPluginOptions;
    cache: Map<string, string>;
    constructor(handlebarsPluginOptions: HandlebarsPluginOptions);
    static renamePartial(source: string, partialName: string, newPartialName: string): string;
    static getPartialSource(partialPath: string, genesisFileDirectory: string, currentFile: string): string | undefined;
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
    getPartialSources(name: string, source: string, genesisFileDirectory: string, list?: SourceData[]): SourceData[];
    getHelpers(): Helper[];
    getPartials(): SourceData[];
    toEsm(source: string, id: string): TemplateSpecification;
}
