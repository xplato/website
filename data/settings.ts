interface Schema {
	[key: string]: SettingSchema;
}

interface SettingSchema {
	allowedValues: string[] | boolean[];
}

interface Settings {
	[key: string]: string | boolean;
}

// Settings added here will be automatically applied
// to localStorage.
const defaultSettings: Settings = {
	isNewHere: true,
};

const settingsSchema: Schema = {
	isNewHere: {
		allowedValues: [true, false],
	},
};

export { defaultSettings, settingsSchema };
