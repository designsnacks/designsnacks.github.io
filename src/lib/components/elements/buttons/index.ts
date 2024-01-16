import Root from './Button.svelte';
import { tv, type VariantProps } from 'tailwind-variants';
import type { Button as ButtonPrimitive } from 'bits-ui';

const buttonVariants = tv({
	base: 'inline-flex items-center justify-center rounded-md text-sm font-semibold whitespace-nowrap ring-offset-background transition-colors  disabled:pointer-events-none disabled:opacity-50',
	variants: {
		variant: {
			default:
				'shadow-sm bg-accent-600 text-white hover:bg-accent-500 dark:hover:bg-accent-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-600 dark:focus-visible:outline-accent-500',
			secondary:
				'shadow-sm bg-white dark:bg-white/10 text-neutral-900 dark:text-white ring-1 ring-inset ring-neutral-300 dark:ring-0 hover:bg-neutral-50 dark:hover:bg-white/20',
			link: 'text-accent-600 hover:text-accent-500 dark:text-accent-500 dark:hover:text-accent-400',
			neutral_link:
				'text-neutral-900 dark:text-white hover:text-neutral-700 dark:hover:text-white/80',
			soft: 'shadow-sm bg-accent-50 dark:bg-accent-950 text-accent-600 dark:text-accent-500 hover:bg-accent-100 dark:hover:bg-accent-900'
		},
		size: {
			xs: 'px-2 py-1 text-xs',
			sm: 'px-2 py-1',
			default: 'px-2.5 py-1.5',
			lg: 'px-3 py-2',
			xl: 'px-3.5 py-2.5',
			'2xl': 'px-6 py-3 text-lg',
			'3xl': 'px-8 py-4 text-xl'
		}
	},
	defaultVariants: {
		variant: 'default',
		size: 'default'
	}
});

type Variant = VariantProps<typeof buttonVariants>['variant'];
type Size = VariantProps<typeof buttonVariants>['size'];

type Props = ButtonPrimitive.Props & {
	variant?: Variant;
	size?: Size;
};

type Events = ButtonPrimitive.Events;

export {
	Root,
	type Props,
	type Events,
	//
	Root as Button,
	type Props as ButtonProps,
	type Events as ButtonEvents,
	buttonVariants
};
