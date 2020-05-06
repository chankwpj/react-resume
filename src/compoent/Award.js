import React from 'react';

class Award extends React.Component {
    render() {
        const data = this.props.awardItem;
        // console.log(data);
        return (
            <div className='award'>
                <p>{data.name}</p>
                {data.description !== undefined &&
                    <p>- {data.description}</p>
                }
            </div>
        )
    }
}

export default Award