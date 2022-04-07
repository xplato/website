import Li from "../Li";


const Navigation = () => {
	const links = [
		{
			label: '~hydra',
			href: '/',
		},
		{
			label: 'code',
			href: '/code',
		},
		{
			label: 'articles',
			href: '/articles',
		},
		{
			label: 'whoami',
			href: '/whoami',
		},
	]

	return (
		<header>
			<div id="navbar" className="flex-sb">
			   <div className="flex flex-row align-c justify-c">
					{links.map(link => (
						<Li href={link.href} key={link.label} className='nav-link'>{link.label}</Li>
					))}
				</div>
				<div className="flex flex-row align-c justify-c portrait-hide">
					<Li href='/psych' className='nav-link'>Psych</Li>
				</div>
			</div>
		</header>
	);
};

export default Navigation;