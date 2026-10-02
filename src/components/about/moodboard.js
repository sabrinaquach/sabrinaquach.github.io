import React, { useRef } from "react";
import "./moodboard.css";

import food from '../../assets/images/food.jpeg';
import roomies from '../../assets/images/roomies.png';
import toki from '../../assets/images/toki.jpeg';
import sunset from '../../assets/images/sunset.jpeg';
import ramen from '../../assets/images/ramen.jpg';
import sand from '../../assets/images/sand.jpg';
import sanrio from '../../assets/images/sanrio.jpg';
import orchids from '../../assets/images/orchids.jpg';
import stickerSmiley from '../../assets/images/stickers/smiley.svg';
import stickerOnigiri from '../../assets/images/stickers/onigiri.svg';
import stickerLotus from '../../assets/images/stickers/lotus.svg';
import stickerButterfly from '../../assets/images/stickers/butterfly.svg';
import stickerButton from '../../assets/images/stickers/button.svg';
import StickerPeel from './stickerPeel';

/*
 * "During me time" as a fridge door: photos held up by magnets and tape,
 * polaroids with handwritten captions, a receipt and a postcard carrying the
 * section's copy, a ticket stub, and a few stickers.
 *
 * Desktop places every item by hand on the board: x / y are the top-left
 * corner as a % of the board's width / height, w is the width as a % of the
 * board, r the tilt in degrees. Phones ignore those and pin the items up in
 * two neat columns instead.
 *
 * kind:  polaroid — white frame, handwritten caption underneath
 *        print    — thin white border
 *        video    — print with a looping clip
 * hold:  what keeps it on the board — { type: 'magnet' } or
 *        { type: 'tape', tilt } (tilt = the strip's angle, so no two match)
 */
const PHOTOS = [
    { key: 'food', kind: 'polaroid', src: food, ratio: '1 / 1', hold: { type: 'tape', tilt: -6 }, x: 25, y: 6, w: 21, r: 3,
      caption: 'dinner spread', alt: 'A table of sushi, skewers and small plates' },
    { key: 'roomies', kind: 'print', src: roomies, ratio: '3 / 2', hold: { type: 'magnet' }, x: 48.5, y: 8, w: 27, r: -2,
      caption: 'grad day with the roomies', alt: 'Sabrina in her graduation gown with three friends holding flowers' },
    { key: 'toki', kind: 'polaroid', src: toki, ratio: '4 / 5', hold: { type: 'tape', tilt: 5 }, x: 78, y: 10, w: 19, r: 5,
      caption: 'toki!', alt: 'A small fluffy dog sleeping in someone’s lap' },
    { key: 'beyonce', kind: 'video', src: '/videos/beyonce.mov', ratio: '16 / 9', hold: { type: 'magnet' }, x: 23, y: 42, w: 28, r: -3,
      caption: 'Beyoncé!!', alt: 'Beyoncé performing on a huge stage screen' },
    { key: 'sunset', kind: 'print', src: sunset, ratio: '3 / 4', hold: { type: 'tape', tilt: -3 }, x: 3, y: 40, w: 16, r: 4,
      caption: 'sunset', alt: 'A pink and orange sunset over a parking lot' },
    { key: 'sanrio', kind: 'print', src: sanrio, ratio: '2 / 1', hold: { type: 'tape', tilt: 4 }, x: 55, y: 42, w: 31, r: 2,
      caption: 'sanrio cookies', alt: 'Cookies shaped like Sanrio characters on a cooling rack' },
    { key: 'ramen', kind: 'polaroid', src: ramen, ratio: '1 / 1', hold: { type: 'magnet' }, x: 21, y: 66, w: 18, r: -5,
      caption: 'ramen run', alt: 'A bowl of ramen with soft-boiled eggs' },
    { key: 'sand', kind: 'print', src: sand, ratio: '1 / 1', hold: { type: 'magnet' }, x: 41, y: 66, w: 17, r: 4,
      caption: 'beach day', alt: 'Small sand sculptures on the beach' },
    { key: 'orchids', kind: 'polaroid', src: orchids, ratio: '1 / 1', hold: { type: 'tape', tilt: -5 }, x: 3, y: 74, w: 16, r: -2,
      caption: 'orchids', alt: 'Rows of pink, orange and white orchids' },
];

