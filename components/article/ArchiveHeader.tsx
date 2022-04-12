import Li from '../Li';

const ArchiveHeader = () => (
	<Li
		href='/articles/archive'
		className='very-top flex align-c justify-s flex-row'
	>
		<i className='j-icon mr-0-5r'>
			<svg
				xmlns='http://www.w3.org/2000/svg'
				className='h-5 w-5'
				viewBox='0 0 20 20'
				fill='currentColor'
			>
				<path
					fill-rule='evenodd'
					d='M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z'
					clip-rule='evenodd'
				/>
			</svg>
		</i>
		<p className='my-0 lh-1'>Back to archived articles</p>
	</Li>
);

export default ArchiveHeader;
