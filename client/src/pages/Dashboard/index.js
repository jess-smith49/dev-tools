import React from 'react'
import Header from '../../components/Header'

export default function Dashboard() {
    return (
        <section className="dash">
            <Header />
            <div className="dash-container container-fluid">
                <div className="dash-cards card-deck">
                    <div className="card">
                        <div className="card-body">
                            Category Goes Here
                    </div>
                    </div>
                </div>
            </div>
        </section>
    )
};