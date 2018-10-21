import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor() { }
  getSushis(){
    return this.Sushis;
  }


  Sushis=[
    {
      "name":"Maki Ahumado de Queso",
      "id":"1",
      "type":"maki",
      "price_unit":"5",
      "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam malesuada, tellus quis congue finibus, arcu ex bibendum neque,porttitor semper tellus enim at ipsum. Aliquam sed malesuada mi.",
      "available":"si",
      "img_url":"../../../assets/IMG/sushi/maki/det2x_maki_ahumado_queso.png"
    },
    {
      "name":"Maki de salmon",
      "id":"2",
      "type":"maki",
      "price_unit":"5",
      "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam malesuada, tellus quis congue finibus, arcu ex bibendum neque, porttitor semper tellus enim at ipsum. Aliquam sed malesuada mi.",
      "available":"si",
      "img_url":"../../../assets/IMG/sushi/maki/det2x_maki-salmon-aguacate.png"
    },
    {
      "name":"Maki de anguila",
      "id":"3",
      "type":"maki",
      "price_unit":"5",
      "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam malesuada, tellus quis congue finibus, arcu ex bibendum neque, porttitor semper tellus enim at ipsum. Aliquam sed malesuada mi.",
      "available":"si",
      "img_url":"../../../assets/IMG/sushi/maki/det2x_maki-anguila.png"
    },
    {
      "name":"Maki de atun",
      "id":"4",
      "type":"maki",
      "price_unit":"5",
      "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam malesuada, tellus quis congue finibus, arcu ex bibendum neque, porttitor semper tellus enim at ipsum. Aliquam sed malesuada mi.",
      "available":"si",
      "img_url":"../../../assets/IMG/sushi/maki/det2x_maki-atun-spicy.png"
    },
    {
      "name":"Maki de surimi",
      "id":"5",
      "type":"maki",
      "price_unit":"5",
      "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam malesuada, tellus quis congue finibus, arcu ex bibendum neque, porttitor semper tellus enim at ipsum. Aliquam sed malesuada mi.",
      "available":"si",
      "img_url":"../../../assets/IMG/sushi/maki/det2x_maki-surimi.png"
    },
    {
      "name":"Maki de vegetales",
      "id":"6",
      "type":"maki",
      "price_unit":"5",
      "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam malesuada, tellus quis congue finibus, arcu ex bibendum neque, porttitor semper tellus enim at ipsum. Aliquam sed malesuada mi.",
      "available":"si",
      "img_url":"../../../assets/IMG/sushi/maki/det2x_maki-vegetal-sesamo.png"
    },
    {
      "name":"Maki de pepino",
      "id":"7",
      "type":"maki",
      "price_unit":"5",
      "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam malesuada, tellus quis congue finibus, arcu ex bibendum neque, porttitor semper tellus enim at ipsum. Aliquam sed malesuada mi.",
      "available":"si",
      "img_url":"../../../assets/IMG/sushi/maki/det2x_maki-pepino.png"
    },
    {
      "name":"Maki crujiente",
      "id":"8",
      "type":"maki",
      "price_unit":"5",
      "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam malesuada, tellus quis congue finibus, arcu ex bibendum neque,     porttitor semper tellus enim at ipsum. Aliquam sed malesuada mi.",
      "available":"si",
      "img_url":"../../../assets/IMG/sushi/maki/det2x_maki-crujiente.png"
    },
    {
      "name":"Maki pepino y queso",
      "id":"801",
      "type":"maki",
      "price_unit":"5",
      "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam malesuada, tellus quis congue finibus, arcu ex bibendum neque,     porttitor semper tellus enim at ipsum. Aliquam sed malesuada mi.",
      "available":"si",
      "img_url":"../../../assets/IMG/sushi/maki/det2x_maki-pepino-queso.png"
    },  
    {
      "name":"Maki queso y cebolleta",
      "id":"802",
      "type":"maki",
      "price_unit":"5",
      "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam malesuada, tellus quis congue finibus, arcu ex bibendum neque,     porttitor semper tellus enim at ipsum. Aliquam sed malesuada mi.",
      "available":"si",
      "img_url":"../../../assets/IMG/sushi/maki/det2x_maki-queso-cebolleta.png"
    }, 
    {
      "name":"Futomaki tempura de langostino",
      "id":"9",
      "type":"Futomaki",
      "price_unit":"5",
      "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam malesuada, tellus quis congue finibus, arcu ex bibendum neque, porttitor semper tellus enim at ipsum. Aliquam sed malesuada mi.",
      "available":"si",
      "img_url":"../../../assets/IMG/sushi/futomaki/det1x_futomaki-de-tempura-de-langostino.png"
    },
    {
      "name":"Futomaki crujiente tempurizado",
      "id":"901",
      "type":"Futomaki",
      "price_unit":"5",
      "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam malesuada, tellus quis congue finibus, arcu ex bibendum neque, porttitor semper tellus enim at ipsum. Aliquam sed malesuada mi.",
      "available":"si",
      "img_url":"../../../assets/IMG/sushi/futomaki/det2x_futomaki-crujiente-tempurizado.png"
    },
    {
      "name":"Futomaki de atun spicy tempurizado",
      "id":"1001",
      "type":"Futomaki",
      "price_unit":"5",
      "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam malesuada, tellus quis congue finibus, arcu ex bibendum neque, porttitor semper tellus enim at ipsum. Aliquam sed malesuada mi.",
      "available":"si",
      "img_url":"../../../assets/IMG/sushi/futomaki/det2x_futomaki-de-atun-spicy-tempurizado.png"
    },
    {
      "name":"Futomaki de atun crujiente",
      "id":"10",
      "type":"Futomaki",
      "price_unit":"5",
      "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam malesuada, tellus quis congue finibus, arcu ex bibendum neque, porttitor semper tellus enim at ipsum. Aliquam sed malesuada mi.",
      "available":"si",
      "img_url":"../../../assets/IMG/sushi/futomaki/det2x_futomaki-de-atun-crujiente.png"
    },

    {
      "name":"Futomaki de cangrejo",
      "id":"11",
      "type":"Futomaki",
      "price_unit":"5",
      "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam malesuada, tellus quis congue finibus, arcu ex bibendum neque, porttitor semper tellus enim at ipsum. Aliquam sed malesuada mi.",
      "available":"si",
      "img_url":"../../../assets/IMG/sushi/futomaki/det2x_futomaki-de-cangrejo.png"
    },
    {
      "name":"Futomaki de atun y aguacate",
      "id":"1101",
      "type":"Futomaki",
      "price_unit":"5",
      "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam malesuada, tellus quis congue finibus, arcu ex bibendum neque, porttitor semper tellus enim at ipsum. Aliquam sed malesuada mi.",
      "available":"si",
      "img_url":"../../../assets/IMG/sushi/futomaki/det2x_futomaki-de-atun-y-aguacate.png"
    },
    {
      "name":"Futomaki de pollo teriyaki",
      "id":"12",
      "type":"Futomaki",
      "price_unit":"5",
      "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam malesuada, tellus quis congue finibus, arcu ex bibendum neque, porttitor semper tellus enim at ipsum. Aliquam sed malesuada mi.",
      "available":"si",
      "img_url":"../../../assets/IMG/sushi/futomaki/det2x_futomaki-de-pollo-teriyaki.png"
    },
    {
      "name":"Futomaki de salmon tempurizado",
      "id":"13",
      "type":"Futomaki",
      "price_unit":"5",
      "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam malesuada, tellus quis congue finibus, arcu ex bibendum neque, orttitor semper tellus enim at ipsum. Aliquam sed malesuada mi.",
      "available":"si",
      "img_url":"../../../assets/IMG/sushi/futomaki/det2x_futomaki-salmon-tempurizado.png"
    },
    {
      "name":"Futomaki de salmon con queso",
      "id":"1301",
      "type":"Futomaki",
      "price_unit":"5",
      "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam malesuada, tellus quis congue finibus, arcu ex bibendum neque, orttitor semper tellus enim at ipsum. Aliquam sed malesuada mi.",
      "available":"si",
      "img_url":"../../../assets/IMG/sushi/futomaki/det2x_futomaki-salmon-con-queso.png"
    },
    {
      "name":"Futomaki de vegetales",
      "id":"14",
      "type":"Futomaki",
      "price_unit":"5",
      "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam malesuada, tellus quis congue finibus, arcu ex bibendum neque, porttitor semper tellus enim at ipsum. Aliquam sed malesuada mi.",
      "available":"si",
      "img_url":"../../../assets/IMG/sushi/futomaki/det2x_futomaki-vegetal.png"
    },
    {
      "name":"Urami roll de atun",
      "id":"15",
      "type":"Urami",
      "price_unit":"5",
      "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam malesuada, tellus quis congue finibus, arcu ex bibendum neque, porttitor semper tellus enim at ipsum. Aliquam sed malesuada mi.",
      "available":"si",
      "img_url":"../../../assets/IMG/sushi/urami/det2x_roll_tartar_atun.png"
    },
    {
      "name":"Urami roll especial ahumado",
      "id":"16",
      "type":"Urami",
      "price_unit":"5",
      "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam malesuada, tellus quis congue finibus, arcu ex bibendum neque, porttitor semper tellus enim at ipsum. Aliquam sed malesuada mi.",
      "available":"si",
      "img_url":"../../../assets/IMG/sushi/urami/det2x_roll-especial-ahumado.png"
    },
    {
      "name":"Urami roll salmon tataki",
      "id":"1601",
      "type":"Urami",
      "price_unit":"5",
      "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam malesuada, tellus quis congue finibus, arcu ex bibendum neque, porttitor semper tellus enim at ipsum. Aliquam sed malesuada mi.",
      "available":"si",
      "img_url":"../../../assets/IMG/sushi/urami/det2x_roll-salmon-tataki.png"
    },
    {
      "name":"Urami roll surimi",
      "id":"1602",
      "type":"Urami",
      "price_unit":"5",
      "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam malesuada, tellus quis congue finibus, arcu ex bibendum neque, porttitor semper tellus enim at ipsum. Aliquam sed malesuada mi.",
      "available":"si",
      "img_url":"../../../assets/IMG/sushi/urami/det2x_roll-surimi.png"
    },
    {
      "name":"Urami roll de langostino",
      "id":"17",
      "type":"Urami",
      "price_unit":"5",
      "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam malesuada, tellus quis congue finibus, arcu ex bibendum neque, porttitor semper tellus enim at ipsum. Aliquam sed malesuada mi.",
      "available":"si",
      "img_url":"../../../assets/IMG/sushi/urami/det2x_roll-langostino-tempura-jamon.png"
    },
    {
      "name":"Urami roll tempura atun spicy",
      "id":"1701",
      "type":"Urami",
      "price_unit":"5",
      "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam malesuada, tellus quis congue finibus, arcu ex bibendum neque, porttitor semper tellus enim at ipsum. Aliquam sed malesuada mi.",
      "available":"si",
      "img_url":"../../../assets/IMG/sushi/urami/det2x_roll-tempura-atun-spicy.png"
    },
    {
      "name":"Urami roll tataki caramelizado",
      "id":"18",
      "type":"Urami",
      "price_unit":"5",
      "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam malesuada, tellus quis congue finibus, arcu ex bibendum neque, porttitor semper tellus enim at ipsum. Aliquam sed malesuada mi.",
      "available":"si",
      "img_url":"../../../assets/IMG/sushi/urami/det2x_roll-tataki-caramelizado.png"
    },
    {
      "name":"Urami roll de vegetales",
      "id":"19",
      "type":"Urami",
      "price_unit":"5",
      "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam malesuada, tellus quis congue finibus, arcu ex bibendum neque, porttitor semper tellus enim at ipsum. Aliquam sed malesuada mi.",
      "available":"si",
      "img_url":"../../../assets/IMG/sushi/urami/det2x_roll-vegetal.png"
    },
    {
      "name":"Urami roll de vegetales y queso",
      "id":"1901",
      "type":"Urami",
      "price_unit":"5",
      "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam malesuada, tellus quis congue finibus, arcu ex bibendum neque, porttitor semper tellus enim at ipsum. Aliquam sed malesuada mi.",
      "available":"si",
      "img_url":"../../../assets/IMG/sushi/urami/det2x_roll-vegetal-queso.png"
    },
    {
      "name":"Urami roll gouda",
      "id":"20",
      "type":"Urami",
      "price_unit":"5",
      "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam malesuada, tellus quis congue finibus, arcu ex bibendum neque, porttitor semper tellus enim at ipsum. Aliquam sed malesuada mi.",
      "available":"si",
      "img_url":"../../../assets/IMG/sushi/urami/det2x_uramaki-gouda.png"
    },
    {
      "name":"Urami roll spicy aguacate",
      "id":"2001",
      "type":"Urami",
      "price_unit":"5",
      "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam malesuada, tellus quis congue finibus, arcu ex bibendum neque, porttitor semper tellus enim at ipsum. Aliquam sed malesuada mi.",
      "available":"si",
      "img_url":"../../../assets/IMG/sushi/urami/det2x_uramaki-spicy-aguacate.png"
    },
    {
      "name":"Temaki de atun",
      "id":"21",
      "type":"Temaki",
      "price_unit":"5",
      "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam malesuada, tellus quis congue finibus, arcu ex bibendum neque, porttitor semper tellus enim at ipsum. Aliquam sed malesuada mi.",
      "available":"si",
      "img_url":"../../../assets/IMG/sushi/temaki/det2x_temaki_atun_aguacate.png"
    },
    {
      "name":"Temaki de atun spicy",
      "id":"2101",
      "type":"Temaki",
      "price_unit":"5",
      "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam malesuada, tellus quis congue finibus, arcu ex bibendum neque, porttitor semper tellus enim at ipsum. Aliquam sed malesuada mi.",
      "available":"si",
      "img_url":"../../../assets/IMG/sushi/temaki/det2x_temaki_atun_spicy.png"
    },
    {
      "name":"Temaki de gamba",
      "id":"22",
      "type":"Temaki",
      "price_unit":"5",
      "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam malesuada, tellus quis congue finibus, arcu ex bibendum neque, porttitor semper tellus enim at ipsum. Aliquam sed malesuada mi.",
      "available":"si",
      "img_url":"../../../assets/IMG/sushi/temaki/det2x_temaki_gamba.png"
    },
    {
      "name":"Temaki de salmon",
      "id":"2301",
      "type":"Temaki",
      "price_unit":"5",
      "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam malesuada, tellus quis congue finibus, arcu ex bibendum neque, porttitor semper tellus enim at ipsum. Aliquam sed malesuada mi.",
      "available":"si",
      "img_url":"../../../assets/IMG/sushi/temaki/det2x_temaki_salmon.png"
    },
    {
      "name":"Temaki de salmon y aguacate",
      "id":"23",
      "type":"Temaki",
      "price_unit":"5",
      "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam malesuada, tellus quis congue finibus, arcu ex bibendum neque, porttitor semper tellus enim at ipsum. Aliquam sed malesuada mi.",
      "available":"si",
      "img_url":"../../../assets/IMG/sushi/temaki/det2x_temaki_salmon_aguacate.png"
    },
    {
      "name":"Temaki de surimi",
      "id":"24",
      "type":"Temaki",
      "price_unit":"5",
      "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam malesuada, tellus quis congue finibus, arcu ex bibendum neque, porttitor semper tellus enim at ipsum. Aliquam sed malesuada mi.",
      "available":"si",
      "img_url":"../../../assets/IMG/sushi/temaki/det2x_temaki_surimi.png"
    },
    {
      "name":"Temaki de vegetales",
      "id":"25",
      "type":"Temaki",
      "price_unit":"5",
      "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam malesuada, tellus quis congue finibus, arcu ex bibendum neque, porttitor semper tellus enim at ipsum. Aliquam sed malesuada mi.",
      "available":"si",
      "img_url":"../../../assets/IMG/sushi/temaki/det2x_temaki_vegetal.png"
    },
    {
      "name":"Nigiri de aguacate",
      "id":"26",
      "type":"Nigiri",
      "price_unit":"5",
      "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam malesuada, tellus quis congue finibus, arcu ex bibendum neque, porttitor semper tellus enim at ipsum. Aliquam sed malesuada mi.",
      "available":"si",
      "img_url":"../../../assets/IMG/sushi/nigiri/det2x_nigiri_aguacate.png"
    },
    {
      "name":"Nigiri de atun",
      "id":"27",
      "type":"Nigiri",
      "price_unit":"5",
      "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam malesuada, tellus quis congue finibus, arcu ex bibendum neque, porttitor semper tellus enim at ipsum. Aliquam sed malesuada mi.",
      "available":"si",
      "img_url":"../../../assets/IMG/sushi/nigiri/det2x_nigiri_atun.png"
    },
    {
      "name":"Nigiri de gamba",
      "id":"28",
      "type":"Nigiri",
      "price_unit":"5",
      "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam malesuada, tellus quis congue finibus, arcu ex bibendum neque, porttitor semper tellus enim at ipsum. Aliquam sed malesuada mi.",
      "available":"si",
      "img_url":"../../../assets/IMG/sushi/nigiri/det2x_nigiri_gamba.png"
    },
    {
      "name":"Nigiri de pescado blanco",
      "id":"29",
      "type":"Nigiri",
      "price_unit":"5",
      "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam malesuada, tellus quis congue finibus, arcu ex bibendum neque, porttitor semper tellus enim at ipsum. Aliquam sed malesuada mi.",
      "available":"si",
      "img_url":"../../../assets/IMG/sushi/nigiri/det2x_nigiri_pescado_blanco.png"
    },
    {
      "name":"Nigiri de salmon",
      "id":"30",
      "type":"Nigiri",
      "price_unit":"5",
      "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam malesuada, tellus quis congue finibus, arcu ex bibendum neque, porttitor semper tellus enim at ipsum. Aliquam sed malesuada mi.",
      "available":"si",
      "img_url":"../../../assets/IMG/sushi/nigiri/det2x_nigiri_salmon.png"
    },
    {
      "name":"Nigiri de salmon y aguacate",
      "id":"3001",
      "type":"Nigiri",
      "price_unit":"5",
      "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam malesuada, tellus quis congue finibus, arcu ex bibendum neque, porttitor semper tellus enim at ipsum. Aliquam sed malesuada mi.",
      "available":"si",
      "img_url":"../../../assets/IMG/sushi/nigiri/det2x_nigiri_salmon_aguacate.png"
    },
    {
      "name":"Nigiri de salmon flameado",
      "id":"3002",
      "type":"Nigiri",
      "price_unit":"5",
      "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam malesuada, tellus quis congue finibus, arcu ex bibendum neque, porttitor semper tellus enim at ipsum. Aliquam sed malesuada mi.",
      "available":"si",
      "img_url":"../../../assets/IMG/sushi/nigiri/det2x_nigiri-de-salmon-flambeado.png"
    },
    {
      "name":"Nigiri de salmon teriyaki",
      "id":"3003",
      "type":"Nigiri",
      "price_unit":"5",
      "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam malesuada, tellus quis congue finibus, arcu ex bibendum neque, porttitor semper tellus enim at ipsum. Aliquam sed malesuada mi.",
      "available":"si",
      "img_url":"../../../assets/IMG/sushi/nigiri/det2x_Nigiri-Salmon-teriyaki.png"
    },
    {
      "name":"Nigiri de salmon Ahumado",
      "id":"31",
      "type":"Nigiri",
      "price_unit":"5",
      "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam malesuada, tellus quis congue finibus, arcu ex bibendum neque, porttitor semper tellus enim at ipsum. Aliquam sed malesuada mi.",
      "available":"si",
      "img_url":"../../../assets/IMG/sushi/nigiri/det2x_nigiri_salmon_ahumado.png"
    }
    ]

  postres=[
      {
        "name":"Cheese Cake",
        "id":"1",
        "type":"postres",
        "price_unit":"5",
        "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam malesuada, tellus quis congue finibus, arcu ex bibendum neque, porttitor semper tellus enim at ipsum. Aliquam sed malesuada mi.",
        "available":"si",
        "img_url":"../../../assets/IMG/sushi/postres/cheese-cake-png-5.png"
      },
      {
        "name":"Brownie de Chocolate",
        "id":"2",
        "type":"postres",
        "price_unit":"5",
        "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam malesuada, tellus quis congue finibus, arcu ex bibendum neque, porttitor semper tellus enim at ipsum. Aliquam sed malesuada mi.",
        "available":"si",
        "img_url":"../../../assets/IMG/sushi/postres/Chocolate-Brownie-750x570.png"
      },
      {
        "name":"Mochi de Chocolate",
        "id":"3",
        "type":"postres",
        "price_unit":"5",
        "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam malesuada, tellus quis congue finibus, arcu ex bibendum neque, porttitor semper tellus enim at ipsum. Aliquam sed malesuada mi.",
        "available":"si",
        "img_url":"../../../assets/IMG/sushi/postres/det2x_mochi_chocolate.png"
      },
      {
        "name":"Mochi de Cheese Cake",
        "id":"4",
        "type":"postres",
        "price_unit":"5",
        "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam malesuada, tellus quis congue finibus, arcu ex bibendum neque, porttitor semper tellus enim at ipsum. Aliquam sed malesuada mi.",
        "available":"si",
        "img_url":"../../../assets/IMG/sushi/postres/det2x_mochi-cheesecake.png"
      },
      {
        "name":"Mochi de Chocolate blanco",
        "id":"5",
        "type":"postres",
        "price_unit":"5",
        "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam malesuada, tellus quis congue finibus, arcu ex bibendum neque, porttitor semper tellus enim at ipsum. Aliquam sed malesuada mi.",
        "available":"si",
        "img_url":"../../../assets/IMG/sushi/postres/det2x_mochi-chocoblanco.png"
      }
      ]
}
