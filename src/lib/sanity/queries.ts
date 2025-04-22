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