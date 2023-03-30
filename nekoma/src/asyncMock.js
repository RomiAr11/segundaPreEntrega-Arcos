const products = [ 
   {
     id: "1",
nombre : "Base RubyRose" , 
precio : "1800",
categoria : "Maquillaje", 
img : "https://d3ugyf2ht6aenh.cloudfront.net/stores/865/176/products/bases51-80e9db8660af288b7a16734586622956-480-0.webp",
stock : "10",
descripcion: "Bases de media cobertura en todos los tonos"
   } ,
   {
    id: "2",
nombre : "Rimel 2*1" , 
precio : "1000",
categoria : "Maquillaje", 
img : "https://d3ugyf2ht6aenh.cloudfront.net/stores/865/176/products/l21-1f0d66e2dde5aed71f16736126584058-640-0.webp",
stock : "5",
descripcion: "Rimel y delineador Dapop 2 en 1"
  },

{
    id: "3",
nombre : "Rubor MELU de RubyRose" , 
precio : "500",
categoria : "Maquillaje", 
img : "https://d3ugyf2ht6aenh.cloudfront.net/stores/865/176/products/bubbl11-f98d7685a019074f3e16736486032858-640-0.webp",
stock : "5",
descripcion: "Rubores en 5 tonos de marca rubyrose"
  }
]


export const getProducts = () => {
    return new Promise((resolve) =>{
        setTimeout(() => {
resolve(products)
        }, 1000)
    })

}