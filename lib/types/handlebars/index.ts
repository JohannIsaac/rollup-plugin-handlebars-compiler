export interface TemplateSpecification {
    code?: string;
    map?: string;
    [key: string | number]: any;
}

export interface CompileResult extends TemplateSpecification {}