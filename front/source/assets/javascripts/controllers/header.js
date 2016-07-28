(function () {
  'use strict';

  angular
    .module('app')
    .controller('headerCtrl', headerCtrl);

  function headerCtrl() {
    var vm = this;
    vm.menu = [
      {
        label: 'eBoutiques',
        children: [
          {
            label: 'Apple',
            children: []
          },
          {
            label: 'American Girl',
            children: []
          },
          {
            label: 'Aristocrazy',
            children: []
          },
          {
            label: 'Benefit',
            children: []
          },
          {
            label: 'Bose',
            children: []
          },
          {
            label: 'Burberry',
            children: []
          },
          {
            label: 'Chester & Peck',
            children: []
          },
          {
            label: 'Coach',
            children: []
          },
          {
            label: 'Desigual',
            children: []
          },
          {
            label: 'Distroller',
            children: []
          },
          {
            label: 'Librerías Gandhi',
            children: []
          },
          {
            label: 'Joe Fresh',
            children: []
          },
          {
            label: 'Julio',
            children: []
          },
          {
            label: 'Justice',
            children: []
          },
          {
            label: 'Kiehl´s',
            children: []
          },
          {
            label: 'Marimeko',
            children: []
          },
          {
            label: 'Michael Kors',
            children: []
          },
          {
            label: 'Nespresso',
            children: []
          },
          {
            label: 'Samsung',
            children: []
          },
          {
            label: 'Springfield',
            children: []
          },
          {
            label: 'Tag Heuer',
            children: []
          },
          {
            label: 'Tane',
            children: []
          },
          {
            label: 'The North Face',
            children: []
          },
          {
            label: 'Tommy Hilfiger',
            children: []
          },
          {
            label: 'Tous',
            children: []
          }
        ]
      },
      {
        label: 'Ellas',
        children: [
          {
            label: 'Ropa',
            children: [
              {
                label: 'Vestidos'
              },
              {
                label: 'Vestidos de Noche'
              },
              {
                label: 'Faldas'
              },
              {
                label: 'Blusas y camisas'
              },
              {
                label: 'Tops'
              },
              {
                label: 'Jumpsuit'
              },
              {
                label: 'Pantalones'
              },
              {
                label: 'Jeans'
              },
              {
                label: 'Leggings'
              },
              {
                label: 'Sweaters'
              },
              {
                label: 'Chamarras y chalecos'
              },
              {
                label: 'Abrigos'
              },
              {
                label: 'Ropa Deportiva'
              },
              {
                label: 'Playa'
              }
            ]
          },
          {
            label: 'Calzado',
            children: [
              {
                label: 'Aldo Sale'
              },
              {
                label: 'Diseñadores'
              },
              {
                label: 'Tacones'
              },
              {
                label: 'Sandalias'
              },
              {
                label: 'Flats'
              },
              {
                label: 'Botas'
              },
              {
                label: 'Tenis'
              },
              {
                label: 'Tenis deportivos'
              },
              {
                label: 'Confort'
              }
            ]
          },
          {
            label: 'Accesorios',
            children: [
              {
                label: 'Bolsas'
              },
              {
                label: 'Carteras'
              },
              {
                label: 'Cinturones'
              },
              {
                label: 'Bufandas y mascadas'
              },
              {
                label: 'Sombreros'
              },
              {
                label: 'Varios'
              }
            ]
          },
          {
            label: 'Relojes',
            children: [
              {
                label: 'Relojes de moda'
              },
              {
                label: 'Relojes finos'
              },
              {
                label: 'Watch winders'
              }
            ]
          },
          {
            label: 'Joyería Fina',
            children: [
              {
                label: 'Collares y cadenas'
              },
              {
                label: 'Dijes'
              },
              {
                label: 'Brazaletes y pulseras'
              },
              {
                label: 'Aretes'
              },
              {
                label: 'Anillos'
              },
              {
                label: 'Varios'
              }
            ]
          },
          {
            label: 'Equipaje',
            children: [
              {
                label: 'Maletas'
              },
              {
                label: 'Mochilas y bolsos'
              }
            ]
          },
          {
            label: 'Cuidado personal',
            children: [
              {
                label: 'Fragancias'
              },
              {
                label: 'Maquillaje'
              },
              {
                label: 'Tratamientos'
              },
              {
                label: 'Belleza y bienestar'
              },
              {
                label: 'Varios'
              }
            ]
          },
          {
            label: 'Escritura',
            children: [
              {
                label: 'Artículos de escritura'
              },
              {
                label: 'Libretas'
              },
              {
                label: 'Accesorios'
              }
            ]
          },
          {
            label: 'Joyería de Moda',
            children: [
              {
                label: 'Collares y cadenas'
              },
              {
                label: 'Dijes'
              },
              {
                label: 'Brazaletes y pulseras'
              },
              {
                label: 'Aretes'
              },
              {
                label: 'Anillos'
              },
              {
                label: 'Varios'
              }
            ]
          },
          {
            label: 'Star Wars',
            children: []
          },
          {
            label: 'Lencería y Corsetería',
            children: [
              {
                label: 'Tops'
              },
              {
                label: 'Bottoms'
              },
              {
                label: 'Pijamas'
              },
              {
                label: 'Control'
              },
              {
                label: 'Maternidad'
              }
            ]
          }
        ]
      },
      {
        label: 'Ellos',
        children: [
          {
            label: 'Ropa',
            children: [
              {
                label: 'Trajes',
                children: []
              },
              {
                label: 'Sacos',
                children: []
              },
              {
                label: 'Camisas',
                children: []
              },
              {
                label: 'Playeras y polos',
                children: []
              },
              {
                label: 'Pantalones',
                children: []
              },
              {
                label: 'Jeans',
                children: []
              },
              {
                label: 'Sweaters',
                children: []
              },
              {
                label: 'Chamarras y chalecos',
                children: []
              },
              {
                label: 'Ropa deportiva',
                children: []
              },
              {
                label: 'Playa',
                children: []
              }
            ]
          },
          {
            label: 'Ropa Interior',
            children: [
              {
                label: 'Tops',
                children: []
              },
              {
                label: 'Bottoms',
                children: []
              },
              {
                label: 'Pijamas',
                children: []
              },
              {
                label: 'Calcetines',
                children: []
              }
            ]
          },
          {
            label: 'Calzado',
            children: [
              {
                label: 'Formales',
                children: []
              },
              {
                label: 'Casuales',
                children: []
              },
              {
                label: 'Mocasines',
                children: []
              },
              {
                label: 'Botas y botines',
                children: []
              },
              {
                label: 'Sandalias',
                children: []
              },
              {
                label: 'Tenis',
                children: []
              },
              {
                label: 'Tenis deportivos',
                children: []
              },
              {
                label: 'Plantunflas',
                children: []
              },
              {
                label: 'Accesorios',
                children: []
              }
            ]
          },
          {
            label: 'Cuidado Personal',
            children: [
              {
                label: 'Lociones',
                children: []
              },
              {
                label: 'Tratamientos',
                children: []
              },
              {
                label: 'Rasuradoras',
                children: []
              },
              {
                label: 'Accesorios',
                children: []
              }
            ]
          },
          {
            label: 'Accesorios',
            children: [
              {
                label: 'Corbatas',
                children: []
              },
              {
                label: 'Cinturones',
                children: []
              },
              {
                label: 'Carteras',
                children: []
              },
              {
                label: 'Mancuernillas',
                children: []
              },
              {
                label: 'Pañuelos',
                children: []
              },
              {
                label: 'Bufandas y foulards',
                children: []
              },
              {
                label: 'Gorras y sombreros',
                children: []
              },
              {
                label: 'Lentes',
                children: []
              },
              {
                label: 'Joyeria',
                children: []
              },
              {
                label: 'Varios',
                children: []
              }
            ]
          },
          {
            label: 'Equipaje',
            children: [
              {
                label: 'Maletas',
                children: []
              },
              {
                label: 'Mochilas y bolsos',
                children: []
              },
              {
                label: 'Portatrajes',
                children: []
              },
              {
                label: 'Accesorios de viaje',
                children: []
              }
            ]
          },
          {
            label: 'Relojes',
            children: [
              {
                label: 'Relojes de moda',
                children: []
              },
              {
                label: 'Relojes finos',
                children: []
              },
              {
                label: 'Exclusiva Hublot',
                children: []
              },
              {
                label: 'Watch winders',
                children: []
              }
            ]
          },
          {
            label: 'Escritura',
            children: [
              {
                label: 'Artículos de escritua',
                children: []
              },
              {
                label: 'Libretas',
                children: []
              },
              {
                label: 'Accesorios',
                children: []
              }
            ]
          },
          {
            label: 'Star Wars',
            children: []
          }
        ]
      },
      {
        label: 'Deportes',
        children: [
          {
            label: 'Ellas',
            children: [
              {
                label: 'Tenis deportivos',
                children: []
              },
              {
                label: 'Chamarras y chalecos',
                children: []
              },
              {
                label: 'Sudaderas',
                children: []
              },
              {
                label: 'Playeras y polos',
                children: []
              },
              {
                label: 'Tops deportivos',
                children: []
              },
              {
                label: 'Leggings y pants',
                children: []
              },
              {
                label: 'Faldas y Shorts',
                children: []
              },
              {
                label: 'Conjuntos',
                children: []
              },
              {
                label: 'Trajes de baño',
                children: []
              },
              {
                label: 'Varios',
                children: []
              }
            ]
          },
          {
            label: 'Ellos',
            children: [
              {
                label: 'Tenis deportivos',
                children: []
              },
              {
                label: 'Chamarras y chalecos',
                children: []
              },
              {
                label: 'Sudaderas',
                children: []
              },
              {
                label: 'Playeras y polos',
                children: []
              },
              {
                label: 'Jerseys',
                children: []
              },
              {
                label: 'Shorts y leggings',
                children: []
              },
              {
                label: 'Pants',
                children: []
              },
              {
                label: 'Gorras',
                children: []
              },
              {
                label: 'Trajes de baño',
                children: []
              },
              {
                label: 'Varios',
                children: []
              }
            ]
          },
          {
            label: 'Aparatos de ejercicio',
            children: [
              {
                label: 'Caminadoras',
                children: []
              },
              {
                label: 'Elípticas',
                children: []
              },
              {
                label: 'Bicicletas fijas',
                children: []
              },
              {
                label: 'Varios',
                children: []
              }
            ]
          },
          {
            label: 'Artículos Deportivos',
            children: [
              {
                label: 'Monitores y relojes',
                children: []
              },
              {
                label: 'Maletas y mochilas',
                children: []
              },
              {
                label: 'Balones y pelotas',
                children: []
              },
              {
                label: 'Accesorios',
                children: []
              }
            ]
          },
          {
            label: 'Deportes',
            children: [
              {
                label: 'Correr',
                children: []
              },
              {
                label: 'Fitness',
                children: []
              },
              {
                label: 'Fútbol',
                children: []
              },
              {
                label: 'Ciclismo',
                children: []
              },
              {
                label: 'Natación',
                children: []
              },
              {
                label: 'Tennis',
                children: []
              },
              {
                label: 'Golf',
                children: []
              }
            ]
          },
          {
            label: 'Niñas',
            children: [
              {
                label: 'Ropa',
                children: []
              },
              {
                label: 'Calzado',
                children: []
              }
            ]
          },
          {
            label: 'Niños',
            children: [
              {
                label: 'Ropa',
                children: []
              },
              {
                label: 'Calzado',
                children: []
              }
            ]
          }
        ]
      },
      {
        label: 'Infantiles',
        children: [
          {
            label: 'Ropa Niñas',
            children: [
              {
                label: 'Vestidos',
                children: []
              },
              {
                label: 'Blusas y playeras',
                children: []
              },
              {
                label: 'Faldas y shorts',
                children: []
              },
              {
                label: 'Jeands y leggings',
                children: []
              },
              {
                label: 'Pantalones',
                children: []
              },
              {
                label: 'Conjuntos',
                children: []
              },
              {
                label: 'Sweaters y sudaderas',
                children: []
              },
              {
                label: 'Chamarras y chalecos',
                children: []
              },
              {
                label: 'Ropa deportiva',
                children: []
              },
              {
                label: 'Ropa interior',
                children: []
              },
              {
                label: 'Pijamas',
                children: []
              },
              {
                label: 'Trajes de baño',
                children: []
              }
            ]
          },
          {
            label: 'Calzado Niñas',
            children: [
              {
                label: 'Flats',
                children: []
              },
              {
                label: 'Tenis',
                children: []
              },
              {
                label: 'Tenis Deportivos',
                children: []
              },
              {
                label: 'Sandalias',
                children: []
              },
              {
                label: 'Botas y botines',
                children: []
              },
              {
                label: 'Escolares',
                children: []
              },
              {
                label: 'Plantunflas',
                children: []
              }
            ]
          },
          {
            label: 'Accesorios Niñas',
            children: [
              {
                label: 'Gorros y bufandas',
                children: []
              },
              {
                label: 'Cómputo y celulares',
                children: []
              },
              {
                label: 'Audífonos',
                children: []
              },
              {
                label: 'Mochilas y maletas',
                children: []
              },
              {
                label: 'Bolsos y carteras',
                children: []
              },
              {
                label: 'Relojes',
                children: []
              },
              {
                label: 'Joyería',
                children: []
              },
              {
                label: 'Ceremonia',
                children: []
              },
              {
                label: 'Belleza',
                children: []
              },
              {
                label: 'Varios',
                children: []
              }
            ]
          },
          {
            label: 'Ropa Niños',
            children: [
              {
                label: 'Camisas',
                children: []
              },
              {
                label: 'Playeras y polos',
                children: []
              },
              {
                label: 'Shorts',
                children: []
              },
              {
                label: 'Jeans',
                children: []
              },
              {
                label: 'Pantalones',
                children: []
              },
              {
                label: 'Conjuntos',
                children: []
              },
              {
                label: 'Sweaters y sudaderas',
                children: []
              },
              {
                label: 'Chamarras y chalecos',
                children: []
              },
              {
                label: 'Trajes',
                children: []
              },
              {
                label: 'Ropa deportiva',
                children: []
              },
              {
                label: 'Ropa Interior',
                children: []
              },
              {
                label: 'Pijamas',
                children: []
              },
              {
                label: 'Trajes de baño',
                children: []
              }
            ]
          },
          {
            label: 'Calzado Niños',
            children: [
              {
                label: 'Formales',
                children: []
              },
              {
                label: 'Casuales',
                children: []
              },
              {
                label: 'Mocasines',
                children: []
              },
              {
                label: 'Botínes',
                children: []
              },
              {
                label: 'Sandalias',
                children: []
              },
              {
                label: 'Tenis',
                children: []
              },
              {
                label: 'Tenis deportivos',
                children: []
              },
              {
                label: 'Escolares',
                children: []
              },
              {
                label: 'Plantunflas',
                children: []
              }
            ]
          },
          {
            label: 'Accesorios Niños',
            children: [
              {
                label: 'Gorras y Bufandas',
                children: []
              },
              {
                label: 'Cómputo y bufandas',
                children: []
              },
              {
                label: 'Audífonos',
                children: []
              },
              {
                label: 'Mochilas y maletas',
                children: []
              },
              {
                label: 'Relojes',
                children: []
              },
              {
                label: 'Lociones',
                children: []
              },
              {
                label: 'Varios',
                children: []
              }
            ]
          },
          {
            label: 'Escolares',
            children: [
              {
                label: 'Mochilas',
                children: []
              },
              {
                label: 'Loncheras',
                children: []
              },
              {
                label: 'Estuches',
                children: []
              },
              {
                label: 'Papelería',
                children: []
              },
              {
                label: 'Cómputo y celulares',
                children: []
              },
              {
                label: 'Varios',
                children: []
              }
            ]
          },
          {
            label: 'Distroller',
            children: []
          }
        ]
      },
      {
        label: 'Bebés',
        children: [
          {
            label: 'Ropa Niña',
            children: [
              {
                label: 'Mamelucos y pijamas',
                children: []
              },
              {
                label: 'Ropa interior',
                children: []
              },
              {
                label: 'Bodies',
                children: []
              },
              {
                label: 'Vestidos',
                children: []
              },
              {
                label: 'Conjuntos',
                children: []
              },
              {
                label: 'Sets',
                children: []
              },
              {
                label: 'Blusas y playeras',
                children: []
              },
              {
                label: 'Pantalones',
                children: []
              },
              {
                label: 'Faldas',
                children: []
              },
              {
                label: 'Sweaters y sudaderas',
                children: []
              },
              {
                label: 'Chamarras y chalecos',
                children: []
              },
              {
                label: 'Playa',
                children: []
              },
              {
                label: 'Calzado',
                children: []
              },
              {
                label: 'Varios y accesorios',
                children: []
              }
            ]
          },
          {
            label: 'Ropa Niño',
            children: [
              {
                label: 'Mamelucos y pijamas',
                children: []
              },
              {
                label: 'Ropa interior',
                children: []
              },
              {
                label: 'Bodies',
                children: []
              },
              {
                label: 'Conjuntos',
                children: []
              },
              {
                label: 'Sets',
                children: []
              },
              {
                label: 'Camisas y playeras',
                children: []
              },
              {
                label: 'Pantalones',
                children: []
              },
              {
                label: 'Shorts y bermudas',
                children: []
              },
              {
                label: 'Sweaters y sudaderas',
                children: []
              },
              {
                label: 'Chamarras y chalecos',
                children: []
              },
              {
                label: 'Playa',
                children: []
              },
              {
                label: 'Calzado',
                children: []
              },
              {
                label: 'Varios y accesorios',
                children: []
              }
            ]
          },
          {
            label: 'Carriolas',
            children: [
              {
                label: 'Sencillas',
                children: []
              },
              {
                label: 'Accesorios',
                children: []
              }
            ]
          },
          {
            label: 'Autoasientos',
            children: [
              {
                label: 'Autoasientos',
                children: []
              },
              {
                label: 'Boosters',
                children: []
              },
              {
                label: 'Accesorios',
                children: []
              }
            ]
          },
          {
            label: 'Artículos de Viaje',
            children: [
              {
                label: 'Pañales',
                children: []
              },
              {
                label: 'Canguros y rebozos',
                children: []
              },
              {
                label: 'Cambiadores',
                children: []
              },
              {
                label: 'Varios y accesorios',
                children: []
              }
            ]
          },
          {
            label: 'Alimentación',
            children: [
              {
                label: 'Biberones y tetinas',
                children: []
              },
              {
                label: 'Chupones y mordederas',
                children: []
              },
              {
                label: 'Extractos',
                children: []
              },
              {
                label: 'Estirilizadores y calentadores',
                children: []
              },
              {
                label: 'Vasos entrenadores',
                children: []
              },
              {
                label: 'Platos y cubiertos',
                children: []
              },
              {
                label: 'Baberos y repetidores',
                children: []
              },
              {
                label: 'Loncheras',
                children: []
              },
              {
                label: 'Varios y accesorios',
                children: []
              }
            ]
          },
          {
            label: 'Seguridad',
            children: [
              {
                label: 'Monitores',
                children: []
              },
              {
                label: 'Puertas y barandales',
                children: []
              },
              {
                label: 'Pantallas y espejos',
                children: []
              },
              {
                label: 'Varios',
                children: []
              }
            ]
          },
          {
            label: 'Muebles',
            children: [
              {
                label: 'Cunas y camas',
                children: []
              },
              {
                label: 'Corrales',
                children: []
              },
              {
                label: 'Sillas altas',
                children: []
              },
              {
                label: 'Decoración',
                children: []
              },
              {
                label: 'Varios y accesorios',
                children: []
              }
            ]
          },
          {
            label: 'Blancos',
            children: [
              {
                label: 'Set de cuna',
                children: []
              },
              {
                label: 'Cobijas',
                children: []
              },
              {
                label: 'Sábanas y protectores',
                children: []
              },
              {
                label: 'Edredones',
                children: []
              },
              {
                label: 'Almohadas',
                children: []
              }
            ]
          },
          {
            label: 'Juguetes y Estimulación',
            children: [
              {
                label: 'Sonajas',
                children: []
              },
              {
                label: 'Móviles',
                children: []
              },
              {
                label: 'Gimnasios',
                children: []
              },
              {
                label: 'Andaderas y entrenadores',
                children: []
              },
              {
                label: 'Bouncers',
                children: []
              },
              {
                label: 'Tapetes',
                children: []
              },
              {
                label: 'Peluches',
                children: []
              },
              {
                label: 'Varios',
                children: []
              }
            ]
          },
          {
            label: 'Regalos',
            children: [
              {
                label: 'Joyería',
                children: []
              },
              {
                label: 'Varios',
                children: []
              }
            ]
          },
          {
            label: 'Higiene y Salud',
            children: [
              {
                label: 'Bañeras',
                children: []
              },
              {
                label: 'Cambiadores',
                children: []
              },
              {
                label: 'Organizadores',
                children: []
              },
              {
                label: 'Juguetes y accesorios',
                children: []
              },
              {
                label: 'Toallas y batas',
                children: []
              },
              {
                label: 'Cuidado personal',
                children: []
              },
              {
                label: 'Varios',
                children: []
              }
            ]
          },
          {
            label: 'Disfraces',
            children: []
          },
          {
            label: 'Ceremonias',
            children: []
          }
        ]
      },
      {
        label: 'Tecnología',
        children: [
          {
            label: 'Cómputo',
            children: [
              {
                label: 'Tablets',
                children: []
              },
              {
                label: 'Laptops y ultrabooks',
                children: []
              },
              {
                label: 'Desktops',
                children: []
              },
              {
                label: 'Multifuncionales',
                children: []
              },
              {
                label: 'Impresoras y scanners',
                children: []
              },
              {
                label: 'Accesorios',
                children: []
              },
              {
                label: 'Consumibles',
                children: []
              },
              {
                label: 'Software',
                children: []
              }
            ]
          },
          {
            label: 'Celulares',
            children: [
              {
                label: 'Iphone',
                children: []
              },
              {
                label: 'Samsung',
                children: []
              },
              {
                label: 'Marcas varias',
                children: []
              },
              {
                label: 'Telcel',
                children: []
              },
              {
                label: 'Accesorios',
                children: []
              }
            ]
          },
          {
            label: 'TV & Video',
            children: [
              {
                label: 'Pantallas',
                children: []
              },
              {
                label: 'Reproducto de video',
                children: []
              },
              {
                label: 'Soportes TVs',
                children: []
              },
              {
                label: 'Proyectores',
                children: []
              }
            ]
          },
          {
            label: 'Cine',
            children: [
              {
                label: 'Series',
                children: []
              },
              {
                label: 'Películas',
                children: []
              }
            ]
          },
          {
            label: 'Wearables',
            children: [
              {
                label: 'Smartwatch',
                children: []
              },
              {
                label: 'Bandas deportivas',
                children: []
              }
            ]
          },
          {
            label: 'Audio',
            children: [
              {
                label: 'Sisternas de audio',
                children: []
              },
              {
                label: 'Bocinas y amplificadores',
                children: []
              },
              {
                label: 'Receptores de audio y video',
                children: []
              },
              {
                label: 'Portatiles',
                children: []
              },
              {
                label: 'Audífonos',
                children: []
              }
            ]
          },
          {
            label: 'Instrumentos musicales',
            children: [
              {
                label: 'Guitarras y bajos',
                children: []
              },
              {
                label: 'Pianos',
                children: []
              },
              {
                label: 'Teclados',
                children: []
              },
              {
                label: 'Consolas DJ',
                children: []
              },
              {
                label: 'Accesorios',
                children: []
              }
            ]
          },
          {
            label: 'Fotografía',
            children: [
              {
                label: 'Profesionales',
                children: []
              },
              {
                label: 'Action Cam',
                children: []
              },
              {
                label: 'Compactas',
                children: []
              },
              {
                label: 'Lentes',
                children: []
              },
              {
                label: 'Accesorios',
                children: []
              }
            ]
          },
          {
            label: 'Línea Blanca',
            children: [
              {
                label: 'Refrigeradores',
                children: []
              },
              {
                label: 'Lavadoras',
                children: []
              },
              {
                label: 'Secadoras',
                children: []
              },
              {
                label: 'Hornos',
                children: []
              },
              {
                label: 'Estufas',
                children: []
              },
              {
                label: 'Parrillas y campanas',
                children: []
              },
              {
                label: 'Lavavajillas',
                children: []
              },
              {
                label: 'Clima',
                children: []
              }
            ]
          }
        ]
      },
      {
        label: 'Hogar',
        children: [
          {
            label: 'Muebles',
            children: [
              {
                label: 'Salas',
                children: []
              },
              {
                label: 'Comedores',
                children: []
              },
              {
                label: 'Recamaras',
                children: []
              },
              {
                label: 'Antecomedores',
                children: []
              },
              {
                label: 'Cuarto de TV',
                children: []
              },
              {
                label: 'Reclinables',
                children: []
              },
              {
                label: 'Oficina en casa',
                children: []
              },
              {
                label: 'Muebles de jardín',
                children: []
              },
              {
                label: 'Muebles sueltos',
                children: []
              }
            ]
          },
          {
            label: 'Decoración',
            children: [
              {
                label: 'Tapetes',
                children: []
              },
              {
                label: 'Iluminación',
                children: []
              },
              {
                label: 'Portarretratos',
                children: []
              },
              {
                label: 'Cojines decorativos',
                children: []
              },
              {
                label: 'Floreros y flores',
                children: []
              },
              {
                label: 'Objetos decorativos',
                children: []
              },
              {
                label: 'Velas y ambientadores',
                children: []
              },
              {
                label: 'Espejos y cuadros',
                children: []
              },
              {
                label: 'Varios',
                children: []
              }
            ]
          },
          {
            label: 'Línea Blanca',
            children: [
              {
                label: 'Refrigeradores',
                children: []
              },
              {
                label: 'Lavadoras',
                children: []
              },
              {
                label: 'Secadoras',
                children: []
              },
              {
                label: 'Hornos',
                children: []
              },
              {
                label: 'Estufas',
                children: []
              },
              {
                label: 'Parrillas y campanas',
                children: []
              },
              {
                label: 'Lavavajillas',
                children: []
              }
            ]
          },
          {
            label: 'Organización y Limpieza',
            children: [
              {
                label: 'Closet',
                children: []
              },
              {
                label: 'Botones de basura',
                children: []
              },
              {
                label: 'Cajas y cestos',
                children: []
              },
              {
                label: 'Cajas y cestos',
                children: []
              },
              {
                label: 'Varios',
                children: []
              }
            ]
          },
          {
            label: 'Equipaje',
            children: [
              {
                label: 'Maletas y portatrajes',
                children: []
              },
              {
                label: 'Mochilas y bolsos',
                children: []
              },
              {
                label: 'Accesorios de viaje',
                children: []
              }
            ]
          },
          {
            label: 'Cocina',
            children: [
              {
                label: 'Antecomedores',
                children: []
              },
              {
                label: 'Ollas y baterías',
                children: []
              },
              {
                label: 'Sartenes',
                children: []
              },
              {
                label: 'Cuchillos y utensilios',
                children: []
              },
              {
                label: 'Repostería',
                children: []
              },
              {
                label: 'Tasas y vasos',
                children: []
              },
              {
                label: 'Contenedores',
                children: []
              },
              {
                label: 'Servicios',
                children: []
              },
              {
                label: 'Botes de basura',
                children: []
              }
            ]
          },
          {
            label: 'Mesa Fina',
            children: [
              {
                label: 'Platería',
                children: []
              },
              {
                label: 'Matelería',
                children: []
              },
              {
                label: 'Cristalería',
                children: []
              },
              {
                label: 'Vajillas',
                children: []
              },
              {
                label: 'Cubiertos',
                children: []
              },
              {
                label: 'Tazas y vasos',
                children: []
              },
              {
                label: 'Copas y bar',
                children: []
              },
              {
                label: 'Varios',
                children: []
              }
            ]
          },
          {
            label: 'Blancos y Baño',
            children: [
              {
                label: 'Sábanas',
                children: []
              },
              {
                label: 'Edredones y duvets',
                children: []
              },
              {
                label: 'Cobijas y frazadas',
                children: []
              },
              {
                label: 'Coordinados',
                children: []
              },
              {
                label: 'Almohadas y protectores',
                children: []
              },
              {
                label: 'Toallas',
                children: []
              },
              {
                label: 'Coordinados baño',
                children: []
              },
              {
                label: 'Accesorios',
                children: []
              }
            ]
          },
          {
            label: 'Colchones',
            children: [
              {
                label: 'Individual',
                children: []
              },
              {
                label: 'Matrimonial',
                children: []
              },
              {
                label: 'Queen Size',
                children: []
              },
              {
                label: 'King Size',
                children: []
              },
              {
                label: 'Almohadas y protectores',
                children: []
              }
            ]
          },
          {
            label: 'Electrodomésticos',
            children: [
              {
                label: 'Microondas',
                children: []
              },
              {
                label: 'Hornos y tostadores',
                children: []
              },
              {
                label: 'Cafeteras',
                children: []
              },
              {
                label: 'Licuadoras',
                children: []
              },
              {
                label: 'Bitacoras',
                children: []
              },
              {
                label: 'Extractores',
                children: []
              },
              {
                label: 'Procesadores',
                children: []
              },
              {
                label: 'Sandiwicheras',
                children: []
              },
              {
                label: 'Vaporeras',
                children: []
              },
              {
                label: 'Freidoras',
                children: []
              },
              {
                label: 'Planchas',
                children: []
              },
              {
                label: 'Aspiradoras',
                children: []
              },
              {
                label: 'Varios',
                children: []
              }
            ]
          }
        ]
      },
      {
        label: 'Gourmet',
        children: [
          {
            label: 'Vinos',
            children: [
              {
                label: 'Tinto',
                children: []
              },
              {
                label: 'Blanco',
                children: []
              },
              {
                label: 'Rosado',
                children: []
              },
              {
                label: 'Champagne y espumoso',
                children: []
              },
              {
                label: 'Vinos de postre',
                children: []
              }
            ]
          },
          {
            label: 'Aperitivos',
            children: [
              {
                label: 'Cremas',
                children: []
              },
              {
                label: 'Jerez',
                children: []
              },
              {
                label: 'Oporto',
                children: []
              },
              {
                label: 'Vermuth',
                children: []
              },
              {
                label: 'Varios',
                children: []
              }
            ]
          },
          {
            label: 'Destilados',
            children: [
              {
                label: 'Mezcal',
                children: []
              },
              {
                label: 'Tequila',
                children: []
              },
              {
                label: 'Ron',
                children: []
              },
              {
                label: 'Whisky',
                children: []
              },
              {
                label: 'Ginebra',
                children: []
              },
              {
                label: 'Vodka',
                children: []
              },
              {
                label: 'Brandy',
                children: []
              },
              {
                label: 'Cognac',
                children: []
              },
              {
                label: 'Varios',
                children: []
              }
            ]
          },
          {
            label: 'Digestivos',
            children: [
              {
                label: 'Licores',
                children: []
              },
              {
                label: 'Varios',
                children: []
              }
            ]
          },
          {
            label: 'Alimentos y Conservas',
            children: [
              {
                label: 'Aceites y vinagres',
                children: []
              },
              {
                label: 'Salsas y aderezos',
                children: []
              },
              {
                label: 'Sales y condimentos',
                children: []
              },
              {
                label: 'Pescados y mariscos',
                children: []
              },
              {
                label: 'Pan y galletas',
                children: []
              },
              {
                label: 'Mermeladas y jaleas',
                children: []
              },
              {
                label: 'Conservas',
                children: []
              },
              {
                label: 'Varios',
                children: []
              }
            ]
          },
          {
            label: 'Bebidas',
            children: [
              {
                label: 'Café',
                children: []
              },
              {
                label: 'Tés',
                children: []
              },
              {
                label: 'Tisanas',
                children: []
              }
            ]
          }
        ]
      },
      {
        label: 'Juguetes y videojuegos',
        children: [
          {
            label: 'Juguetes',
            children: [
              {
                label: 'Star Wars',
                children: []
              },
              {
                label: 'Muñecas',
                children: []
              },
              {
                label: 'Peluches',
                children: []
              },
              {
                label: 'Figuras acción',
                children: []
              },
              {
                label: 'Bicicletas',
                children: []
              },
              {
                label: 'Vehículos',
                children: []
              },
              {
                label: 'Electrónicos',
                children: []
              },
              {
                label: 'Construcción',
                children: []
              },
              {
                label: 'Juegos de mesa',
                children: []
              },
              {
                label: 'Aprendizaje/educativo',
                children: []
              },
              {
                label: 'Preescolar',
                children: []
              },
              {
                label: 'Manualidades',
                children: []
              },
              {
                label: 'Exterior y deportivo',
                children: []
              }
            ]
          },
          {
            label: 'Videojuegos',
            children: [
              {
                label: 'PS4',
                children: [
                  {
                    label: 'Accesorios',
                    children: []
                  },
                  {
                    label: 'Consolas',
                    children: []
                  },
                  {
                    label: 'Juegos',
                    children: []
                  }
                ]
              },
              {
                label: 'WII U',
                children: [
                  {
                    label: 'Accesorios',
                    children: []
                  },
                  {
                    label: 'Consolas',
                    children: []
                  },
                  {
                    label: 'Juegos',
                    children: []
                  }
                ]
              },
              {
                label: 'XBOX ONE',
                children: [
                  {
                    label: 'Accesorios',
                    children: []
                  },
                  {
                    label: 'Consolas',
                    children: []
                  },
                  {
                    label: 'Juegos',
                    children: []
                  }
                ]
              },
              {
                label: 'PS3',
                children: [
                  {
                    label: 'Accesorios',
                    children: []
                  },
                  {
                    label: 'Consolas',
                    children: []
                  },
                  {
                    label: 'Juegos',
                    children: []
                  }
                ]
              },
              {
                label: 'WII',
                children: [
                  {
                    label: 'Accesorios',
                    children: []
                  },
                  {
                    label: 'Consolas',
                    children: []
                  },
                  {
                    label: 'Juegos',
                    children: []
                  }
                ]
              },
              {
                label: 'XBOX 360',
                children: [
                  {
                    label: 'Accesorios',
                    children: []
                  },
                  {
                    label: 'Consolas',
                    children: []
                  },
                  {
                    label: 'Juegos',
                    children: []
                  }
                ]
              },
              {
                label: 'PSVITA',
                children: [
                  {
                    label: 'Accesorios',
                    children: []
                  },
                  {
                    label: 'Consolas',
                    children: []
                  },
                  {
                    label: 'Juegos',
                    children: []
                  }
                ]
              },
              {
                label: '3DS',
                children: [
                  {
                    label: 'Accesorios',
                    children: []
                  },
                  {
                    label: 'Consolas',
                    children: []
                  },
                  {
                    label: 'Juegos',
                    children: []
                  }
                ]
              },
              {
                label: 'Otros',
                children: []
              }
            ]
          }
        ]
      }
    ];
  };
})();