const Hold = ({ type, tilt = 0 }) => (
    <span className={`mb-${type}`} style={type === 'tape' ? { '--tilt': `${tilt}deg` } : undefined} aria-hidden="true" />
);

const pinStyle = ({ x, y, w, r }) => ({ '--x': x, '--y': y, '--w': w, '--r': `${r}deg` });


const Photo = ({ kind, src, ratio, hold, caption, alt, x, y, w, r }) => (
    <li
        className={`mb-pin mb-${kind === 'video' ? 'print' : kind}`}
        style={pinStyle({ x, y, w, r })}
        data-cursor-text={caption.toUpperCase()}
        data-cursor-icon="camera"
    >
        <Hold {...hold} />
        <figure className="mb-photo" style={{ aspectRatio: ratio }}>
            {kind === 'video' ? (
                <video src={src} loop muted autoPlay playsInline aria-label={alt} />
            ) : (
                <img src={src} alt={alt} loading="lazy" />
            )}
        </figure>
        {kind === 'polaroid' && <p className="mb-hand mb-caption">{caption}</p>}
    </li>
);

// The section's copy, in Sabrina's words, on the paper items.
const PAPER = {
    receipt: (
        <li key="receipt" className="mb-pin mb-receipt" style={pinStyle({ x: 2, y: 8, w: 22, r: -4 })}>
            <Hold type="magnet" />
            <p className="mb-receipt-head">During “Me” time</p>
            <p className="mb-hand">I enjoy eating delicious food, pilates, and making new things.</p>
        </li>
    ),
    ticket: (
        // No clip of its own: a loose stub dropped between the prints.
        <li key="ticket" className="mb-pin mb-ticket" style={pinStyle({ x: 50, y: 33, w: 17, r: 7 })}>
            <span className="mb-ticket-admit">Admit one</span>
            <span className="mb-ticket-act">Beyoncé</span>
        </li>
    ),
    postcard: (
        <li key="postcard" className="mb-pin mb-postcard" style={pinStyle({ x: 64, y: 68, w: 32, r: -3 })}>
            <Hold type="tape" tilt={3} />
            <p className="mb-hand">
                Ceramics is something I’ve enjoyed doing since high school, it feels nice to do
                something physically creative.
            </p>
        </li>
    ),
};

// Desktop ignores this order (everything is placed by x / y); phones stack in it.
const ORDER = ['receipt', 'food', 'roomies', 'ticket', 'beyonce', 'toki', 'sunset', 'sanrio', 'postcard', 'ramen', 'sand', 'orchids'];
const BY_KEY = Object.fromEntries(PHOTOS.map((p) => [p.key, p]));

// Peelable, draggable stickers: a smiley, food, yoga, a butterfly and a button. Same % units as the board; w is in cqw.
const STICKERS = [
    // Stuck over the top-right corner of the Toki polaroid.
    { key: 'smiley', src: stickerSmiley, label: 'Smiley face sticker', x: 92, y: 5.5, w: 6.5, rotate: 8 },
    { key: 'onigiri', src: stickerOnigiri, label: 'Onigiri sticker', x: 38.5, y: 58, w: 7, rotate: -10 },
    { key: 'lotus', src: stickerLotus, label: 'Lotus sticker', x: 55, y: 87, w: 8, rotate: 6 },
    // In the gap between the receipt and the sunset print.
    { key: 'button', src: stickerButton, label: 'Sewing button sticker', x: 13, y: 32, w: 5.5, rotate: 14 },
    { key: 'butterfly', src: stickerButterfly, label: 'Butterfly sticker', x: 88.5, y: 44, w: 8, rotate: -12 },
];

const Moodboard = () => {
    const boardRef = useRef(null);
    return (
    <div className="moodboard" ref={boardRef}>
        <ul className="mb-board">
            {ORDER.map((key) => PAPER[key] || <Photo key={key} {...BY_KEY[key]} />)}

        </ul>
        {/* Outside the list (they're decoration, not board items) but inside
            the board's box, which they're dragged within. */}
        <div className="mb-sticker-layer">
            {STICKERS.map(({ key, src, ...rest }) => (
                <StickerPeel key={key} imageSrc={src} boundsRef={boardRef} {...rest} />
            ))}
        </div>
    </div>
    );
};

export default Moodboard;
