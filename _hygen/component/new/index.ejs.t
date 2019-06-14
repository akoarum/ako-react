---
inject: true
append: true
to: src/components/<%= category %>/index.ts
skip_if: <%= name %>
---
import { default as <%= name %> } from './<%= name %>'