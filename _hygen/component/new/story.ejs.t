---
inject: true
append: true
to: '<%= story ? `src/stories/${category}.tsx` : null %>'
---
  .add('<%= name %>', () => {
    return (
      <<%= name %> />
    )
  }, { info: {} })