import HObject from '../../components/HObject';
import Layout from '../../components/layout/Layout';
import PageMeta from '../../components/PageMeta';
import Wrapper from '../../components/Wrapper';

import { archivedWritings } from '../../data/writings';

const Archive = () => {
	return (
		<>
			<PageMeta
				meta={{
					title: 'Archived writings',
					description: "Stuff you shouldn't see...",
				}}
			/>

			<Wrapper s='ui-1 mod-padding'>
				<div className='mb-1-5r'>
					<h1 className='mb-0 fw-600'>Here lies... 🪦</h1>
				</div>

				<div className='mw-35r'>
					<p>
						I am very rarely truly satisfied with anything I do. I
						can always identify a flaw. Most of the time, I'd say,
						the default output is good enough that I can publish it.
					</p>

					<p>
						Some of the time, however, I make something so terribly
						horrible that I must remove it from the general view. As
						such, these are the articles that I abhor. For
						historical reasons (and a consistent reminder to do
						better), I've decided to keep them in an archive.
					</p>

					<p>
						Abandon all hope, ye who read these scrolls. They are
						provided as-is, without warranty of any kind. Continue
						at your peril.
					</p>

					<p>
						(Most of these... I wasn't "in the normal state of
						mind," if you know what I mean.)
					</p>
				</div>

				<div className='w-100p grid grid-3 tablet-grid-2 landscape-grid-1 mt-3r'>
					{archivedWritings.map((e) => (
						<HObject
							id={e.slug}
							doesLink
							highlight={false}
							obj={{
								...e,
								href: `/writings/archive/${e.slug}`,
								content: e.excerpt,
							}}
						/>
					))}
				</div>
			</Wrapper>
		</>
	);
};

Archive.layout = Layout;

export default Archive;
