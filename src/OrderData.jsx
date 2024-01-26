


export default function OrderData (  {menu}){




     return (
       <>
         <div class="w3-panel w3-card w3-teal">
           <h1> {menu.name} </h1>
           <span class="w3-sand">{menu.id}</span>
           <p></p>
           <p>
             {menu.contents[0]}, {menu.contents[1]}, {menu.contents[2]}{" "}
           </p>
           <p>{menu.price} euros</p>
           <p>
             Water is {menu.water ? "" : "not"} <span>included </span>
           </p>
         </div>
       </>
     );
}