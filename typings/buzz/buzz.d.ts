// Type definitions for Ion Sound
// Project: http://buzz.jaysalvat.com/
// Definitions by: Boris Yankov <https://github.com/borisyankov/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped


declare module buzz {
	class sound {
		constructor(file: string, param?: any);
		play(): any;
	}
	class group {
		constructor(files: Array<string>, param?: any);
		play(): any;
		load(): any;
	}
}