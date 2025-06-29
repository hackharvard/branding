<!-- Form for sponsors to fill out that will send an email to sponsors@hackharvard.io -->
<script>
    import SponsorsForm from '../../lib/components/SponsorsForm.svelte'
    import '../../app.css'

    // Set dark mode as default immediately on page load
    if (typeof document !== 'undefined') {
        document.documentElement.classList.add('dark');
    }
</script>

<main>
    <SponsorsForm />
</main>