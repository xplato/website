import Layout from '../components/layout/Layout';
import PageMeta from '../components/PageMeta';
import HObject from '../components/HObject';

import { writings } from '../data/writings';

const Writings = () => {
	return (
		<>
			<PageMeta
				meta={{
					title: 'code',
					description: 'My projects',
				}}
			/>

			<section className='section ui-1 dark-ui mod-padding'>
				<div className='container'>
					<div className='mb-1-5r'>
						<h1 className='mb-0 fw-600'>Writings 📜</h1>
					</div>

					<div className='w-100p grid grid-3 tablet-grid-2 landscape-grid-1'>
						{writings.map((e) => (
							<HObject
								id={e.slug}
								doesLink
								highlight={false}
								obj={{
									...e,
									href: `/writing/${e.slug}`,
									content: e.excerpt,
								}}
							/>
						))}
					</div>
				</div>
			</section>
		</>
	);
};

Writings.layout = Layout;

export default Writings;
