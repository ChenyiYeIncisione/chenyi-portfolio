'use client';import {useState} from 'react';import Link from 'next/link';import {works,categories} from './data';
export function ImageFrame({src,alt,cls='',onClick}:{src:string;alt:string;cls?:string;onClick?:()=>void}){return <div className={'image-frame '+cls} onClick={onClick} role={onClick?'button':undefined} tabIndex={onClick?0:undefined} onKeyDown={e=>{if(onClick&&(e.key==='Enter'||e.key===' '))onClick()}}><img src={src} alt={alt} onError={e=>{e.currentTarget.style.display='none';e.currentTarget.parentElement?.classList.add('missing')}}/><span className="image-placeholder">IMAGE ARCHIVE<br/><small>Replace with original photograph</small></span></div>}

      <div className="works-grid">
        {filteredWorks.map((w) => (
          <Link
            href={`/works/${w.slug}`}
            className="work-tile"
            key={w.slug}
          >
            <div className="image-wrap">
              <img src={w.image} alt={w.title} />
            </div>
            <div className="tile-caption">
              <h3>{w.title}</h3>
              <span>↗</span>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
export function Gallery({images,title}:{images:string[];title:string}){const [active,setActive]=useState(-1);return <><div className="detail-grid">{images.map((s,i)=><ImageFrame key={s+i} src={s} alt={`${title} — image ${i+1}`} onClick={()=>setActive(i)}/>)}</div>{active>=0&&<div className="lightbox" role="dialog" aria-modal="true" onClick={()=>setActive(-1)}><button className="close" onClick={()=>setActive(-1)}>CLOSE ×</button><button className="prev" onClick={e=>{e.stopPropagation();setActive((active+images.length-1)%images.length)}}>←</button><ImageFrame src={images[active]} alt={title}/><button className="next" onClick={e=>{e.stopPropagation();setActive((active+1)%images.length)}}>→</button><div className="count">{active+1} / {images.length}</div></div>}</>}
