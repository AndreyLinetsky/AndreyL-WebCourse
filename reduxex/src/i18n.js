import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .init({

    resources: {
      en: {
        translations: {
          "Home": "Home",
          "About": "About",
          "Cart": "Cart",
          "Contact": "Contact",
          "Login": "Login",
          "Product": "Product",
          "Shop": "Shop",
          "BuyOurProducts": "Buy our products",
          "WelcomeFromReferal": "Welcome from referal",
          "Buy": "Buy",
          "Price": "Price",
          "Products": "Products",
          "ReferralLink": "Referral Link",
          "Language": "Language"
        }
      },
      fr: {
        translations: {
          "Home": "Maison",
          "About": "Sur",
          "Cart": "Panier",
          "Contact": "Contact",
          "Login": "S'identifier",
          "Product": "Produit",
          "Shop": "Boutique",
          "BuyOurProducts": "Achetez nos produits",
          "WelcomeFromReferal": "Bienvenue par le renvoi",
          "Buy": "Acheter",
          "Price": "Prix",
          "Products": "Des produits",
          "ReferralLink": "Lien de référence",
          "Language": "La langue"
        }
      }
    },
    fallbackLng: 'en',

    ns: ['translations'],
    defaultNS: 'translations',

    keySeparator: false,

    interpolation: {
      escapeValue: false,
      formatSeparator: ','
    },

    react: {
      wait: true
    }
  });

export default i18n;
