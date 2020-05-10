import React from 'react';
import Award from './Award';

class Awards extends React.Component {
    render() {
        const awardItems = this.props.awardItems;
        // console.log(awardItems);

        const award = [];
        awardItems.forEach((awardItem, index) => {
            award.push(<Award key={index} awardItem={awardItem} />);
        });

        return (
            <div className="section flex-colum">
                <h2>AWARDS</h2>
                {award}
            </div >
        )
    }
}

export default Awards