import React, { Component } from 'react'

export class Banner extends Component {
    render() {
        return (
            <div className="card banner-card" >
                <img src="https://telanganatoday.com/wp-content/uploads/2022/04/IMAX-unveils-Yashs-dhamakedaar-fierce-look-in-K.G.F.-Chapter-2-poster.jpg"
                    className="card-img-top banner-img" alt="..." />

                <h5 className="card-title banner-title">KGF Chapter-2</h5>
                <p className="card-text banner-text">The blood-soaked land of Kolar Gold Fields
                 has a new overlord now, Rocky, whose name strikes fear in the heart of his foes.
                  His allies look up to him as their Savior, the government sees him as a threat, 
                  and his enemies are clamouring for revenge.</p>

            </div>
        )
    }
}

export default Banner