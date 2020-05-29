<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'FooDog' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', '' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         ' 2/S ZF]Nne]B6zIac6@#XC;,@5wXNX^1B^^7Xiwywvj=j*R,T?{:<=3}[pQ7Pf%' );
define( 'SECURE_AUTH_KEY',  '_x~d0FwzVk`4&R|i{,.kxn@$~<<D7)Zt>yXC1#UY$fd %HAm~*%eIel;XqnG~+cz' );
define( 'LOGGED_IN_KEY',    'G>A#C$Z]36-L76g{QWp:D`^`:G^/D3%O#5?+thJ=Rfl_PcGD{Z,0#mCz#c(F;NE}' );
define( 'NONCE_KEY',        '*c1`W_~.NGq1SME234J|4r8T#6oI$~n637HTYCf2w8sUICx8cy-cRn(#!.g0tIhR' );
define( 'AUTH_SALT',        '-T.M#JB-8}hv9Wtq`xrGdDEhqD){XSWJ5~}<;9W m9J+sO&+&8kD?44lLDMO@DiU' );
define( 'SECURE_AUTH_SALT', 'l4DbfS{{3**GX~:Z+5zc<4!Co=#f&`_jl^&`>(ZZqcK`y>+GTnj| RMn>Oi)v1A]' );
define( 'LOGGED_IN_SALT',   ')teDm0(D?BJRhsb@hhQMtJyR;G?i8d>B&8;ODI3Fl(0N~i*]~]o?<Xf;_rShqDrJ' );
define( 'NONCE_SALT',       '|at6HE_!hwkOFv^DHP{.oR-?0yxn_V3Mkk^9;U,l>Pvj_oyF4FNmGYb?+dtKg!%f' );

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
