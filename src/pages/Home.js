import React from 'react';

const Home = (props) => {
    const { header, content } = props;

    return (
        <section>
            {header && <h3>{header}</h3>}
            <article>
                {content}
            </article>
        </section>
    );
};

export { Home };