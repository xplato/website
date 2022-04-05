import { colors } from "../../data/colors";


interface Schema {
	[key: string]: SettingSchema;
}

interface SettingSchema {
	allowedValues: string[];
}

interface Settings {
	[key: string]: string | boolean;
}

// Settings added here will be automatically applied
// to localStorage.
const defaultSettings: Settings = {
	theme: 'hacker-green',
};

// We use 'yes' and 'no' because the SelectSetting
// component is a Select menu and works with strings.
// Not to mention, most people would find it strange
// if we used values like 'true' and 'false'.
// Of course, we could always transpile the data
// to work with language-level booleans, but I find
// this unnecessary; simply using 'yes' and 'no' is
// rather explicit.
// const bool = ['yes', 'no'];

const settingsSchema: Schema = {
	theme: {
		allowedValues: colors,
	},
}

export {
	defaultSettings,
	settingsSchema,
}