import React from 'react';

const NewsSummaryCard = ({news}) => {
    return (
        <div>
            <p>{news.title}</p>
        </div>
    );
};

export default NewsSummaryCard;