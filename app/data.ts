export type Work={slug:string;id:string;title:string;category:string;year:string;material:string;technique:string;description:string;image:string;details:string[];video?:string;role:string};
// DEMO RECORDS: replace every record and image with verified original works before publishing.
export const works:Work[]=[
{slug:'ornamental-study',id:'CY-001',title:'Ornamental Study',category:'Engraved Plates',year:'—',material:'Metal (to be confirmed)',technique:'Hand-push engraving',description:'A study of classical ornamental vocabulary and the relationship between line, depth and light.',image:'/media/plate.jpg',details:['/media/detail.jpg'],role:'To be confirmed'},
{slug:'engraved-ring',id:'CY-002',title:'Engraved Ring',category:'Fine Jewellery',year:'—',material:'Precious metal (to be confirmed)',technique:'Engraving · Jewellery making',description:'An exploration of ornamental engraving translated to a wearable form.',image:'/media/ring.jpg',details:['/media/detail.jpg'],role:'To be confirmed'},
{slug:'silver-object',id:'CY-003',title:'Decorative Metal Object',category:'Decorative Objects',year:'—',material:'Metal (to be confirmed)',technique:'Metalworking · Engraving',description:'Functional metalwork considered through the lens of an artistic object.',image:'/media/object.jpg',details:['/media/detail.jpg'],role:'To be confirmed'},
{slug:'sculptural-study',id:'CY-004',title:'Sculptural Study',category:'Other Works',year:'—',material:'Mixed media (to be confirmed)',technique:'Experimental metalwork',description:'A study of form, material and surface.',image:'/media/sculpture.jpg',details:['/media/detail.jpg'],role:'To be confirmed'}
];
export const categories=['All Works','Engraved Plates','Fine Jewellery','Decorative Objects','Other Works'];
