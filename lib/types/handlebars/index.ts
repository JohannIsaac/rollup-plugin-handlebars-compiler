export type TemplateSourceMap = {
    code: string;
    map: string;
}

export type TemplateSpecification = string | TemplateSourceMap

export type CompileResult = {
    code: string
}