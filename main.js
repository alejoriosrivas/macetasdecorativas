$(window).on('scroll', function() {
    // Nav config
    if ($(window).scrollTop()) {
        $('nav').addClass('nav_js')

        $(document.getElementsByClassName('logoContainer')).addClass('logo_js')

        // $('.listContainer').css('margin-right', '33px')
        $('.listContainer').addClass('listMargin_js')

        $('li a').addClass('list_js')
    } else {
        $('nav').removeClass('nav_js')

        $(document.getElementsByClassName('logoContainer')).removeClass('logo_js')

        // $('.listContainer').css('margin-right', '25px')
        $('.listContainer').removeClass('listMargin_js')

        $('nav div li a').removeClass('list_js')
    }

})

$(window).ready(function(){
    $('.productosContainer').hover(function(){
        $('.productName').addClass('redimension')
        $('.boton').addClass('redimension')
    }, function(){
        $('.productName').removeClass('redimension')
        $('.boton').removeClass('redimension')
    })

    // console.log(document.title)
    if (document.title === 'Catálogo') {
        var producto = document.getElementsByClassName('description')
        var productos = ['item1', 'item2', 'item3', 'item4', 'item5', 'item6']
        
        // for (i = 0;i < productos.length; i++) { console.log(productos[i]) }
    
        function productoHoverEffect(prdP) {
            $(productos[prdP] = producto.item(prdP))
            // prdP = productPosition
            $(productos[prdP].getElementsByClassName('boton')).hover(function() {
                $(productos[prdP].getElementsByClassName('productName')).addClass('redimension')
                $(productos[prdP].getElementsByClassName('boton')).addClass('redimension')
                // console.log(producto[prdP])
            }, function() {
                $(productos[prdP].getElementsByClassName('productName')).removeClass('redimension')
                $(productos[prdP].getElementsByClassName('boton')).removeClass('redimension')
                // console.log(productos[prdP])
            })
        }
        productoHoverEffect(0)
        productoHoverEffect(1)
        productoHoverEffect(2)
        productoHoverEffect(3)
        productoHoverEffect(4)
        productoHoverEffect(5)
    }
    
})