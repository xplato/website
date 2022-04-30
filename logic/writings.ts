// Code slightly modified from:
// https://github.com/vercel/next.js/tree/canary/examples/blog-starter

import fs from 'fs';
import matter from 'gray-matter';
import { join } from 'path';

import type { Writing } from '../data/writings';

const writingsDir = join(process.cwd(), '_writings');

const getSlugs = () => {
	return fs.readdirSync(writingsDir);
};

// Returns a Writing object from a string slug.
const getWritingBySlug = (slug: string, fields: string[] = []) => {
	const realSlug = slug.replace(/\.md$/, '');
	const fullPath = join(writingsDir, `${realSlug}.md`);
	const fileContents = fs.readFileSync(fullPath, 'utf8');
	const { data, content } = matter(fileContents);

	const items: any = {};

	fields.forEach((field: any) => {
		if (field === 'slug') {
			items[field] = realSlug;
		}
		if (field === 'content') {
			items[field] = content;
		}

		if (typeof data[field] !== 'undefined') {
			items[field] = data[field];
		}
	});

	return items;
};

const getAllWritings = (fields: any = []) => {
	const slugs = getSlugs();
	const writings = slugs
		.map((slug: string) => getWritingBySlug(slug, fields))
		.sort((a1: Writing, a2: Writing) => (a1.date > a2.date ? -1 : 1));
	return writings;
};

export { getSlugs, getAllWritings, getWritingBySlug };
