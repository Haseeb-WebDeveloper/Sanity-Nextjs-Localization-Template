export const getHomePageQuery = (locale: string = 'en') => `
  *[_type == "homePage"] {
    ${locale}
  }[0]
`;

export const getAllLocales = () => `
  *[_type == "homePage"] {
    en,
    it
  }[0]
`;

export const getAboutPageQuery = (locale: string = 'en') => `
  *[_type == "aboutPage"] {
    "title": title.${locale},
    "description": description.${locale},
    "mission": mission.${locale},
    image
  }[0]
`;

export const getFullAboutPageQuery = () => `
  *[_type == "aboutPage"] {
    title,
    description,
    mission,
    image
  }[0]
`; 