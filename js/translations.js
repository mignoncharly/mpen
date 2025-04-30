/**
 * translations.js
 * Handles language switching functionality
 */

document.addEventListener('DOMContentLoaded', () => {
    // Language translations dictionary
    const translations = {
        // French (default language)
        'fr': {
            // Meta tags
            'meta-description': 'MPEN - Une école des prophètes et voyants des derniers temps. Formation spirituelle avec Apôtre Christine Olinga',
            'meta-keywords': 'école prophétique, formation spirituelle, prophètes, voyants, Christine Olinga',
            'og-title': 'MPEN - École des Prophètes et Voyants',
            'og-description': "Réponds à l'appel prophétique de Dieu. Forme-toi, sois équipe(e), sois envoyé(e).",
            'twitter-title': 'MPEN - École des Prophètes et Voyants',
            'twitter-description': "Réponds à l'appel prophétique de Dieu. Forme-toi, sois équipe(e), sois envoyé(e).",
            
            // Registration page meta
            'meta-description-inscription': "Inscrivez-vous à l'école MPEN des prophètes et voyants avec Apôtre Christine Olinga",
            'meta-keywords-inscription': "inscription, formation prophétique, MPEN, Christine Olinga",
            'og-title-inscription': "Inscription - MPEN École des Prophètes et Voyants",
            'og-description-inscription': "Rejoignez notre école et développez vos dons prophétiques",
            'twitter-title-inscription': "Inscription - MPEN École des Prophètes et Voyants",
            'twitter-description-inscription': "Rejoignez notre école et développez vos dons prophétiques",
            
            // Programme page meta
            'meta-description-programme': "Découvrez le programme de formation de l'école MPEN des prophètes et voyants avec Apôtre Christine Olinga",
            'meta-keywords-programme': "programme, formation prophétique, MPEN, Christine Olinga, école des prophètes",
            'og-title-programme': "Programme - MPEN École des Prophètes et Voyants",
            'og-description-programme': "Notre programme complet de formation prophétique sur 9 mois",
            'twitter-title-programme': "Programme - MPEN École des Prophètes et Voyants",
            'twitter-description-programme': "Notre programme complet de formation prophétique sur 9 mois",
            
            // About page meta
            'meta-description-about': "Découvrez l'histoire et la vision de l'école MPEN des prophètes et voyants fondée par l'Apôtre Christine Olinga",
            'meta-keywords-about': "à propos, MPEN, Christine Olinga, vision prophétique, école des prophètes",
            'og-title-about': "À Propos - MPEN École des Prophètes et Voyants",
            'og-description-about': "Notre vision, notre histoire et notre équipe d'enseignants",
            'twitter-title-about': "À Propos - MPEN École des Prophètes et Voyants",
            'twitter-description-about': "Notre vision, notre histoire et notre équipe d'enseignants",
            
            // Navigation
            'nav-home': 'Accueil',
            'nav-registration': 'Inscription',
            'nav-program': 'Programme',
            'nav-about': 'À propos',
            'nav-register-button': 'INSCRIVEZ VOUS',
            
            // Hero section
            'hero-title': 'UNE ÉCOLE DES PROPHÈTES ET VOYANTS DES DERNIERS TEMPS',
            'hero-subtitle': "Réponds à l'appel prophétique de Dieu. Forme-toi, sois équipe(e). sois envoyé(e).",
            'hero-cta': 'INSCRIPTION',
            'apostle-with': 'Avec Apôtre',
            'apostle-name': 'CHRISTINE OLINGA',
            
            // Program section
            'program-title': 'APERÇU DU PROGRAMME',
            'program-description': 'Les cours se déroulent sur une période de 9 mois et nécessitent une compréhension de la Parole de Dieu et de la Bible.',
            
            // Benefits section
            'benefits-title': 'BÉNÉFICES DE LA FORMATION',
            'benefit-1-title': 'Connaissance Approfondie',
            'benefit-1-desc': 'Développez votre compréhension des écritures et des dons prophétiques.',
            'benefit-2-title': 'Communauté Spirituelle',
            'benefit-2-desc': 'Rejoignez une communauté de croyants partageant la même vision.',
            'benefit-3-title': 'Mentorat Personnalisé',
            'benefit-3-desc': "Bénéficiez de l'encadrement direct de l'Apôtre Christine Olinga.",
            
            // Testimonials section
            'testimonials-title': 'TÉMOIGNAGES',
            'testimonial-1-text': '"Cette formation a complètement transformé ma compréhension des dons prophétiques et ma relation avec Dieu."',
            'testimonial-1-name': 'Jean Pierre',
            'testimonial-1-location': 'Bruxelles, Belgique',
            'testimonial-2-text': '"J\'ai découvert ma vocation grâce à l\'enseignement et au mentorat reçus à MPEN."',
            'testimonial-2-name': 'Marie Claire',
            'testimonial-2-location': 'Paris, France',
            
            // CTA section
            'cta-title': 'REJOIGNEZ NOTRE PROCHAINE SESSION',
            'cta-text': 'Les inscriptions sont ouvertes pour la session débutant en septembre 2025.',
            'cta-button': 'INSCRIVEZ-VOUS MAINTENANT',
            
            // Footer
            'footer-nav-title': 'Navigation',
            'footer-home': 'Accueil',
            'footer-registration': 'Inscription',
            'footer-program': 'Programme',
            'footer-about': 'À propos',
            'footer-contact-title': 'Contact',
            'footer-address': "5180 rue Queen-Mary Suite #200 Montreal, Quebec",
            'footer-social-title': 'Suivez-nous',
            'footer-copyright': '© 2025 MPEN - École des Prophètes et Voyants. Tous droits réservés.',
            'footer-legal': 'Mentions légales',
            'footer-privacy': 'Politique de confidentialité',
            
            // Registration page
            'inscription-title': 'INSCRIPTION',
            'inscription-subtitle': 'Rejoignez notre communauté et développez vos dons prophétiques',
            'reg-info-title': 'INFORMATIONS SUR LA FORMATION',
            'reg-duration-title': 'Durée',
            'reg-duration-content': 'Formation intensive de 9 mois, avec des sessions hebdomadaires',
            'reg-location-title': 'Lieu',
            'reg-location-content': 'Formation disponible en présentiel à Paris et en ligne',
            'reg-schedule-title': 'Planning',
            'reg-schedule-content': 'Les cours ont lieu le samedi de 10h à 16h',
            'reg-requirements-title': 'Prérequis',
            'reg-req-1': 'Être chrétien(ne) né(e) de nouveau',
            'reg-req-2': 'Avoir une connaissance de base de la Bible',
            'reg-req-3': "S'engager pour toute la durée de la formation",
            'reg-req-4': 'Avoir l\'approbation de votre pasteur (recommandé)',
            'reg-fees-title': 'Frais de formation',
            'reg-fees-content': "Contactez-nous pour plus d'informations sur les frais de formation et les options de paiement.",
            'form-title': "FORMULAIRE D'INSCRIPTION",
            'form-intro': 'Veuillez remplir le formulaire ci-dessous. Notre équipe vous contactera pour finaliser votre inscription.',
            'form-name': 'Nom complet *',
            'form-email': 'Email *',
            'form-phone': 'Téléphone *',
            'form-country': 'Pays de résidence *',
            'form-church': "Église d'appartenance",
            'form-format': 'Format préféré *',
            'form-select-option': '-- Sélectionnez --',
            'form-option-onsite': 'En présentiel',
            'form-option-online': 'En ligne',
            'form-option-hybrid': 'Format hybride',
            'form-experience': 'Expérience prophétique',
            'form-experience-placeholder': 'Décrivez brièvement votre expérience ou votre appel prophétique',
            'form-agree': "J'accepte de recevoir des communications de MPEN *",
            'form-submit': 'ENVOYER MA DEMANDE',
            'form-note': '* Champs obligatoires',
            
            // Form validation messages
            'form-email-error': 'Veuillez entrer une adresse email valide',
            'form-phone-error': 'Veuillez entrer un numéro de téléphone valide',
            'form-checkbox-error': 'Vous devez accepter pour continuer',
            'form-field-required': 'Ce champ est obligatoire',
            'form-success': 'Votre demande a été envoyée avec succès! Nous vous contacterons dans les plus brefs délais.',
            'form-submitting': 'Envoi en cours...',
            
            // Programme page
            'programme-title': 'PROGRAMME',
            'programme-subtitle': 'Notre parcours de formation prophétique complet',
            'programme-overview-title': 'APERÇU DU PROGRAMME',
            'programme-overview-text': "Le programme de formation de l'École des Prophètes et Voyants MPEN est un parcours intensif de 9 mois conçu pour développer et affiner les dons prophétiques. Notre approche combine l'enseignement biblique approfondi, la pratique guidée, et le mentorat personnalisé sous la direction de l'Apôtre Christine Olinga.",
            'stat-months': 'Mois',
            'stat-sessions': 'Sessions',
            'stat-modules': 'Modules',
            
            // Programme modules
            'programme-modules-title': 'MODULES DE FORMATION',
            'module-1-title': 'Fondements Bibliques et Discernement',
            'module-1-duration': 'Mois 1-3',
            'module-1-description': "Ce module initial pose les bases bibliques solides nécessaires pour comprendre et exercer les dons prophétiques selon les Écritures. Vous apprendrez à discerner la voix de Dieu et à reconnaître les véritables manifestations prophétiques.",
            'module-1-topic-1': 'Les fondements bibliques du ministère prophétique',
            'module-1-topic-2': 'Histoire et évolution du don prophétique',
            'module-1-topic-3': 'Discerner la voix de Dieu parmi les autres voix',
            'module-1-topic-4': 'Éthique et responsabilité dans le ministère prophétique',
            'module-1-topic-5': 'Développer sa sensibilité spirituelle',
            
            'module-2-title': 'Activation et Développement des Dons',
            'module-2-duration': 'Mois 4-6',
            'module-2-description': "Dans ce module intermédiaire, nous nous concentrons sur l'activation pratique et le développement de vos dons prophétiques. Vous participerez à des exercices guidés et recevrez des retours personnalisés pour affiner votre perception spirituelle.",
            'module-2-topic-1': 'Les différentes expressions du don prophétique',
            'module-2-topic-2': 'Comprendre et interpréter les visions et les songes',
            'module-2-topic-3': 'Exercices de prophétie guidés et supervisés',
            'module-2-topic-4': 'Surmonter les obstacles au flux prophétique',
            'module-2-topic-5': 'Développer la précision et la clarté dans la délivrance',
            
            'module-3-title': 'Ministère Prophétique et Mission',
            'module-3-duration': 'Mois 7-9',
            'module-3-description': "Ce module final prépare les étudiants à exercer leur ministère prophétique dans le cadre d'une mission plus large. Vous apprendrez à intégrer votre don dans le service de l'Église et à répondre à l'appel prophétique des derniers temps.",
            'module-3-topic-1': "Prophétie dans le contexte de l'Église locale et globale",
            'module-3-topic-2': "Ministère d'intercession prophétique",
            'module-3-topic-3': 'Mission et évangélisation prophétique',
            'module-3-topic-4': 'Comprendre les temps et les saisons prophétiques',
            'module-3-topic-5': 'Application pratique et ministère sur le terrain',
            
            // Teaching methods
            'teaching-methods-title': "MÉTHODES D'ENSEIGNEMENT",
            'method-1-title': 'Enseignement Théorique',
            'method-1-desc': "Cours magistraux basés sur la Bible et l'expérience prophétique.",
            'method-2-title': 'Ateliers Pratiques',
            'method-2-desc': 'Exercices guidés pour développer vos dons dans un cadre sécurisé.',
            'method-3-title': 'Mentorat Personnalisé',
            'method-3-desc': 'Suivi individuel pour répondre à vos besoins spécifiques.',
            'method-4-title': 'Expérience de Terrain',
            'method-4-desc': "Application pratique dans des contextes réels d'église et de mission.",
            
            // FAQ
            'faq-title': 'QUESTIONS FRÉQUENTES',
            'faq-q1': 'Faut-il déjà avoir un don prophétique manifeste pour suivre la formation ?',
            'faq-a1': "Non, notre programme accueille aussi bien les personnes dont le don est déjà manifesté que celles qui ressentent un appel mais n'ont pas encore d'expérience concrète. Le programme est adapté pour développer les dons à tous les niveaux.",
            'faq-q2': 'Comment se déroule la formation en ligne ?',
            'faq-a2': "La formation en ligne suit le même programme que la formation en présentiel. Les sessions sont diffusées en direct et interactives, avec des possibilités de participation. Des ateliers virtuels sont également organisés, et un suivi personnalisé est assuré par vidéoconférence.",
            'faq-q3': 'Quelle est la charge de travail hebdomadaire ?',
            'faq-a3': "En plus des 6 heures de cours hebdomadaires (le samedi), nous recommandons environ 4-6 heures de travail personnel par semaine pour les lectures, exercices et temps de prière. Cette charge peut varier selon les modules et vos disponibilités.",
            'faq-q4': 'Y a-t-il une certification à la fin de la formation ?',
            'faq-a4': "Oui, les étudiants qui complètent avec succès les 9 mois de formation reçoivent un certificat de l'École des Prophètes et Voyants MPEN. Ce certificat atteste de votre formation mais n'est pas un diplôme académique reconnu par l'État.",
            'faq-q5': "Peut-on intégrer la formation en cours d'année ?",
            'faq-a5': "En général, nous recommandons de commencer la formation au début du cycle, car les modules sont progressifs. Cependant, dans certains cas exceptionnels et selon votre niveau d'expérience, une intégration en cours d'année peut être envisagée après entretien.",
            
            // Programme CTA
            'cta-programme-title': 'PRÊT À DÉVELOPPER VOS DONS PROPHÉTIQUES ?',
            'cta-programme-text': "Rejoignez notre programme de formation complet et répondez à l'appel prophétique des derniers temps.",
            
            // About page
            'about-title': 'À PROPOS',
            'about-subtitle': 'Notre vision, notre histoire et notre équipe',
            
            // Mission & Vision
            'mission-title': 'NOTRE MISSION',
            'mission-text': "MPEN (Mission Prophétique & Évangélique vers les Nations) a pour mission de former et d'équiper une génération de prophètes et voyants, ancrés dans la Parole de Dieu et sensibles à l'Esprit Saint, pour répondre à l'appel prophétique des derniers temps. Nous croyons que Dieu restaure et amplifie le ministère prophétique dans cette saison pour préparer l'Église à l'accomplissement de ses desseins.",
            'vision-title': 'NOTRE VISION',
            'vision-quote': '"Et dans les derniers jours, dit Dieu, je répandrai de mon Esprit sur toute chair; vos fils et vos filles prophétiseront, vos jeunes gens auront des visions, et vos vieillards auront des songes." - Actes 2:17',
            'vision-text': "Notre vision est de voir se lever une armée de prophètes et voyants, formés et équipés, qui porteront avec intégrité le message de Dieu à leur génération dans les églises, les communautés et les nations. Nous visons à restaurer, selon les Écritures, la place et la fonction du ministère prophétique dans le Corps de Christ.",
            
            // History
            'history-title': 'NOTRE HISTOIRE',
            'history-text-1': "L'École des Prophètes et Voyants MPEN est née de la vision reçue par l'Apôtre Christine Olinga en 2018 lors d'une retraite de prière intensive. Durant cette période, elle reçut une révélation claire concernant la nécessité de former une nouvelle génération de prophètes, solidement ancrés dans la Parole et capables de discerner avec précision les temps et les saisons.",
            'history-text-2': "Après deux années de préparation et de développement du programme, la première cohorte d'étudiants a été accueillie en 2020. Malgré les défis de la pandémie mondiale, l'école s'est rapidement adaptée pour proposer une formation en ligne, permettant ainsi à des étudiants de différents pays de participer.",
            'history-text-3': "Aujourd'hui, MPEN a formé plus de 200 prophètes et voyants qui exercent leur ministère dans différentes églises et nations. Notre école continue de s'étendre, fidèle à la vision originale de restaurer le ministère prophétique authentique selon les Écritures.",
            
            // Team
            'team-title': 'NOTRE ÉQUIPE',
            'team-intro': "Notre équipe d'enseignants est composée de ministres expérimentés dans le domaine prophétique, venant de différentes nations et apportant une richesse de perspectives et d'expériences.",
            'team-role-1': 'Fondatrice & Directrice',
            'team-bio-1': "Apôtre Christine Olinga a plus de 20 ans d'expérience dans le ministère prophétique. Elle est reconnue internationalement pour sa précision prophétique et son enseignement qui transforme des vies. Elle dirige également plusieurs églises en France et en Afrique.",
            'team-role-2': 'Directeur des Études',
            'team-bio-2': "Apôtre Christine Olinga a plus de 20 ans d'expérience dans le ministère prophétique. Elle est reconnue internationalement pour sa précision prophétique et son enseignement qui transforme des vies. Elle dirige également plusieurs églises en France et en Afrique.",
            'team-role-3': 'Responsable de la Formation Pratique',
            'team-bio-3': "Apôtre Christine Olinga a plus de 20 ans d'expérience dans le ministère prophétique. Elle est reconnue internationalement pour sa précision prophétique et son enseignement qui transforme des vies. Elle dirige également plusieurs églises en France et en Afrique.",
            'team-role-4': 'Responsable du Mentorat',
            'team-bio-4': "Apôtre Christine Olinga a plus de 20 ans d'expérience dans le ministère prophétique. Elle est reconnue internationalement pour sa précision prophétique et son enseignement qui transforme des vies. Elle dirige également plusieurs églises en France et en Afrique.",
            'team-note': "En plus de notre équipe permanente, nous invitons régulièrement des intervenants invités, reconnus dans le domaine prophétique, pour enrichir la formation avec leurs perspectives et expériences.",
            
            // About testimonials
            'about-testimonial-1-text': "\"L'enseignement de l'Apôtre Christine a complètement transformé ma compréhension du ministère prophétique. Sa sagesse et son discernement m'ont aidé à affiner mon don et à l'exercer avec responsabilité.\"",
            'about-testimonial-1-name': 'Pierre Dupont',
            'about-testimonial-1-location': 'Lyon, France',
            'about-testimonial-2-text': "\"Ce qui distingue MPEN, c'est l'équilibre parfait entre l'enseignement théorique et la pratique. L'encadrement personnalisé m'a permis de surmonter mes craintes et d'embrasser pleinement mon appel.\"",
            'about-testimonial-2-name': 'Sarah Mbeki',
            'about-testimonial-2-location': 'Kinshasa, RDC',
            'about-testimonial-3-text': "\"Même en suivant la formation à distance depuis le Canada, j'ai ressenti un véritable accompagnement. Les retours personnalisés et le mentorat régulier ont fait toute la différence dans mon parcours.\"",
            'about-testimonial-3-name': 'Michel Tremblay',
            'about-testimonial-3-location': 'Montréal, Canada',
            
            // Values
            'values-title': 'NOS VALEURS',
            'value-1-title': 'Fidélité aux Écritures',
            'value-1-desc': "Nous basons tout notre enseignement sur une interprétation saine et contextuelle des Écritures, le fondement inébranlable de notre foi et de notre pratique.",
            'value-2-title': 'Intégrité et Éthique',
            'value-2-desc': "Nous promouvons les plus hauts standards d'éthique et d'intégrité dans l'exercice du ministère prophétique, reflétant le caractère du Christ.",
            'value-3-title': 'Communauté et Unité',
            'value-3-desc': "Nous cultivons un esprit de famille et d'unité, reconnaissant que les dons prophétiques sont destinés à édifier le corps de Christ dans son ensemble.",
            'value-4-title': 'Excellence et Croissance',
            'value-4-desc': "Nous visons l'excellence dans tout ce que nous faisons, encourageant une croissance et un développement continus des dons et du caractère.",
            
            // About CTA
            'cta-about-title': 'REJOIGNEZ NOTRE COMMUNAUTÉ',
            'cta-about-text': 'Faites partie de cette vision prophétique pour notre génération.',

            'meta-description-legal': "Mentions légales de l'école MPEN des prophètes et voyants fondée par l'Apôtre Christine Olinga",
            'meta-keywords-legal': "mentions légales, MPEN, conditions",
            'og-title-legal': "Mentions Légales - MPEN École des Prophètes et Voyants",
            'og-description-legal': "Informations légales concernant le site MPEN",
            'twitter-title-legal': "Mentions Légales - MPEN École des Prophètes et Voyants",
            'twitter-description-legal': "Informations légales concernant le site MPEN",

            'meta-description-privacy': "Politique de confidentialité de l'école MPEN des prophètes et voyants fondée par l'Apôtre Christine Olinga",
            'meta-keywords-privacy': "politique de confidentialité, MPEN, données personnelles, RGPD",
            'og-title-privacy': "Politique de Confidentialité - MPEN École des Prophètes et Voyants",
            'og-description-privacy': "Informations sur la collecte et le traitement des données personnelles par MPEN",
            'twitter-title-privacy': "Politique de Confidentialité - MPEN École des Prophètes et Voyants",
            'twitter-description-privacy': "Informations sur la collecte et le traitement des données personnelles par MPEN",

            // Legal page content
            'legal-title': "MENTIONS LÉGALES",
            'legal-publisher-title': "1. ÉDITEUR DU SITE",
            'legal-publisher-text': "Le site www.mpen-ecole.com est édité par l'association MPEN (Mission Prophétique & évangélique vers les Nations), association à but non lucratif régie par la loi du 1er juillet 1901.",
            'legal-address-label': "Siège social :",
            'legal-address': "5180 rue Queen-Mary Suite #200 Montreal, Quebec",
            'legal-phone-label': "Téléphone :",
            'legal-email-label': "Email :",
            'legal-director-label': "Directeur de la publication :",
            'legal-director': "Christine Olinga",
            'legal-registration-label': "N° d'enregistrement :",

            'legal-hosting-title': "2. HÉBERGEMENT",
            'legal-hosting-text': "Ce site est hébergé par :",
            'legal-host-name-label': "Nom de l'hébergeur :",
            'legal-host-name': "Github Pages",
            'legal-host-address-label': "Adresse :",
            'legal-host-address': "xxxxxxxx",
            'legal-host-phone-label': "Téléphone :",
            'legal-host-website-label': "Site web :",

            'legal-intellectual-title': "3. PROPRIÉTÉ INTELLECTUELLE",
            'legal-intellectual-text-1': "L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.",
            'legal-intellectual-text-2': "La reproduction de tout ou partie de ce site sur un support électronique ou autre est formellement interdite sauf autorisation expresse de la direction de MPEN.",
            'legal-intellectual-text-3': "Les logos, marques et signes distinctifs présents sur le site sont la propriété exclusive de MPEN. Aucun droit ou licence ne saurait être attribué sur l'un quelconque de ces éléments sans l'autorisation écrite de MPEN.",

            'legal-disclaimer-title': "4. LIMITATION DE RESPONSABILITÉ",
            'legal-disclaimer-text-1': "MPEN s'efforce d'assurer au mieux de ses possibilités l'exactitude et la mise à jour des informations diffusées sur ce site, dont elle se réserve le droit de corriger, à tout moment et sans préavis, le contenu.",
            'legal-disclaimer-text-2': "MPEN décline toute responsabilité :",
            'legal-disclaimer-item-1': "Pour toute interruption du site",
            'legal-disclaimer-item-2': "Pour toute survenance de bugs",
            'legal-disclaimer-item-3': "Pour toute inexactitude ou omission portant sur des informations disponibles sur le site",
            'legal-disclaimer-item-4': "Pour tous dommages résultant d'une intrusion frauduleuse d'un tiers ayant entraîné une modification des informations mises à la disposition sur le site",
            'legal-disclaimer-text-3': "MPEN ne pourra être tenue responsable des dommages directs ou indirects résultant de l'utilisation des informations et contenus présents sur le site.",

            'legal-links-title': "5. LIENS HYPERTEXTES",
            'legal-links-text-1': "Le site peut contenir des liens hypertextes vers d'autres sites internet ou d'autres sources d'informations. Dans la mesure où MPEN ne peut contrôler ces sites et ces sources externes, MPEN ne peut être tenue pour responsable de la mise à disposition de ces sites et sources externes, et ne peut supporter aucune responsabilité quant au contenu, publicités, produits, services ou tout autre matériel disponible sur ou à partir de ces sites ou sources externes.",
            'legal-links-text-2': "La création de liens hypertextes vers le site www.mpen-ecole.com est soumise à l'accord préalable de MPEN. Pour toute demande, veuillez contacter : contact@mpen-ecole.com.",

            'legal-applicable-law-title': "6. DROIT APPLICABLE ET JURIDICTION COMPÉTENTE",
            'legal-applicable-law-text': "Les présentes mentions légales sont régies par le droit français. En cas de litige, les tribunaux français seront seuls compétents.",

            'legal-modification-title': "7. MODIFICATIONS DES MENTIONS LÉGALES",
            'legal-modification-text': "MPEN se réserve le droit de modifier les présentes mentions légales à tout moment. L'utilisateur est donc invité à les consulter régulièrement.",
            'legal-last-update': "Dernière mise à jour : 25 avril 2025",

            // Privacy page content
            'privacy-title': "POLITIQUE DE CONFIDENTIALITÉ",
            'privacy-intro': "MPEN s'engage à protéger la vie privée des utilisateurs de son site internet. La présente politique de confidentialité vous informe sur la manière dont nous recueillons, utilisons et protégeons vos données personnelles conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés.",
            'privacy-last-update': "Dernière mise à jour : 25 avril 2025",

            'privacy-data-collection-title': "1. COLLECTE DES DONNÉES PERSONNELLES",
            'privacy-data-collection-text-1': "Nous collectons des données personnelles lorsque vous :",
            'privacy-data-collection-item-1': "Remplissez le formulaire d'inscription à nos formations",
            'privacy-data-collection-item-2': "Nous contactez par email ou via le formulaire de contact",
            'privacy-data-collection-item-3': "Vous inscrivez à notre newsletter",
            'privacy-data-collection-text-2': "Les types de données que nous pouvons collecter incluent :",
            'privacy-data-type-1': "Informations d'identification (nom, prénom)",
            'privacy-data-type-2': "Coordonnées (adresse email, numéro de téléphone, pays de résidence)",
            'privacy-data-type-3': "Informations concernant votre église d'appartenance",
            'privacy-data-type-4': "Informations sur votre expérience prophétique (si vous les partagez)",

            'privacy-data-use-title': "2. UTILISATION DES DONNÉES PERSONNELLES",
            'privacy-data-use-text': "Nous utilisons vos données personnelles pour les finalités suivantes :",
            'privacy-data-use-item-1': "Traiter vos demandes d'inscription à nos formations",
            'privacy-data-use-item-2': "Communiquer avec vous concernant nos services et formations",
            'privacy-data-use-item-3': "Vous envoyer des informations sur nos activités, événements et enseignements (avec votre consentement)",
            'privacy-data-use-item-4': "Améliorer notre site web et nos services",
            'privacy-data-use-item-5': "Assurer la sécurité de notre site web",
            'privacy-data-use-item-6': "Se conformer à nos obligations légales",

            'privacy-legal-basis-title': "3. BASE LÉGALE DU TRAITEMENT",
            'privacy-legal-basis-text': "Nous traitons vos données personnelles sur les bases légales suivantes :",
            'privacy-legal-basis-item-1': "Votre consentement (par exemple, lorsque vous acceptez de recevoir notre newsletter)",
            'privacy-legal-basis-item-2': "L'exécution d'un contrat (par exemple, lorsque vous vous inscrivez à une formation)",
            'privacy-legal-basis-item-3': "Nos intérêts légitimes (par exemple, pour améliorer notre site et nos services)",
            'privacy-legal-basis-item-4': "Le respect de nos obligations légales",

            'privacy-data-sharing-title': "4. PARTAGE DES DONNÉES PERSONNELLES",
            'privacy-data-sharing-text-1': "Nous ne vendons, n'échangeons ni ne transférons vos données personnelles à des tiers sans votre consentement, sauf dans les cas suivants :",
            'privacy-data-sharing-item-1': "Avec des prestataires de services qui nous aident dans l'exploitation de notre site web et la gestion de nos formations (par exemple, hébergeurs, services d'emailing)",
            'privacy-data-sharing-item-2': "Si la loi nous y oblige",
            'privacy-data-sharing-item-3': "Pour protéger nos droits, notre propriété ou notre sécurité",
            'privacy-data-sharing-text-2': "Ces tiers sont soumis à des obligations de confidentialité et ne peuvent utiliser vos données qu'aux fins spécifiées par nous.",

            'privacy-data-security-title': "5. SÉCURITÉ DES DONNÉES",
            'privacy-data-security-text': "Nous mettons en œuvre des mesures de sécurité techniques et organisationnelles appropriées pour protéger vos données personnelles contre l'accès non autorisé, la perte, la destruction ou l'altération accidentelle. Ces mesures comprennent le cryptage, les pare-feu, les contrôles d'accès et la formation régulière de notre personnel.",

            'privacy-data-retention-title': "6. DURÉE DE CONSERVATION",
            'privacy-data-retention-text-1': "Nous conservons vos données personnelles aussi longtemps que nécessaire pour atteindre les finalités pour lesquelles elles ont été collectées, notamment pour satisfaire aux exigences légales, comptables ou de déclaration.",
            'privacy-data-retention-text-2': "Pour déterminer la période de conservation appropriée, nous prenons en compte la quantité, la nature et la sensibilité des données personnelles, le risque potentiel de préjudice résultant d'une utilisation ou d'une divulgation non autorisée de vos données, les finalités pour lesquelles nous traitons vos données et si nous pouvons atteindre ces finalités par d'autres moyens.",

            'privacy-cookies-title': "7. COOKIES ET TECHNOLOGIES SIMILAIRES",
            'privacy-cookies-text-1': "Notre site utilise des cookies, qui sont de petits fichiers texte stockés sur votre appareil. Ils nous aident à améliorer votre expérience sur notre site et nous fournissent des informations sur la façon dont notre site est utilisé.",
            'privacy-cookies-text-2': "Nous utilisons les types de cookies suivants :",
            'privacy-cookies-item-1': "Cookies strictement nécessaires : essentiels au fonctionnement de notre site",
            'privacy-cookies-item-2': "Cookies de préférence : permettent à notre site de se souvenir de vos préférences (comme votre langue préférée)",
            'privacy-cookies-item-3': "Cookies statistiques : nous aident à comprendre comment les visiteurs interagissent avec notre site",
            'privacy-cookies-text-3': "Vous pouvez gérer les cookies via les paramètres de votre navigateur. Veuillez noter que la désactivation de certains cookies peut affecter votre expérience sur notre site.",

            'privacy-rights-title': "8. VOS DROITS",
            'privacy-rights-text': "Conformément au RGPD, vous disposez des droits suivants concernant vos données personnelles :",
            'privacy-rights-item-1': "Droit d'accès : vous pouvez demander une copie des données personnelles que nous détenons sur vous",
            'privacy-rights-item-2': "Droit de rectification : vous pouvez demander la correction de données inexactes ou incomplètes",
            'privacy-rights-item-3': "Droit à l'effacement : vous pouvez demander la suppression de vos données dans certaines circonstances",
            'privacy-rights-item-4': "Droit à la limitation du traitement : vous pouvez demander de limiter le traitement de vos données",
            'privacy-rights-item-5': "Droit à la portabilité des données : vous pouvez demander le transfert de vos données à un tiers",
            'privacy-rights-item-6': "Droit d'opposition : vous pouvez vous opposer au traitement de vos données pour certaines finalités",
            'privacy-rights-item-7': "Droit de retirer votre consentement : vous pouvez retirer votre consentement à tout moment lorsque nous traitons vos données sur cette base",
            'privacy-rights-text-2': "Pour exercer ces droits, veuillez nous contacter à l'adresse email suivante : privacy@mpen-ecole.com.",
            'privacy-rights-text-3': "Si vous estimez que le traitement de vos données personnelles ne respecte pas la réglementation en vigueur, vous avez également le droit de déposer une réclamation auprès de la Commission Nationale de l'Informatique et des Libertés (CNIL).",

            'privacy-children-title': "9. DONNÉES DES ENFANTS",
            'privacy-children-text': "Notre site web et nos services ne s'adressent pas aux personnes de moins de 18 ans. Nous ne collectons pas sciemment de données personnelles concernant des enfants. Si vous êtes parent ou tuteur et que vous pensez que votre enfant nous a fourni des données personnelles, veuillez nous contacter afin que nous puissions prendre les mesures nécessaires.",

            'privacy-international-title': "10. TRANSFERTS INTERNATIONAUX DE DONNÉES",
            'privacy-international-text': "Les données que nous collectons peuvent être stockées et traitées dans l'Union Européenne. En soumettant vos données personnelles, vous acceptez ce transfert, stockage ou traitement. Nous prenons toutes les mesures raisonnablement nécessaires pour garantir que vos données sont traitées en toute sécurité et conformément à cette politique de confidentialité et à la réglementation applicable.",

            'privacy-changes-title': "11. MODIFICATIONS DE LA POLITIQUE DE CONFIDENTIALITÉ",
            'privacy-changes-text': "Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment. Toute modification sera publiée sur cette page avec une date de mise à jour révisée. Nous vous encourageons à consulter régulièrement cette politique pour rester informé de la manière dont nous protégeons vos informations.",

            'privacy-contact-title': "12. NOUS CONTACTER",
            'privacy-contact-text': "Si vous avez des questions concernant cette politique de confidentialité ou nos pratiques en matière de protection des données, veuillez nous contacter :",
            'privacy-contact-email-label': "Email :",
            'privacy-contact-address-label': "Adresse postale :",
            'privacy-contact-address': "5180 rue Queen-Mary Suite #200 Montreal, Quebec",
            'privacy-contact-phone-label': "Téléphone :",

            'form-email-error': 'Veuillez entrer une adresse email valide',
            'form-phone-error': 'Veuillez entrer un numéro de téléphone valide',
            'form-checkbox-error': 'Vous devez accepter pour continuer',
            'form-field-required': 'Ce champ est obligatoire',
            'form-success': 'Votre demande a été envoyée avec succès! Nous vous contacterons dans les plus brefs délais.',
            'form-error': 'Une erreur est survenue lors de l\'envoi du formulaire. Veuillez réessayer plus tard.',
            'form-submitting': 'Envoi en cours...'
                    },
        
        // English translations
        'en': {
            // Meta tags
            'meta-description': 'MPEN - A School of Prophets and Seers of the Last Days. Spiritual training with Apostle Christine Olinga',
            'meta-keywords': 'prophetic school, spiritual training, prophets, seers, Christine Olinga',
            'og-title': 'MPEN - School of Prophets and Seers',
            'og-description': "Answer God's prophetic call. Train yourself, be equipped, be sent.",
            'twitter-title': 'MPEN - School of Prophets and Seers',
            'twitter-description': "Answer God's prophetic call. Train yourself, be equipped, be sent.",
            
            // Registration page meta
            'meta-description-inscription': "Register for the MPEN school of prophets and seers with Apostle Christine Olinga",
            'meta-keywords-inscription': "registration, prophetic training, MPEN, Christine Olinga",
            'og-title-inscription': "Registration - MPEN School of Prophets and Seers",
            'og-description-inscription': "Join our school and develop your prophetic gifts",
            'twitter-title-inscription': "Registration - MPEN School of Prophets and Seers",
            'twitter-description-inscription': "Join our school and develop your prophetic gifts",
            
            // Programme page meta
            'meta-description-programme': "Discover the training program of the MPEN school of prophets and seers with Apostle Christine Olinga",
            'meta-keywords-programme': "program, prophetic training, MPEN, Christine Olinga, school of prophets",
            'og-title-programme': "Program - MPEN School of Prophets and Seers",
            'og-description-programme': "Our complete 9-month prophetic training program",
            'twitter-title-programme': "Program - MPEN School of Prophets and Seers",
            'twitter-description-programme': "Our complete 9-month prophetic training program",
            
            // About page meta
            'meta-description-about': "Discover the history and vision of the MPEN school of prophets and seers founded by Apostle Christine Olinga",
            'meta-keywords-about': "about, MPEN, Christine Olinga, prophetic vision, school of prophets",
            'og-title-about': "About - MPEN School of Prophets and Seers",
            'og-description-about': "Our vision, our history and our teaching team",
            'twitter-title-about': "About - MPEN School of Prophets and Seers",
            'twitter-description-about': "Our vision, our history and our teaching team",
            
            // Navigation
            'nav-home': 'Home',
            'nav-registration': 'Registration',
            'nav-program': 'Program',
            'nav-about': 'About',
            'nav-register-button': 'REGISTER NOW',
            
            // Hero section
            'hero-title': 'A SCHOOL OF PROPHETS AND SEERS OF THE LAST DAYS',
            'hero-subtitle': "Answer God's prophetic call. Train yourself, be equipped, be sent.",
            'hero-cta': 'REGISTER',
            'apostle-with': 'With Apostle',
            'apostle-name': 'CHRISTINE OLINGA',
            
            // Program section
            'program-title': 'PROGRAM OVERVIEW',
            'program-description': 'The courses take place over a period of 9 months and require an understanding of the Word of God and the Bible.',
            
            // Benefits section
            'benefits-title': 'TRAINING BENEFITS',
            'benefit-1-title': 'In-Depth Knowledge',
            'benefit-1-desc': 'Develop your understanding of scriptures and prophetic gifts.',
            'benefit-2-title': 'Spiritual Community',
            'benefit-2-desc': 'Join a community of believers sharing the same vision.',
            'benefit-3-title': 'Personalized Mentoring',
            'benefit-3-desc': 'Benefit from direct guidance from Apostle Christine Olinga.',
            
            // Testimonials section
            'testimonials-title': 'TESTIMONIALS',
            'testimonial-1-text': '"This training completely transformed my understanding of prophetic gifts and my relationship with God."',
            'testimonial-1-name': 'Jean Pierre',
            'testimonial-1-location': 'Brussels, Belgium',
            'testimonial-2-text': '"I discovered my calling thanks to the teaching and mentoring received at MPEN."',
            'testimonial-2-name': 'Marie Claire',
            'testimonial-2-location': 'Paris, France',
            
            // CTA section
            'cta-title': 'JOIN OUR NEXT SESSION',
            'cta-text': 'Registration is open for the session starting in September 2025.',
            'cta-button': 'REGISTER NOW',
            
            // Footer
            'footer-nav-title': 'Navigation',
            'footer-home': 'Home',
            'footer-registration': 'Registration',
            'footer-program': 'Program',
            'footer-about': 'About',
            'footer-contact-title': 'Contact',
            'footer-address': '5180 rue Queen-Mary Suite #200 Montreal, Quebec',
            'footer-social-title': 'Follow us',
            'footer-copyright': '© 2025 MPEN - School of Prophets and Seers. All rights reserved.',
            'footer-legal': 'Legal Notice',
            'footer-privacy': 'Privacy Policy',
            
            // Registration page
            'inscription-title': 'REGISTRATION',
            'inscription-subtitle': 'Join our community and develop your prophetic gifts',
            'reg-info-title': 'TRAINING INFORMATION',
            'reg-duration-title': 'Duration',
            'reg-duration-content': '9 months of intensive training, with weekly sessions',
            'reg-location-title': 'Location',
            'reg-location-content': 'Training available in-person in Paris and online',
            'reg-schedule-title': 'Schedule',
            'reg-schedule-content': 'Classes take place on Saturdays from 10am to 4pm',
            'reg-requirements-title': 'Requirements',
            'reg-req-1': 'Being a born-again Christian',
            'reg-req-2': 'Having a basic knowledge of the Bible',
            'reg-req-3': 'Committing for the entire training period',
            'reg-req-4': 'Having the approval of your pastor (recommended)',
            'reg-fees-title': 'Training Fees',
            'reg-fees-content': 'Contact us for more information about training fees and payment options.',
            'form-title': 'REGISTRATION FORM',
            'form-intro': 'Please fill out the form below. Our team will contact you to finalize your registration.',
            'form-name': 'Full Name *',
            'form-email': 'Email *',
            'form-phone': 'Phone *',
            'form-country': 'Country of Residence *',
            'form-church': 'Church Affiliation',
            'form-format': 'Preferred Format *',
            'form-select-option': '-- Select --',
            'form-option-onsite': 'In-person',
            'form-option-online': 'Online',
            'form-option-hybrid': 'Hybrid format',
            'form-experience': 'Prophetic Experience',
            'form-experience-placeholder': 'Briefly describe your experience or prophetic calling',
            'form-agree': 'I agree to receive communications from MPEN *',
            'form-submit': 'SUBMIT MY APPLICATION',
            'form-note': '* Required fields',
            
            // Form validation messages
            'form-email-error': 'Please enter a valid email address',
            'form-phone-error': 'Please enter a valid phone number',
            'form-checkbox-error': 'You must agree to continue',
            'form-field-required': 'This field is required',
            'form-success': 'Your application has been successfully submitted! We will contact you shortly.',
            'form-submitting': 'Submitting...',
            
            // Programme page
            'programme-title': 'PROGRAM',
            'programme-subtitle': 'Our complete prophetic training program',
            'programme-overview-title': 'PROGRAM OVERVIEW',
            'programme-overview-text': "The training program of the MPEN School of Prophets and Seers is an intensive 9-month journey designed to develop and refine prophetic gifts. Our approach combines in-depth biblical teaching, guided practice, and personalized mentoring under the guidance of Apostle Christine Olinga.",
            'stat-months': 'Months',
            'stat-sessions': 'Sessions',
            'stat-modules': 'Modules',
            
            // Programme modules
            'programme-modules-title': 'TRAINING MODULES',
            'module-1-title': 'Biblical Foundations and Discernment',
            'module-1-duration': 'Months 1-3',
            'module-1-description': "This initial module lays the solid biblical foundation necessary to understand and exercise prophetic gifts according to Scripture. You will learn to discern God's voice and recognize true prophetic manifestations.",
            'module-1-topic-1': 'Biblical foundations of prophetic ministry',
            'module-1-topic-2': 'History and evolution of the prophetic gift',
            'module-1-topic-3': 'Discerning Gods voice among other voices',
            'module-1-topic-4': 'Ethics and responsibility in prophetic ministry',
            'module-1-topic-5': 'Developing spiritual sensitivity',
            
            'module-2-title': 'Activation and Development of Gifts',
            'module-2-duration': 'Months 4-6',
            'module-2-description': "In this intermediate module, we focus on the practical activation and development of your prophetic gifts. You will participate in guided exercises and receive personalized feedback to refine your spiritual perception.",
            'module-2-topic-1': 'Different expressions of the prophetic gift',
            'module-2-topic-2': 'Understanding and interpreting visions and dreams',
            'module-2-topic-3': 'Guided and supervised prophetic exercises',
            'module-2-topic-4': 'Overcoming obstacles to prophetic flow',
            'module-2-topic-5': 'Developing accuracy and clarity in delivery',
            
            'module-3-title': 'Prophetic Ministry and Mission',
            'module-3-duration': 'Months 7-9',
            'module-3-description': "This final module prepares students to exercise their prophetic ministry within a broader mission. You will learn to integrate your gift into the service of the Church and respond to the prophetic call of the last days.",
            'module-3-topic-1': "Prophecy in the context of local and global Church",
            'module-3-topic-2': "Prophetic intercession ministry",
            'module-3-topic-3': 'Prophetic mission and evangelism',
            'module-3-topic-4': 'Understanding prophetic times and seasons',
            'module-3-topic-5': 'Practical application and field ministry',
            
            // Teaching methods
            'teaching-methods-title': "TEACHING METHODS",
            'method-1-title': 'Theoretical Teaching',
            'method-1-desc': "Lectures based on the Bible and prophetic experience.",
            'method-2-title': 'Practical Workshops',
            'method-2-desc': 'Guided exercises to develop your gifts in a safe environment.',
            'method-3-title': 'Personalized Mentoring',
            'method-3-desc': 'Individual follow-up to address your specific needs.',
            'method-4-title': 'Field Experience',
            'method-4-desc': "Practical application in real church and mission contexts.",
            
            // FAQ
            'faq-title': 'FREQUENTLY ASKED QUESTIONS',
            'faq-q1': 'Do I need to already have a manifest prophetic gift to follow the training?',
            'faq-a1': "No, our program welcomes both people whose gift is already manifested and those who feel a calling but have not yet had concrete experience. The program is designed to develop gifts at all levels.",
            'faq-q2': 'How does online training work?',
            'faq-a2': "Online training follows the same program as in-person training. Sessions are broadcast live and interactive, with opportunities for participation. Virtual workshops are also organized, and personalized follow-up is provided via video conference.",
            'faq-q3': 'What is the weekly workload?',
            'faq-a3': "In addition to the 6 hours of weekly classes (on Saturdays), we recommend about 4-6 hours of personal work per week for readings, exercises, and prayer time. This workload may vary depending on the modules and your availability.",
            'faq-q4': 'Is there certification at the end of the training?',
            'faq-a4': "Yes, students who successfully complete the 9 months of training receive a certificate from the MPEN School of Prophets and Seers. This certificate attests to your training but is not an academic degree recognized by the state.",
            'faq-q5': "Can I join the training during the year?",
            'faq-a5': "Generally, we recommend starting the training at the beginning of the cycle, as the modules are progressive. However, in some exceptional cases and depending on your level of experience, joining during the year may be considered after an interview.",
            
            // Programme CTA
            'cta-programme-title': 'READY TO DEVELOP YOUR PROPHETIC GIFTS?',
            'cta-programme-text': "Join our comprehensive training program and answer the prophetic call of the last days.",
            
            // About page
            'about-title': 'ABOUT',
            'about-subtitle': 'Our vision, our history and our team',
            
            // Mission & Vision
            'mission-title': 'OUR MISSION',
            'mission-text': "MPEN (Prophetic Ministry of the Children of Nehemiah) has the mission to train and equip a generation of prophets and seers, anchored in the Word of God and sensitive to the Holy Spirit, to respond to the prophetic call of the last days. We believe that God is restoring and amplifying prophetic ministry in this season to prepare the Church for the fulfillment of His purposes.",
            'vision-title': 'OUR VISION',
            'vision-quote': '"In the last days, God says, I will pour out my Spirit on all people. Your sons and daughters will prophesy, your young men will see visions, your old men will dream dreams." - Acts 2:17',
            'vision-text': "Our vision is to see an army of trained and equipped prophets and seers rise up, who will carry God's message with integrity to their generation in churches, communities, and nations. We aim to restore, according to Scripture, the place and function of prophetic ministry in the Body of Christ.",
            
            // History
            'history-title': 'OUR HISTORY',
            'history-text-1': "The MPEN School of Prophets and Seers was born from the vision received by Apostle Christine Olinga in 2018 during an intensive prayer retreat. During this period, she received a clear revelation regarding the need to train a new generation of prophets, solidly anchored in the Word and capable of discerning with precision the times and seasons.",
            'history-text-2': "After two years of preparation and program development, the first cohort of students was welcomed in 2020. Despite the challenges of the global pandemic, the school quickly adapted to offer online training, allowing students from different countries to participate.",
            'history-text-3': "Today, MPEN has trained more than 200 prophets and seers who exercise their ministry in different churches and nations. Our school continues to expand, faithful to the original vision of restoring authentic prophetic ministry according to Scripture.",
            
            // Team
            'team-title': 'OUR TEAM',
            'team-intro': "Our teaching team consists of experienced ministers in the prophetic field, coming from different nations and bringing a wealth of perspectives and experiences.",
            'team-role-1': 'Founder & Director',
            'team-bio-1': "Apostle Christine Olinga has more than 20 years of experience in prophetic ministry. She is internationally recognized for her prophetic accuracy and life-transforming teaching. She also leads several churches in France and Africa.",
            'team-role-2': 'Director of Studies',
            'team-bio-2': "Apostle Christine Olinga has more than 20 years of experience in prophetic ministry. She is internationally recognized for her prophetic accuracy and life-transforming teaching. She also leads several churches in France and Africa.",
            'team-role-3': 'Head of Practical Training',
            'team-bio-3': "Apostle Christine Olinga has more than 20 years of experience in prophetic ministry. She is internationally recognized for her prophetic accuracy and life-transforming teaching. She also leads several churches in France and Africa.",
            'team-role-4': 'Mentoring Coordinator',
            'team-bio-4': "Apostle Christine Olinga has more than 20 years of experience in prophetic ministry. She is internationally recognized for her prophetic accuracy and life-transforming teaching. She also leads several churches in France and Africa.",
            'team-note': "In addition to our permanent team, we regularly invite guest speakers, recognized in the prophetic field, to enrich the training with their perspectives and experiences.",
            
            // About testimonials
            'about-testimonial-1-text': "\"Apostle Christine's teaching has completely transformed my understanding of prophetic ministry. Her wisdom and discernment have helped me refine my gift and exercise it responsibly.\"",
            'about-testimonial-1-name': 'Pierre Dupont',
            'about-testimonial-1-location': 'Lyon, France',
            'about-testimonial-2-text': "\"What distinguishes MPEN is the perfect balance between theoretical teaching and practice. The personalized coaching allowed me to overcome my fears and fully embrace my calling.\"",
            'about-testimonial-2-name': 'Sarah Mbeki',
            'about-testimonial-2-location': 'Kinshasa, DRC',
            'about-testimonial-3-text': "\"Even following the training remotely from Canada, I felt genuine support. The personalized feedback and regular mentoring made all the difference in my journey.\"",
            'about-testimonial-3-name': 'Michel Tremblay',
            'about-testimonial-3-location': 'Montreal, Canada', 
            
            // Values
            'values-title': 'OUR VALUES',
            'value-1-title': 'Faithfulness to Scripture',
            'value-1-desc': "We base all our teaching on a sound and contextual interpretation of the Scriptures, the unshakable foundation of our faith and practice.",
            'value-2-title': 'Integrity and Ethics',
            'value-2-desc': "We promote the highest standards of ethics and integrity in the exercise of prophetic ministry, reflecting the character of Christ.",
            'value-3-title': 'Community and Unity',
            'value-3-desc': "We cultivate a spirit of family and unity, recognizing that prophetic gifts are intended to build up the body of Christ as a whole.",
            'value-4-title': 'Excellence and Growth',
            'value-4-desc': "We aim for excellence in everything we do, encouraging continuous growth and development of gifts and character.",
            
            // About CTA
            'cta-about-title': 'JOIN OUR COMMUNITY',
            'cta-about-text': 'Be part of this prophetic vision for our generation.',

            'meta-description-legal': "Legal notice of MPEN school of prophets and seers founded by Apostle Christine Olinga",
            'meta-keywords-legal': "legal notice, MPEN, terms",
            'og-title-legal': "Legal Notice - MPEN School of Prophets and Seers",
            'og-description-legal': "Legal information about the MPEN website",
            'twitter-title-legal': "Legal Notice - MPEN School of Prophets and Seers",
            'twitter-description-legal': "Legal information about the MPEN website",

            'meta-description-privacy': "Privacy policy of MPEN school of prophets and seers founded by Apostle Christine Olinga",
            'meta-keywords-privacy': "privacy policy, MPEN, personal data, GDPR",
            'og-title-privacy': "Privacy Policy - MPEN School of Prophets and Seers",
            'og-description-privacy': "Information on the collection and processing of personal data by MPEN",
            'twitter-title-privacy': "Privacy Policy - MPEN School of Prophets and Seers",
            'twitter-description-privacy': "Information on the collection and processing of personal data by MPEN",

            // Legal page content
            'legal-title': "LEGAL NOTICE",
            'legal-publisher-title': "1. WEBSITE PUBLISHER",
            'legal-publisher-text': "The website www.mpen-ecole.com is published by the MPEN (Prophetic Ministry of the Children of Nehemiah) association, a non-profit association governed by the French law of July 1, 1901.",
            'legal-address-label': "Registered office:",
            'legal-address': "123 Church Street, 75001 Paris, France",
            'legal-phone-label': "Phone:",
            'legal-email-label': "Email:",
            'legal-director-label': "Publication director:",
            'legal-director': "Christine Olinga",
            'legal-registration-label': "Registration No.:",

            'legal-hosting-title': "2. HOSTING",
            'legal-hosting-text': "This site is hosted by:",
            'legal-host-name-label': "Host name:",
            'legal-host-name': "OVH SAS",
            'legal-host-address-label': "Address:",
            'legal-host-address': "2 rue Kellermann - 59100 Roubaix - France",
            'legal-host-phone-label': "Phone:",
            'legal-host-website-label': "Website:",

            'legal-intellectual-title': "3. INTELLECTUAL PROPERTY",
            'legal-intellectual-text-1': "The entire content of this site is subject to French and international copyright and intellectual property law. All reproduction rights are reserved, including for downloadable documents and iconographic and photographic representations.",
            'legal-intellectual-text-2': "The reproduction of all or part of this site on electronic or other media is expressly prohibited except with the express authorization of MPEN management.",
            'legal-intellectual-text-3': "The logos, trademarks and distinctive signs on the site are the exclusive property of MPEN. No right or license may be attributed to any of these elements without the written authorization of MPEN.",

            'legal-disclaimer-title': "4. LIMITATION OF LIABILITY",
            'legal-disclaimer-text-1': "MPEN makes every effort to ensure the accuracy and updating of the information disseminated on this site, which it reserves the right to correct at any time without notice.",
            'legal-disclaimer-text-2': "MPEN disclaims all liability:",
            'legal-disclaimer-item-1': "For any interruption of the site",
            'legal-disclaimer-item-2': "For any occurrence of bugs",
            'legal-disclaimer-item-3': "For any inaccuracy or omission of information available on the site",
            'legal-disclaimer-item-4': "For any damage resulting from a fraudulent intrusion by a third party that has led to a modification of the information made available on the site",
            'legal-disclaimer-text-3': "MPEN cannot be held responsible for direct or indirect damages resulting from the use of the information and content on the site.",

            'legal-links-title': "5. HYPERLINKS",
            'legal-links-text-1': "The site may contain hyperlinks to other websites or other sources of information. Insofar as MPEN cannot control these sites and external sources, MPEN cannot be held responsible for making these sites and external sources available, and cannot bear any responsibility for the content, advertisements, products, services or any other material available on or from these sites or external sources.",
            'legal-links-text-2': "The creation of hyperlinks to the website www.mpen-ecole.com is subject to the prior agreement of MPEN. For any request, please contact: contact@mpen-ecole.com.",

            'legal-applicable-law-title': "6. APPLICABLE LAW AND JURISDICTION",
            'legal-applicable-law-text': "These legal notices are governed by French law. In the event of a dispute, the French courts will have sole jurisdiction.",

            'legal-modification-title': "7. MODIFICATIONS TO THE LEGAL NOTICE",
            'legal-modification-text': "MPEN reserves the right to modify these legal notices at any time. Users are therefore invited to consult them regularly.",
            'legal-last-update': "Last update: April 25, 2025",

            // Privacy page content
            'privacy-title': "PRIVACY POLICY",
            'privacy-intro': "MPEN is committed to protecting the privacy of users of its website. This privacy policy informs you about how we collect, use and protect your personal data in accordance with the General Data Protection Regulation (GDPR) and the French Data Protection Act.",
            'privacy-last-update': "Last update: April 25, 2025",

            'privacy-data-collection-title': "1. COLLECTION OF PERSONAL DATA",
            'privacy-data-collection-text-1': "We collect personal data when you:",
            'privacy-data-collection-item-1': "Fill out the registration form for our training programs",
            'privacy-data-collection-item-2': "Contact us by email or via the contact form",
            'privacy-data-collection-item-3': "Subscribe to our newsletter",
            'privacy-data-collection-text-2': "The types of data we may collect include:",
            'privacy-data-type-1': "Identification information (first name, last name)",
            'privacy-data-type-2': "Contact details (email address, phone number, country of residence)",
            'privacy-data-type-3': "Information about your church affiliation",
            'privacy-data-type-4': "Information about your prophetic experience (if you share it)",

            'privacy-data-use-title': "2. USE OF PERSONAL DATA",
            'privacy-data-use-text': "We use your personal data for the following purposes:",
            'privacy-data-use-item-1': "Processing your registration requests for our training programs",
            'privacy-data-use-item-2': "Communicating with you about our services and training",
            'privacy-data-use-item-3': "Sending you information about our activities, events and teachings (with your consent)",
            'privacy-data-use-item-4': "Improving our website and services",
            'privacy-data-use-item-5': "Ensuring the security of our website",
            'privacy-data-use-item-6': "Complying with our legal obligations",

            'privacy-legal-basis-title': "3. LEGAL BASIS FOR PROCESSING",
            'privacy-legal-basis-text': "We process your personal data on the following legal bases:",
            'privacy-legal-basis-item-1': "Your consent (for example, when you agree to receive our newsletter)",
            'privacy-legal-basis-item-2': "The performance of a contract (for example, when you register for a training program)",
            'privacy-legal-basis-item-3': "Our legitimate interests (for example, to improve our site and services)",
            'privacy-legal-basis-item-4': "Compliance with our legal obligations",

            'privacy-data-sharing-title': "4. SHARING OF PERSONAL DATA",
            'privacy-data-sharing-text-1': "We do not sell, trade or transfer your personal data to third parties without your consent, except in the following cases:",
            'privacy-data-sharing-item-1': "With service providers who help us operate our website and manage our training programs (for example, hosting providers, email services)",
            'privacy-data-sharing-item-2': "If required by law",
            'privacy-data-sharing-item-3': "To protect our rights, property or safety",
            'privacy-data-sharing-text-2': "These third parties are subject to confidentiality obligations and may only use your data for the purposes specified by us.",

            'privacy-data-security-title': "5. DATA SECURITY",
            'privacy-data-security-text': "We implement appropriate technical and organizational security measures to protect your personal data against unauthorized access, loss, accidental destruction or alteration. These measures include encryption, firewalls, access controls and regular training of our staff.",

            'privacy-data-retention-title': "6. RETENTION PERIOD",
            'privacy-data-retention-text-1': "We retain your personal data for as long as necessary to achieve the purposes for which they were collected, including to satisfy legal, accounting or reporting requirements.",
            'privacy-data-retention-text-2': "To determine the appropriate retention period, we consider the amount, nature and sensitivity of the personal data, the potential risk of harm from unauthorized use or disclosure of your data, the purposes for which we process your data and whether we can achieve those purposes through other means.",

            'privacy-cookies-title': "7. COOKIES AND SIMILAR TECHNOLOGIES",
            'privacy-cookies-text-1': "Our site uses cookies, which are small text files stored on your device. They help us improve your experience on our site and provide us with information about how our site is used.",
            'privacy-cookies-text-2': "We use the following types of cookies:",
            'privacy-cookies-item-1': "Strictly necessary cookies: essential for the functioning of our site",
            'privacy-cookies-item-2': "Preference cookies: allow our site to remember your preferences (such as your preferred language)",
            'privacy-cookies-item-3': "Statistical cookies: help us understand how visitors interact with our site",
            'privacy-cookies-text-3': "You can manage cookies through your browser settings. Please note that disabling certain cookies may affect your experience on our site.",

            'privacy-rights-title': "8. YOUR RIGHTS",
            'privacy-rights-text': "In accordance with the GDPR, you have the following rights regarding your personal data:",
            'privacy-rights-item-1': "Right of access: you can request a copy of the personal data we hold about you",
            'privacy-rights-item-2': "Right to rectification: you can request the correction of inaccurate or incomplete data",
            'privacy-rights-item-3': "Right to erasure: you can request the deletion of your data in certain circumstances",
            'privacy-rights-item-4': "Right to restriction of processing: you can request to limit the processing of your data",
            'privacy-rights-item-5': "Right to data portability: you can request the transfer of your data to a third party",
            'privacy-rights-item-6': "Right to object: you can object to the processing of your data for certain purposes",
            'privacy-rights-item-7': "Right to withdraw your consent: you can withdraw your consent at any time when we process your data on this basis",
            'privacy-rights-text-2': "To exercise these rights, please contact us at the following email address: privacy@mpen-ecole.com.",
            'privacy-rights-text-3': "If you believe that the processing of your personal data does not comply with current regulations, you also have the right to lodge a complaint with a supervisory authority.",

            'privacy-children-title': "9. CHILDREN'S DATA",
            'privacy-children-text': "Our website and services are not directed to individuals under the age of 18. We do not knowingly collect personal data from children. If you are a parent or guardian and believe your child has provided us with personal data, please contact us so we can take necessary action.",

            'privacy-international-title': "10. INTERNATIONAL DATA TRANSFERS",
            'privacy-international-text': "The data we collect may be stored and processed in the European Union. By submitting your personal data, you consent to this transfer, storage or processing. We take all reasonably necessary measures to ensure that your data is treated securely and in accordance with this privacy policy and applicable regulations.",

            'privacy-changes-title': "11. CHANGES TO THE PRIVACY POLICY",
            'privacy-changes-text': "We reserve the right to modify this privacy policy at any time. Any changes will be published on this page with a revised update date. We encourage you to regularly review this policy to stay informed about how we protect your information.",

            'privacy-contact-title': "12. CONTACT US",
            'privacy-contact-text': "If you have any questions about this privacy policy or our data protection practices, please contact us:",
            'privacy-contact-email-label': "Email:",
            'privacy-contact-address-label': "Postal address:",
            'privacy-contact-address': "123 Church Street, 75001 Paris, France",
            'privacy-contact-phone-label': "Phone:",
            'form-email-error': 'Please enter a valid email address',
            'form-phone-error': 'Please enter a valid phone number',
            'form-checkbox-error': 'You must accept to continue',
            'form-field-required': 'This field is required',
            'form-success': 'Your application has been successfully submitted! We will contact you shortly.',
            'form-error': 'An error occurred while submitting the form. Please try again later.',
            'form-submitting': 'Submitting...'
            
        }
    };
    
    // Make translations available globally for form validation script
    window.translations = translations;

// Get user's preferred language from browser or localStorage
function getInitialLanguage() {
    // Check if language is stored in localStorage
    const storedLang = localStorage.getItem('mpen-language');
    if (storedLang && translations[storedLang]) {
        return storedLang;
    }
    
    // Fall back to browser language or default to French
    const browserLang = navigator.language.split('-')[0];
    return translations[browserLang] ? browserLang : 'fr';
}

// Set initial language
let currentLanguage = getInitialLanguage();

// Update language buttons active state
function updateLanguageButtons() {
    const langButtons = document.querySelectorAll('.lang-btn');
    langButtons.forEach(button => {
        const buttonLang = button.getAttribute('data-language');
        if (buttonLang === currentLanguage) {
            button.classList.add('active');
        } else {
            button.classList.remove('active');
        }
    });
}

// Apply translations to all elements with data-translation-key attribute
function applyTranslations() {
    const elements = document.querySelectorAll('[data-translation-key]');
    elements.forEach(element => {
        const key = element.getAttribute('data-translation-key');
        if (translations[currentLanguage][key]) {
            // Handle different element types
            if (element.tagName === 'META') {
                // For meta tags
                if (element.getAttribute('name') || element.getAttribute('property')) {
                    element.setAttribute('content', translations[currentLanguage][key]);
                }
            } else if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                // For input elements
                if (element.getAttribute('placeholder')) {
                    element.setAttribute('placeholder', translations[currentLanguage][key]);
                } else {
                    element.value = translations[currentLanguage][key];
                }
            } else if (element.tagName === 'OPTION') {
                // For select options
                element.textContent = translations[currentLanguage][key];
            } else {
                // For regular content elements
                element.innerHTML = translations[currentLanguage][key];
            }
        }
    });
    
    // Update document title based on page
    const currentPage = window.location.pathname.split('/').pop();
    if (currentPage === 'inscription.html') {
        document.title = translations[currentLanguage]['og-title-inscription'] || 'Inscription - MPEN';
    } else if (currentPage === 'programme.html') {
        document.title = translations[currentLanguage]['og-title-programme'] || 'Programme - MPEN';
    } else if (currentPage === 'a-propos.html') {
        document.title = translations[currentLanguage]['og-title-about'] || 'À Propos - MPEN';
    } else {
        document.title = translations[currentLanguage]['og-title'] || 'MPEN';
    }
    
    // Update any error messages that are already visible
    const errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach(message => {
        const parent = message.closest('.form-group');
        if (parent && parent.classList.contains('error')) {
            const input = parent.querySelector('input, select, textarea');
            if (input) {
                // Re-validate the field to update the error message with the new language
                if (typeof validateField === 'function') {
                    validateField(input);
                }
            }
        }
    });
}

// Function to switch language
function switchLanguage(lang) {
    if (translations[lang]) {
        currentLanguage = lang;
        localStorage.setItem('mpen-language', lang);
        updateLanguageButtons();
        applyTranslations();
        
        // Update HTML lang attribute
        document.documentElement.lang = lang;
    }
}

// Add click event listeners to language buttons
const langButtons = document.querySelectorAll('.lang-btn');
langButtons.forEach(button => {
    button.addEventListener('click', () => {
        const lang = button.getAttribute('data-language');
        switchLanguage(lang);
    });
});

// Initialize translations
updateLanguageButtons();
applyTranslations();

// Export getCurrentTranslation function for use in other scripts
window.getCurrentTranslation = function(key, defaultText) {
    if (translations[currentLanguage] && translations[currentLanguage][key]) {
        return translations[currentLanguage][key];
    }
    return defaultText;
};
});
