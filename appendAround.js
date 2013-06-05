/*! appendAround markup pattern. [c]2012, @scottjehl, Filament Group, Inc. MIT/GPL
  how-to:
  1. Insert potential element containers throughout the DOM
  2. give each container a data-set attribute with a value that matches all other containers' values
  3. Place your appendAround content in one of the potential containers
  4. Call appendAround() on that element when the DOM is ready
  */
(function( $ ){
	$.fn.appendAround = function(){
		return this.each(function(){
			var $self = $( this ),
				$parent = $self.parent(),
				att = "data-set",
				attval = $parent.attr( att ),
				$set = $( "["+ att +"='" + attval + "']" );

			function appendToVisibleContainer(){
				if ( ! $parent.is( ':visible' ) ) {
					$parent = $set.filter( ':visible' ).first();
					$self.appendTo( $parent );
				}
			}

			appendToVisibleContainer();
			$(window).bind( "resize", appendToVisibleContainer );
		});
	};
}( jQuery ));
