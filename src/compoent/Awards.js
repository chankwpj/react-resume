import React from 'react';
import Award from './Award';

class Awards extends React.Component {
    render() {
        const awardItems = this.props.awardItem;
        // console.log(awardItems);
        return (
            <div>
                <p className="sectionTitle">AWARDS</p>
                {
                    awardItems.map((awardItem, index) => {
                        return <Award key={index} awardItem={awardItem}/>
                    })
                }
                
                {/* <p>Pro-Vice Chancellor's Excellence Scholarship 2015</p>

                <p>Alistair Harvey Foundation Scholarship 2015</p>
                <p>Fully funded scholarship for undergraduate study</p>

                <p>IET Present Around the World Competition 2015 (Asia Pacific Final)</p>
                <p>Representative of Hong Kong</p>

                <p>IET Young Professionals Exhibition &#38; Competition 2015</p>
                <p>Regional Champion</p>

                <p>Dr Ng Tat-lun Memorial Outstanding Students Award 2015</p>

                <p>Hong Kong Special Administrative Region Government Scholarship 2014</p>

                <p>China College Students Entrepreneurship Competition 2014</p>
                <p>Silver Award</p> */}

            </div >
        )
    }
}

export default Awards