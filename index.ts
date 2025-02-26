declare const el: HTMLDivElement;

// it's okay
el.getElementsByTagName;

declare const unionEl: HTMLDivElement | HTMLSpanElement;

// marked as deprecated
unionEl.getElementsByTagName;
