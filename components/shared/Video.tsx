interface Props {
	src: string;
}

const Video = ({ src }: Props) => {
	return (
		<video controls width='100%' autoPlay loop>
			<source src={`${src}.mov`} type='video/mov' />
			<source src={`${src}.mp4`} type='video/mp4' />
			Sorry, your browser doesn't support embedded videos.
		</video>
	);
};

export default Video;
