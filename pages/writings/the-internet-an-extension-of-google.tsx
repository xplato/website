import Writing from '../../components/writing/Writing';
import ELi from '../../components/ELi';
import PageMeta from '../../components/PageMeta';

const A = () => (
	<Writing>
		<PageMeta meta={{
			title: 'The Internet: An Extension of Google',
			description: `
				There exist many tech companies who are right around or above the
				size of Google. We usually group them into this subtly suggestive
				term “FAANG” (Facebook, Apple, Amazon, Netflix, Google).
			`,
		}} />
		<p className='mt-1-5r'>27 March, 2022</p>
		<h1>The Internet: An Extension of Google</h1>
		<p>
			There exist many tech companies who are right around or above the
			size of Google. We usually group them into this subtly suggestive
			term “FAANG” (Facebook, Apple, Amazon, Netflix, Google).
		</p>
		<p>
			And yet few, I reckon, have the control that Google does over the
			world’s information.
		</p>
		<h2>The Power of Concealment</h2>
		<p>
			It is quite obvious that Google has the ability to block absolutely
			any website it wants. Most probably, throughout their entire system.
		</p>
		<p>
			Considering that Google probably handles about 3-6 billion searches
			per day, they have enormous control over the information people see.
		</p>
		<p>
			This is, of course, obvious. I think, however, that this control
			doesn’t just affect what people see, it also affects how developers
			build their applications.
		</p>
		<h2>Suggestive Power</h2>
		<p>
			Anyone who has worked in marketing, web development, or something
			similar in the last decade has likely heard of, or has worked with,
			Search Engine Optimization (SEO).
		</p>
		<p>
			For the unaware, SEO is merely the process by which a webmaster
			(developer, etc.) tweaks the content, code, assets, etc., of a
			website so as to please specific search engines, like Google.
		</p>
		<p>
			In practice, this usually means making sure the title of a page uses
			an <code>&lt;h1&gt;</code> tag, making sure all{' '}
			<code>&lt;img /&gt;</code>s have <code>alt</code> tags, and so on.
		</p>
		<p>
			One way to look at it, and the way most people do, is “I’m adjusting
			my site so that it is preferred over other results—so that it shows
			up higher.”
		</p>
		<p>
			This makes sense. After all, a website is no good without any
			users—if your users can’t find your site, they won’t go to it.
		</p>
		<p>
			You, as a webmaster, therefore, have an incentive to play by the
			rules of SEO; you have an incentive to do what Google “suggests.”
		</p>
		<p>I know. I’ve done it.</p>
		<p>
			I think we overlook, however, just how much control they really
			have.
		</p>
		<h2>Just a Thought</h2>
		<p>
			Assume you’re operating a big blogging website. You use ads, so the
			site is actually a decent source of income. Maybe the specific types
			of content you write is more of a “one-and-done” sort of thing from
			the perspective of your users. That is, they only really visit you
			once in awhile.
		</p>
		<p>
			As such, your revenue is directly linked to your traffic. If people
			can’t find your site, you don’t get paid.
		</p>
		<p>...</p>
		<p>Let’s take this a tad further.</p>
		<p>
			Let’s say Google wakes up one day and decides, “I’m going to stop
			showing results for websites that use an invalid order of heading (
			<code>h[1-6</code>]) tags.”
		</p>
		<p>
			Disregarding the shock that would hit probably every web developer
			out there, this would be the prompt of an incredible action: people
			would do it.
		</p>
		<p>
			What if your entire livelihood rested on your website? What if
			Google decided to stop showing it?
		</p>
		<p>
			It is this amount of control that dictates, in a general sense, how
			the web is built.
		</p>
		<h2>“Those SEO Guys”</h2>
		<p>
			You may be saying, “well, sure. Google does have a lot of control,
			but it’s not like they use it, right? Surely, such a big change in
			their results would be met with a lot of hesitation.”
		</p>
		<p>
			Unfortunately, this isn’t quite true. In fact, Google has done
			something just like this before, back when they said they would
			start{' '}
			<ELi href='https://digiday.com/media/pitch-deck-inside-googles-plans-give-amp-pages-prominence-search-results/'>
				rating AMP pages higher in results.
			</ELi>
		</p>
		<p>
			In my time working as a freelancer and a contractor for some tech
			companies, I’ve met more than a few of “those SEO guys.”
		</p>
		<p>
			If you know what I’m talking about, you know, if you don’t, you
			don’t care.
		</p>
		<p>
			Generally, these are the webmasters (usually content writers) who
			dedicate 80% of their time to pleasing Google. The people who won’t
			let you publish a page of a website until it has been “reviewed” by
			some so-called “SEO masters.”
		</p>
		<p>
			Usually, they just send files to some company and pay them double
			the cost of writing the file to tell him, “all’s well.”
		</p>
		<p>
			SEO is usually not some static list of things you should change. It
			is constantly evolving. Google updates their algorithm, probably,
			daily.
		</p>
		<p>
			Still, the problem exists: Google can ultimately not only control
			what information is seen, but how that information is constructed as
			well.
		</p>
		<h2>What can be done?</h2>
		<p>
			Dealing with tech companies with the prominence and importance of
			Google is difficult. Some immediately jump to governmental control,
			wherein Google would be “kept in check,” and not allowed to enact
			major changes to the web.
		</p>
		<p>This, of course, has its problems.</p>
		<p>
			For starters, how can we trust “the government” (obviously, a
			specific team assigned to Google) to know the consequences of
			certain things?
		</p>
		<p>
			I mean, go tell any government manager, “Help! Google plans to force
			all developers to make their heading tags ordered, or else their
			site won’t show up in search results!”
		</p>
		<p>Yeah, that’ll get you far.</p>
		<p>...</p>
		<p>
			Very recently, Josh Renaud of Missouri uncovered “a flaw in a public
			website run by the Missouri Department of Elementary and Secondary
			Education that exposed thousands of teachers’ sensitive
			information.” [1]
		</p>
		<p>How? Inspect element. Literally.</p>
		<p>
			Inspect element, the HTML source code of a website, is voodoo magic
			to mostly everyone. I know, because I remember looking at it before
			I was a developer.
		</p>
		<p>
			One time, in fact, I logged into my school’s grade system and used
			Inspect element to change my GPA. (I actually had to lower it from 4
			to 2, to temporarily prank my parents that I was failing; not what
			you thought? It was pretty much at this point that I became aware of
			how web pages were built. They are just files written a specific
			way!)
		</p>
		<p>
			Regardless, my parents had no idea how I had done it. My natural
			informative nature prompted me to tell them how. The first time I
			opened the inspect element window, the screen was met with confused
			squinting on behalf of my parents. It is beyond the scope of any
			conceivable language. It is deceptive, however, in that there are
			some discernible words throughout—<code>class=</code>, for instance.
		</p>
		<p>
			My point is that you <strong>really</strong> have to convince people
			that you’re not breaking something or doing something illegal
			(”uhh... yeah, 911? My son changed his grade on a website. I think
			he’s hacking.” (this didn’t happen to me haha)).
		</p>
		<p>
			And no, this “I think you’re hacking” view is not specific to your
			tech-unsavvy mother, it extends to the governors of entire states:
		</p>
		<blockquote>
			<p>
				Gov. Mike Parson falsely accused me of being a “hacker” in a
				televised press conference, in press releases sent to every
				teacher across the state, and in attack ads aired by his
				political action committee. [2]
			</p>
		</blockquote>
		<p>
			He waited anxiously for <strong>four months</strong> before the{' '}
			<ELi href='https://www.reddit.com/r/cybersecurity/comments/ss1wf0/charges_dropped_against_the_inspect_element'>
				charges were dropped.
			</ELi>
		</p>
		<p>Ignorance truly does prevail.</p>
		<p>
			If it takes 4 months to convince a few people that clicking “Inspect
			Element” is not a crime, then how can we depend on (very probably)
			equally ignorant people to protect the internet from the control of
			Google?
		</p>
		<p>
			Obviously, I may be overestimating or underestimating their
			ignorance. After all, it may happen that the very person in charge
			of Google is a master web dev—very aware of the damage they could
			cause. You simply never know.
		</p>
		<p>
			The problem, however, is that something of this magnitude shouldn’t
			be put into the hands of chance. They are either in check or they
			are not, and it takes experts in the field to explain the importance
			of what they are attempting to protect.
		</p>
		<h2>Final Thoughts</h2>
		<p>
			Google doesn’t control the entire internet. After all, I can go buy
			a $5 VPS and set up an Apache web server in less than a few minutes,
			to which you’d be able to visit directly in any web browser.
		</p>
		<p>
			But, say the above paragraph to your grandma, or any average Joe on
			the street, and they won’t know what half of those words mean!
		</p>
		<p>
			For most people, as indicated by what I’ve seen and heard, their
			understanding of the internet is almost always{' '}
			<em>an extension of Google.</em>
		</p>
		<p>
			For them, every website is at least two steps away: A search on
			Google → The website they want to view.
		</p>
		<p>
			Of course, this entire article is specifically about Google (in my
			opinion, they have the most control of information; AWS by Amazon,
			for instance, might have more over the availability of that
			information), but this fact of control over the internet extends to
			other companies.
		</p>
		<p>
			If Apple wanted to, they could stop showing my house on Apple Maps.
			It would be forever erased, and anyone looking near it would forever
			see an empty plot of land; history,{' '}
			<strong>for those who don’t verify</strong>, would have been
			rewritten.
		</p>
		<p>
			This, I think, is when people talk about the “Information Age.” It
			is, after all, the most valuable commodity. And if you have the
			power to control it, you have the power to control anything.
		</p>
		<p>Thank you for reading.</p>
		<h2>References &amp; Further Reading</h2>
		<p>
			[1 & 2]:{' '}
			<ELi
				href='https://joshrenaud.com/pd/josh-renaud-personal-statement.pdf'
			>
				https://joshrenaud.com/pd/josh-renaud-personal-statement.pdf
			</ELi>
		</p>
	</Writing>
);

export default A;
