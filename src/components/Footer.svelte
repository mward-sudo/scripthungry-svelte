<script lang="ts">
  const today = new Date()
  const initialYear = 2021
  const currentYear = today.getFullYear()
  const toYear = currentYear > initialYear ? `—${currentYear}` : ''
</script>

<footer
  class="py-8 px-4 text-sm text-center text-stone-600 dark:text-stone-400"
>
  © {initialYear}{toYear} Michael Ward
</footer>
