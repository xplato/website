import { useState } from 'react';
import Breadcrumbs from '../components/Breadcrumbs';

import ELi from '../components/ELi';
import Entity from '../components/Entity';
import PageMeta from '../components/PageMeta';
import Title from '../components/Title';

import global from '../data/global';
import { variants, transition } from '../logic/motion';
import { copyToClipboard } from '../logic/utils';

const Contact = () => {
	const [showEmail, setShowEmail] = useState(false);
	const [buttonText, setButtonText] = useState('Reveal email address');

	const onClick = () => {
		if (showEmail) {
			copyToClipboard(global.email)
				.then(() => {
					setButtonText('Copied!');

					setTimeout(() => {
						setButtonText('Copy email');
					}, 4000);
				})
				.catch(() => {
					setButtonText('Issue copying :(');
				})
		} else {
			setShowEmail(true);
			setButtonText('Copy email');
		}
	}

	return (
		<>
			<PageMeta
				meta={{
					title: 'Contact',
					description: `If you've got any questions, an idea for a
					project or something else, feel free to reach
					out—I'll get back to you promptly.`,
				}}
			/>

			<section className='section'>
				<div className='container flex-c'>
					<Entity
						variants={variants.fadeInUp}
						transition={{
							...transition.default,
							delay: 0.2,
						}}
					>
						<div className='text-container'>
							<Breadcrumbs />
							<Title>Get in touch 📬</Title>
							<p className='p-text'>
								If you've got any questions, an idea for a
								project or something else, feel free to reach
								out—I'll get back to you promptly. If you're
								reporting a bug on this website, please{' '}
								<ELi href='https://github.com/xplato/website/issues' className='default-link'>
									open an issue
								</ELi>{' '}
								instead.
							</p>

							{showEmail && (
								<blockquote className='sm'>
									<p>tristan@infinium.earth</p>
								</blockquote>
							)}

							<button className='button gray' onClick={onClick}>
								<span>{buttonText}</span>
							</button>
						</div>
					</Entity>
				</div>
			</section>
		</>
	);
};

export default Contact;
