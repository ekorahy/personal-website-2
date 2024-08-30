import { type SchemaTypeDefinition } from 'sanity'
import projects from './projects'
import blog from './blog'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [projects, blog],
}
