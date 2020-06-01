<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php wp_title('');?></title>
    <?php wp_head(); ?>
</head>
<body>
    <header id="header">
        <h1><a href="../index.php"><?php echo bloginfo('name'); ?></a></h1>
        <nav id="navigation">
            <?php wp_nav_menu(array('theme_location' => 'main')); ?>
        </nav>
    </header>

    <div id="wrap" class="row">
      <section class="content col-md-8">
      <?php if(have_posts()) : ?>
                <?php        
                the_post(); 
                $image = get_the_post_thumbnail( $post->ID, 'lens-thumb' );
                ?>
                    <article class="col-md-12" style="height:100%">
                        <?php echo $image; ?>
                        <h2 class="mt-2"><a href="<?php get_permalink(); ?>"><?php the_title(); ?></a></h2>
                    </article>
       <?php endif; ?>
       </section>

        <section class="content col-md-4 d-flex flex-wrap">
            <?php
                while(have_posts()) : the_post();
                $image = get_the_post_thumbnail( $post->ID, 'thumbnail' );
                ?>
                        <article class="col-md-6">
                            <?php echo $image;?>
                            <h2 class="mt-2"><a href="<?php get_permalink(); ?>"><?php the_title(); ?></a></h2>
                        </article>
                <?php
                endwhile; ?>
        </section>
      

        <aside id="sidebar" class="row mt-5">
            <div class="col-md-12">
        <?php   
            dynamic_sidebar('main-sidebar'); 
        ?>
            </div>
        </aside>    
    </div>

    <footer id="footer" class="row">
        <div class="col-md-4 categories">
            <h4>Categories</h4>
            <?php wp_nav_menu(array('theme_location' => 'main')); ?>
        </div>

        <div class="col-md-4">
            <h4 class="text-center">Popular Posts</h4>
            <?php if(have_posts()) : ?>
                <?php        
                the_post(); 
                $image = get_the_post_thumbnail( $post->ID, 'pop-thumb' );
                ?>
                    <article class="col-md-12" style="height:100%">
                        <?php echo $image; ?>
                        <h2 class="mt-2"><a href="<?php get_permalink(); ?>"><?php the_title(); ?></a></h2>
                    </article>
            <?php endif; ?>
        </div>

        <div class="col-md-4">
            <h4 class="text-center">Instagram</h4>
            <?php   
                dynamic_sidebar('footer-sidebar'); 
            ?>
        </div>
    </footer>

    <?php wp_footer(); ?>
</body>
</html>