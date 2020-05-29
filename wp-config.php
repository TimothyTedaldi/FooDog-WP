<?php
/**
 * La configuration de base de votre installation WordPress.
 *
 * Ce fichier est utilisé par le script de création de wp-config.php pendant
 * le processus d’installation. Vous n’avez pas à utiliser le site web, vous
 * pouvez simplement renommer ce fichier en « wp-config.php » et remplir les
 * valeurs.
 *
 * Ce fichier contient les réglages de configuration suivants :
 *
 * Réglages MySQL
 * Préfixe de table
 * Clés secrètes
 * Langue utilisée
 * ABSPATH
 *
 * @link https://fr.wordpress.org/support/article/editing-wp-config-php/.
 *
 * @package WordPress
 */

// ** Réglages MySQL - Votre hébergeur doit vous fournir ces informations. ** //
/** Nom de la base de données de WordPress. */
define( 'DB_NAME', 'wordpress' );

/** Utilisateur de la base de données MySQL. */
define( 'DB_USER', 'root' );

/** Mot de passe de la base de données MySQL. */
define( 'DB_PASSWORD', '' );

/** Adresse de l’hébergement MySQL. */
define( 'DB_HOST', 'localhost' );

/** Jeu de caractères à utiliser par la base de données lors de la création des tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/**
 * Type de collation de la base de données.
 * N’y touchez que si vous savez ce que vous faites.
 */
define( 'DB_COLLATE', '' );

/**#@+
 * Clés uniques d’authentification et salage.
 *
 * Remplacez les valeurs par défaut par des phrases uniques !
 * Vous pouvez générer des phrases aléatoires en utilisant
 * {@link https://api.wordpress.org/secret-key/1.1/salt/ le service de clés secrètes de WordPress.org}.
 * Vous pouvez modifier ces phrases à n’importe quel moment, afin d’invalider tous les cookies existants.
 * Cela forcera également tous les utilisateurs à se reconnecter.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'uAx#k/0qQTJv)Ni}5>hSSbDFK%M&N:JyD &}D_kf1eoUh2 k6IX10v4Vs [Sla^R' );
define( 'SECURE_AUTH_KEY',  'lkr].X5VE1$~6L055>Ua[&KtZKAah.`jm`1$3G2Zy_J4l5M;:[;JeCqWydweE(=T' );
define( 'LOGGED_IN_KEY',    'SVLin+`$d9Q]3GpY@[j9e[tmj:|o-U[A-_:X4c!wGCDs&2=43[4,>LL0CJffSr.p' );
define( 'NONCE_KEY',        'WK!3IYo(<UoJZd7?@?e7I*25*N5tTt9lhI7lpz k@oy(0.C1^<g>,rI*zfHp>@(c' );
define( 'AUTH_SALT',        '[62K/y$=ZYs5?`v@_dRrU I%_s7dn<}Cavnc0uXsFtnIQoi}&@wy6A9{f4Ku?fcO' );
define( 'SECURE_AUTH_SALT', '@++cG9bspcUl2!Tf.{-8`:U>v2*OeL/ly&_Tt<Z;$UcU^pTKZo9D1kRC]l~av/E)' );
define( 'LOGGED_IN_SALT',   'UtI%`ILC~][l[--AKZvlU0^wLq!Wo&EfI+$4Uv]mSV+6t/rH$bFk}7KHd`cd}J/n' );
define( 'NONCE_SALT',       '=@It#{6IO=r;YTG3dH<@8_J(&/xyxdmk@Tx6-!4KWLatv=hSU(|7x8IXG^;7`)9p' );
/**#@-*/

/**
 * Préfixe de base de données pour les tables de WordPress.
 *
 * Vous pouvez installer plusieurs WordPress sur une seule base de données
 * si vous leur donnez chacune un préfixe unique.
 * N’utilisez que des chiffres, des lettres non-accentuées, et des caractères soulignés !
 */
$table_prefix = 'wp_';

/**
 * Pour les développeurs : le mode déboguage de WordPress.
 *
 * En passant la valeur suivante à "true", vous activez l’affichage des
 * notifications d’erreurs pendant vos essais.
 * Il est fortemment recommandé que les développeurs d’extensions et
 * de thèmes se servent de WP_DEBUG dans leur environnement de
 * développement.
 *
 * Pour plus d’information sur les autres constantes qui peuvent être utilisées
 * pour le déboguage, rendez-vous sur le Codex.
 *
 * @link https://fr.wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* C’est tout, ne touchez pas à ce qui suit ! Bonne publication. */

/** Chemin absolu vers le dossier de WordPress. */
if ( ! defined( 'ABSPATH' ) )
  define( 'ABSPATH', dirname( __FILE__ ) . '/' );

/** Réglage des variables de WordPress et de ses fichiers inclus. */
require_once( ABSPATH . 'wp-settings.php' );
