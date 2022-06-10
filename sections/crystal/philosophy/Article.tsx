import ELi from '../../../components/ELi';

import Li from '../../../components/Li';
import Content from '../../../components/shared/Content';
import Title from '../../../components/Title';
import T from '../T';

const Article = () => {
	return (
		<>
			<section className='section xspacing'>
				<div className='x-container flex-c'>
					<Content mods='mt-6r'>
						<T>
							<Li href='/crystal'>On Wednesday</Li>, I spoke about
							a few of the features and implementation deatils of
							CrystalUI.
						</T>

						<T>
							While CrystalUI itself—that is, the visual
							manifestation of the "Crystal Philosophy"—is an
							important aspect to the project as a whole, it is,
							at the end of the day, just a component.
						</T>

						<T>
							In other words, the so-called "characteristics" of
							CrystalUI aren't specific or linked in any way to
							the particular way I implemented it. Color, depth,
							adaptability and so on are all general, and many
							different UIs could fit the bill.
						</T>

						<T>
							Because of this, I wanted to get the actual UI out
							of the way first, at least in part. Changes happen,
							people's preferences mutate over time—I am no
							stranger to indecisiveness. Therefore, it stands to
							reason that, as "adaptability" suggests, the UI
							should adapt to the needs of the user. This can
							include tiny changes, like modifying the background
							color of the dynamic panel, to much larger ones,
							like the redesign of all system components.
						</T>

						<T>
							Therefore, the most important thing is what the UI
							ultimately accomplishes.
						</T>

						<T>
							Another thing to mention is that many users (myself
							included) want to customize the UI to their
							preference. The UI, therefore, being adaptable and
							encountering potentially unpredictable scenarios,
							plays an important role only in generalization, not
							in specificity.
						</T>

						<T>
							It stands to reason, then, that the ideal aim of the
							UI should be to implement the underlying philosophy
							that Crystal subscribes to, however that
							implementation may turn out to be. In other words,
							as long as it fulfills the necessary requirements,
							it can be constituted as being "Crystal-like."
						</T>
					</Content>

					<Content>
						<div className='mt-4r'></div>
						<Title>Implementation of the UI</Title>

						<T>
							Now, one of the important things about CrystalUI is
							that it is designed specifically—though not by means
							of exclusion—for CrystalOS.
						</T>
						<T>
							And, since CrystalUI inherits the principles of the
							Crystal Philosophy, CrystalOS does as well. Indeed,
							it is entirely the OS that I want to focus on with
							the philosophy. The tiny UI-focused implementation
							details like the floating backgrounds are, at the
							end of the day, subject to preference. I definitely
							love them, but you may not. In this case, it doesn't
							matter too much because the UI just needs to, like I
							mentioned before, fulfil the requirements of the
							underlying philosophy.
						</T>

						<T>
							Therefore, as I go on to discuss this mysterious
							"Crystal Philosophy," note that it applies
							specifically to CrystalOS, from which the UI
							inherits its properties.
						</T>
						<T>Without further ado, let's proceed.</T>
					</Content>

					<Content>
						<div className='mt-4r'></div>
						<Title>Application of the Philosophy</Title>

						<T>
							There is an imperative distinction that needs to be
							made between the behavior the Philosophy describes
							and the default assumptions it makes.
						</T>

						<T>
							For instance, CrystalOS assumes that "files" and
							"folders" are a very common way of dealing with data
							stored on disk, and therefore, they are present in
							the OS.
						</T>
						<T>
							This is one of the first principles of the Crystal
							Philosophy (although, note that there is no sanity
							to the ordering): Be radical, but not unacceptably
							so.
						</T>
						<T>
							Modern infrastructure and software play an
							undeniably critical role in the way we work. While
							fundamental changes are, in my opinion, acceptable
							and indeed should be researched, in general, the
							best practice lies in remaining as familiar as you
							can.
						</T>
						<T>
							This is in contrast to projects like{' '}
							<ELi href='https://https://www.mercuryos.com/'>
								MercuryOS{' '}
							</ELi>
							where the entire OS has been redesigned from the
							ground-up. MercuryOS was a partial inspiration for
							this project, but I've remained on the less radical
							side of the "new OS design spectrum."
						</T>
						<T>
							In summary, the philosophy applies both to the
							behavior of the interface and the underlying
							structure of the operating system in general.
						</T>
					</Content>

					<Content mods='mt-4r'>
						<Title>Simplicity</Title>
						<T>
							I'll go ahead and get the cliché item out of the
							way.
						</T>

						<T>
							Simplicity is a widely over-used and
							over-misunderstood topic that I'm hesitant to speak
							on for that reason. Regardless, it is crucial to
							Crystal.
						</T>

						<T>
							Lots of modern operating systems display
							contextually useless information at all times. For
							instance, I personally dislike—to a moderate
							degree—the MacOS menu bar icons. My VPN is blasting
							a constant green "CONNECTED" (at least, it feels
							this way) symbol.
						</T>
						<T>
							From my perspective, I don't really need to know if
							it's working—I only need to know if something goes
							wrong.
						</T>
						<T>
							And, of course, by extension, if I am not alerted of
							an issue, I shall implicitly assume it is working as
							expected. [1]
						</T>
						<T>
							So, simplicity is a key factor. Many would argue
							that my disgust of the MacOS menu bar is partly a
							result of the whims of developers. To a certain
							degree, this is true. My VPN application chose to
							add that feature, and therefore it is there.
						</T>
						<T>
							It is essentiall, therefore, that any OS which
							intends to be "radical" to any substantial degree
							should enact or enforce a certain level of
							restriction in regard to the underlying
							applications. Not to mention even more critical
							topics such as security (application sandboxing
							comes to mind), the OS ultimately controls the
							interface—and therefore it should decide what is
							shown when.
						</T>
						<T>
							I intend for CrystalOS to be more applicable than,
							say, MercuryOS. In the latter, with the more radical
							changes to, for instance, the eradication of the
							file/folder structure, it would require a lot of
							work on behalf of application developers.
						</T>
						<T>
							Therefore, it is imperative that the OS is
							intelligent about the opinions it enacts. If an app
							is requesting permission to display information to
							the user, it should be deemed as relevant by the OS.
						</T>
						<T>
							It is much easier said than implemented, of course.
						</T>
						<T>
							Now, the magnitude of the above implementation is
							largely decided by the underlying infrastructure of
							the OS and how it handles applications.
						</T>
						<T>This brings me to an important topic.</T>
					</Content>

					<Content mods='mt-4r'>
						<Title>Application management</Title>

						<T>
							This is undeniably a touchy subject when it comes to
							OS redesigns.
						</T>
						<T>
							In many cases, you can't avoid, at least in theory,
							the requirement for application developers to modify
							their application to fit with your new design.
							Ideally, the software developer can simply ship a
							tarball of their code and the package manager will
							handle the installation.
						</T>
						<T>
							This is a fantasy in modern software distribution—at
							least as far as I'm aware.
						</T>
						<T>
							When you make a Linux application, for instance, you
							don't just make one "Linux Application" (in most
							cases). You make one for Fedora, one for Ubuntu, and
							so on.
						</T>
						<T>
							There are a variety of new-ish projects that attempt
							to improve this, but not all of them are ideal.
						</T>
						<T>
							Regardless, this ideally shouldn't be a problem at
							all. While I certainly don't intend to innovate the
							entire software distribution practices in all modern
							operating systems, I can at least control how
							CrystalOS works with applications.
						</T>
						<T>
							One thing I think may be overlooked is the safety of
							first-party OS applications. In general, I'd say we
							can all trust the stock Settings app to not go
							against your best interests. That's not to say that
							first-party applications are entirely safe, of
							course. The vulnerabilities are introduced the
							second that an app allows your machine to talk with
							other machines.
						</T>
						<T>
							Still, the idea that applications can be processed
							on-device (sandboxed, of course) without
							installation is very valuable for software
							distribution.
						</T>
						<T>
							Indeed, this is precisely how the web works. Web
							developers can choose the way they want to
							distribute their software. But at the end of the
							day, it all ends up as some IP address with port
							listeners serving HTML, CSS, JavaScript, and more.
						</T>
						<T>
							I think this is a powerful concept, and I believe it
							can be applied to operating systems to some degree.
						</T>
					</Content>

					<Content mods='mt-4r'>
						<Title>Distribution</Title>

						<T>
							Now, I have avoided touching on the distribution of
							"CrystalOS." That was quoted this time because my
							vision for Crystal doesn't really make it an "OS."
						</T>
						<T>
							I've been using "OS" only because it is a familiar
							term which is very closely related to how most
							people will interpret Crystal.
						</T>
						<T>
							Now, allow me to clarify that Crystal is still{' '}
							<span className='fw-600'>very</span> experimental.
							It will likely change a lot as time goes on, but for
							right now, this is the general plan.
						</T>
						<T>
							It is primarily a web-based OS, but slightly more
							integrated than just{' '}
							<code>http://something.com</code>.
						</T>
						<T>
							I think Linus Torvalds had it right when he spoke of
							how adoption of Linux at large scale would only
							happen if installation wasn't required.
						</T>
						<T>
							He also spoke of ChromeOS and its primarily
							browser-focused approach.
						</T>
						<T>
							Now... you may be questioning how good a
							browser-based OS could really be. After all, it's
							sandboxed within sandboxed on top of an already
							demanding OS. Can Crystal really replace modern
							operating systems?
						</T>
						<T>
							Well, I think, in some-to-many cases, it actually
							could.
						</T>
						<T>
							Let's imagine the life of a hypothetical property
							manager. Day-to-day responsibilities include being
							on stand-by if a guest requires assistance, ensuring
							the properties remain stocked with supplies,
							ensuring properties are cleaned and ready on-time,
							and so on.
						</T>
						<T>
							In the modern era, one would reasonably expect this
							person to utilize technologies such as phone calls,
							SMS, spreadsheets, email, web browsers, and so on.
						</T>
						<T>
							The thing is, every one of those can and has been
							made available on the web—generally, with similar to
							identical performance.
						</T>
						<T>
							Google Sheets, for instance, has seen wide use in
							corporate environments—and that's an understatement.
						</T>
						<T>
							Indeed, over time, I've observed many companies and
							individuals shift to an increasingly web-only
							workflow. Many apps are just easier to access on the
							web (on desktop, at least).
						</T>
						<T>
							Now, it's not necessarily the web itself that has
							this characteristic. Instead, it is just its modular
							nature.
						</T>
						<T>
							Now, if we just assume that CrystalOS would just be
							another OS on top of your current one that also
							allows web browsing... there's very little point to
							that. For that reason, I think there's another key
							to its efficacy.
						</T>
					</Content>

					<Content mods='mt-4r'>
						<Title>Integration</Title>

						<T>
							One of the unique things about web technology is
							that it is modular and integrated at the same time.
							How many sites out of the ones you've seen offer the
							ability to create an account with many different
							social media providers? 80%? 90%?
						</T>
						<T>
							This is a small example, but if we enlarge it, we
							come to see how CrystalOS might actually be useful.
						</T>
						<T>
							In the way that a website can accept and work with
							the authentication mechanisms of many different
							providers (usually via some{' '}
							<span className='fw-600'>standard</span>), CrystalOS
							could hypothetically integrate with any other
							system.
						</T>
						<T>
							Of course, this isn't exclusive to web technology.
							Nevertheless, what if you could have your desktop OS
							integrate seamlessly with your phone, regardless of
							what OS your phone uses?
						</T>
						<T>
							Better still, what if your OS wasn't linked to any
							particular device?
						</T>
						<T>
							What if your hard disk crashes and your work is
							lost? How often do you back it up?
						</T>
						<T>
							If your OS was linked elsewhere, you could spin up
							and access your data from, hypothetically, anywhere.
						</T>
						<T>
							Naturally, this highlights the concern of security.
							After all, do you really want all your data on some
							server?
						</T>
						<T>
							Well, I'd argue that there are definitely secure
							ways to do this. Primarily, OS-level encryption on
							the server will be enabled by default. The second
							before data leaves the browser, it's rendered
							useless by means of encryption.
						</T>
						<T>
							In addition to this, we could also introduce
							physical security keys which are less likely to be
							destroyed. Moreover, many of the same keys could be
							manufactured at a time, leaving the possibility for
							spare keys to be stored elsewhere.
						</T>
						<T>
							This technology of web-based operating systems isn't
							completely new. I've observed a few enterprises make
							use of this technology in rare cases. Although, they
							are usually highly limited by their corporate
							environment and they must still be downloaded
							on-device.
						</T>
						<T>
							Instead, I am proposing something so simple that I
							could walk into the lobby of my hotel, stick my
							physical key or passowrd into Crystal, and get right
							back to precisely what I was doing before I left my
							hotel room only minutes prior.
						</T>
					</Content>

					<Content mods='mt-4r'>
						<Title>Adaptability</Title>

						<T>
							Much in the same way that the UI should adapt to its
							environment, certain underlying features of the OS
							should adapt to the whims of the user.
						</T>
						<T>
							For instance, if the user would prefer all data to
							be kept local only, by strict restriction from the
							OS, then that is how it should work.
						</T>
						<T>
							This brings up another point, in particular about
							the construction of such a system: Crystal should
							largely be a series of the Middleman pattern.
							Instead of working directly with cloud files, for
							instance, it should always create a local store to
							which a separate entity (read "microservice") will
							handle the submission of that data to a third-party.
						</T>
						<T>
							Many systems already work in this way, but Crystal
							would make copious use of the pattern to enable
							highly precise integration with existing systems.
						</T>
						<T>
							So far, I've only mentioned CrystalOS in the context
							of being a desktop OS. Crystal is not exclusive to a
							PC, however. In fact, I envision Crystal to be fully
							compatible out-of-the-box with any device. There's
							no sense of "sharing" things between your own
							devices—they simply are the same thing, and Crystal
							would recognize that they are separate, albeit
							identical (as much as possible), instances.
						</T>
						<T>
							Having the same underlying OS for desktop and mobile
							purposes unlocks an incredible amount of untapped
							potential for sharing, collaboration, and so on.
						</T>
					</Content>

					<Content mods='mt-4r'>
						<Title>Recovery</Title>

						<T>
							When I think of futuristic technology, I think of
							highly integrated technology—I think of being able
							to walk into a conference room with nothing but a
							USB around your neck and being able to share that
							presentation you've been working on—in precisely the
							way you intended it to be seen.
						</T>
						<T>
							In addition, I think of those split-seconds where
							your screen cracks or you drop your device; the
							ensuing stress about the data you've lost and all
							the recovery you'll need to do to get back to
							working order can be overwhelming.
						</T>
						<T>
							Not to mention the cost of the device itself, the
							data within it is often priceless, just due to its
							unique (and, unfortunately, in many cases, singular)
							nature.
						</T>
					</Content>

					<Content mods='mt-4r'>
						<Title>Competition</Title>

						<T>
							Again, one important aspect of Crystal is that it
							can integrate nicely with existing technologies. In
							practice, this would mean that switching between
							Crystal and more traditional operating systems
							wouldn't involve, for instance, reformatting your
							data from APFS to LUKS.
						</T>
						<T>
							This means that both the complete adoption of
							Crystal as well as the integration with your
							existing OS would generally be seamless. In this
							way, Crystal is not lock-in, not downloadable (in
							the layman sense of the word), not restrictive.
						</T>
					</Content>

					<Content mods='mt-4r'>
						<Title>Customization</Title>

						<T>
							Back when my hardware was nice to me (or when Linux
							distros contained code that my hardware liked), I
							made excellent use of Linux.
						</T>
						<T>
							Not unlike many of my colleagues, I was inclined to
							the notorious distro-hopping—the practice of
							switching the operating system you use at a frequent
							pace in an effort to learn and/or qualify/disqualify
							any particular distribution from becoming your daily
							driver.
						</T>
						<T>
							At my "peak" (of stupidity, it often seems) I was
							changing distros every day.
						</T>
						<T>
							As I work in design, I have particular tastes in
							interfaces. I often wanted to change it up and get a
							feel for some new ways of doing things.
						</T>
						<T>
							This brings me to something very important:
							CrystalOS is actually a low-level abstraction of a
							real OS. It itself does not contain any UI
							whatsoever. This means that the UI can, in theory,
							literally be downloaded on-demand from anywhere.
						</T>
						<T>
							Of course, in practice, this would not be ideal in
							almost any scenario, but it highlights the
							capability that "distro-hopping" is no longer a
							thing; just swap out the UI for something completely
							different and continue your work.
						</T>
						<T>
							This is in complete constrast to something like the
							custom themes of GNOME. When you download a theme
							from{' '}
							<ELi href='https://gnome-look.org'>
								gnome-look.org
							</ELi>
							, you're downloading a hack, so to speak.
						</T>
						<T>
							In reality, you're downloading a set of files that
							reset or alter the design of GNOME itself. Although,
							this is largely limited.
						</T>
						<T>
							If you want one theme for your menu bar (the top
							one), the dock, the windows, and the icons, you've
							got to download, at minimum, 2 different theme
							packages as well as manually set the theme for each
							of those components...
						</T>
						<T>Umm... what?</T>
						<T>
							Exactly. It's a pain in the ass to get even a little
							bit of customization. Not to mention, most of the
							themes are complete shit and made with sub-par code.
						</T>
						<T>
							What if, when you're in the mood for a little
							refreshment, you open a snappy window with a curated
							selection of complete UI redesigns—all of which are
							completely integrated and{' '}
							<span className='fw-600'>not</span> a refactor,
							readjustment, or reset of any existing styles. They
							instead exist as entire UI modules themselves—able
							to be switched out at whim with no distruption to
							your underlying data or apps.
						</T>
						<T>
							When I talk about "the UI" here I mean literally the
							entire interface that sits atop CrystalOS, I'm not
							talking just about the design of Menus and Inputs.
						</T>
						<T>
							To go into more detail, one could imagine that one
							UI module would contain a full i3-like window
							manager, or another containing a mix like the one we
							see in COSMIC.
						</T>
					</Content>

					<Content mods='mt-4r'>
						<Title>Closing remarks</Title>

						<T>
							I could go on, really. There is a lot to say about
							the highly modular nature of Crystal and how it can
							work closely with the workflows we already have
							today.
						</T>
						<T>
							There are also a lot of areas to explore,
							particularly in implementation, performance,
							efficacy, and more.
						</T>
						<T>
							This was only part 2 of a still multi-part series.
							There is more to come.
						</T>
						<T>
							Next up, we'll visit specific UI implementations of
							the principles outlined here. More specifically,
							we'll be taking a closer look at what CrystalOS
							looks like, how it works, and more on the trajectory
							of the project as a whole.
						</T>
						<T>
							If you've made it this far, then{' '}
							<code>{`{props}`}</code> to you.
						</T>
						<T>Thanks for reading.</T>
					</Content>
				</div>
			</section>
		</>
	);
};

export default Article;
