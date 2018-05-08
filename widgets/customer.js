var bar = $.custom.progressbar( {}, $( "<div></div>" ).appendTo( "body") );

// Same result as before.
// alert( bar.options.value );


var bar2 = $( "<div id='fif'></div>" )
    .appendTo( "body" )
    .progressbar({
        complete: function( event, data ) {
            alert( "Callbacks are great!" );
        }
    })
    .progressbar({
        complete: function( event, data ) {
            console.log($(event.target).draggable(), data, 'this is data  - - -')
            alert( "Callbacks are great!" );
        }
    })
    // .bind( "progressbarcomplete", function( event, data ) {
    //     alert( "Events bubble and support many handlers for extreme flexibility." );
    //     alert( "The progress bar value is " + data.value );
    // })
    .data( "custom-progressbar" );

// Call a method directly on the plugin instance.
bar2.option( "value", 100 );
// bar.progressbar( "option", "value", 100 );
//
// $('body').on('click', '#fif', function() {
//     bar2.refresh();
//    console.log('lalala');
// });

$("#ddd").draggable();

// Access properties on the plugin instance.
// alert( bar2.options.value );