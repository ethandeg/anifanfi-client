<template>
  <div class="field">
        <label for="" class="label">{{label}}</label>
        <div class="control has-icons-left">
            <input
            :type="type"
            :placeholder="placeholder"
            class="input"
            v-model="value"
            @input="$emit('updateInputValue', $event.target.value)"
            required
            />
            <span class="icon is-small is-left">
            <i class="fa fa-lock"></i>
            </span>
        </div>
    </div>
</template>

<script>
export default {
    name: "AuthFormField",
    props: ["type", "placeholder", "value", "label"],

}
</script>

<style>

</style>