import React from 'react';

const ScrollTop = ({to}) => (
    <div className="scroll-to-previous" style={{display : 'flex',justifyContent : 'center'}}>
        <div className="arrow bounce" style={{color: 'color: rgb(96, 125, 139)',animation: 'bounce 2s infinite'}}>
            <a className="down-arrow" href={`#section-1`}>
                <svg className="svg-inline--fa fa-angle-double-up fa-w-10 fa-2x" href="#" aria-hidden="true"
                     data-prefix="fas" data-icon="angle-double-up" role="img" xmlns="http://www.w3.org/2000/svg"
                     viewBox="0 0 320 512" data-fa-i2svg="">
                    <path fill="currentColor"
                          d="M177 255.7l136 136c9.4 9.4 9.4 24.6 0 33.9l-22.6 22.6c-9.4 9.4-24.6 9.4-33.9 0L160 351.9l-96.4 96.4c-9.4 9.4-24.6 9.4-33.9 0L7 425.7c-9.4-9.4-9.4-24.6 0-33.9l136-136c9.4-9.5 24.6-9.5 34-.1zm-34-192L7 199.7c-9.4 9.4-9.4 24.6 0 33.9l22.6 22.6c9.4 9.4 24.6 9.4 33.9 0l96.4-96.4 96.4 96.4c9.4 9.4 24.6 9.4 33.9 0l22.6-22.6c9.4-9.4 9.4-24.6 0-33.9l-136-136c-9.2-9.4-24.4-9.4-33.8 0z"/>
                </svg>
                <div className="scroll-text">To top</div>
            </a>
        </div>
    </div>
);

export default ScrollTop;

