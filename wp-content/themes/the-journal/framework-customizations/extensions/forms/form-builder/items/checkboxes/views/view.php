<?php if ( ! defined( 'FW' ) ) {
	die( 'Forbidden' );
}
/**
 * @var array $item
 * @var array $choices
 * @var array $value
 */

$options = $item['options'];
?>
<?php if ( empty( $choices ) ): ?>
	<!-- checkboxes not displayed: no choices -->
<?php else: ?>
	<div class="<?php echo esc_attr( fw_ext_builder_get_item_width( 'form-builder', $item['width'] . '/frontend_class' ) ) ?>">
		<div class="field-checkbox input-styled <?php echo esc_attr('fw-item-' . $options['layout']); ?>">
			<?php if ( fw_htmlspecialchars( $item['options']['label'] ) != '' ) : ?>
				<label><?php echo wp_kses( fw_htmlspecialchars( $item['options']['label'] ), the_journal_allowed_html() ); ?>
					<?php if ( $options['required'] ): ?><sup>*</sup><?php endif; ?>
				</label>
			<?php endif; ?>
			<div class="custom-checkbox">
				<?php foreach ( $choices as $choice ): ?>
					<?php $choice['id'] = 'rand-' . fw_unique_increment(); ?>
					<div class="options">
						<input <?php echo fw_attr_to_html( $choice ) ?> />
						<label for="<?php echo esc_attr( $choice['id'] ) ?>"><?php echo esc_html( $choice['value'] ); ?></label>
					</div>
				<?php endforeach; ?>
			</div>
			<?php if ( $options['info'] ): ?>
				<p><em><?php echo esc_html( $options['info'] ); ?></em></p>
			<?php endif; ?>
		</div>
	</div>
<?php endif; ?>