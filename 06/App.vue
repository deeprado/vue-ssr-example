<template>
  <div>
    <Foo></Foo>
    <Bar></Bar>
    <Baz></Baz>
  </div>
</template>

<script>
import Foo from "./components/Foo.vue"
import Bar from "./components/Bar.vue"
import Baz from "./components/Baz.vue"

export default {
  components: {
    Foo,
    Bar,
    Baz
  }
}
</script>
