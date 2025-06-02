<script>
    import NavSponsors from './NavSponsors.svelte'
    let formData = {
        access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY,
        sponsorName: '',
        contactName: '',
        email: '',
        additionalInfo: ''
    };

    let errors = {};
    let isSubmitting = false;
    let submitMessage = '';

    function validateForm() {
        errors = {};
        
        if (!formData.sponsorName.trim()) {
            errors.sponsorName = 'Sponsor/Organization name is required';
        }
        
        if (!formData.contactName.trim()) {
            errors.contactName = 'Primary contact name is required';
        }
        
        if (!formData.email.trim()) {
            errors.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            errors.email = 'Please enter a valid email address';
        }
        
        return Object.keys(errors).length === 0;
    }

    async function handleSubmit() {
        if (!validateForm()) return;
        
        isSubmitting = true;
        submitMessage = '';
        
        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify(formData)
            });
            
            console.log(response);

            if (response.ok) {
                submitMessage = 'Thank you! Your sponsorship inquiry has been sent successfully. We will be in touch soon!';
                formData = { sponsorName: '', contactName: '', email: '', additionalInfo: '' };
            } else {
                submitMessage = 'Sorry, there was an error sending your message. Please try again.';
                console.log(errors);
            }
        } catch (error) {
            submitMessage = 'Sorry, there was an error sending your message. Please try again.';
        } finally {
            isSubmitting = false;
        }
    }
</script>

<main>
    <NavSponsors /> 

    <!-- Sponsor Info -->
    <div class="bg-white dark:bg-gray-900 min-h-screen">
    <div class="mx-auto max-w-6xl px-6 py-20 my-0">
        <section class="mb-4" id="about">
        <h2 class="font-exo text-3xl font-bold mb-10 text-center text-black dark:text-white">SPONSOR HACKHARVARD</h2>
        <div class="mx-auto max-w-5xl">
            <p class="text-lg mb-6 text-gray-700 dark:text-gray-300">
            We are thrilled that you are interested in sponsoring Harvard University's premier undergraduate hackathon. 
            This is a place where the brightest young minds come together to create innovative technological solutions to global challenges.
            </p>
            <p class="text-lg mb-6 text-gray-700 dark:text-gray-300">
            <span class="font-semibold">HackHarvard USA</span> will take place <span class="font-semibold">October 3-5, 2025</span> in 
            Cambridge, Massachusetts at the Science and Engineering Complex, bringing together talented undergraduates with industry leaders 
            and academic mentors. Our program features a variety of workshops where competitors can learn more about your organization along with others that are innovating
            across domains including healthcare, sustainability, education, and social impact.
            </p>
            <p class="text-lg text-gray-700 dark:text-gray-300">
            For more details regarding sponsoring HackHarvard, we recommend that you complete the sponsorship form below or contact us at <a href="mailto:sponsors@hackharvard.io" class="text-red-500 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300">sponsors@hackharvard.io</a>.
            We look forward to supporting your organization at HackHarvard!
            </p>
        </div>
        </section>
    </div>

    <!-- Sponsor Email Form  -->
    <div class="bg-white dark:bg-gray-900 min-h-screen my-0">
        <div class="mx-auto max-w-4xl px-6">
            <h3 class="text-2xl font-bold text-center mb-8 text-black dark:text-white">Sponsorship Form</h3>
            
            <form on:submit|preventDefault={handleSubmit} class="space-y-8">
                <input type="hidden" id="access_key" name="access_key" value="c7f35327-d821-435c-af5b-216a9309b069">
                <div class="text-center">
                    <label for="sponsor-name" class="block text-lg font-medium mb-3 text-gray-700 dark:text-gray-300">
                        Sponsor/Organization Name *
                    </label>
                    <input 
                        type="text" 
                        id="sponsor-name" 
                        bind:value={formData.sponsorName}
                        class="rounded-lg w-80 max-w-full text-gray-900 h-10 px-4 border-2 border-gray-300 focus:border-red-500 focus:outline-none transition-colors"
                        class:border-red-500={errors.sponsorName}
                        placeholder="Your organization name"
                    />
                    {#if errors.sponsorName}
                        <p class="text-red-500 text-sm mt-2">{errors.sponsorName}</p>
                    {/if}
                </div>

                <div class="text-center">
                    <label for="contact-name" class="block text-lg font-medium mb-3 text-gray-700 dark:text-gray-300">
                        Primary Contact Name *
                    </label>
                    <input 
                        type="text" 
                        id="contact-name" 
                        bind:value={formData.contactName}
                        class="rounded-lg w-80 max-w-full text-gray-900 h-10 px-4 border-2 border-gray-300 focus:border-red-500 focus:outline-none transition-colors"
                        class:border-red-500={errors.contactName}
                        placeholder="Your full name"
                    />
                    {#if errors.contactName}
                        <p class="text-red-500 text-sm mt-2">{errors.contactName}</p>
                    {/if}
                </div>

                <div class="text-center">
                    <label for="contact-email" class="block text-lg font-medium mb-3 text-gray-700 dark:text-gray-300">
                        Contact Email Address *
                    </label>
                    <input 
                        type="email" 
                        id="contact-email" 
                        bind:value={formData.email}
                        class="rounded-lg w-80 max-w-full text-gray-900 h-10 px-4 border-2 border-gray-300 focus:border-red-500 focus:outline-none transition-colors"
                        class:border-red-500={errors.email}
                        placeholder="your.email@company.com"
                    />
                    {#if errors.email}
                        <p class="text-red-500 text-sm mt-2">{errors.email}</p>
                    {/if}
                </div>

                <div class="text-center">
                    <label for="additional-info" class="block text-lg font-medium mb-3 text-gray-700 dark:text-gray-300">
                        Additional Information
                    </label>
                    <textarea 
                        id="additional-info" 
                        bind:value={formData.additionalInfo}
                        rows="4"
                        class="rounded-lg w-80 max-w-full text-gray-900 px-4 py-3 border-2 border-gray-300 focus:border-red-500 focus:outline-none transition-colors resize-vertical"
                        placeholder="Tell us about your sponsorship interests, budget range, or any specific questions..."
                    ></textarea>
                </div>

                <div class="text-center">
                    <button 
                        type="submit" 
                        disabled={isSubmitting}
                        class="bg-red-600 hover:bg-red-700 disabled:bg-gray-400 text-white font-semibold py-3 px-8 rounded-lg transition-colors cursor-pointer disabled:cursor-not-allowed"
                    >
                        {isSubmitting ? 'Sending...' : 'Submit'}
                    </button>
                </div>

                {#if submitMessage}
                    <div class="text-center mt-6">
                        <div class="inline-block px-6 py-4 rounded-lg {submitMessage.includes('successfully') ? 'bg-green-100 text-green-800 border border-green-300' : 'bg-red-100 text-red-800 border border-red-300'}">
                            {submitMessage}
                        </div>
                    </div>
                {/if}
            </form>
        </div>
    </div>
</main>

