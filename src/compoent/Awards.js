import React from 'react';
import Award from './Award';

class Awards extends React.Component {
    render() {
        const awardItems = this.props.awardItems;
        // console.log(awardItems);
        return (
            <div className="section flex-colum">
                <h2>AWARDS</h2>
                {
                    awardItems.map((awardItem, index) => {
                        return <Award key={index} awardItem={awardItem} />
                    })
                }
            </div >
        )
    }
}

export default Awards