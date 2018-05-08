var bar = $.custom.progressbar( {}, $( "<div></div>" ).appendTo( "body") );

// Same result as before.
alert( bar.options.value );


var bar2 = $( "<div></div>" )
    .appendTo( "body" )
    .progressbar()
    .data( "custom-progressbar" );

// Call a method directly on the plugin instance.
bar2.option( "value", 50 );

// Access properties on the plugin instance.
alert( bar2.options.value );