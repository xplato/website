import ArchiveHeader from '../../../components/article/ArchiveHeader';
import Article from '../../../components/article/Article';
import ELi from '../../../components/ELi';
import PageTitle from '../../../components/PageTitle';

const A = () => (
	<Article>
		<ArchiveHeader />
		<PageTitle>On Search &amp; Suggestions</PageTitle>
		<h1>On Search &amp; Suggestions</h1>
		<p>In the last few months, my work has been primarily focused on web-related projects with a similar (often identical) tech stack.</p>
		<p>I opened GitHub today, as I always do, and I happened to notice the “Explore repositories” section. As you can likely guess from both intuition and the title of this article, these project suggestions are based off what you do on GitHub. Primarily, of course, the projects you star, contribute to, and so on.</p>
		<p>In fact, this approach is very standard. If <em>you</em> wanted to implement an intelligent suggestion algorithm, the first thing you’d need to do is start collecting data.</p>
		<h2>Riding Blind</h2>
		<p>Let’s take the consideration of creating your own suggestion algorithm a bit further.</p>
		<p>We’ll begin with the assumption that you don’t really know what you’re doing. So, you head to YouTube and find a video that has equal likes and dislikes. (Obviously, this is all set before YouTube decided to remove the dislike button).</p>
		<p>Great. Now, step 2 is to make your algorithm suggest this video. Your reasoning is similar to, “well, about 1 out of every 2 people who sees this suggestion will like it. That’s decent odds!”</p>
		<p>We’ll label this as the “blind approach.” You take one value (the video with 50/50 likes/dislikes) and reason that this must be constant. This is clearly an over-generalization.</p>
		<p>Suffice it to say, it doesn’t work. Some people see it as a completely random suggestion, some like it and think it’s valid, some find it logical but dislike the content, and so on and so forth.</p>
		<p>So, you take the course, “Introduction to Suggestive Algorithms,” to get an idea of what you’re doing wrong. (This course is probably not real).</p>
		<h2>Educated Guesses</h2>
		<p>It is (hopefully) common knowledge that, when making a prediction of some sort, the more data you have to go on the more accurate your result will be.</p>
		<p>As this course suggests, you start collecting more data. An algorithm is worthless if it can’t be applied. And it can’t be applied if it has no data.</p>
		<p>The rest is generally interpreted. You create a suggestion algorithm that uses data from users’ activity; the projects they view, what they work on, etc.</p>
		<p>Great! Now, all of your suggestions are based upon their interests. This is good, right?</p>
		<p>Well, maybe. This is, indeed, where we are now. GitHub uses this exact logic to suggest me some new repositories I might be interested in.</p>
		<p>So, what’s the flaw?</p>
		<h2>Surface-level Analysis</h2>
		<p>By now, you’ve probably guessed where I’m going with this.</p>
		<p>The flaw is that the suggestions are based solely on the content itself, not the person.</p>
		<p>I can, in fact, illustrate this very point in GitHub.</p>
		<p>As I explained at the beginning of this article, I’ve been working primarily on web-related projects.</p>
		<p>And, as expected, I tend to use the same dependencies across different projects (assuming, of course, it makes sense to do so). The three ones I use most often are:</p>
		<ul>
		<li><ELi href="https://github.com/tiangolo/fastapi">FastAPI</ELi></li>
		<li><ELi href="https://github.com/framer/motion">Framer Motion</ELi></li>
		<li><ELi href="https://github.com/wbkd/react-flow">React Flow</ELi></li>
		</ul>
		<p>Knowing this, I immediately interpreted the suggestions that GitHub gave me, and promptly wrote this article.</p>
		<p>The suggestions were:</p>
		<div className="ath-img"><img src="https://tilde.club/~athena/assets/images/articles/1/gh-dark.png" /></div>
		<p>Need I go on?</p>
		<p>While in some cases I would be interested in competing projects, I most often want new and innovative projects suggested to me. Not the same-product-with-a-different-label kind-of thing. I’ve seen all of that already.</p>
		<p>This is what I label as a “surface-level” analysis. This is the sort-of logic and reasoning that a chimp could make, given a slight change in the parameters.</p>
		<p>That is, a chimp could probably see you wearing a red shirt every day and come to reason that you like that color. He may even (and most certainly would) pick an orange shirt out of a lineup, if given the opportunity. “He likes red, he probably likes this other color that looks kind-of like red.”</p>
		<p>Do you see what I mean here?</p>
		<p>What can be done about this?</p>
		<h2>Deeper Analysis</h2>
		<p>It amazes me how often the metaphor of depth can be applied to normal, everyday things. Like this, for instance.</p>
		<p>The data GitHub is using is surface-level, yes. And, indeed, that is the only kind of data you can actually receive. You can’t instantly get deeper data, because that only comes through analysis. The result? Information.</p>
		<p>You see? GitHub is working only on data with a dash of information. The reasoning is “if this person enjoys Framer Motion, a <strong>React</strong> Library for <strong>animations</strong>, they may also enjoy this other project, React Transition Group, which is a <strong>React</strong> plugin for entrance/exit <strong>animations</strong>.”</p>
		<p>I rest my case, a little.</p>
		<p>I don’t intend to put GitHub in a bad light here. Indeed, their primary concern should be the well-being of my projects, not the intelligent, informational suggestion of other projects. Their feature does, however, serve as a vessel for my article; to which I appreciate their humility (although unacknowledged).</p>
		<hr />
		<p>I hinted above, as I shall do now, that what we are really looking for is <strong>information.</strong></p>
		<p>Information can only be obtained by conscious (or active) analysis. Of which, you’ll understand, there are only two (easy) ways: having a human literally look over the data and come to a conclusion or training a program to do it for you.</p>
		<p>The latter is the only prudent solution here. The problem? There aren’t a TON of wonderful implementations out there. We have some minor ones like GitHub who probably could <em>technically</em> claim AI/ML usage, but it doesn’t really “feel” like it when we keep seeing the same things just with different names. Then we have some others, like Google Search who accurately interpret your string into exactly what you’re looking for. These are the kinds of suggestive algorithms that change the way people view information.</p>
		<p>Obviously, however, there is a cost to all of this. For starters, I’d estimate of the 139,995 (2021) ^1 employees that work at Google, probably at least 3,000-8,000 people work on “Google Search” in one capacity or another alone. Probably more. The core search product is estimated to have 2,000-3,000 engineers on it alone. ^2</p>
		<p>The cost clearly is knowledge and time. It takes time to develop a <strong>truly</strong> intelligent algorithm that gets it right 99% of the time. Time, of course, is not free.</p>
		<p>This, however, doesn’t really matter in this context. GitHub, with around 2,500 employees ^3, could very likely afford an extra 10-30 engineers to work on a truly intelligent suggestive algorithm. Whether this is prudent and financially reasonable of them to do with their business model is not relevant to my hypothetical suggestion.</p>
		<p>Surely, I’d rather see them hire 10-30 engineers for cybersecurity.</p>
		<p>The point remains, however: if you’re going to make a suggestive algorithm, why not make it the best you can?</p>
		<p>If you can’t make it truly great, why not make your search interface next-level?</p>
		<h2>Why Even Bother?</h2>
		<p>I don’t know about you, but I’ve always hated the built-in search functionality in Reddit. In fact, I often find myself using the <code>site:reddit.com [query]</code> approach in place of it.</p>
		<p>The issue I have is that Reddit is, quite literally, a gold mine of searchable data. It should be effortless to find anything you want, given at least a few pieces of information (of which is subject to memory and interpretation itself and bears no importance here).</p>
		<p>This is not Reddit-specific, either. Every social media is a repeat with a different name and a different face. That’s really it.</p>
		<p>I can’t speak for any other social media, but I can for Facebook (at least, from many years ago).</p>
		<p>Omitting all of the moral issues we probably all have with Facebook, they have got something right: their search. It is perfectly suggestive, brilliant, and based precisely upon what I’m speaking of: deeper analysis.</p>
		<p>I’d even go so far to say that both Facebook and Google’s ability to get you the information you are looking for is unprecedented.</p>
		<p>We all know why. They collect as much data as possible.</p>
		<h2>The Data Solution</h2>
		<p>In my opinion, there are only two ways to make a <strong>truly</strong> intelligent suggestion algorithm:</p>
		<ol>
		<li>Gather as much data as possible and make your algorithm intelligent.</li>
		<li>Gather less data, and make your algorithm <strong>really</strong> intelligent.</li>
		</ol>
		<p>That’s the relationship they have. You can get away with less intelligence by collecting more data, or you can get away with less data by adding more intelligence.</p>
		<p>I don’t really have anywhere to go with this. It is interesting to think about, given that we may end up working on a search/suggestive algorithm in the future.</p>
		<p>Indeed, I have done so. One of my newer projects, Scavenger, is a React project for this very thing: suggestive search.</p>
		<p>How do I do it? Well, I don’t have the time to invest in a super-mega-intelligent suggestion algorithm. Instead, I just ask for more data. The more you give the plugin, the better the search will be. It’s that simple.</p>
		<hr />
		<p>Let’s move back to Reddit for a moment.</p>
		<p>We are probably all aware that they are no privacy-respecting platform. Indeed, their privacy policy is an indication of just this.</p>
		<p>So, what are they doing with all of this data? Given that they probably aren’t using it to improve their search, they are either selling it or using it for something else.</p>
		<p>Either they have massively overlooked something or are just completely incompetent, but they have the very tools at their fingertips to create a truly exceptional search &amp; suggestion interface. And yet, they don’t.</p>
		<h2>In Conclusion</h2>
		<p>Let us learn from Google, from Algolia, from others just like them. Google is “to index and make searchable the world’s data.” Algolia is “to index and make searchable the deeper data.”</p>
		<p>They both have done just that. I can’t <em>really</em> speak for Algolia, as I’ve never used it (made my own), but I’m sure it works just fine. I mean, if they don’t have search right, they don’t have anything right, given their focus.</p>
		<p>I’d like to see a truly intelligent, open-source algorithm that solves this problem at a macro level. Google can only index so far, it can’t go as deep as something like that.</p>
		<p>Food for thought.</p>
		<h3>References &amp; Further Reading</h3>
		<p>[^1]: <ELi href="https://en.wikipedia.org/wiki/Google">https://en.wikipedia.org/wiki/Google</ELi></p>
		<p>[^2]: <ELi href="https://qr.ae/pGLEKW">Quora: Questionable source</ELi></p>
		<p>[^2]: <ELi href="https://en.wikipedia.org/wiki/GitHub">https://en.wikipedia.org/wiki/GitHub</ELi></p>
	</Article>
);

export default A;
