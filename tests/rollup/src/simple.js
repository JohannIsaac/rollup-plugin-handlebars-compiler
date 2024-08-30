import Template from '../../src/simple.hbs'
import { TemplateData } from './template-data.js'

export default function load() {
    Template(TemplateData)
}