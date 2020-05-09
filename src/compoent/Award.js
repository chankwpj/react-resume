import React from 'react';

class Award extends React.Component {
    render() {
        const data = this.props.awardItem;
        // console.log(data);
        const description = (data.description !== undefined) ? <p>- {data.description}</p> : '';


        return (
            <div className='award'>
                <p>{data.name}</p>
                {description}
            </div>
        )
    }
}

export default Award