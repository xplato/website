import ELi from '../../../components/ELi';

import Li from '../../../components/Li';
import Content from '../../../components/shared/Content';
import FeaturedImage from '../../../components/shared/FeaturedImage';
import Title from '../../../components/Title';
import { getEdgePath } from '../../../logic/utils';
import T from '../T';

const Article = () => {
	return (
		<>
			<section className='section xspacing'>
				<div className='x-container flex-c'>
					<Content mods='mt-6r'>
						<T>
							In the{' '}
							<Li href='/avalon/philosophy'>previous section</Li>,
							I spoke about how I wanted to "get the UI out of the
							way" in an effort to spend more time on the
							philosophy and design of AvalonOS.
						</T>
						<T>
							I should have been more clear. What I meant was I
							wanted to get the atomic UI out of the way. That is,
							the design of dropdown components, buttons, and so
							on. The UI of AvalonOS itself plays a major role in
							its efficacy, and that is, in fact, what I plan to
							focus on entirely today.
						</T>
						<T>
							Don't worry, however—this won't be another exposé in
							dropdown menu design. Rather, I plan to focus on the
							design, experience, workflow, and more properties of
							AvalonOS as a whole.
						</T>
						<T>Let's get right into it.</T>
					</Content>

					<Content mods='mt-4r'>
						<Title>Views</Title>

						<T>
							Right when you login to MacOS, you are greeted with
							your _______.
						</T>
						<T>
							Logging into Windows, you instantly see your
							_______.
						</T>
						<T>
							And still, even when logging into Linux, the default
							view is the _______.
						</T>
						<T>
							In the top 3 most used operating systems in the
							world, the only "View" is the desktop. You can
							clutter it with windows, you can create tiny
							abstractions on top of it like MacOS's "Mission
							Control" or GNOME's "Activities" (or is it
							"Overview" now?), but ultimately, you're stuck in
							the prison of experience that is your barren
							Desktop.
						</T>
						<T>I think this is hugely limiting.</T>
						<T>
							To my eye, the Desktop serves as the most bland
							starting point for any task. It is the vessel to all
							nested actions. As a consequence of this, however,
							it must remain general and unspecific.
						</T>
						<T>So, how can we better utilize this?</T>
						<T>
							Given that the Desktop, meant to act as the
							cornerstone for action, has to remain unspecific,
							the only way to utilize this is to create more views
							that have more specific purposes.
						</T>
						<T>
							You may be thinking, "well, okay. The Desktop is the
							one and only view, but hasn't it worked fine for us?
							What could we do to make it better?"
						</T>
						<T>
							Nay, I believe this is looking at things backwards.
							We aren't trying to improve our Views, we're trying
							to improve our work. And as a consequence of these
							improvements, the way we view and literally do our
							work has to change as well.
						</T>
						<T>
							While I have <span className='fw-600'>a lot</span>{' '}
							of ideas for Views, the most important one is:
						</T>
					</Content>

					<Content mods='mt-4r'>
						<Title>Projects {'&'} Workspaces</Title>

						<T>
							Earlier, I mentioned MacOS's "Mission Control" and
							GNOME's "Activities." Over the last, I don't know,
							10 or so years, the concept of window management has
							become more popular.
						</T>
						<T>
							(I do not like Windows [the operating system] and I
							haven't used it for some time, so I'm going to
							disregard it for now.)
						</T>
						<T>Let's define these more clearly.</T>
						<T>
							In my opinion, a "window manager" is something that
							manages the placement and size of windows in any
							given environment. A "Workspace,"{' '}
							<span className='fw-600'>
								as MacOS and Linux [1] define it
							</span>{' '}
							is a collection of windows. In other words, each
							workspace is a separate window manager.
						</T>
						<T>
							In this way, a Workspace is just your Desktop,
							duplicated.
						</T>
						<T>
							Now, there's no blame to be placed on the designers
							and developers of the most widely-used operating
							systems in the world here.
						</T>
						<T>
							After all, their goal is likely to stay as usable
							and familiar as possible. Every single major
							operating system uses windows. And nearly every one
							(I don't know about Windows) has created this idea
							of Workspaces as a collection of windows.
						</T>
						<T>
							This is normal, natural, and predictable. What's to
							change?
						</T>
						<T>
							Well, the title of this section is "Projects {'&'}{' '}
							Workspaces", not just "Workspaces." So... what's the
							difference?
						</T>
						<T>
							No matter what you work on, I guarantee it has a
							name, can be given a name, or is, at minimum,
							considered a "project."
						</T>
						<T>
							This extends to real-life occupations, of course.
							Hell, even baking could have its own project: "Jim's
							Wedding Cake!"
						</T>
						<T>
							Baking obviously isn't the best example here. After
							all, we're talking about digital projects. Still, my
							point stands. If you're doing something on your
							computer, it's safe to say you are either working on
							a project or doing some general stuff
							(entertainment, "wasting time," and so on).
						</T>
						<T>
							And, by extension, if you are working on something,
							you are probably working on a project.
						</T>
						<T>So... how can this help us?</T>
						<T>One word: Integration.</T>
						<T>
							Traditional "Workspaces" are a collection of
							windows.{' '}
							<span className='fw-600'>
								In Avalon, a Workspace is the project you are
								working on—entirely.
							</span>
						</T>
						<T>
							Indeed, in Avalon, a Workspace does contain a
							collection of windows, but it also contains much
							more.
						</T>
						<T>
							Views and Workspaces work very well together. Below,
							we see the Today view, which is a collection of
							Workspaces ordered by the time you most recently
							worked on them.
						</T>
					</Content>

					<FeaturedImage
						src={getEdgePath('avalon/part-3/today-view.jpg')}
						caption='The Today View'
					/>

					<Content mods='mt-4r'>
						<T>
							Notice how the top 3 cards contain more contextually
							useful information than the others? Remember how I
							said Workspaces are much more than just windows?
						</T>
						<T>
							I reiterate: A Workspace{' '}
							<span className='fw-600'>is</span> a project. It
							contains a bunch of other information related to the
							project as a whole: browser tabs, browser history,
							passwords, windows, widgets, emails, messages—the
							list goes on.
						</T>
						<T>
							Think of how you start a project right now. Since
							I'm a programmer, we'll use my work as an example.
						</T>
						<T>
							Let's say I'm creating a new website. My tasks are
							generally:
						</T>

						<ol>
							<li>
								<p>
									Open the Terminal and navigate to my main
									projects directory
								</p>
							</li>
							<li>
								<p>
									Create a new project directory, usually via{' '}
									<code>
										yarn create next-app --typescript
									</code>
								</p>
							</li>
							<li>
								<p>
									Open my code editor and click "Open Folder"
									and then use my mouse to walk down what
									seems like an endless directory tree in an
									effort to find the newly created project.
								</p>
							</li>
							<li>
								<p>
									Start the development server (
									<code>yarn dev</code>)
								</p>
							</li>
							<li>
								<p>
									Open my browser to{' '}
									<code>localhost:3000</code>
								</p>
							</li>
							<li>
								<p>Finally, begin work.</p>
							</li>
						</ol>

						<T>
							Generally, this is fine. After all, it's not the
							sort of hinderance that makes me want to throw my
							laptop across the room. Rather, it's the sort of
							thing that, in passing, could be greatly improved.
						</T>
						<T>
							So, how would this "issue" be improved by Avalon's
							Workspaces?
						</T>
						<T>
							Normal Workspaces are essentially duplicates of your
							Desktop. Avalon's Workspaces are completely new
							environments—they contain their own filesystem,
							their own notifications, their own data.
						</T>
						<T>
							In this way, if I were to create a new project in
							Avalon, I'd simply press the "new" button and type
							in a name. Then, I am already working.
						</T>
						<T>
							This has a modular structure to it. Each project is
							individual and does not in any way conflict with
							your other projects, unless you specifically do so.
						</T>
						<T>
							This modular nature introduces the concept of
							patterns. And in patterns we can automate.
						</T>
						<T>
							I make a lot of websites. Really, I do. I make so
							many that I've wondered why I haven't automated the
							process of creating new websites.
						</T>
						<T>Well, in Avalon, that will come by default.</T>

						<div className='mt-4r'></div>
						<Title>Intelligence</Title>

						<T>
							Avalon is not dumb. I mean, the code inside it and
							how it works with you, the user, is not dumb. Its
							usefullness and efficacy as a project is debatable,
							but the underlying functionality is undeniably
							genius, for which I do not take all the credit.
						</T>
						<T>
							When you create a new project in Avalon, it's
							watching you. It's paying close attention to what
							you're doing.
						</T>
						<T>
							In fact, it's paying such close attention that you
							can press Command + K and say "Make common project."
						</T>
						<T>
							"What does this do?" you ask. Well, it takes
							everything you've done from when you pressed "New
							project" and it creates a new pattern. It recognizes
							that this project, at least the setup for it, is
							common, and you may want to use it again.
						</T>
						<T>
							Now, when I need to create a new web project, all I
							have to do is press a single button, and my entire
							environment is already set up for me.
						</T>

						<div className='mt-4r'></div>
						<Title>Security {'&'} Sandboxing</Title>

						<T>
							I needn't go on to explain the usefullness of this
							modularization, but I will speak for a moment about
							sandboxing and security.
						</T>
						<T>
							Projects (or "Workspaces," as I will use
							interchangably) are not only visually separate, but
							literally as well. A separate filesystem means
							separate permissions. It means that if a bad actor
							gains access to my "New House" project, there's no
							way in hell they'll know about my "Job Interview"
							project, much less have access to it.
						</T>
						<T>
							Indeed, when switching between Projects (which is
							understandably seamless, by the way) permissions are
							entirely reset and you are ultimately working as a
							new user created specifically to manage that one
							project.
						</T>
						<T>
							The implications of the safety here are incredible.
							It'd be like literally creating a new user on your
							current operating system for each project you work
							on.
						</T>

						<div className='mt-4r'></div>
						<Title>We're just getting started</Title>

						<T>
							Views and Workspaces are really the heart of
							Avalon's architecture. It is modular by design—and
							this modularization unlocks an impressive amount of
							features that modern operating systems lack.
						</T>
						<T>
							I hope that, like me, you're excited for what comes
							next. Stay tuned for part 4 where I'll go into more
							general details about distribution, security,
							usefullness, and more. In the meantime, if you've
							found this interesting, share it with those who will
							do so likewise.
						</T>
						<T>Thanks for reading.</T>
					</Content>
				</div>
			</section>
		</>
	);
};

export default Article;
