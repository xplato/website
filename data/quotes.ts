interface Quote {
	q: string; // The quote itself
	a: string; // The author
}

const quotes: Quote[] = [
	{
		q: `To bear trials with a calm mind robs misfortune of its strength and burden.`,
		a: 'Seneca',
	},
	{
		q: `We swallow greddily any lie that flatters us, but we sip only little by little at a truth we find bitter.`,
		a: 'Denis Diderot',
	},
	{
		q: `The price good men pay for indifference to public affairs is to be ruled by evil men.`,
		a: 'Plato',
	},
	{
		q: `The mind, once stretched by a new idea, never returns to its original dimensions.`,
		a: 'Ralpha Waldo Emerson',
	},
	{
		q: `Illusion is the first of all pleasures.`,
		a: 'Voltaire',
	},
	{
		q: `If an opinion contrary to your own makes you angry, that is a sign that you are subconsciously aware of having no good reason for thinking as you do.`,
		a: 'Bertrand Russell',
	},
	{
		q: `There's no tyrant like a brain.`,
		a: 'Louis-Ferdinand Céline',
	},
	{
		q: `It is my conviction that killing under the cloak of war is nothing but an act of murder.`,
		a: 'Albert Einstein',
	},
	{
		q: `It is a brave man... who dares to look the devil in the face and tell him he is a devil.`,
		a: 'James A. Garfield',
	},
	{
		q: `Observation is a dying art.`,
		a: 'Stanley Kubrick',
	},
	{
		q: `The imagination of nature is far, far greater than the imagination of man.`,
		a: 'Richard Feynman',
	},
	{
		q: `Those who are able to see beyond the shadows and lies of their culture will never be understood, let alone believed by the masses.`,
		a: 'Plato',
	},
	{
		q: `The unfortunate thing about public misfortunes is that everyone regards himself as qualified to talk about them.`,
		a: 'Emil Cioran',
	},
	{
		q: `Happiness is a byproduct of function, purpose, and conflict; those who seek happiness for itself seek victory without war.`,
		a: 'William S. Burroughs',
	},
	{
		q: `Creativity is just connecting things.`,
		a: 'Steve Jobs',
	},
	{
		q: `Anybody can play. The note is only 20 percent. The attitude of the motherfucker who plays it is 80 percent.`,
		a: 'Miles Davis',
	},
	{
		q: `Those who lack the courage will always find a philosophy to justify it.`,
		a: 'Albert Camus',
	},
	{
		q: `Of all creatures that breathe and move upon the earth, nothing is bred that is weaker than man.`,
		a: 'The Odyssey',
	},
	{
		q: `The wise man does at once what the fool does finally.`,
		a: 'Niccolò Machiavelli',
	},
	{
		q: `There is no other way to guard yourself against flatterly than by making men understand that telling you the truth will not offend you.`,
		a: 'Niccolò Machiavelli',
	},
	{
		q: `It is better to be feared than loved, if you cannot be both.`,
		a: 'Niccolò Machiavelli',
	},
	{
		q: `What we do in life ripples in eternity.`,
		a: 'Marcus Aurelius',
	},
	{
		q: `Most of what we say and do is not essential. If you can eliminate it, you'll have more time, and more tranquility. Ask yourself at every moment, "is this necessary?"`,
		a: 'Marcus Aurelius',
	},
	{
		q: `Whenever you are about to find a fault with someone, ask yourself the following question: What fault of mine most nearly resembles the one I am about to criticize?`,
		a: 'Marcus Aurelius',
	},
	{
		q: `The opinion of 10,000 men is of no value if none of them know anything about the subject.`,
		a: 'Marcus Aurelius',
	},
	{
		q: `Any man who afflicts the human race with ideas must be prepared to see them misunderstood.`,
		a: 'H. L. Mencken',
	},
	{
		q: `Despite lack of preparation, I spoke quite well and without hesitation, which I ascribe to the cocaine I had taken beforehand.`,
		a: 'Sigmund Freud',
	},
	{
		q: `For what shall it profit a man, if he shall gain the whole world, and lose his own soul?`,
		a: 'Mark 8:36 (KJV)',
	},
	{
		q: `Wisely, and slow. They stumble that run fast.`,
		a: 'William Shakespeare',
	},
	{
		q: `The world is a comedy to those that think, and a tragedy to those that feel.`,
		a: 'Horatio Walpole',
	},
	{
		q: `In matters of style, swim with the current. In matters of principle, stand like a rock.`,
		a: 'Thomas Jefferson',
	},
	{
		q: `Let me never fall into the vulgar mistake of dreaming that I am persecuted whenever I am contradicted.`,
		a: 'Ralph Waldo Emerson',
	},
	{
		q: `To know even one life has breathed easier because you have lived. This is to have succeeded.`,
		a: 'Ralph Waldo Emerson',
	},
];

export {
	quotes,
}

export type {
	Quote,
}