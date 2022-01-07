<script lang="ts">
  import '../app.css'

  import Header from '../components/Header.svelte'
  import Content from '../components/Content.svelte'
  import Footer from '../components/Footer.svelte'
</script>

<div class="container flex flex-col py-4 mx-auto min-h-screen">
  <Header />
  <Content><slot /></Content>
  <Footer />
</div>
