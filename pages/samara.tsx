import ELi from '../components/ELi';
import Layout from '../components/layout/Layout';
import PageMeta from '../components/PageMeta';
import Wrapper from '../components/Wrapper';

const Samara = () => {
	return (
		<>
			<PageMeta
				meta={{
					title: 'code',
					description: 'My projects',
				}}
			/>

			<Wrapper s='top' c='flex-c'>
				<article className='w-100p flex-c'>
					<div className='w-100p flex-c text-c'>
						<p>Difficulty: 5</p>
						<p>
							Searching with Google is discouraged.... but you're
							welcome to utilize{' '}
							<ELi href='https://gofe.app/'>Gofë!</ELi>
						</p>
						<p>
							~ **** * ******* **~* *~** *~ ~~* ******* ** ***
							~~~*** ******* *~ ******* ~** ** *** ~ *~* *~ ~*~* ~
							** ~~~ ~*
						</p>
						<p>
							~ **** * ******* **~* *~** *~ ~~* ******* ** ***
							******* *~ ******* ~** ** *** ~ *~* *~ ~*~* ~ ** ~~~
							~*
						</p>
						<p>
							~*** **~ ~ ******* *~~ **** ** ~*~* **** ******* **
							*** ******* ** ~ **~~**
						</p>
					</div>
				</article>
			</Wrapper>
		</>
	);
};

Samara.layout = Layout;

export default Samara;
