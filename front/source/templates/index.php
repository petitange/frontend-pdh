<?php
/**
* @param  string  $filename
* @param  string  $manifest_path
* @return string
*/
function asset_path($filename, $manifest_path) {
  if (file_exists($manifest_path)) {
      $manifest = json_decode(file_get_contents($manifest_path), TRUE);
  } else {
      $manifest = [];
  }

  if (array_key_exists($filename, $manifest)) {
      return $manifest[$filename];
  }

  return $filename;
}
?>

<!DOCTYPE html>
<html lang="es">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
<title>El Palacio de Hierro –  Tienda Online El Palacio de Hierro</title>
<meta name="keywords" content="Regalos, Tarjeta Palacio, Promociones Palacio, Martes tarjeta Palacio, Michael Kors, Kors, Michael, Casa Palacio, horarios tiendas palacio, Liverpool, Sears, Sanborns, Solo Sanborns, shopping store, tienda online, Liverpool, Liverpool.com, tecnología, línea blanca, computo, smarthphones, juguetes, moda, herramientas para hogar, jardín, hogar, muebles, decoración, muebles, deportes, cuidado personal, sears me entiende, solo sanborns, Primavera 3014, Feria del mueble y del hogar, Palacio de Hierro Facturacion, palacio de hierro en linea, Noches Palacio, Noches Palacio Octubre, promociones especiales, ellas, ellos, calzado y accesorios, belleza, tecnología, hogar y gourmet, deportes, infantiles, apple, samsung, benefit, kiehls, nespresso, michael kors, mk, tane, relojes finos, nike, burberry, HOTSALE, Hot Sale, Venta exclusiva online, promociones exclusivas online, descuentos exclusivos oline"/>
<meta name="robots" content="INDEX,FOLLOW"/>
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<link href="css/styles.css" rel="stylesheet" />
<link href="css/<?php echo asset_path('sass-white.css', 'css/css-rev-manifest.json');?>" rel="stylesheet" />
</head>
<body ng-app="app"  class="background-body">
  <div class="loader"></div>
  <div id="header" class="content-header">
    <header>
      <div id="content-menu-header">
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12"></div>
      </div>
      <div class="toolheader animated-logo">
        <div class="col-lg-2 col-md-2 col-sm-2 col-xs-7" >
          <a class="menu-mobile" id="trigger-18" href="#">
            MENÚ
            <div class="menu-lines">
              <span class="line1"></span>
              <span class="line2"></span>
            </div>
          </a>
          <a class="logo" href="#">
              <img src="img/logo.svg" alt="El Palacio de Hierro Logo" />
          </a>
        </div>
        <div class="col-lg-7 col-md-7 col-sm-7 col-xs-1" id="white-header">
          <div class="mst mcp-wrapper" id="mp-menu-18" >
            <div class="mcp-pushnew-menu">
              <div class="mp-pusher" id="mp-pusher">
                <div id="menu-group-1" class="mp-menu">
                  <h2 class="mb-icon content-close-menu">
                    <span class="close-menu" >cerrar </span><i class="icon-close"></i>
                  </h2>
                  <div class="mp-level">
                    <ul class="menu-creator-pro menu-creator-pro-fade menu-creator-pro-rp-switcher menu-creator-pro-black">
                      <li class="mb-icon mb-icon-arrow-left">
                          <a title="DEPARTAMENTOS" href="#" target="_self">
                              <span>Departamentos</span>
                          </a>
                          <div class="grid-container3">
                            <span class="arrow-bottom"></span>
                            <div class="grid-column grid-column3 mp-level" ng-controller="headerCtrl as vm">
                              <a class="mp-back" href="#"><i class="icon-left"></i>
                                <span>Departamentos</span>
                              </a>
                              <ul class="level1">
                                <li ng-repeat="item in vm.menu" class="autosub-item level1-{{$index + 1}}">
                                    <a title="{{item.label}}" href="#" target="_self">
                                      <i class="icon-left"></i>
                                      <span>{{item.label}}</span>
                                    </a>
                                    <div ng-if="item.children.length > 0" class="grid-container5">
                                      <div class="content-sub-menu">
                                        <div ng-repeat="subMenu in item.children" class="sub-menu">
                                          <a title="{{subMenu.label}}" class="nav-header" href="#" target="_self">
                                            <span>{{subMenu.label}}</span>
                                          </a>
                                          <ul ng-if="subMenu.children" class="level2">
                                            <li ng-repeat="subLevel in subMenu.children">
                                              <a title="{{subLevel.label}}" href="#" target="_self">
                                                <i class="icon-sale"></i>
                                                <span>{{subLevel.label}}</span>
                                              </a>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                      <div class="banner-right">
                                        <img src="img/banners.png" alt="banner" />
                                      </div>
                                    </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                      </li>
                      <li>
                        <a title="Mesa de Regalos" href="#" target="_self">
                            <span>Mesa de Regalos</span>
                        </a>
                      </li>
                      <li>
                        <a title="Crédito" href="#" target="_self">
                            <span>Tarjeta Palacio</span>
                        </a>
                      </li>
                      <li>
                        <a title="Viajes" href="#" target="_self">
                            <span>Viajes Palacio</span>
                        </a>
                      </li>
                      <li>
                        <a title="Casa Palacio" href="#" target="_self">
                            <span>Casa Palacio</span>
                        </a>
                      </li>
                      <li>
                        <a title="Seguros" href="#" target="_self">
                            <span>Seguros Palacio</span>
                        </a>
                      </li>
                    </ul>
                    <!-- Secundary Menu -->
                    <div id="content-secundary-menu" class="content-float">
                      <ul class="secundary-menu">
                        <li>
                          <a href="#">
                            <span>Tiendas y Restaurantes</span>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <span>Servicios</span>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <span>Publicaciones</span>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <span>Ayuda</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <!-- End Secundary Menu -->
                    <!-- Account -->
                    <div id="content-account-links" class="content-float">
                      <a href="#">INICIA SESIÓN</a>
                    </div>
                    <!-- End Account -->
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-3 col-sm-3 col-xs-4 remove-padding-right">
          <!-- Car -->
          <div id="header-minicart-container" class="header-minicart active">
            <span>3</span>
          </div>
          <div class="car-price-detail flip-container vertical" ontouchstart="this.classList.toggle('hover');">
            <div class="flipper">
              <div class="front">
                <span class="detail">Subtotal</span>
                <span class="price">
                  $12,000.00
                </span>
              </div>
              <div class="back">COMPRAR</div>
            </div>
          </div>
          <!-- End Car -->
          <!-- Search -->
          <div id="toolbar-search">
            <form id="search-mini-form" action="#" method="get">
              <div class="input-box">
                  <div class="button search-button">
                    <i class="icon-mobile icon-search"></i>
                  </div>
              </div>
            </form>
          </div>
          <!-- End Search -->
        </div>
      </div>
      <div id="search">
          <form id="search-mini-form" action="#" method="get">
            <div class="input-box">
                <span class="close-search icon-close"></span>
                <input type="search" placeholder="Búsqueda rápida" name="q" value=""  maxlength="128" autocomplete="off"/>
            </div>
          </form>
      </div>
    </header>
  </div>
  <div id="content-slider" class="row" ng-controller="pageContentfulCtrl as vm">
    <section class="slider">
      <div class="flexslider">
        <ul class="slides">
          <li ng-repeat="slider in vm.fields.sliderHome track by $index">
            <img ng-show="slider.fields.file.url" ng-src="https:{{slider.fields.file.url}}" alt="{{slider.fields.description}}"  title="{{slider.fields.title}}"/>
          </li>
        </ul>
        <div class="custom-navigation">
          <a href="#" class="flex-prev"><i class="icon-left"></i></a>

            <div class="custom-controls-container"></div>
          <a href="#" class="flex-next"><i class="icon-left"></i></a>
        </div>
      </div>
    </section>
  </div>
</body>
<script type="text/javascript" src="js/<?php echo asset_path('scripts-white.min.js', 'js/js-rev-manifest.json');?>"></script>
</html>
