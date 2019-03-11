import React from 'react';

import reactImg from './react.png';

const About = (props) => {
    const { header, content } = props;

    return (
        <section>
            {header && <h3>{header}</h3>}
            <div>
                <img src={reactImg} alt="react" />
            </div>
            <article>
                {content}
            </article>
        </section>
    );
};

export { About };