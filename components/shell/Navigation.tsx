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
						<Li href={link.href} key={link.label}>{link.label}</Li>
					))}
				</div>
				<div className="flex flex-row align-c justify-c portrait-hide">
					<a href="https://github.com/Infinium8" rel="noreferrer noopener nofollow" target="_blank">GitHub</a>
				</div>
			</div>
		</header>
	);
};

export default Navigation;