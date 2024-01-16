<script lang="ts">
	import Hero from '$lib/components/page_sections/Hero.svelte';
	import ListThreeColumnsImages from '$lib/components/page_sections/list/ListThreeColumnsImages.svelte';
	import ListThreeColumns from '$lib/components/page_sections/list/ListThreeColumns.svelte';
	import type { ListData } from '$lib/components/page_sections/list/ListData';
	import Contact from '$lib/components/page_sections/Contact.svelte';
	import Footer from '$lib/components/page_sections/Footer.svelte';

	let heroTitle = "Hi, I'm Lucas";
	let heroText =
		"A UX designer with a background in purchasing and customer service consulting. I've always focused on empathy and understanding of my customers' needs, which has helped me to design user experiences that resonate with my users. I'm dedicated to creating designs that are user centric, bridging the gap between what users expect and what the product can offer them.";

	let heroImage = '/images/lucas_cut.png';

	const projects: ListData[] = [
		{
			title: 'VELA - UX Case Study',
			description:
				'"VELA provides beautifully displayed and easy to understand wind, wave and weather reports, forecasts and statistics for sailors, surfers, divers and any other water sport aficionados."',
			date: '2023',
			image: '/images/vela.png',
			href: '/vela'
		},
		{
			title: 'Voqab - A UX Case Study',
			description: 'Yes it is a case study',
			date: 'March 2023',
			image: '/images/voqab.png',
			href: '#'
		}
	];

	const work: ListData[] = [
		{
			title: 'UX Designer',
			description: 'CareerFoundry (Student Project)',
			date: 'March - December 2023'
		},
		{
			title: 'Purchaser and Customer Service Consultant',
			description: 'Marks Feinkost',
			date: 'January 2022 - Present'
		},
		{
			title: 'Customer Service Consultant',
			description: 'Marks Feinkost',
			date: 'September 2018 - December 2021'
		}
	];

	const education: ListData[] = [
		{
			title: 'UX Design Certification',
			description: 'CareerFoundry',
			date: 'March - December 2023'
		},
		{
			title: 'BSc International Business and Management',
			description: 'EU Business School | University of Roehampton',
			date: 'May 2017 - July 2020'
		}
	];
</script>

<Hero
	id={'home'}
	title={heroTitle}
	subtitle={heroText}
	image={heroImage}
	buttonHref={'#'}
	buttonLabel={'Contact me'}
	linkButtonHref={'#'}
	linkButtonLabel={'See projects'}
></Hero>

<ListThreeColumnsImages
	id={'projects'}
	title={'My projects'}
	subtitle={'This is what I did before you hired me'}
	articles={projects}
></ListThreeColumnsImages>

<ListThreeColumns
	id={'work'}
	title={'Work experience'}
	subtitle={'This is where I worked before you hired me'}
	articles={work}
></ListThreeColumns>

<ListThreeColumns
	id={'education'}
	title={'Education'}
	subtitle={'I learned a lot of things before you hired me'}
	articles={education}
></ListThreeColumns>

<Contact
	id={'contact'}
	title={'Want to work with me?'}
	subtitle={'Let’s talk about your project'}
	buttonHref={'#'}
	buttonLabel={'Contact me'}
	linkButtonHref={'#'}
	linkButtonLabel={'Download resume'}
></Contact>

<Footer
	socials={{ linkedin: '#', mail: '#' }}
	copyright={'&copy; 2024 Lucas Going. All rights reserved.'}
></Footer>
