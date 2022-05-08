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
	{
		q: `I often regret that I have spoken; never that I have been silent.`,
		a: 'Publilus Syrus',
	},
	{
		q: `Only the dead have seen the end of war.`,
		a: 'Plato',
	},
	{
		q: `No man ever steps in the same river twice, for it's not the same river and he's not the same man.`,
		a: 'Heraclitus',
	},
	{
		q: `Opinion is the medium between knowledge and ignorance.`,
		a: 'Plato',
	},
	{
		q: `No snowflake in an avalanche ever feels responsible.`,
		a: 'Voltaire',
	},
	{
		q: `The energy of the mind is the essence of life.`,
		a: 'Aristotle',
	},
	{
		q: `Men argue, nature acts.`,
		a: 'Voltaire',
	},
	{
		q: `Most of the important things in the world have been accomplished by people who have kept on trying when there seemed to be no hope at all.`,
		a: 'Dale Carnegie',
	},
	{
		q: `All of humanity's problems stem from man's inability to sit quietly in a room alone.`,
		a: 'Blaise Pascal',
	},
	{
		q: `If you want to truly understand something, try to change it.`,
		a: 'Kurt Lewin',
	},
	{
		q: `If a man knows not to which port he sails, no wind is favorable.`,
		a: 'Seneca',
	},
	{
		q: `All cruelty springs from weakness.`,
		a: 'Seneca',
	},
	{
		q: `While we wait for life, life passes.`,
		a: 'Seneca',
	},
	{
		q: `The man who does not read good books has no advantage over the man who can't read them.`,
		a: 'Mark Twain',
	},
	{
		q: `A man, as a general rule, owes very little to what he is born with—a man is what he makes of himself.`,
		a: 'Alexander Graham Bell',
	},
	{
		q: `Truth is ever to be found in simplicity, and not in the multiplicity and confusion of things.`,
		a: 'Sir Isaac Newton',
	},
	{
		q: `It is better to fail in originality than to succeed in imitation.`,
		a: 'Herman Melville',
	},
	{
		q: `The surest way to corrupt a youth is to instruct him to hold in higher esteem those who think alike than those who think differently.`,
		a: 'Friedrich Nietzsche',
	},
	{
		q: `Intuitions are not to be ignored. They represent data processed too fast for the conscious mind to comprehend.`,
		a: 'Sir Arthur Conan Doyle',
	},
	{
		q: `Do not worry about your difficulties in mathematics. I can assure you that mine are still greater.`,
		a: 'Albert Einstein',
	},
	{
		q: `The day science begins to study non-physical phenomena, it will make more progress in one decade than in all the previous centuries of its existence.`,
		a: 'Nikola Tesla',
	},
	{
		q: `No one is more hated than he who speaks the truth.`,
		a: 'Plato',
	},
	{
		q: `Well done is better than well said.`,
		a: 'Benjamin Franklin',
	},
	{
		q: `Knowledge is like a skyscraper. You can take a shortcut with a fragile foundation of memorization, or build slowly upon a steel frame of understanding.`,
		a: 'Naval Ravikant',
	},
	{
		q: `Why join the navy if you can be a pirate?`,
		a: 'Steve Jobs',
	},
	{
		q: `I would rather have questions that can't be answered than answers which can't be questioned.`,
		a: 'Richard Feynman',
	},
	{
		q: `The world is indeed comic, but the joke is on mankind.`,
		a: 'H. P. Lovecraft',
	},
	{
		q: `The unfed mind devours itself.`,
		a: 'Gore Vidal',
	},
	{
		q: `Never ask the barber if you need a haircut.`,
		a: 'Warren Buffet',
	},
	{
		q: `Work like hell. I mean you just have to put in 80 to 100 hour weeks every week. [This] improves the odds of success. If other people are putting in 40 hour work weeks and you're putting in 100 hour work weeks, then even if you're doing the same thing you know that... you will achieve in 4 months what it takes them a year to achieve.`,
		a: 'Elon Musk',
	},
	{
		q: `To be normal is the ideal aim of the unsuccessful.`,
		a: 'Carl Jung',
	},
];

export {
	quotes,
}

export type {
	Quote,
}