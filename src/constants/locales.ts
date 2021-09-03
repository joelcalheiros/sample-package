const en = Object.assign(
  require("@esolidar/i18n/projects/toolkit/en"),
  require("@esolidar/i18n/projects/feed/en")
);
const pt = Object.assign(
  require("@esolidar/i18n/projects/toolkit/pt"),
  require("@esolidar/i18n/projects/feed/pt")
);
const br = Object.assign(
  require("@esolidar/i18n/projects/toolkit/br"),
  require("@esolidar/i18n/projects/feed/br")
);

export const MESSAGES: any = {
  pt,
  en,
  br,
};

export const SUPPORTED_LOCALES: any = {
  BR: "br",
  EN: "en",
  PT: "pt",
};

export const DEFAULT_LOCALE = SUPPORTED_LOCALES.EN;
