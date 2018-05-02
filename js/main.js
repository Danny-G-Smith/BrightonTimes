;(function ( $, window, document, undefined ) {
   'use strict';

   jQuery(document).ready(function( $ ) {

      var $menu   = $('#menu');
      var $main   = $('main');
      var $drawer = document.querySelector('.nav');

      $menu.on('click', function(e) {
         $drawer.classList.toggle('open');
         e.stopPropagation();
      });

      $('#rotate').click(function(){
         $(this).toggleClass('rotated');
      });

      $main.on('click', function() {
         document.querySelector('.nav').removeClass('open');
      });
   });

})
(jQuery, window, document);