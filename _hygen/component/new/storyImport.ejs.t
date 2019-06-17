---
inject: true
after: import { action } from '@storybook/addon-actions'
to: '<%= story ? `src/stories/${category}.tsx` : null %>'
---
import <%= name %> from '../components/<%= category %>/<%= name %>'